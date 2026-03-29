/**
 * Sets document.documentElement[data-season] from the current date
 * (Northern meteorological seasons). Optional override: localStorage key
 * `portfolio-season` with one of spring | summer | autumn | winter.
 * Load synchronously in <head> before stylesheets to avoid theme flash.
 */
(function () {
  function getSeason(date) {
    var m = date.getMonth() + 1;
    if (m >= 3 && m <= 5) return "spring";
    if (m >= 6 && m <= 8) return "summer";
    if (m >= 9 && m <= 11) return "autumn";
    return "winter";
  }

  var allowed = { spring: 1, summer: 1, autumn: 1, winter: 1 };
  var season;

  try {
    var stored = localStorage.getItem("portfolio-season");
    if (stored && allowed[stored]) {
      season = stored;
    }
  } catch (e) {
    /* ignore private mode / blocked storage */
  }

  if (!season) {
    season = getSeason(new Date());
  }

  document.documentElement.setAttribute("data-season", season);
})();
