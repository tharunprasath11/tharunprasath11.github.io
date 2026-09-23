(function () {
  "use strict";

  var tabLinks = Array.prototype.slice.call(document.querySelectorAll(".tab-link"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel"));
  var navToggle = document.getElementById("navToggle");
  var tabNav = document.querySelector(".tab-nav");
  var main = document.getElementById("main");

  function activateTab(name, updateHash) {
    tabLinks.forEach(function (link) {
      var isActive = link.dataset.tabLink === name;
      link.classList.toggle("is-active", isActive);
      link.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach(function (panel) {
      panel.classList.toggle("is-active", panel.id === name);
    });

    if (updateHash !== false) {
      history.replaceState(null, "", "#" + name);
    }

    if (tabNav) tabNav.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }

  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      activateTab(link.dataset.tabLink);
      main.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = tabNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Support direct links like yoursite.com/#projects
  var initial = window.location.hash ? window.location.hash.slice(1) : "home";
  var validNames = tabLinks.map(function (l) { return l.dataset.tabLink; });
  if (validNames.indexOf(initial) === -1) initial = "home";
  activateTab(initial, false);
})();
