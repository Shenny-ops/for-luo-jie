/* =========================================================
   Orange Memories · content + interactions
   Replace PHOTOS and MESSAGES below with the real material.
   ========================================================= */

const PHOTOS = [
  { src: "assets/photos/photo01.jpg", caption: "PID 橘色擔當，非你莫屬 🧡" },
  { src: "assets/photos/photo02.jpg", caption: "午餐團出動，肉丸補給中 🍽️" },
  { src: "assets/photos/photo03.jpg", caption: "PID 記者會" },
  { src: "assets/photos/photo04.jpg", caption: "官方認證：你好棒！✍️" },
  { src: "assets/photos/photo05.jpg", caption: "" },
];

const JOURNEY = [
  { label: "開場第一張", layout: "grp-hero", photos: [0] },
  { label: "吃飽了，上工囉", layout: "grp-pair", photos: [1, 2] },
  { label: "親筆認證", layout: "grp-solo", photos: [3] },
  { label: "壓軸登場",   layout: "grp-last", photos: [4] },
];

const MESSAGES = [
  {
    "name": "孟澄",
    "text": "親愛的可愛的慈愛的(?)羅潔大大，羅潔姐姐，羅潔大美女：\n謝謝妳每次都陪我臉蕭維，然後認真討論工作。一方面，我很高興一到PID就認識妳，知道有個可靠的前輩可以解決我的難題，我覺得非常安心，一直依賴妳。\n一方面也知道妳一直以來的辛勞，真的很需要好好的休息。\n我還是很難過以後工作中找不到妳了，但也很高興妳可以花更多時間做其他想做的事情。\n只要妳能身體健康長命百歲，江湖之大(見證人社會之小)總會再見。\n要好好休息，開心生活喔~"
  },
  {
    "name": "J伶",
    "text": "親愛的羅J，我會為您獻上最虔誠的祝福。希望您快快樂樂，永遠幸福。\n勿忘我\n友誼長存\n百事可樂"
  },
  {
    "name": "譚志翔",
    "text": "加油阿潔 AKA 羅大師！\n謝謝你在我剛進來的時候給我很多培訓和幫助（壓力\n希望你在接下來的人生可以繼續感受到耶和華給你的賜福，也希望你可以適應新的生活和身份！（尼8:10）\n希望下次PID旅遊還有我們的份哈哈"
  },
  {
    "name": "陳品任",
    "text": "尊敬的羅大秘書：感激你在PID的犧牲奉獻，我們會懷念跟你工作的日子～"
  },
  {
    "name": "陸倚恩",
    "text": "羅潔，謝謝你在我剛來部門時幫了我很多，我會想念你這個可靠的好姐妹。\n期待你在新的人生篇章中繼續用羅式幽默和智慧幫助別人造福自己。\n再會！！！"
  },
  {
    "name": "李緒文",
    "text": "嗨~ 羅潔，你在我心中是PID永遠的秘書大頭目 (?) ，從沒想過有一天你會離開PID啊!\n雖然我們一起工作的次數不多，但只要有機會，你都會積極的鼓勵我，視訊會議總是讓我很不自在，但你溫暖的關心(或搞笑)帶給我很大幫助，真的謝謝你。   非常欣賞你的基督徒特質!  願耶和華繼續令你喜樂的為他服務  :)"
  },
  {
    "name": "詹煥楨",
    "text": "羅姊妹你好\n真的體會你們很有耐心，也很順服，再怎麼樣棘手不容易的情況，你們都樂意協助，這讓我們弟兄們的工作變得很順利和輕鬆，時間過得很快，四年一下子就過了，希望你在新的工作崗位也能享有一樣的喜樂\n願耶和華大大祝福你的努力\n謝謝"
  },
  {
    "name": "蔡佳琪",
    "text": "沒想到妳會比我提早離開，妳可是PID台柱欸XD。謝謝妳為PID做了很多事~跟妳一起工作學到很多!以後一起加油! 哈哈"
  },
  {
    "name": "Jessica Ho",
    "text": "（小測試，你可以找到幾個錯字？）\n我親愛的啄木鳥，\n你離開，我要像耶利米書6:26說的：「...披上粗布，在灰中打滾，像失去獨生子那樣痛苦哀號...」。透過PID可以認識到尼那麼可愛那麼善良厲害有耐心的好姐妹，真是耶和華的blessing! 我會永遠記得你是第一個聯絡我的PID人員，跟者一起面試，回不去害羞陌生的日子咯！你是我的好榜樣，無論做什麼都用心，讓別人也感到舒服，雖然你的經驗很豐福，都會聽別人的建議，之後一定也會是個箴言31章的賢能的七子～恭喜Awebo！\n我會努利做對得起你的好密書！！！Jessica loves you forever and ever~"
  },
  {
    "name": "邱涵",
    "text": "這次真的太shock了啦！！從我第一次接到PID的電話以來每段PID的記憶裡都有你，好難想像你不在QQ 每次做完東西覺得心裡很沒把握，只要想到可以找你討拍就會覺得很安心，而且你也不只給我情緒價值而已，也會提供很有幫助的建議，對我來說這個是很棒的培訓，現在對減法排版和標點符號的敏感度有增加了(๑•̀ㅂ•́)و✧\n另外我也真的打從心裡佩服你不只可以完成漂亮的排版、熟悉PID的各種情況，而且還這麼幽默，每次都可以講出好有趣的話XD 你也讓我看到原來姐妹可以這樣深度支援部門的工作，以前一直以為這些只有弟兄能做，所以那時候超受鼓勵的！\n總之，這段時間你真的給我很多幫助，很謝謝你的照顧😭😭接下來就期待明年見囉😁"
  },
  {
    "name": "小燁子",
    "text": "祝偉大的秘書長潔姐展翅鵬程~記得留下一些蛛絲馬跡，讓小的跟隨跟隨～"
  },
  {
    "name": "劉彥璋",
    "text": "劉彥璋對羅潔說：『又良善又忠信的姐妹，你做得好！你在一些事上忠信。我要委派你管理很多事（這是耶和華說的）。去迎接妳的喜樂吧。』"
  },
  {
    "name": "Michael Yeung",
    "text": "很高興與你一起工作，在高雄很多回憶，為你新的“委派😆”禱告"
  },
  {
    "name": "劉宛伶",
    "text": "羅潔～雖然和妳只有短短的重疊時間，但很高興有機會跟妳一起上到培訓課，在部門會議上聽見妳真誠的分享，還有在婚禮場合見到本人，聽過很多人讚許妳的服務，真的謝謝妳為耶和華的付出！希望未來還有時間多認識妳！！"
  },
  {
    "name": "以梵",
    "text": "腓立比書4:1因此，我所愛所想念的弟兄，你們就是我的喜樂、我的冠冕。我親愛的朋友，你們要這樣堅定不移地跟隨主。\n羅潔，你超棒的！跟你一起工作很省心，很快樂，看到你的優秀被更多人發現，我很開心，也很以你為榮。我們會想念你，也會想念你的冷笑話 XD\n最後，請記得，地瓜是韓籍。"
  },
  {
    "name": "張馨元",
    "text": "謝謝羅潔用有趣的方式培訓我，我很享受上課的時間！"
  },
  {
    "name": "湯宜臻",
    "text": "羅潔，謝謝你在 PID 的付出！你的溫暖和幽默，還有認真工作的態度，讓我在工作中感到很輕鬆、沒有壓力，甚至覺得很開心。也非常感謝你耐心的交接，讓我學到很多。衷心祝福你在生活的新篇章裡一切順利、充滿喜樂！"
  },
  {
    "name": "心萱 Shenny",
    "text": "羅潔大師：\n雖然和妳相處的時間不長，但一直覺得妳是個能力很強、又溫和親切的人。記得以梵曾提到，妳的能力很出眾，也讓許多監督看見，進而開始將一些重要的工作交給姐妹們負責。相信這些都離不開耶和華的支持。\n很感謝妳這段時間的服務和付出，也會繼續為妳接下來的安排禱告，祝福妳在新的崗位上一切順利！"
  }
];

const PER_PAGE = 6;
const ICONS = ["🎉", "😆", "☕", "🌟", "🍰", "💛", "🙌"];
const ROTS = [-1.8, 1.6, -1, 2, -1.4];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const pad = (n) => String(n).padStart(2, "0");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function photoMedia(i) {
  const p = PHOTOS[i];
  const wrap = document.createElement("div");
  wrap.className = "ph";
  const img = new Image();
  img.loading = "lazy";
  img.decoding = "async";
  img.alt = p.caption || "羅潔";
  img.src = p.src;
  img.onerror = () => { wrap.innerHTML = `<div class="ph-empty"><b>${pad(i + 1)}</b>照片</div>`; };
  wrap.appendChild(img);
  return wrap;
}

/* ---------- envelope ---------- */
function initEnvelope() {
  const screen = $("#envelope-screen");
  const floaters = $(".floaters", screen);
  const glyphs = ["✦", "✧", "★", "·", "✳"];
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    if (i % 3 === 0) s.className = "bit"; else s.textContent = glyphs[i % glyphs.length];
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.fontSize = 10 + Math.random() * 14 + "px";
    s.style.setProperty("--d", 6 + Math.random() * 6 + "s");
    s.style.setProperty("--delay", -Math.random() * 6 + "s");
    floaters.appendChild(s);
  }

  let opened = false;
  const open = () => {
    if (opened) return;
    opened = true;
    screen.classList.add("is-open");
    setTimeout(() => {
      screen.classList.add("is-gone");
      document.body.classList.remove("is-locked");
      const book = $("#book");
      book.classList.add("is-visible");
      book.removeAttribute("aria-hidden");
      window.scrollTo(0, 0);
    }, reduceMotion ? 100 : 2100);
  };
  $("#envelope").addEventListener("click", open);
  $("#open-btn").addEventListener("click", open);
}

/* ---------- journey ---------- */
function initJourney() {
  const tl = $("#timeline");
  JOURNEY.forEach((g, gi) => {
    const block = document.createElement("div");
    block.className = "chapter";
    block.innerHTML = `<div class="chapter-label reveal"><span>${g.label}</span></div>`;
    const grid = document.createElement("div");
    grid.className = g.layout;
    g.photos.forEach((pi) => {
      const fig = document.createElement("figure");
      fig.className = "photo";
      fig.appendChild(photoMedia(pi));
      const cap = document.createElement("figcaption");
      cap.textContent = PHOTOS[pi].caption;
      if (PHOTOS[pi].caption) fig.appendChild(cap);
      fig.addEventListener("click", () => openLightbox(pi));
      grid.appendChild(fig);
    });
    block.appendChild(grid);
    if (gi === JOURNEY.length - 1) {
      block.insertAdjacentHTML("beforeend", `<p class="bridge reveal">好啦，接下來換大家講話了 👇</p>`);
    }
    tl.appendChild(block);
  });
}

/* ---------- letters ---------- */
let page = 0;
const pages = Math.ceil(MESSAGES.length / PER_PAGE);

function renderLetters(animate = true) {
  const box = $("#letters");
  const draw = () => {
    box.innerHTML = "";
    const start = page * PER_PAGE;
    MESSAGES.slice(start, start + PER_PAGE).forEach((m, k) => {
      const idx = start + k;
      const card = document.createElement("button");
      card.className = `card s${(idx % 6) + 1}`;
      card.style.setProperty("--r", ROTS[k] + "deg");
      card.setAttribute("aria-label", `閱讀第 ${idx + 1} 封信，來自 ${m.name}`);
      card.innerHTML = `
        <span class="card-num"><b>${pad(idx + 1)}</b> · 來自 ${m.name}</span>
        <p class="card-text"></p>
        <span class="card-foot"><span class="card-more">閱讀全文 →</span><span class="card-icon">${ICONS[idx % ICONS.length]}</span></span>`;
      $(".card-text", card).textContent = m.text.replace(/\n+/g, " ");
      card.addEventListener("click", () => openLetter(idx));
      box.appendChild(card);
    });
    $("#letters-group").textContent = `${pad(page + 1)} / ${pad(pages)}`;
    $("#letters-progress").textContent = `${pad(start + 1)}–${pad(Math.min(start + PER_PAGE, MESSAGES.length))} / ${MESSAGES.length}`;
    $("#letters-intro").hidden = page === pages - 1;
    $("#letters-intro").textContent = ["第一批來了～", "還有喔！別走 🙌", ""][page] ?? "";
    $("#prev-page").disabled = page === 0;
    const next = $("#next-page");
    next.textContent = page === pages - 1 ? "看完了 ↓" : "下一組 →";
    [...$("#pager-dots").children].forEach((d, i) => d.setAttribute("aria-selected", i === page));
    box.classList.remove("fade-out");
    box.classList.add("fade-in");
  };
  if (!animate) return draw();
  box.classList.remove("fade-in");
  box.classList.add("fade-out");
  setTimeout(draw, 250);
}

function goPage(p) {
  page = Math.max(0, Math.min(pages - 1, p));
  renderLetters();
  const top = $(".letters-bar").getBoundingClientRect().top + scrollY - 20;
  scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
}

function initLetters() {
  const dots = $("#pager-dots");
  for (let i = 0; i < pages; i++) {
    const b = document.createElement("button");
    b.textContent = pad(i + 1);
    b.setAttribute("role", "tab");
    b.addEventListener("click", () => goPage(i));
    dots.appendChild(b);
  }
  $("#prev-page").addEventListener("click", () => goPage(page - 1));
  $("#next-page").addEventListener("click", () => {
    if (page === pages - 1) $("#finale").scrollIntoView({ behavior: "smooth" });
    else goPage(page + 1);
  });
  renderLetters(false);
}

/* ---------- modal ---------- */
let current = 0;
let lastFocus = null;

function openLetter(i) {
  current = i;
  const m = MESSAGES[i];
  $("#modal-num").textContent = `${pad(i + 1)} / ${MESSAGES.length} · 給羅潔的信`;
  const body = $("#modal-body");
  body.innerHTML = "";
  m.text.split(/\n+/).forEach((t) => { const p = document.createElement("p"); p.textContent = t; body.appendChild(p); });
  $("#modal-from").textContent = `— ${m.name}`;
  $("#modal-prev").disabled = i === 0;
  $("#modal-next").disabled = i === MESSAGES.length - 1;
  showLayer($("#modal"));
  $(".modal-sheet").scrollTop = 0;
}
$("#modal-prev").addEventListener("click", () => openLetter(current - 1));
$("#modal-next").addEventListener("click", () => openLetter(current + 1));
$("#modal-close").addEventListener("click", () => hideLayer($("#modal")));
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") hideLayer($("#modal")); });

/* ---------- lightbox ---------- */
function openLightbox(i) {
  const media = $("#lightbox-media");
  media.innerHTML = "";
  const ph = photoMedia(i);
  ph.className = "";
  const img = ph.querySelector("img");
  if (img) img.loading = "eager";
  media.appendChild(ph);
  $("#lightbox-caption").textContent = PHOTOS[i].caption;
  showLayer($("#lightbox"));
}
$("#lightbox-close").addEventListener("click", () => hideLayer($("#lightbox")));
$("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox" || e.target.closest(".lightbox-media")) hideLayer($("#lightbox")); });

function showLayer(el) {
  lastFocus = document.activeElement;
  el.hidden = false;
  document.body.style.overflow = "hidden";
  $(".close", el).focus({ preventScroll: true });
}
function hideLayer(el) {
  el.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
document.addEventListener("keydown", (e) => {
  const modalOpen = !$("#modal").hidden;
  if (e.key === "Escape") { hideLayer(modalOpen ? $("#modal") : $("#lightbox")); }
  if (modalOpen && e.key === "ArrowRight" && current < MESSAGES.length - 1) openLetter(current + 1);
  if (modalOpen && e.key === "ArrowLeft" && current > 0) openLetter(current - 1);
});

/* ---------- finale ---------- */
function playFinale() {
  const fin = $("#finale");
  if (fin.classList.contains("play")) return;
  fin.classList.add("play");
  if (reduceMotion) return;
  const layer = $("#fall-layer");
  const COLORS = ["#F3E8D5", "#F2B84B", "#F08A7E", "#FFFFFF", "#7FB7A4", "#E8A66B"];
  for (let i = 0; i < 60; i++) {
    const s = document.createElement("span");
    s.className = i % 4 === 0 ? "star" : "confetti";
    if (i % 4 === 0) s.textContent = ["★", "♡", "✦"][i % 3];
    else s.style.background = COLORS[i % COLORS.length];
    if (i % 4 === 0) s.style.color = COLORS[(i + 1) % COLORS.length];
    s.style.left = 4 + Math.random() * 92 + "%";
    s.style.fontSize = 12 + Math.random() * 16 + "px";
    s.style.setProperty("--delay", 0.6 + Math.random() * 4 + "s");
    s.style.setProperty("--dur", 4 + Math.random() * 4 + "s");
    s.style.setProperty("--sway", (Math.random() * 80 - 40) + "px");
    s.style.setProperty("--stop", 60 + Math.random() * 35 + "vh");
    s.style.setProperty("--spin", (Math.random() * 1080 - 540) + "deg");
    layer.appendChild(s);
  }
}
$("#read-again").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- scroll observers ---------- */
function initObservers() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      if (el.id === "finale") playFinale();
      else el.classList.add("in");
      io.unobserve(el);
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal, .photo, #finale").forEach((el) => io.observe(el));

  const topBtn = $("#to-top");
  addEventListener("scroll", () => topBtn.classList.toggle("show", scrollY > innerHeight * 1.2), { passive: true });
  topBtn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- boot ---------- */
document.querySelectorAll(".msg-count").forEach((el) => (el.textContent = MESSAGES.length));
initEnvelope();
initJourney();
initLetters();
initObservers();
