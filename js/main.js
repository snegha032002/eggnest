/* =========================================================
   WEBSITE 2 — shared script
   Edit SITE + PRODUCTS here; header, footer and cart are
   rendered from this file on every page.
   ========================================================= */
const SITE = {
  brand: "EggNest",                       // ← placeholder brand name
  footerLine: "Goodness in Every Egg",
  email: "hello@example.com",
  phone: "+91 00000 00000",
  hours: "Every day, 6:00 am – 9:00 pm",
  address: "Your farm / store address here",
  whatsapp: "910000000000",               // ← your WhatsApp number with country code, digits only
  socials: { instagram: "#", facebook: "#", youtube: "#", whatsapp: "https://wa.me/910000000000" },
  freeDeliveryAbove: 299,
  deliveryFee: 30,
};

const PRODUCTS = [
  { id: "p6",    name: "6 Eggs Pack",     price: 60,  img: "images/pack-6.png",     cat: "packs" },
  { id: "p12",   name: "12 Eggs Pack",    price: 110, img: "images/pack-12.png",    cat: "packs", ribbon: "Popular" },
  { id: "p30",   name: "30 Eggs Pack",    price: 260, img: "images/pack-30.png",    cat: "packs" },
  { id: "loose", name: "Farm Fresh Eggs", price: 8,   img: "images/pack-loose.png", cat: "loose", sub: "(Loose)", unit: "piece" },
  { id: "brown12", name: "Brown Eggs · 12",   price: 140, img: "images/pack-12.png",    cat: "special", note: "Free-range, golden yolks", tag: "Best Seller", rating: 5 },
  { id: "desi6",   name: "Country Eggs · 6",  price: 96,  img: "images/pack-6.png",     cat: "special", note: "Traditional desi eggs", rating: 5 },
  { id: "omega6",  name: "Omega-3 Eggs · 6",  price: 90,  img: "images/pack-loose.png", cat: "special", note: "From flax-fed hens", tag: "Healthy", rating: 4 },
  { id: "tray30",  name: "Family Tray · 30",  price: 250, img: "images/pack-30.png",    cat: "special", note: "Mixed white & brown", rating: 5 },
];
const BEST = ["brown12", "omega6", "desi6", "tray30"];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const inr = n => "₹" + n.toLocaleString("en-IN");
const find = id => PRODUCTS.find(p => p.id === id);
const page = document.body.dataset.page || "home";

const I = {
  search: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="7"/><path d="M15 15l5 5"/></svg>',
  user: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4.2"/><path d="M3.5 21c1.3-4.3 4.6-6.4 8.5-6.4s7.2 2.1 8.5 6.4"/></svg>',
  cart: '<svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5h3l2.4 12h11l2.1-8.5H6.6"/><circle cx="9.5" cy="20.5" r="1.4"/><circle cx="17.5" cy="20.5" r="1.4"/></svg>',
  menu: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  chev: '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4l4 4 4-4"/></svg>',
  arrow: '<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5h11M9 3.5l4 4-4 4"/></svg>',
  ig: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="14" height="14" rx="4"/><circle cx="9" cy="9" r="3.3"/><circle cx="13.2" cy="4.8" r=".6" fill="currentColor"/></svg>',
  fb: '<svg width="18" height="18" fill="currentColor"><path d="M10 17v-6.5h2.2l.4-2.6H10V6.3c0-.8.3-1.3 1.4-1.3h1.3V2.7c-.6-.1-1.4-.2-2.1-.2-2 0-3.3 1.2-3.3 3.4v2H5.2v2.6h2.1V17z"/></svg>',
  yt: '<svg width="20" height="18" fill="currentColor"><path d="M19 5.3c-.2-.9-.9-1.6-1.8-1.8C15.6 3 10 3 10 3s-5.6 0-7.2.5C1.9 3.7 1.2 4.4 1 5.3.6 6.9.6 9 .6 9s0 2.1.4 3.7c.2.9.9 1.6 1.8 1.8C4.4 15 10 15 10 15s5.6 0 7.2-.5c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-3.7.4-3.7s0-2.1-.4-3.7zM8 11.6V6.4L12.6 9z"/></svg>',
  wa: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2 16.5l1.1-3.7A7.3 7.3 0 1 1 5.7 15.3z"/></svg>',
};
// Egg emblem: a brown egg in a little nest with a sunny yolk
const LOGO = `<svg viewBox="0 0 48 48" aria-hidden="true">
  <path d="M24 4c-8 0-14 11-14 19 0 8.5 6 14 14 14s14-5.5 14-14C38 15 32 4 24 4z" fill="#4A2511"/>
  <circle cx="24" cy="24" r="7.5" fill="#F7C21B"/><circle cx="21.5" cy="21.5" r="2.2" fill="#FFE68A"/>
  <path d="M5 34c6 7 12 10 19 10s13-3 19-10" fill="none" stroke="#E8A90A" stroke-width="3" stroke-linecap="round"/>
  <path d="M9 38l4-3M16 41l2-4M24 42v-4M32 41l-2-4M39 38l-4-3" stroke="#E8A90A" stroke-width="2" stroke-linecap="round"/></svg>`;

/* ---------- header & footer ---------- */
function chrome() {
  const nav = [["index.html","Home","home"],["shop.html","Shop","shop"],["about.html","About","about"],["about.html#why","Why Us","why"],["faq.html","FAQ","faq"],["contact.html","Contact","contact"]];
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `<div class="wrap nav">
    <a href="index.html" class="logo">${LOGO}<span><b>${SITE.brand}</b><small>Farm fresh eggs</small></span></a>
    <ul class="menu" id="menu">
      ${nav.map(([h, t, k]) => k === "shop"
        ? `<li class="has-drop"><a href="${h}" class="${page === k ? "active" : ""}">${t} ${I.chev}</a>
             <ul class="drop">${PRODUCTS.filter(p => p.cat !== "special").map(p => `<li><a href="shop.html#${p.id}">${p.name}<span>${inr(p.price)}</span></a></li>`).join("")}
             <li><a href="shop.html">All products<span>→</span></a></li><li><a href="index.html#bulk">Bulk orders<span>→</span></a></li></ul></li>`
        : `<li><a href="${h}" class="${page === k ? "active" : ""}">${t}</a></li>`).join("")}
    </ul>
    <div class="tools" style="position:relative">
      <button class="icon" id="searchBtn" aria-label="Search">${I.search}</button>
      <form class="search-pop" id="searchPop" action="shop.html"><input name="q" id="q" placeholder="Search eggs…" aria-label="Search eggs"><button>Search</button></form>
      <a href="contact.html" class="icon" aria-label="Account">${I.user}</a>
      <a href="order.html" class="icon" id="cartBtn" aria-label="Your basket">${I.cart}<span class="badge-count" id="count" hidden>0</span></a>
      <button class="icon burger" id="burger" aria-label="Menu">${I.menu}</button>
    </div></div>`;
  document.body.prepend(header);

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `<div class="wrap">
    <div class="news-bar">
      <div class="env"><svg viewBox="0 0 40 32" aria-hidden="true"><rect x="1" y="4" width="38" height="27" rx="3" fill="#E8B54A"/><path d="M1 7l19 13L39 7" fill="none" stroke="#D9694A" stroke-width="2.4"/><path d="M20 3l3-2" stroke="#D9694A" stroke-width="2"/></svg>
        <div><h3>Stay Updated</h3><small>Get the latest offers and healthy tips!</small></div></div>
      <form id="newsForm"><input type="email" required placeholder="Enter your email address" aria-label="Email address"><button>Subscribe</button></form>
      <div class="socials"><a href="${SITE.socials.instagram}" aria-label="Instagram">${I.ig}</a><a href="${SITE.socials.facebook}" aria-label="Facebook">${I.fb}</a><a href="${SITE.socials.youtube}" aria-label="YouTube">${I.yt}</a><a href="${SITE.socials.whatsapp}" aria-label="WhatsApp">${I.wa}</a></div>
      <span class="sign script">${SITE.footerLine} ♡</span>
    </div>
    <ul class="foot-links">${nav.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>
    <div class="legal"><span>© ${new Date().getFullYear()} ${SITE.brand}. All rights reserved.</span><span><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms &amp; Conditions</a></span></div>
  </div>`;
  document.body.append(footer);

  document.body.insertAdjacentHTML("beforeend", `<div class="toast" id="toast" role="status" aria-live="polite"></div>`);

  document.title = document.title.replace("EggNest", SITE.brand);
  $$("[data-brand]").forEach(el => el.textContent = SITE.brand);
  $$("[data-site]").forEach(el => el.textContent = SITE[el.dataset.site]);

  addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10), { passive: true });
  $("#burger").onclick = () => $("#menu").classList.toggle("open");
  $(".has-drop > a").addEventListener("click", e => { if (innerWidth <= 920) { e.preventDefault(); e.currentTarget.parentElement.classList.toggle("open"); } });
  $("#searchBtn").onclick = () => { $("#searchPop").classList.toggle("open"); $("#q").focus(); };
  $("#newsForm").onsubmit = e => { e.preventDefault(); e.target.reset(); toast("You're subscribed! 💛"); };
}

/* ---------- basket (kept in this browser) ----------
   WhatsApp checkout: items go into the basket, the basket icon opens
   order.html, and the order is sent to us on WhatsApp. */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("w2-cart")) || {}; } catch { cart = {}; }
const save = () => { try { localStorage.setItem("w2-cart", JSON.stringify(cart)); } catch {} };
const listeners = [];

function setQty(id, q) {
  q = Math.max(0, Math.min(99, q | 0));
  if (q) cart[id] = q; else delete cart[id];
  save(); drawCart(); listeners.forEach(f => f());
}
function add(id, from) {
  setQty(id, (cart[id] || 0) + 1);
  const p = find(id);
  flyEgg(from, () => { const c = $("#count"); c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop"); $("#cartBtn").classList.add("catch"); setTimeout(() => $("#cartBtn").classList.remove("catch"), 500); });
  toast(`<img src="${p.img}" alt=""><div><strong>Added to your basket</strong><span>1 × ${p.name} · ${inr(p.price)}</span><a href="order.html">View basket (${Object.values(cart).reduce((a, b) => a + b, 0)}) →</a></div><button class="t-x" aria-label="Close">×</button>`, true);
}
// a small egg arcs from the button into the basket icon
function flyEgg(from, done) {
  const to = $("#cartBtn");
  if (!from || !to || matchMedia("(prefers-reduced-motion: reduce)").matches) return done();
  const a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
  const egg = document.createElement("span"); egg.className = "fly-egg";
  egg.style.left = a.left + a.width / 2 - 11 + "px"; egg.style.top = a.top + a.height / 2 - 14 + "px";
  document.body.append(egg);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
  egg.animate([
    { transform: "translate(0,0) scale(1) rotate(0)" },
    { transform: `translate(${dx * .5}px,${dy - 120}px) scale(1.15) rotate(160deg)`, offset: .5 },
    { transform: `translate(${dx}px,${dy}px) scale(.35) rotate(320deg)`, opacity: .6 },
  ], { duration: 750, easing: "cubic-bezier(.45,.05,.4,1)" }).onfinish = () => { egg.remove(); done(); };
}
function drawCart() {
  const n = Object.keys(cart).filter(find).reduce((a, id) => a + cart[id], 0);
  const c = $("#count"); c.textContent = n; c.hidden = !n;
  $("#cartBtn").setAttribute("aria-label", n ? `Your basket, ${n} items` : "Your basket");
  $$("[data-add]").forEach(b => { const q = cart[b.dataset.add]; b.classList.toggle("in", !!q); b.dataset.q = q || ""; });
}
function bindCart() {
  addEventListener("keydown", e => { if (e.key === "Escape") $("#searchPop").classList.remove("open"); });
  document.addEventListener("click", e => {
    if (e.target.closest(".t-x")) { $("#toast").classList.remove("show"); return; }
    const b = e.target.closest("[data-add]"); if (!b) return;
    e.preventDefault(); add(b.dataset.add, b);
  });
  drawCart();
}
window.STORE = { site: SITE, products: PRODUCTS, inr, get: () => cart, set: setQty, clear: () => { cart = {}; save(); drawCart(); listeners.forEach(f => f()); }, on: f => listeners.push(f) };

let tt;
function toast(m, html) {
  const t = $("#toast"); if (html) t.innerHTML = m; else t.textContent = m;
  t.classList.toggle("rich", !!html);
  t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
  clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 3200);
}

/* ---------- product markup ---------- */
const packCard = p => `<article class="pack reveal" id="${p.id}">${p.ribbon ? `<span class="ribbon">${p.ribbon}</span>` : ""}
  <div class="ph"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
  <div class="bot"><div><h3>${p.name}</h3>${p.sub ? `<div class="sub">${p.sub}</div>` : p.note ? `<div class="sub">${p.note}</div>` : ""}<div class="price">${inr(p.price)}${p.unit ? ` <small>/ ${p.unit}</small>` : ""}</div></div>
  <button class="go" data-add="${p.id}" aria-label="Add ${p.name} to basket">${I.arrow}</button></div></article>`;
// Best sellers: an editorial grid, the first pick shown large
const bestCard = (p, i = 1) => `<article class="pick${i === 0 ? " pick--lead" : ""} reveal">
  <div class="pick-img"><img src="${p.img}" alt="${p.name}" loading="lazy">${p.tag ? `<span class="pick-tag">${p.tag}</span>` : ""}</div>
  <div class="pick-body"><span class="pick-no">No. ${String(i + 1).padStart(2, "0")}</span><h3>${p.name}</h3><p>${p.note}</p>
  <div class="pick-foot"><strong>${inr(p.price)}</strong><button class="go" data-add="${p.id}" aria-label="Add ${p.name} to basket">${I.arrow}</button></div></div></article>`;

function products() {
  const home = $("#packs"); if (home) home.innerHTML = ["p6", "p12", "p30", "loose"].map(id => packCard(find(id))).join("");
  const best = $("#best"); if (best) best.innerHTML = BEST.map((id, i) => bestCard(find(id), i)).join("");
  const grid = $("#shopGrid");
  if (grid) {
    const input = $("#shopQ"); input.value = new URLSearchParams(location.search).get("q") || "";
    let cat = "all";
    const draw = () => {
      const q = input.value.trim().toLowerCase();
      const list = PRODUCTS.filter(p => (cat === "all" || p.cat === cat) && (!q || (p.name + " " + (p.note || "") + " " + (p.sub || "")).toLowerCase().includes(q)));
      grid.innerHTML = list.length ? list.map(packCard).join("") : `<p class="none">No eggs match “${q}”.</p>`;
      reveals(); drawCart();
      const hit = location.hash && $(location.hash, grid); if (hit) { hit.scrollIntoView({ block: "center" }); hit.style.outline = "3px solid var(--orange)"; }
    };
    $$(".tab").forEach(t => t.onclick = () => { $(".tab.on").classList.remove("on"); t.classList.add("on"); cat = t.dataset.cat; draw(); });
    input.oninput = draw; draw();
  }
}

/* ---------- reviews ---------- */
function reviews() {
  const rv = $$(".rv"); if (!rv.length) return;
  const dots = $$(".rv-dots button"); let i = 0, timer;
  const go = n => { rv[i].classList.remove("on"); dots[i].classList.remove("on"); i = (n + rv.length) % rv.length; rv[i].classList.add("on"); dots[i].classList.add("on"); clearInterval(timer); timer = setInterval(() => go(i + 1), 5500); };
  $("#rvPrev").onclick = () => go(i - 1); $("#rvNext").onclick = () => go(i + 1);
  dots.forEach((d, n) => d.onclick = () => go(n));
  timer = setInterval(() => go(i + 1), 5500);
}

/* ---------- FAQ ---------- */
function faq() {
  $$(".qa > button").forEach(b => b.onclick = () => {
    const q = b.parentElement, was = q.classList.contains("open");
    $$(".qa").forEach(x => x.classList.remove("open"));
    if (!was) q.classList.add("open");
  });
}

/* ---------- forms (demo — connect to email / WhatsApp / CRM later) ---------- */
function forms() { $$("form.form").forEach(f => f.onsubmit = e => { e.preventDefault(); f.classList.add("sent"); f.reset(); toast("Thank you! We'll be in touch soon."); }); }

/* ---------- falling leaves in hero ---------- */
function leaves() {
  const box = $(".falling"); if (!box || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const leaf = c => `<svg viewBox="0 0 40 40"><path d="M4 36C4 18 16 6 36 4c0 20-12 32-32 32z" fill="${c}"/><path d="M4 36L28 12" stroke="#5E2950" stroke-width="1.6"/></svg>`;
  for (let n = 0; n < 6; n++) {
    box.insertAdjacentHTML("beforeend", leaf(n % 2 ? "#E9A28A" : "#F4C3B0"));
    const s = box.lastElementChild;
    s.style.left = 40 + Math.random() * 60 + "%"; s.style.width = 18 + Math.random() * 18 + "px";
    s.style.animationDuration = 9 + Math.random() * 7 + "s"; s.style.animationDelay = -Math.random() * 12 + "s";
  }
}

/* ---------- counters + reveal ---------- */
function countUp(el) { const to = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
  (function f(t) { const k = Math.min(1, (t - t0) / 1600); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))).toLocaleString("en-IN") + suf; if (k < 1) requestAnimationFrame(f); })(t0); }
const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; e.target.classList.add("in"); $$("[data-count]", e.target).forEach(countUp); io.unobserve(e.target); }), { threshold: .12 });
function reveals() {
  $$(".reveal:not(.in)").forEach((el, n) => {
    if (el.getBoundingClientRect().top < innerHeight) { el.classList.add("in"); $$("[data-count]", el).forEach(countUp); return; }
    el.classList.add("pre"); el.style.transitionDelay = (n % 4) * 80 + "ms"; io.observe(el);
  });
}

chrome(); products(); bindCart(); reviews(); faq(); forms(); leaves(); reveals();
