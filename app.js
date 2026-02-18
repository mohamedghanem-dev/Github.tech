// ===========================
// GitMastery v2 — App Logic
// ===========================

let currentUser = localStorage.getItem('gm_user') || null;
let completed = JSON.parse(localStorage.getItem('gm_done') || '[]');
let currentSection = null;
let currentLesson = 0;
let isAdmin = false;
let activeFilter = 'all';
const PASS = 'gitmaster2025';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderNews();
  updateUserUI();
  startTerminal();
  createParticles();

  // saved theme
  if (localStorage.getItem('gm_theme') === 'light') {
    document.documentElement.setAttribute('data-theme','light');
    document.querySelector('.theme-toggle').textContent = '☀️';
  }
});

// ===== PARTICLES =====
function createParticles() {
  const wrap = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random()*100}%;
      animation-duration: ${6 + Math.random()*10}s;
      animation-delay: ${-Math.random()*10}s;
      width: ${1 + Math.random()*2}px;
      height: ${1 + Math.random()*2}px;
      opacity: ${.2 + Math.random()*.4};
    `;
    wrap.appendChild(p);
  }
}

// ===== TERMINAL =====
const cmds = [
  { cmd: 'git init', outs: [['out','Initialized empty Git repository']] },
  { cmd: 'git add .', outs: [] },
  { cmd: 'git commit -m "first commit"', outs: [['out','[main a1b2c3d] first commit'],['out','1 file changed, 1 insertion(+)']] },
  { cmd: 'git push origin main', outs: [['out','Enumerating objects: 3, done.'],['out','Writing objects: 100% ✓'],['info','Branch main set up to track origin/main']] },
  { cmd: 'git checkout -b feature/login', outs: [['out',"Switched to a new branch 'feature/login'"]] },
  { cmd: 'git log --oneline', outs: [['out','a1b2c3d feat: add homepage'],['out','b2c3d4e init: project setup']] },
  { cmd: 'git status', outs: [['out','On branch main'],['out','nothing to commit, working tree clean']] },
];
let ci = 0;
async function startTerminal() {
  const el = document.getElementById('typedCmd');
  const out = document.getElementById('termOut');
  async function next() {
    const c = cmds[ci % cmds.length]; ci++;
    el.textContent = '';
    for (const ch of c.cmd) { el.textContent += ch; await sleep(55); }
    await sleep(350);
    out.innerHTML = '';
    for (const [type, text] of c.outs) {
      const d = document.createElement('span');
      d.className = `t-${type}`; d.textContent = text;
      out.appendChild(d); await sleep(120);
    }
    await sleep(2000);
    out.innerHTML = '';
    next();
  }
  next();
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ===== CARDS =====
function renderCards() {
  const g = document.getElementById('cardsGrid');
  g.innerHTML = SECTIONS.map(s => `
    <div class="lesson-card ${completed.includes(s.id)?'done':''}" onclick="openLesson(${s.id})">
      <div class="card-num">القسم ${String(s.id).padStart(2,'0')}</div>
      <div class="card-ico">${s.icon}</div>
      <div class="card-ttl">${s.title}</div>
      <div class="card-dsc">${s.desc}</div>
      ${completed.includes(s.id) ? '<div class="card-done">✅ مكتمل</div>' : ''}
    </div>
  `).join('');
}

// ===== OPEN LESSON =====
function openLesson(id) {
  if (!currentUser) { openNameModal(); return; }
  currentSection = SECTIONS.find(s => s.id === id);
  currentLesson = 0;
  renderLesson();
  document.getElementById('lessonModal').classList.remove('hidden');
}

function renderLesson() {
  const s = currentSection;
  const l = s.lessons[currentLesson];
  const isDone = completed.includes(s.id);

  const tabs = s.lessons.map((les, i) => `
    <button class="lesson-tab ${i === currentLesson ? 'active' : ''}" onclick="switchLesson(${i})">
      ${i + 1}. ${les.title}
    </button>
  `).join('');

  document.getElementById('lessonBody').innerHTML = `
    <div class="lesson-hdr">
      <div class="l-icon">${s.icon}</div>
      <h2>${s.title}</h2>
      <p>${s.desc}</p>
    </div>
    <div class="lesson-nav">${tabs}</div>
    <div class="lesson-content-area" id="lessonContent">${l.content}</div>
  `;

  const btn = document.getElementById('doneBtn');
  btn.textContent = isDone ? '✅ أكملت هذا القسم بالفعل' : '✅ أكملت هذا القسم — التالي!';
  btn.disabled = false;
  btn.style.opacity = '1';
}

function switchLesson(i) {
  currentLesson = i;
  const s = currentSection;
  const l = s.lessons[i];
  document.getElementById('lessonContent').innerHTML = l.content;
  document.querySelectorAll('.lesson-tab').forEach((t, idx) => {
    t.classList.toggle('active', idx === i);
  });
}

function markDone() {
  if (!completed.includes(currentSection.id)) {
    completed.push(currentSection.id);
    localStorage.setItem('gm_done', JSON.stringify(completed));
    renderCards();
    updateProgress();
  }
  closeModal('lessonModal');

  if (completed.length === 10) {
    setTimeout(() => {
      if (confirm('🎉 مبروك! أكملت كل الأقسام! عايز شهادتك؟')) showCert();
    }, 400);
  }
}

// ===== USER =====
function openNameModal() {
  document.getElementById('nameModal').classList.remove('hidden');
  setTimeout(() => document.getElementById('nameInput').focus(), 100);
}
function saveName() {
  const v = document.getElementById('nameInput').value.trim();
  if (!v || v.length < 2) { alert('من فضلك اكتب اسمك الكامل'); return; }
  currentUser = v;
  localStorage.setItem('gm_user', v);
  closeModal('nameModal');
  updateUserUI();
}

function updateUserUI() {
  const chip = document.getElementById('userChip');
  const pb = document.getElementById('progressBar');
  if (currentUser) {
    chip.textContent = '👤 ' + currentUser.split(' ')[0];
    chip.classList.remove('hidden');
    pb.classList.remove('hidden');
    document.getElementById('progressName').textContent = 'أهلاً ' + currentUser.split(' ')[0] + '!';
    updateProgress();
  } else {
    chip.classList.add('hidden');
    pb.classList.add('hidden');
  }
}

function updateProgress() {
  const pct = (completed.length / 10) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = completed.length + ' / 10 أقسام' + (pct === 100 ? ' 🎉' : '');
}

// ===== NEWS =====
const catEmo = { github: '🐙', ai: '🤖', dev: '💻' };
const catLabel = { github: 'GitHub', ai: 'ذكاء اصطناعي', dev: 'برمجة' };

function renderNews() {
  const g = document.getElementById('newsGrid');
  const list = activeFilter === 'all' ? articles : articles.filter(a => a.category === activeFilter);
  if (!list.length) {
    g.innerHTML = '<div class="no-news"><span>📰</span>لا توجد مقالات في هذا القسم بعد</div>';
    return;
  }
  g.innerHTML = list.map(a => `
    <div class="news-card">
      ${a.image
        ? `<img class="news-img" src="${a.image}" alt="${a.title}" onerror="this.style.display='none'">`
        : `<div class="news-img-placeholder">${catEmo[a.category]||'📰'}</div>`}
      <div class="news-body">
        <span class="cat-badge cat-${a.category}">${catLabel[a.category]||a.category}</span>
        <div class="news-ttl">${a.title}</div>
        <div class="news-exc">${a.body.substring(0,130)}...</div>
        <div class="news-meta">
          <span>📅 ${a.date} · ⏱ ${a.readTime}</span>
          <button class="del-btn" id="del-${a.id}" onclick="deleteArt(${a.id})" style="${isAdmin?'display:block':'display:none'}">🗑️ حذف</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterNews(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderNews();
}

// ===== ADMIN =====
function openAdmin() {
  isAdmin = false;
  document.getElementById('adminLoginBox').classList.remove('hidden');
  document.getElementById('adminPanel').classList.add('hidden');
  document.getElementById('adminPass').value = '';
  document.getElementById('adminModal').classList.remove('hidden');
}
function checkAdmin() {
  if (document.getElementById('adminPass').value === PASS) {
    isAdmin = true;
    document.getElementById('adminLoginBox').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('hidden');
    renderAdminList();
    renderNews();
  } else { alert('كلمة سر خاطئة!'); }
}
function publishArticle() {
  const t = document.getElementById('aTitle').value.trim();
  const img = document.getElementById('aImg').value.trim();
  const cat = document.getElementById('aCat').value;
  const b = document.getElementById('aBody').value.trim();
  if (!t || !b) { alert('العنوان والمحتوى مطلوبين'); return; }
  const words = b.split(' ').length;
  const art = {
    id: Date.now(), title: t, image: img, category: cat, body: b,
    date: new Date().toISOString().split('T')[0],
    readTime: Math.max(1, Math.ceil(words / 200)) + ' دقيقة'
  };
  articles.unshift(art);
  localStorage.setItem('gm_articles', JSON.stringify(articles));
  document.getElementById('aTitle').value = '';
  document.getElementById('aImg').value = '';
  document.getElementById('aBody').value = '';
  renderNews(); renderAdminList();
  alert('✅ تم نشر المقال!');
}
function deleteArt(id) {
  if (!confirm('هتحذف المقال ده؟')) return;
  articles = articles.filter(a => a.id !== id);
  localStorage.setItem('gm_articles', JSON.stringify(articles));
  renderNews(); renderAdminList();
}
function renderAdminList() {
  document.getElementById('adminListEl').innerHTML = articles.map(a => `
    <div class="admin-list-item">
      <span>${a.title.substring(0,45)}...</span>
      <button onclick="deleteArt(${a.id})" style="background:rgba(248,113,113,.1);color:#f87171;border:1px solid rgba(248,113,113,.25);padding:4px 10px;border-radius:6px;cursor:pointer;font-size:.78rem">حذف</button>
    </div>
  `).join('') || '<p style="color:var(--muted);text-align:center">لا يوجد مقالات</p>';
}

// ===== CERTIFICATE =====
function showCert() {
  document.getElementById('certModal').classList.remove('hidden');
  drawCert();
}
function drawCert() {
  const cv = document.getElementById('certCanvas');
  const ctx = cv.getContext('2d');
  const W = cv.width, H = cv.height;

  // bg
  ctx.fillStyle = '#060b18';
  ctx.fillRect(0, 0, W, H);

  // grid
  ctx.strokeStyle = 'rgba(56,189,248,0.04)';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 50) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y < H; y += 50) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  // outer border
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  roundRect(ctx, 16, 16, W-32, H-32, 20);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(56,189,248,0.2)';
  ctx.lineWidth = 1;
  roundRect(ctx, 26, 26, W-52, H-52, 16);
  ctx.stroke();

  // glow circles
  const grd = ctx.createRadialGradient(W/2,80,10,W/2,80,300);
  grd.addColorStop(0,'rgba(56,189,248,0.08)');
  grd.addColorStop(1,'transparent');
  ctx.fillStyle = grd;
  ctx.fillRect(0,0,W,H);

  // logo
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 22px Tajawal, Arial';
  ctx.textAlign = 'center';
  ctx.fillText('⬡ GitMastery', W/2, 76);

  ctx.fillStyle = '#64748b';
  ctx.font = '15px Tajawal, Arial';
  ctx.fillText('شهادة إتمام دورة', W/2, 106);

  // divider
  drawDivider(ctx, W, 128);

  // congratulations
  ctx.fillStyle = '#94a3b8';
  ctx.font = '16px Tajawal, Arial';
  ctx.fillText('هذه الشهادة تُمنح إلى', W/2, 178);

  // name
  const nGrad = ctx.createLinearGradient(W*.2, 0, W*.8, 0);
  nGrad.addColorStop(0, '#38bdf8');
  nGrad.addColorStop(1, '#818cf8');
  ctx.fillStyle = nGrad;
  ctx.font = 'bold 52px Tajawal, Arial';
  ctx.fillText(currentUser || 'المتدرب', W/2, 252);

  // course
  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 18px Tajawal, Arial';
  ctx.fillText('لإتمامه بنجاح دورة: إتقان GitHub من الصفر للاحتراف', W/2, 298);

  ctx.fillStyle = '#64748b';
  ctx.font = '13px Tajawal, Arial';
  ctx.fillText('10 أقسام تعليمية شاملة  •  +60 مثال كود عملي  •  مشاريع تطبيقية حقيقية', W/2, 328);

  // divider 2
  drawDivider(ctx, W, 360);

  // date + stars
  const d = new Date().toLocaleDateString('ar-EG', {year:'numeric',month:'long',day:'numeric'});
  ctx.fillStyle = '#94a3b8';
  ctx.font = '14px Tajawal, Arial';
  ctx.fillText('تاريخ الإصدار: ' + d, W/2, 402);

  ctx.font = '22px Arial';
  ctx.fillText('⭐⭐⭐⭐⭐', W/2, 446);

  ctx.fillStyle = '#1e293b';
  ctx.font = '11px Tajawal, Arial';
  ctx.fillText('gitmastery.dev  •  منصة تعليمية عربية مجانية', W/2, 560);
}
function drawDivider(ctx, W, y) {
  const g = ctx.createLinearGradient(160, 0, W-160, 0);
  g.addColorStop(0,'transparent'); g.addColorStop(.5,'#38bdf8'); g.addColorStop(1,'transparent');
  ctx.strokeStyle = g; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(160,y); ctx.lineTo(W-160,y); ctx.stroke();
}
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}
function downloadCert() {
  const a = document.createElement('a');
  a.download = 'gitmastery-' + (currentUser||'cert').replace(/\s/g,'-') + '.png';
  a.href = document.getElementById('certCanvas').toDataURL();
  a.click();
}

// ===== THEME =====
function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? '' : 'light');
  document.querySelector('.theme-toggle').textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('gm_theme', isLight ? 'dark' : 'light');
}

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

// ===== UTILS =====
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
function openNameModal() {
  document.getElementById('nameModal').classList.remove('hidden');
  setTimeout(() => document.getElementById('nameInput').focus(), 100);
}
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}
function closeIfOverlay(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 20
    ? (document.documentElement.getAttribute('data-theme') === 'light'
        ? 'rgba(241,245,253,.98)'
        : 'rgba(6,11,24,.98)')
    : '';
});
