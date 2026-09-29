window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
window.ym.l = 1 * new Date();
window.ym(113181548, "init", {
  webvisor: true,
  clickmap: true,
  accurateTrackBounce: true,
  trackLinks: true,
});

var script = document.createElement("script");
script.async = true;
script.src = "https://mc.yandex.ru/metrika/tag.js";
document.head.appendChild(script);

document.addEventListener("click", function (event) {
  var link = event.target.closest && event.target.closest("a[href]");
  if (!link) return;

  var href = link.getAttribute("href") || "";
  var goal = null;

  if (href.indexOf("tel:") === 0) goal = "click_phone";
  else if (href.indexOf("wa.me/") !== -1) goal = "click_whatsapp";
  else if (href.indexOf("t.me/") !== -1) goal = "click_telegram";
  else if (href.indexOf("max.ru/") !== -1) goal = "click_max";

  if (goal) window.ym(113181548, "reachGoal", goal);
});
