/* Unspeakably Horrible Games — site behavior: theme toggle, mascot, footer year,
   and the games filter. Progressive enhancement; the pages read fine without it. */
(function () {
  var root = document.documentElement;

  /* ---- theme toggle (persisted) ---- */
  var MOON = "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z";
  var SUN = "M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4";
  function iconFor(theme) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + (theme === "dark" ? MOON : SUN) + '"/></svg>';
  }
  var toggle = document.getElementById("themeToggle");
  function apply(theme) { root.dataset.theme = theme; if (toggle) toggle.innerHTML = iconFor(theme); }
  apply(root.dataset.theme || "dark");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem("uhg-theme", next); } catch (e) {}
    });
  }

  /* ---- footer year ---- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Eldy easter egg ---- */
  var LINES = [
    "You found me. Please don't tell the others.",
    "A game is coming. I have seen it. It has too many teeth.",
    "I'm Eldy. I do the emotional labor around here.",
    "Wishlist us, or don't. The void is patient.",
    "I mean well. Mostly.",
    "One day you'll be able to ask me things. I'm practicing."
  ];
  var eldy = document.getElementById("mascot");
  var bubble = document.getElementById("eldyBubble");
  var last = -1, timer;
  if (eldy && bubble) {
    eldy.addEventListener("click", function () {
      var i; do { i = Math.floor(Math.random() * LINES.length); } while (i === last && LINES.length > 1);
      last = i;
      bubble.textContent = LINES[i];
      bubble.classList.add("show");
      clearTimeout(timer);
      timer = setTimeout(function () { bubble.classList.remove("show"); }, 4600);
    });
  }

  /* ---- games filter (games.html only) ---- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  if (tabs.length) {
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        var f = t.getAttribute("data-filter");
        tabs.forEach(function (x) { x.setAttribute("aria-selected", x === t ? "true" : "false"); });
        Array.prototype.slice.call(document.querySelectorAll("[data-status]")).forEach(function (card) {
          card.style.display = (f === "all" || card.getAttribute("data-status") === f) ? "" : "none";
        });
      });
    });
  }
})();
