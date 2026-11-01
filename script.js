// Content copied from the live site (src/content/ar/solutions.ts + home.ts)
const solutions = [
  {
    slug: "platforms", label: "PLATFORMS", title: "المواقع وبوابات الأعمال", tagline: "واجهة تخدم علاقة طويلة.",
    summary: "مواقع مؤسسية متعددة اللغات، بوابات عملاء وشركاء، منصات خدمات وإدارة محتوى.",
    whenItFits: "إذا عملاؤك أو شركاؤك يحتاجون ينجزون طلباتهم ويتابعونها بدل ما تضيع بين الرسائل.",
    deliverables: "خريطة رحلات المستخدم؛ تصميم واجهات؛ إدارة محتوى؛ ربط الأنظمة المتفق عليها؛ توثيق وتسليم.",
    agreeFirst: "الهوية والمحتوى، أنواع المستخدمين، صلاحيات الوصول، التكاملات، ومعايير سرعة وإتاحة الصفحات.",
  },
  {
    slug: "apps", label: "APPS", title: "تطبيقات الجوال", tagline: "خدماتك، أقرب إلى مستخدميها.",
    summary: "تطبيقات عملاء وموظفين وفرق ميدانية لـ iOS وAndroid حسب النطاق.",
    whenItFits: "عندما تتطلب الخدمة استخدامًا متكررًا أو عملًا ميدانيًا أو تجربة مرتبطة بالجهاز.",
    deliverables: "نموذج قابل للتجربة؛ تطبيق؛ واجهات ربط؛ اختبارات أجهزة؛ تجهيز إصدار؛ دليل تشغيل.",
    agreeFirst: "الأجهزة المستهدفة، العمل دون اتصال، الإشعارات، الحسابات، وسياسات نشر المتاجر.",
  },
  {
    slug: "business", label: "BUSINESS", title: "أنظمة CRM وERP", tagline: "رؤية مشتركة للعمليات.",
    summary: "إدارة العملاء والمبيعات والمخزون والمشتريات وسير الموافقات. نقارن تهيئة منتج قائم ببناء وحدات مخصصة قبل الاختيار.",
    whenItFits: "إذا المبيعات والطلبات والمخزون موزعة بين أدوات منفصلة، وصعب تعرف مين مسؤول عن وش.",
    deliverables: "تحليل العمليات؛ مصفوفة صلاحيات؛ وحدات متفق عليها؛ خطة ترحيل؛ تقارير؛ تدريب وتسليم.",
    agreeFirst: "مصادر البيانات وجودتها، الوحدات المطلوبة، النظام الحالي، مالك كل إجراء، وخطة الانتقال.",
  },
  {
    slug: "integration", label: "INTEGRATION", title: "التكاملات والأنظمة المخصصة", tagline: "بيانات تتصل، وفرق تتعاون.",
    summary: "ربط عبر API، بوابات داخلية، لوحات متابعة، مزامنة بيانات وأتمتة إجراءات.",
    whenItFits: "إذا نفس البيانات تنكتب أكثر من مرة، أو القرارات تتأخر لأن الأنظمة ما تتكلم مع بعض.",
    deliverables: "خريطة الأنظمة؛ عقود تبادل البيانات؛ إدارة أخطاء وإعادة محاولة؛ اختبارات تكامل؛ توثيق.",
    agreeFirst: "توفر API، حدود الاستخدام، هوية المصدر المعتمد، قواعد التزامن، والبيئات المسموح الوصول إليها.",
  },
  {
    slug: "automation", label: "AUTOMATION", title: "الأتمتة والذكاء الاصطناعي", tagline: "خطوات أقل. تحكم أوضح.",
    summary: "أتمتة مهام محددة، بحث في المعرفة، معالجة مستندات ومساعدات داخلية بمراجعة بشرية.",
    whenItFits: "إذا التصنيف أو البحث أو إعداد الملخصات ياخذ من فريقك وقتًا أولى يروح لمهام أهم.",
    deliverables: "حالة استخدام محددة؛ تجربة جدوى؛ معايير تقييم؛ نقاط مراجعة؛ خطة تكلفة وتشغيل.",
    agreeFirst: "حساسية البيانات، السماح باستخدام مزود خارجي، جودة المصادر، ومتى يجب إحالة القرار لإنسان.",
  },
  {
    slug: "support", label: "SUPPORT", title: "التطوير المستمر والدعم", tagline: "ما بعد الإطلاق، بخطة.",
    summary: "صيانة وتحسينات ومراقبة حسب عقد الخدمة ونطاق النظام.",
    whenItFits: "عندما يحتاج النظام إلى مسؤول واضح للصيانة والتحسين ومعالجة المشكلات.",
    deliverables: "قائمة أنظمة مدعومة؛ تصنيف أولويات؛ قناة بلاغات؛ نوافذ صيانة؛ تقرير متابعة.",
    agreeFirst: "ساعات التغطية وأزمنة الاستجابة والنسخ الاحتياطي والاستعادة تُتفق كتابيًا؛ لا نفترض خدمة 24/7.",
  },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// ---------- Solution tiles ----------
$("#tiles").innerHTML = solutions.map((s) => `
  <article class="tile reveal">
    <div class="tile-text">
      <p class="tile-label" dir="ltr">${s.label}</p>
      <h3>${s.title}</h3>
      <p class="tagline">${s.tagline}</p>
      <a class="more" href="#solutions" data-solution="${s.slug}">اعرف المزيد</a>
    </div>
    <div class="tile-media"><img src="assets/service-${s.slug}.jpg" alt="" loading="lazy" width="1200" height="800"></div>
  </article>`).join("");

// ---------- Solution sheet ----------
const sheet = $("#sheet");
function openSolution(slug) {
  const s = solutions.find((x) => x.slug === slug);
  if (!s) return;
  $("#sheet-body").innerHTML = `
    <img class="sheet-hero" src="assets/service-${s.slug}.jpg" alt="">
    <div class="sheet-content">
      <p class="tile-label" dir="ltr">FRENTEX / ${s.label}</p>
      <h2 id="sheet-title">${s.title}</h2>
      <p class="tagline">${s.tagline}</p>
      <p>${s.summary}</p>
      <div class="sheet-grid">
        <div class="glass card"><h3>متى يكون الحل مناسبًا؟</h3><p>${s.whenItFits}</p></div>
        <div class="glass card"><h3>مخرجات نتفق عليها</h3><p>${s.deliverables}</p></div>
        <div class="glass card"><h3>ما نحدده مع فريقك أولًا</h3><p>${s.agreeFirst}</p></div>
      </div>
      <a class="pill" href="#contact" data-close>خلّنا نتكلم عن مشروعك</a>
    </div>`;
  sheet.showModal();
  sheet.scrollTop = 0;
}
$("#sheet-close").addEventListener("click", () => sheet.close());
sheet.addEventListener("click", (e) => {
  if (e.target === sheet || e.target.closest("[data-close]")) sheet.close();
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-solution]");
  if (!link) return;
  e.preventDefault();
  closeMenu();
  openSolution(link.dataset.solution);
});

// ---------- Global nav flyouts ----------
const gnav = $("#gnav");
const flyouts = $(".flyouts");
const scrim = $("#scrim");
const triggers = $$("[data-menu]");
let current = null;
let closeTimer;

$$(".flyout").forEach((panel) => $$("li", panel).forEach((li, i) => li.style.setProperty("--i", i)));

function openMenu(name) {
  clearTimeout(closeTimer);
  if (current === name) return;
  current = name;
  triggers.forEach((t) => t.setAttribute("aria-expanded", String(t.dataset.menu === name)));
  $$(".flyout").forEach((p) => (p.hidden = p.dataset.panel !== name));
  const panel = $(`.flyout[data-panel="${name}"]`);
  gnav.classList.remove("is-open");
  void panel.offsetHeight; // restart the stagger when switching panels
  flyouts.style.height = panel.offsetHeight + "px";
  gnav.classList.add("is-open");
  scrim.classList.add("is-on");
}

function closeMenu() {
  if (!current) return;
  current = null;
  triggers.forEach((t) => t.setAttribute("aria-expanded", "false"));
  flyouts.style.height = "0px";
  gnav.classList.remove("is-open");
  scrim.classList.remove("is-on");
}

const canHover = matchMedia("(hover: hover)").matches;
triggers.forEach((t) => {
  if (canHover) t.addEventListener("mouseenter", () => openMenu(t.dataset.menu));
  t.addEventListener("click", () => (current === t.dataset.menu ? closeMenu() : openMenu(t.dataset.menu)));
});
if (canHover) {
  $$(".gnav-bar > .brand, .gnav-list a, .gnav-bar > .pill").forEach((el) => el.addEventListener("mouseenter", closeMenu));
  gnav.addEventListener("mouseleave", () => (closeTimer = setTimeout(closeMenu, 160)));
  gnav.addEventListener("mouseenter", () => clearTimeout(closeTimer));
}
scrim.addEventListener("click", closeMenu);
$$(".flyout a").forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || !current) return;
  const trigger = $(`[data-menu="${current}"]`);
  closeMenu();
  trigger.focus();
});

// ---------- Mobile menu ----------
const burger = $("#burger");
const mobileMenu = $("#mobile-menu");
function setMobile(open) {
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
  mobileMenu.hidden = !open;
}
burger.addEventListener("click", () => setMobile(mobileMenu.hidden));
$$("a", mobileMenu).forEach((a) => a.addEventListener("click", () => setMobile(false)));

// ---------- Scroll reveal ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-in");
    io.unobserve(en.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
$$(".reveal").forEach((el) => io.observe(el));
