/* ============================================================
   script.js — SiklusHijau interactivity
   ============================================================ */
(function(){
  "use strict";

  let currentLang = "id";
  let currentCat = "organic";
  let currentVideoFilter = "all";

  /* ---------- helpers ---------- */
  const $ = (sel, ctx) => (ctx||document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx||document).querySelectorAll(sel));
  const t = (key) => (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key;

  /* ---------- LOADING SCREEN ---------- */
  window.addEventListener("load", () => {
    const screen = $("#loading-screen");
    setTimeout(() => screen.classList.add("hide"), 600);
  });

  /* ---------- AOS ---------- */
  if (window.AOS) AOS.init({ once: true });

  /* ---------- SCROLL PROGRESS + BACK TO TOP + NAVBAR SHADOW ---------- */
  const progressBar = $("#scroll-progress");
  const backToTop = $("#back-to-top");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progressBar.style.width = scrolled + "%";
    backToTop.classList.toggle("show", h.scrollTop > 500);
  });
  backToTop.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

  /* ---------- MOBILE NAV ---------- */
  const burger = $("#burger");
  const navLinks = $("#nav-links");
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  $$(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

  /* ---------- DARK MODE ---------- */
  const themeToggle = $("#theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });

  /* ---------- MUSIC TOGGLE (optional ambient audio; add your own file at assets/audio/ambient.mp3) ---------- */
  const musicToggle = $("#music-toggle");
  const audio = new Audio();
  audio.loop = true;
  audio.src = "./assets/audio/the_mountain-inspiring-483307.mp3"; // replace with a real royalty-free track
  let musicOn = false;
  musicToggle.addEventListener("click", () => {
    musicOn = !musicOn;
    musicToggle.innerHTML = musicOn
      ? '<i class="fa-solid fa-volume-high"></i>'
      : '<i class="fa-solid fa-volume-xmark"></i>';
    if (musicOn) { audio.play().catch(()=>{}); } else { audio.pause(); }
  });

  /* ---------- LANGUAGE SWITCH ---------- */
  const langToggle = $("#lang-toggle");
  function applyTranslations(){
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach(el => { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    document.documentElement.lang = currentLang;
    renderCategoryTabsLabelsOnly(); // tab labels already covered by data-i18n
    renderCategoryPanel(currentCat);
    renderVideos();
    renderFAQ();
  }
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "id" ? "en" : "id";
    langToggle.classList.toggle("is-en", currentLang === "en");
    applyTranslations();
  });

  /* ---------- CATEGORY TABS ---------- */
  function renderCategoryTabsLabelsOnly(){ /* labels handled via data-i18n already; placeholder for future use */ }

  function renderCategoryPanel(cat){
    currentCat = cat;
    const data = CATEGORY_DATA[currentLang][cat];
    const panelWrap = $("#cat-panels");
    if (!data){ panelWrap.innerHTML = ""; return; }

    const examplesHtml = data.examples.map(e => `<li>${e}</li>`).join("");
    const benefitsHtml = data.benefits.map(b => `<li>${b}</li>`).join("");
    const processHtml = data.process.map(p => `<li>${p}</li>`).join("");
    const ytUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(data.videoQuery);

    const extraHtml = data.extra ? `
      <div class="cat-block cat-extra">
        <h4><i class="fa-solid ${data.extra.icon}"></i> ${data.extra.label}</h4>
        <ul>${data.extra.items.map(i => `<li>${i}</li>`).join("")}</ul>
        <p class="cat-extra-note"><i class="fa-solid fa-triangle-exclamation"></i> ${data.extra.note}</p>
      </div>` : "";

    const secondaryHtml = data.secondary ? `
      <div class="cat-panel secondary" data-aos="fade-up">
        <div class="cat-col">
          <h3><i class="fa-solid ${data.secondary.icon}"></i> ${data.secondary.label}</h3>
          <div class="cat-block">
            <h4>${t("cat.benefits")}</h4>
            <ul>${data.secondary.benefits.map(b => `<li>${b}</li>`).join("")}</ul>
          </div>
          <div class="cat-block">
            <h4>${t("cat.packaging")}</h4>
            <p>${data.secondary.packaging}</p>
          </div>
        </div>
        <div class="cat-col">
          <div class="cat-block">
            <h4>${t("cat.process")}</h4>
            <ol>${data.secondary.process.map(p => `<li>${p}</li>`).join("")}</ol>
          </div>
          <div class="cat-block">
            <h4>${t("cat.marketing")}</h4>
            <p>${data.secondary.marketing}</p>
          </div>
          <a class="btn btn-outline cat-watch-btn" href="${"https://www.youtube.com/results?search_query=" + encodeURIComponent(data.secondary.videoQuery)}" target="_blank" rel="noopener">
            <i class="fa-brands fa-youtube"></i> ${t("cat.watch")}
          </a>
        </div>
      </div>` : "";

    panelWrap.innerHTML = `
      <div class="cat-panel active">
        <div class="cat-col">
          <div class="cat-block">
            <h4>${t("cat.examples")}</h4>
            <ul>${examplesHtml}</ul>
          </div>
          <div class="cat-block">
            <h4>${t("cat.benefits")}</h4>
            <ul>${benefitsHtml}</ul>
          </div>
          <div class="cat-block">
            <h4>${t("cat.packaging")}</h4>
            <p>${data.packaging}</p>
          </div>
        </div>
        <div class="cat-col">
          <div class="cat-block">
            <h4>${t("cat.process")}</h4>
            <ol>${processHtml}</ol>
          </div>
          <div class="cat-block">
            <h4>${t("cat.marketing")}</h4>
            <p>${data.marketing}</p>
          </div>
          ${extraHtml}
          <a class="btn btn-solid cat-watch-btn" href="${ytUrl}" target="_blank" rel="noopener">
            <i class="fa-brands fa-youtube"></i> ${t("cat.watch")}
          </a>
        </div>
      </div>
      ${secondaryHtml}`;
  }

  $$(".cat-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".cat-tab").forEach(b => b.classList.remove("active"));
      tab.classList.add("active");
      renderCategoryPanel(tab.dataset.cat);
    });
  });

  /* ---------- VIDEO GALLERY ---------- */
  const videoGrid = $("#video-grid");
  const videoSearch = $("#video-search");
  const catThumbIcon = {
    organic: "fa-apple-whole", rice: "fa-wheat-awn", plastic: "fa-bottle-water",
    paper: "fa-newspaper", glass: "fa-wine-bottle", metal: "fa-jar"
  };
  function renderVideos(){
    const query = (videoSearch.value || "").toLowerCase().trim();
    const items = VIDEO_DATA.filter(v => {
      const matchesFilter = currentVideoFilter === "all" || v.cat === currentVideoFilter;
      const title = v[currentLang].t.toLowerCase();
      const matchesSearch = !query || title.includes(query) || v.cat.includes(query);
      return matchesFilter && matchesSearch;
    });

    if (!items.length){
      videoGrid.innerHTML = `<p id="video-empty">${t("vid.empty")}</p>`;
      return;
    }

  videoGrid.innerHTML = items.map(v => {
      const ytUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(v.q);
      const thumbInner = v.img
        ? `<img src="${v.img}" alt="${v[currentLang].t}" class="video-thumb-img" onclick="window.openImageLightbox('${v.img}', '${v[currentLang].t.replace(/'/g, "\\'")}')">`
        : `<i class="fa-solid ${catThumbIcon[v.cat]}"></i>`;
      return `
        <div class="video-card">
          <div class="video-thumb${v.img ? " has-img" : ""}">${thumbInner}</div>
          <div class="vc-body">
            <span class="tag">${v.cat}</span>
            <h4>${v[currentLang].t}</h4>
            <a href="${ytUrl}" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i> ${t("vid.watch")}</a>
          </div>
        </div>`;
    }).join("");
  }   // 👈 TAMBAHKAN BARIS INI — penutup function renderVideos()

/* ---------- IMAGE LIGHTBOX ---------- */
  function ensureLightboxEl(){
    let el = $("#img-lightbox");
    if (el) return el;
    el = document.createElement("div");
    el.id = "img-lightbox";
    el.className = "img-lightbox";
    el.innerHTML = `
      <span class="img-lightbox-close" aria-label="Close">&times;</span>
      <img src="" alt="">
      <p class="img-lightbox-caption"></p>`;
    document.body.appendChild(el);
    el.addEventListener("click", (e) => {
      if (e.target === el || e.target.classList.contains("img-lightbox-close")) {
        el.classList.remove("open");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") el.classList.remove("open");
    });
    return el;
  }
  window.openImageLightbox = function(src, caption){
    const el = ensureLightboxEl();
    el.querySelector("img").src = src;
    el.querySelector("img").alt = caption || "";
    el.querySelector(".img-lightbox-caption").textContent = caption || "";
    el.classList.add("open");
  };

  $$(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      $$(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentVideoFilter = chip.dataset.filter;
      renderVideos();
    });
  });
  videoSearch.addEventListener("input", renderVideos);

  /* ---------- FAQ ACCORDION ---------- */
  const faqList = $("#faq-list");
  function renderFAQ(){
    const items = FAQ_DATA[currentLang];
    faqList.innerHTML = items.map((item, i) => `
      <div class="faq-item" data-index="${i}">
        <button class="faq-q">${item.q} <i class="fa-solid fa-plus"></i></button>
        <div class="faq-a"><p>${item.a}</p></div>
      </div>`).join("");
    $$(".faq-q", faqList).forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const wasOpen = item.classList.contains("open");
        $$(".faq-item", faqList).forEach(f => f.classList.remove("open"));
        if (!wasOpen) item.classList.add("open");
      });
    });
  }

  /* ---------- ANIMATED COUNTERS ---------- */
  const counters = $$(".counter");
  let countersStarted = false;
  function animateCounters(){
    if (countersStarted) return;
    countersStarted = true;
    counters.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;
      const start = performance.now();
      function step(now){
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target).toLocaleString(currentLang === "id" ? "id-ID" : "en-US");
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  const statsSection = $("#stats");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) animateCounters(); });
  }, { threshold: .4 });
  io.observe(statsSection);

  /* ---------- CHARTS ---------- */
  function initCharts(){
    if (!window.Chart) return;
    const gridColor = getComputedStyle(document.body).getPropertyValue("--border");
    const textColor = getComputedStyle(document.body).getPropertyValue("--text-soft");

    new Chart($("#chartWaste"), {
      type: "bar",
      data: {
        labels: ["Organik", "Plastik", "Kertas", "Kaca", "Logam", "Sekam"],
        datasets: [{
          label: "Ton / bulan (ilustrasi)",
          data: [420, 260, 180, 90, 60, 150],
          backgroundColor: ["#4CAF50","#FFA726","#4FC3F7","#FFD54F","#8D6E63","#81C784"],
          borderRadius: 8
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display:false }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor } }
        }
      }
    });

    new Chart($("#chartRecycle"), {
      type: "line",
      data: {
        labels: ["2020","2021","2022","2023","2024","2025"],
        datasets: [{
          label: "% didaur ulang (ilustrasi)",
          data: [18, 24, 31, 40, 52, 61],
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76,175,80,.2)",
          fill: true, tension: .4, pointRadius: 4
        }]
      },
      options: {
        plugins: { legend: { display:false } },
        scales: {
          x: { grid: { display:false }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor } }
        }
      }
    });
  }

  /* ---------- CONTACT FORM (demo only, no backend) ---------- */
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#form-note").textContent = t("contact.sent");
    e.target.reset();
  });
  $("#newsletter-btn").addEventListener("click", () => {
    const email = $("#newsletter-email").value.trim();
    if (!email) return;
    alert(t("contact.newslettersent"));
    $("#newsletter-email").value = "";
  });

  /* ---------- AI ASSISTANT (rule-based, client-side, no external API) ---------- */
  const aiFab = $("#ai-fab");
  const aiChat = $("#ai-chat");
  const aiClose = $("#ai-close");
  const aiBody = $("#ai-chat-body");
  const aiForm = $("#ai-chat-form");
  const aiInput = $("#ai-input");
  const aiSuggestions = $("#ai-suggestions");

  const suggestionKeys = ["eco enzyme", "kompos", "plastik", "usaha"];
  function renderSuggestions(){
    aiSuggestions.innerHTML = suggestionKeys.map(k => `<button type="button" class="ai-chip">${k}</button>`).join("");
    $$(".ai-chip", aiSuggestions).forEach(chip => {
      chip.addEventListener("click", () => { aiInput.value = chip.textContent; aiForm.requestSubmit(); });
    });
  }
  renderSuggestions();

  function openChat(){ aiChat.classList.add("open"); aiInput.focus(); }
  aiFab.addEventListener("click", openChat);
  $("#hero-ask-ai").addEventListener("click", openChat);
  aiClose.addEventListener("click", () => aiChat.classList.remove("open"));

  function addMsg(text, who){
    const div = document.createElement("div");
    div.className = "ai-msg " + who;
    div.textContent = text;
    aiBody.appendChild(div);
    aiBody.scrollTop = aiBody.scrollHeight;
    return div;
  }

  function findAnswer(query){
    const q = query.toLowerCase();
    const hit = AI_KB.find(entry => entry.keywords.some(k => q.includes(k)));
    return hit ? hit[currentLang] : t("ai.fallback");
  }

  aiForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = aiInput.value.trim();
    if (!value) return;
    addMsg(value, "user");
    aiInput.value = "";

    const typingEl = addMsg(t("ai.typing"), "bot typing");
    setTimeout(() => {
      typingEl.remove();
      addMsg(findAnswer(value), "bot");
    }, 500);
  });

  /* ---------- YEAR ---------- */
  $("#year").textContent = new Date().getFullYear();

  /* ---------- INIT ---------- */
  applyTranslations();
  renderCategoryPanel(currentCat);
  renderVideos();
  renderFAQ();
  initCharts();
})();
