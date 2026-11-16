(function () {
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch {
    // Storage can be blocked; the light theme is the fallback.
  }
})();
