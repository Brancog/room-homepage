(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t);
  new MutationObserver((t) => {
    for (const r of t)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && c(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(t) {
    const r = {};
    return (
      t.integrity && (r.integrity = t.integrity),
      t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function c(t) {
    if (t.ep) return;
    t.ep = !0;
    const r = u(t);
    fetch(t.href, r);
  }
})();
let e = 1;
const l = document.querySelector(".header__navigation"),
  m = document.querySelector(".header__heading"),
  f = document.querySelector(".header__text"),
  h = window.matchMedia("(width >= 48em)"),
  d = [
    {
      slide: 1,
      heading: "Discover innovative ways to decorate",
      text: "We provide umatched quliaty, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your propery a reflection of you and what you love.",
    },
    {
      slide: 2,
      heading: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throghout the country. find the branch nearest to contact us today.",
    },
    {
      slide: 3,
      heading: "Manufactured with the best materials",
      text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ],
  i = function (o) {
    h.matches
      ? (l.style.backgroundImage = `url("/room-homepage/assets/desktop-image-hero-${e}.jpg")`)
      : (l.style.backgroundImage = `url("/room-homepage/assets/mobile-image-hero-${e}.jpg")`),
      (m.innerHTML = d[e - 1].heading),
      (f.innerHTML = d[e - 1].text);
  };
i();
document.addEventListener("click", (o) => {
  o.preventDefault(),
    o.target.closest(".slide-mobile-prev")
      ? (e === 1 ? (e = 3) : e--, i())
      : o.target.closest(".slide-mobile-next") &&
        (e === 3 ? (e = 1) : e++, i());
});
document.addEventListener("click", (o) => {
  o.preventDefault(),
    o.target.closest(".slide-desktop-prev")
      ? (e === 1 ? (e = 3) : e--, i())
      : o.target.closest(".slide-desktop-next") &&
        (e === 3 ? (e = 1) : e++, i());
});
document.querySelector(".navbar__hamburger-btn");
const y = document.querySelector(".mobile-menu");
document.querySelector(".mobile-menu__close-btn");
const s = document.querySelector(".global-overlay");
document.addEventListener("click", (o) => {
  (o.target.closest(".navbar__hamburger-btn") ||
    o.target.closest(".mobile-menu__close-btn")) &&
    (y.classList.toggle("mobile-menu--active"),
    s.classList.contains("hidden")
      ? (s.classList.remove("hidden"), s.classList.add("visible"))
      : (s.classList.add("hidden"), s.classList.remove("visible")));
});
