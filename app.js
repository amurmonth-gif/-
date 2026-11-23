/* =========================================================
   البيانات: الأسئلة والخيارات — الترتيب الحرفي كما هو مطلوب
   مؤشر الإجابة الصحيحة (correct) يطابق نموذج الإجابة حرفياً
   ========================================================= */
const QUESTIONS = [
  {
    q: "ما اسم أول موقع عُماني أُدرج في قائمة التراث العالمي لليونسكو؟",
    options: ["قلعة بهلاء", "أرض اللبان", "مواقع بات والخطم والعين", "الأفلاج"],
    correct: 0
  },
  {
    q: "في أي ولاية تقع محمية السلاحف برأس الجنز؟",
    options: ["صور", "قريات", "الدقم", "مصيرة"],
    correct: 0
  },
  {
    q: "ما اسم الطريق البحري الذي يفصل شبه جزيرة مسندم عن بقية عُمان ويمر عبره جزء مهم من تجارة النفط العالمية؟",
    options: ["باب المندب", "مضيق هرمز", "قناة السويس", "مضيق ملقا"],
    correct: 1
  },
  {
    q: "أي محافظة عُمانية تشتهر بأشجار اللبان ومواقع تجارة اللبان القديمة؟",
    options: ["الداخلية", "ظفار", "مسندم", "شمال الشرقية"],
    correct: 1
  },
  {
    q: "ما اسم نظام توزيع المياه التقليدي الذي يعتمد على قنوات مائية؟",
    options: ["الفلج", "السد", "الخزان", "الخور"],
    correct: 0
  },
  {
    q: "أي موقع عُماني يشتهر بآثاره الأثرية التي تعود إلى العصر البرونزي؟",
    options: ["بات", "مطرح", "رأس الحد", "وادي شاب"],
    correct: 0
  },
  {
    q: "ما اسم البحر الذي تطل عليه السواحل الجنوبية والشرقية لسلطنة عُمان؟",
    options: ["البحر المتوسط", "بحر العرب", "البحر الأسود", "بحر قزوين"],
    correct: 1
  },
  {
    q: "في أي ولاية يقع حصن جبرين؟",
    options: ["بهلاء", "نزوى", "إبراء", "الرستاق"],
    correct: 0
  },
  {
    q: "ما الظاهرة المناخية التي تجعل محافظة ظفار وجهة سياحية صيفية؟",
    options: ["الأمطار الموسمية والضباب", "تساقط الثلوج", "العواصف الرملية الدائمة", "ارتفاع درجات الحرارة الشديد"],
    correct: 0
  },
  {
    q: "ما اسم السفينة العُمانية التي زارت مدينة نيويورك عام 1840؟",
    options: ["فتح الخير", "سلطانة", "شباب عُمان", "صحار"],
    correct: 1
  },
  {
    q: "أي من الآتي يُعد من أشهر المنتجات العُمانية التقليدية المرتبطة بمحافظة ظفار؟",
    options: ["اللبان", "الزعفران", "الكاكاو", "القطن"],
    correct: 0
  },
  {
    q: "ما اسم المحمية الطبيعية المعروفة بوجود المها العربي في وسط عُمان؟",
    options: ["محمية السلاحف", "محمية المها العربي", "محمية الجبل الأخضر", "محمية جزر الديمانيات"],
    correct: 1
  },
  {
    q: "أي ولاية عُمانية تشتهر بصناعة السفن الخشبية التقليدية؟",
    options: ["صور", "عبري", "نزوى", "خصب"],
    correct: 0
  },
  {
    q: "ما اسم الجبل الذي يُعد أعلى قمة في سلطنة عُمان؟",
    options: ["جبل سمحان", "جبل شمس", "جبل القمر", "جبل الكور"],
    correct: 1
  },
  {
    q: "ما الهدف الأساسي من رؤية عُمان 2040؟",
    options: ["الاعتماد على مصدر دخل واحد", "تحقيق تنمية مستدامة واقتصاد متنوع", "إيقاف الأنشطة السياحية", "تقليل فرص التعليم"],
    correct: 1
  }
];

const LETTERS = ["A", "B", "C", "D"];
const CIRC = 2 * Math.PI * 58; // 364.42

/* ===== عناصر الواجهة ===== */
const el = {
  gameScreen: document.getElementById("gameScreen"),
  resultScreen: document.getElementById("resultScreen"),
  counter: document.getElementById("counter"),
  scorePill: document.getElementById("scorePill"),
  bar: document.getElementById("bar"),
  falajPct: document.getElementById("falajPct"),
  qwrap: document.getElementById("qwrap"),
  qIndex: document.getElementById("qIndex"),
  questionText: document.getElementById("questionText"),
  optionsBox: document.getElementById("optionsBox"),
  feedback: document.getElementById("feedback"),
  fbIcon: document.getElementById("fbIcon"),
  fbTitle: document.getElementById("fbTitle"),
  fbSub: document.getElementById("fbSub"),
  nextBtn: document.getElementById("nextBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  gaugeFill: document.getElementById("gaugeFill"),
  pct: document.getElementById("pct"),
  resultTitle: document.getElementById("resultTitle"),
  resultSub: document.getElementById("resultSub"),
  okCount: document.getElementById("okCount"),
  noCount: document.getElementById("noCount"),
  totalCount: document.getElementById("totalCount"),
  reviewList: document.getElementById("reviewList"),
  confetti: document.getElementById("confetti")
};

/* ===== حالة اللعبة ===== */
let current = 0;
let score = 0;
let locked = false;
const answers = [];

/* ===== بدء / إعادة ===== */
function startGame(){
  current = 0;
  score = 0;
  locked = false;
  answers.length = 0;
  el.resultScreen.classList.add("hidden");
  el.gameScreen.classList.remove("hidden");
  el.confetti.innerHTML = "";
  el.optionsBox.innerHTML = "";
  renderQuestion();
}

function renderQuestion(){
  const item = QUESTIONS[current];
  locked = false;

  el.counter.textContent = "السؤال " + (current + 1) + " من " + QUESTIONS.length;
  el.scorePill.textContent = score;
  el.qIndex.textContent = "سؤال " + (current + 1);
  el.questionText.textContent = item.q;
  setBar(current);

  el.feedback.className = "feedback";
  el.feedback.classList.remove("show");
  el.nextBtn.classList.add("hidden");
  el.nextBtn.textContent = (current === QUESTIONS.length - 1) ? "عرض النتيجة ✓" : "التالي ←";

  /* إعادة تشغيل حركة الدخول */
  el.qwrap.style.animation = "none";
  void el.qwrap.offsetWidth;
  el.qwrap.style.animation = "";

  el.optionsBox.innerHTML = "";
  item.options.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt";
    btn.dataset.index = i;
    btn.style.animationDelay = (i * 70) + "ms";
    btn.innerHTML =
      '<span class="letter">' + LETTERS[i] + '</span>' +
      '<span class="txt"></span>' +
      '<span class="mark"></span>';
    btn.querySelector(".txt").textContent = text;
    btn.addEventListener("click", () => choose(i));
    el.optionsBox.appendChild(btn);
  });
}

function setBar(n){
  const p = Math.round(n / QUESTIONS.length * 100);
  el.bar.style.width = p + "%";
  el.falajPct.textContent = p + "%";
}

/* ===== اختيار إجابة ===== */
function choose(i){
  if (locked) return;
  locked = true;

  const item = QUESTIONS[current];
  const isRight = (i === item.correct);
  const buttons = Array.from(el.optionsBox.querySelectorAll(".opt"));

  buttons.forEach((btn, idx) => {
    btn.classList.add("locked");
    btn.disabled = true;
    btn.style.animation = "none";
    if (idx === item.correct){
      btn.classList.add("correct");
      btn.querySelector(".mark").textContent = "✓";
    } else if (idx === i){
      btn.classList.add("wrong");
      btn.querySelector(".mark").textContent = "✗";
    } else {
      btn.classList.add("dim");
    }
  });

  answers[current] = { picked: i, correct: isRight };

  if (isRight){
    score++;
    el.feedback.className = "feedback ok show";
    el.fbIcon.textContent = "✓";
    el.fbTitle.textContent = "إجابة صحيحة!";
    el.fbSub.innerHTML = "أحسنت — <b>" + LETTERS[item.correct] + "</b> · " + item.options[item.correct];
  } else {
    el.feedback.className = "feedback no show";
    el.fbIcon.textContent = "✕";
    el.fbTitle.textContent = "إجابة خاطئة";
    el.fbSub.innerHTML = "الصحيح هو <b>" + LETTERS[item.correct] + "</b> · " + item.options[item.correct];
  }

  el.scorePill.textContent = score;
  setBar(current + 1);
  el.nextBtn.classList.remove("hidden");
}

/* ===== التالي ===== */
el.nextBtn.addEventListener("click", () => {
  if (current < QUESTIONS.length - 1){
    current++;
    renderQuestion();
  } else {
    showResult();
  }
});

/* ===== النتيجة ===== */
function showResult(){
  el.gameScreen.classList.add("hidden");
  el.resultScreen.classList.remove("hidden");

  const total = QUESTIONS.length;
  const pct = Math.round(score / total * 100);

  el.pct.textContent = pct + "%";
  el.okCount.textContent = score;
  el.noCount.textContent = total - score;
  el.totalCount.textContent = total;

  el.gaugeFill.style.strokeDashoffset = CIRC;
  void el.gaugeFill.offsetWidth;
  el.gaugeFill.style.strokeDashoffset = (CIRC * (1 - pct / 100)).toFixed(2);

  let title, sub;
  if (pct === 100){ title = "علامة كاملة 🏆"; sub = "أنت خبير في التراث والجغرافيا العُمانية، ما شاء الله."; }
  else if (pct >= 80){ title = "أداء ممتاز 🌟"; sub = "معلوماتك العُمانية قوية جداً، وبقيت خطوة للكمال."; }
  else if (pct >= 60){ title = "جيد جداً 👏"; sub = "أساس متين، راجع بعض الأسئلة لتصل إلى الامتياز."; }
  else if (pct >= 40){ title = "بداية طيبة 🙂"; sub = "عُمان بلد غني بالتفاصيل — جرّب مرة أخرى."; }
  else { title = "تحتاج مراجعة 📚"; sub = "لا تقلق، أعد اللعب وستتحسن نتيجتك بسرعة."; }

  el.resultTitle.textContent = title;
  el.resultSub.textContent = sub;

  el.reviewList.innerHTML = "";
  QUESTIONS.forEach((item, idx) => {
    const a = answers[idx] || { picked: null, correct: false };
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML =
      '<span class="s">' + (a.correct ? "✅" : "❌") + '</span>' +
      '<span class="q"></span>' +
      '<span class="a"></span>';
    row.querySelector(".q").textContent = (idx + 1) + ". " + item.q;
    row.querySelector(".a").textContent = LETTERS[item.correct] + " · " + item.options[item.correct];
    el.reviewList.appendChild(row);
  });

  burstConfetti(pct >= 60 ? 90 : 45);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===== قصاصات الاحتفال ===== */
function burstConfetti(n){
  const layer = el.confetti;
  layer.innerHTML = "";
  const colors = ["#E4B653", "#F6E3B0", "#28D3A8", "#7CF5D2", "#FF5C5C", "#8FA8FF"];
  for (let i = 0; i < n; i++){
    const p = document.createElement("i");
    const w = 5 + Math.random() * 7;
    p.style.left = (Math.random() * 100) + "vw";
    p.style.width = w + "px";
    p.style.height = (w * (1.2 + Math.random() * 1.4)) + "px";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius = Math.random() > .55 ? "50%" : "2px";
    p.style.setProperty("--dx", ((Math.random() - .5) * 260).toFixed(0) + "px");
    p.style.animationDuration = (2.4 + Math.random() * 1.8).toFixed(2) + "s";
    p.style.animationDelay = (Math.random() * 0.8).toFixed(2) + "s";
    p.style.opacity = "0";
    layer.appendChild(p);
  }
  setTimeout(() => { layer.innerHTML = ""; }, 5600);
}

/* ===== إعادة اللعب ===== */
el.playAgainBtn.addEventListener("click", startGame);

/* ===== انطلاق ===== */
startGame();
