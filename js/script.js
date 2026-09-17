// Appliance Energy Watch - page script
//
// This file does two independent jobs:
//   1. Page navigation  - shows/hides the Home / Televisions / About Us
//      sections so the site behaves like a multi-page site without
//      actually reloading the browser.
//   2. Chart lightbox   - lets the user click any chart image on the
//      Televisions page to view it bigger in an overlay.

(function () {

  // ===================================================================
  // 1. PAGE NAVIGATION
  // ===================================================================

  const DEFAULT_PAGE = "home";

  // .page = the three <section> elements (home / televisions / about)
  const pages = document.querySelectorAll(".page");

  // Every nav link has a data-page attribute matching a section id,
  // e.g. <a data-page="televisions">
  const navLinks = document.querySelectorAll("nav a[data-page]");

  const logoLink = document.getElementById("logo-link");

  // Reads the page name out of the URL, e.g. "#televisions" -> "televisions"
  function pageIdFromHash() {
    const id = window.location.hash.replace("#", "");
    return id || DEFAULT_PAGE;
  }

  // Shows the section matching pageId and hides the other two.
  function showPage(pageId) {
    let found = false;

    pages.forEach(function (section) {
      if (section.id === pageId) {
        section.hidden = false;
        found = true;
      } else {
        section.hidden = true;
      }
    });

    // Unknown hash (e.g. someone typed a bad URL) -> just show Home.
    if (!found) {
      showPage(DEFAULT_PAGE);
      return;
    }

    // Highlight the matching nav link and mark it as the current page
    // (aria-current helps screen readers announce it).
    navLinks.forEach(function (link) {
      const isCurrent = link.dataset.page === pageId;
      link.classList.toggle("active", isCurrent);
      if (isCurrent) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    document.title = pageId === DEFAULT_PAGE
      ? "Appliance Energy Watch"
      : "Appliance Energy Watch | " + navLinkLabel(pageId);
  }

  // Looks up the visible text of a nav link, used for the page title.
  function navLinkLabel(pageId) {
    const link = document.querySelector('nav a[data-page="' + pageId + '"]');
    return link ? link.textContent : "";
  }

  // Changes the URL hash, which triggers the hashchange listener below
  // and re-runs showPage. This keeps browser back/forward working.
  function navigateTo(pageId) {
    if (window.location.hash === "#" + pageId) {
      showPage(pageId);
    } else {
      window.location.hash = pageId;
    }
  }

  // Any link with data-page works the same way, not just the nav bar -
  // this also covers the "Head to Televisions" links in the page text.
  document.querySelectorAll("a[data-page]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // stop the browser's normal link jump
      navigateTo(link.dataset.page);
    });
  });

  if (logoLink) {
    logoLink.addEventListener("click", function (event) {
      event.preventDefault();
      navigateTo(DEFAULT_PAGE);
    });
  }

  // Support the browser's back/forward buttons.
  window.addEventListener("hashchange", function () {
    showPage(pageIdFromHash());
  });

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Show whichever page is in the URL on first load (or Home by default).
  showPage(pageIdFromHash());

  // ===================================================================
  // 2. CHART LIGHTBOX
  // ===================================================================

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    // Every chart on the Televisions page is a <figure><img></figure>.
    // Clicking one copies its image into the lightbox and shows it.
    document.querySelectorAll("figure img").forEach(function (chartImg) {
      // Images are draggable by default, which can hijack a click as a
      // native drag-and-drop instead - turn that off so clicks work.
      chartImg.draggable = false;

      chartImg.addEventListener("click", function () {
        lightboxImg.src = chartImg.src;
        lightboxImg.alt = chartImg.alt;
        lightbox.hidden = false;
      });
    });

    // Clicking anywhere on the dark overlay closes it again.
    lightbox.addEventListener("click", function () {
      lightbox.hidden = true;
    });

    // Also allow closing with the Escape key.
    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        lightbox.hidden = true;
      }
    });
  }

})();
