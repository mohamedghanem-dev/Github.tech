// ============================================================
// GitMastery — المحتوى التعليمي الكامل
// ============================================================

const SECTIONS = [

  // ==================== القسم 1 ====================
  {
    id: 1, icon: "🌱",
    title: "مقدمة — Git & GitHub",
    desc: "افهم الفرق بين Git وGitHub وازاي تجهّز بيئتك وتبدأ رحلتك",
    lessons: [
      {
        title: "ما هو Git؟",
        content: `
<p>Git هو <strong>نظام التحكم في الإصدارات (Version Control System)</strong> — بيحفظ كل تعديل بتعمله في الكود بتاعك مع تاريخه ومين عمله.</p>

<p>تخيل إنك بتكتب رواية طويلة. كل يوم بتحفظ نسخة جديدة:</p>
<div class="code-block">📄 رواية_نسخة1.docx
📄 رواية_نسخة2.docx
📄 رواية_نسخة_نهائية.docx
📄 رواية_نسخة_نهائية_فعلاً.docx
📄 رواية_نهائي_آخر_تعديل.docx</div>

<p>ده بالظبط اللي بيحصل مع المبرمجين من غير Git. مع Git، بتحفظ كل تعديل برسالة واضحة وتقدر ترجع لأي لحظة في التاريخ.</p>

<div class="info-box">
<strong>🎯 المشاكل اللي Git بيحلها:</strong>
<ul>
<li>مش هتحتاج تعمل نسخ زي project_v1, project_v2, project_FINAL</li>
<li>تقدر ترجع لأي نقطة في التاريخ لو حاجة اتكسرت</li>
<li>تشتغل مع فريق كامل بدون تضارب في الكود</li>
<li>تعرف مين عمل إيه ومتى بالظبط</li>
</ul>
</div>`
      },
      {
        title: "ما هو GitHub؟",
        content: `
<p>GitHub هو <strong>موقع على الإنترنت</strong> بيستضيف مشاريعك Git. يعني Git بيشتغل على جهازك المحلي، وGitHub هو السيرفر اللي بيحفظ الكود على الإنترنت.</p>

<div class="compare-box">
<div class="compare-item">
  <div class="compare-icon">⚙️</div>
  <strong>Git</strong>
  <p>أداة محلية على جهازك — بتحفظ التاريخ وبتدير التعديلات</p>
</div>
<div class="compare-arrow">←</div>
<div class="compare-item">
  <div class="compare-icon">☁️</div>
  <strong>GitHub</strong>
  <p>سيرفر على الإنترنت — بيستضيف الكود وبيخليك تشارك مع الناس</p>
</div>
</div>

<p>GitHub مش بس مكان لحفظ الكود — ده منصة متكاملة فيها:</p>
<div class="feature-list">
<span>📁 استضافة الكود</span>
<span>🤝 العمل الجماعي</span>
<span>🐛 تتبع المشاكل (Issues)</span>
<span>🔍 مراجعة الكود (Code Review)</span>
<span>⚙️ أتمتة المهام (Actions)</span>
<span>🌐 استضافة المواقع (Pages)</span>
</div>`
      },
      {
        title: "تثبيت Git على جهازك",
        content: `
<p>أول خطوة هي تثبيت Git على جهازك:</p>

<div class="os-tabs">
<div class="os-block">
<strong>🪟 Windows:</strong>
<p>نزّل Git من الموقع الرسمي: <code>git-scm.com</code> وثبّته عادي. هيتثبت معاه Git Bash تلقائياً.</p>
</div>
<div class="os-block">
<strong>🍎 Mac:</strong>
</div>
</div>
<div class="code-block">brew install git</div>
<div class="os-block">
<strong>🐧 Linux (Ubuntu/Debian):</strong>
</div>
<div class="code-block">sudo apt update && sudo apt install git</div>

<p>بعد التثبيت، تأكد إنه اشتغل صح:</p>
<div class="code-block">git --version
<span class="out"># هيظهر: git version 2.xx.x</span></div>`
      },
      {
        title: "إعداد Git لأول مرة",
        content: `
<p>أول ما تنزّل Git، لازم تعرّفه بنفسك. ده بيظهر في كل commit بتعمله:</p>

<div class="code-block">git config --global user.name "Mohamed Ghanem"
git config --global user.email "mohamed@example.com"</div>

<p>بعدها تأكد إن الإعداد اتحفظ:</p>
<div class="code-block">git config --list
<span class="out">user.name=Mohamed Ghanem
user.email=mohamed@example.com</span></div>

<p>كمان ممكن تغيّر الـ editor اللي بيفتح لما تكتب رسائل الـ commits:</p>
<div class="code-block"><span class="cmt"># VS Code</span>
git config --global core.editor "code --wait"

<span class="cmt"># Vim</span>
git config --global core.editor "vim"</div>

<div class="tip-box">💡 <strong>نصيحة:</strong> استخدم نفس الإيميل اللي هتسجل بيه على GitHub عشان الـ commits بتاعتك تتربط بحسابك.</div>`
      },
      {
        title: "إنشاء حساب على GitHub",
        content: `
<p>روح <strong>github.com</strong> واعمل حساب جديد:</p>

<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>اضغط <strong>Sign up</strong> وادخل إيميلك</span></div>
<div class="step-item"><span class="step-n">2</span><span>اختار <strong>username</strong> مميز — ده هيكون جزء من رابطك على GitHub</span></div>
<div class="step-item"><span class="step-n">3</span><span>اتحقق من الإيميل</span></div>
<div class="step-item"><span class="step-n">4</span><span>اختار الخطة المجانية (Free)</span></div>
</div>

<div class="warn-box">⚠️ <strong>مهم:</strong> اختار username احترافي لأنه هيظهر في كل مشاريعك ولو حد بحث عنك. مثلاً <code>mohamedghanem</code> أحسن بكتير من <code>m_g_2000</code></div>

<p>بعد إنشاء الحساب، اربط Git المحلي بـ GitHub عن طريق SSH أو HTTPS. الأسهل للمبتدئين هو HTTPS:</p>
<div class="code-block"><span class="cmt"># لما تعمل push لأول مرة، هيطلب منك Username وPassword</span>
<span class="cmt"># أو تستخدم GitHub CLI للتسجيل التلقائي:</span>
gh auth login</div>`
      }
    ]
  },

  // ==================== القسم 2 ====================
  {
    id: 2, icon: "📁",
    title: "أول Repository",
    desc: "عمل أول مستودع وافهم دورة حياة الملفات في Git",
    lessons: [
      {
        title: "ما هو الـ Repository؟",
        content: `
<p>الـ <strong>Repository (Repo)</strong> هو مجلد مشروعك اللي بيتراقب بـ Git. فيه كل ملفات مشروعك + تاريخ كل تعديل اتعمل فيه.</p>

<p>جوّاه مجلد مخفي اسمه <code>.git</code> — ده اللي بيحفظ كل التاريخ. متحذفوش أبداً!</p>

<div class="code-block">my-project/
├── .git/          ← Git بيحفظ هنا كل التاريخ (متشيلوش!)
├── index.html
├── style.css
└── app.js</div>`
      },
      {
        title: "المراحل الثلاثة في Git",
        content: `
<p>كل ملف بيمر بـ 3 مراحل قبل ما يتحفظ نهائياً في Git:</p>

<div class="three-stages">
<div class="stage">
  <div class="stage-icon">📝</div>
  <strong>1. Working Directory</strong>
  <p>المجلد العادي بتاعك. أي تعديل بتعمله بيكون هنا أولاً.</p>
  <code>Untracked / Modified</code>
</div>
<div class="stage-arrow">→</div>
<div class="stage">
  <div class="stage-icon">📦</div>
  <strong>2. Staging Area</strong>
  <p>زي سلة التجهيز — بتختار إيه اللي عايز تحفظه.</p>
  <code>Staged (git add)</code>
</div>
<div class="stage-arrow">→</div>
<div class="stage">
  <div class="stage-icon">✅</div>
  <strong>3. Repository</strong>
  <p>التاريخ الرسمي للمشروع. بعد كل commit.</p>
  <code>Committed (git commit)</code>
</div>
</div>`
      },
      {
        title: "إنشاء Repo ومثال عملي كامل",
        content: `
<div class="code-block"><span class="cmt"># إنشاء مجلد جديد</span>
mkdir my-first-project
cd my-first-project

<span class="cmt"># تهيئة Git</span>
git init
<span class="out">Initialized empty Git repository in .../my-first-project/.git/</span>

<span class="cmt"># إنشاء ملف</span>
echo "&lt;h1&gt;Hello GitHub!&lt;/h1&gt;" > index.html

<span class="cmt"># شوف الحالة</span>
git status
<span class="out">Untracked files:
  index.html</span>

<span class="cmt"># أضف للـ Staging</span>
git add index.html

<span class="cmt"># شوف الحالة تاني</span>
git status
<span class="out">Changes to be committed:
  new file: index.html</span>

<span class="cmt"># عمل Commit</span>
git commit -m "feat: add index.html"
<span class="out">[main (root-commit) a1b2c3d] feat: add index.html
 1 file changed, 1 insertion(+)</span>

<span class="cmt"># شوف التاريخ</span>
git log --oneline
<span class="out">a1b2c3d feat: add index.html</span></div>

<div class="tip-box">💡 <strong>نصيحة:</strong> <code>git add .</code> بتضيف كل الملفات المعدّلة دفعة واحدة. استخدمها لما تكون واثق إنك عايز تحفظ كل حاجة.</div>`
      },
      {
        title: "قواعد كتابة رسائل الـ Commit",
        content: `
<p>الـ commit message المحترفة بتبدأ بنوع التعديل ثم وصف قصير:</p>

<div class="code-block"><span class="cmt"># ✅ أمثلة صح</span>
git commit -m "feat: add login page"
git commit -m "fix: fix button not working on mobile"
git commit -m "style: update navbar colors"
git commit -m "docs: update README with installation steps"
git commit -m "refactor: clean up authentication code"
git commit -m "chore: update dependencies"

<span class="cmt"># ❌ أمثلة غلط</span>
git commit -m "update"
git commit -m "fix bug"
git commit -m "aaaaaa"
git commit -m "done"</div>

<div class="types-grid">
<div class="type-item"><code>feat:</code> ميزة جديدة</div>
<div class="type-item"><code>fix:</code> إصلاح bug</div>
<div class="type-item"><code>style:</code> تغيير تصميم</div>
<div class="type-item"><code>docs:</code> تحديث توثيق</div>
<div class="type-item"><code>refactor:</code> تنظيف كود</div>
<div class="type-item"><code>chore:</code> مهام عامة</div>
</div>

<div class="tip-box">💡 <strong>قاعدة الـ Commit المثالي:</strong> كل commit يعمل حاجة واحدة فقط ويوصفها بوضوح. لو رسالتك فيها "و" — يمكن محتاج تقسّمها لـ commit اتنين!</div>`
      },
      {
        title: "أوامر Git الأساسية الكاملة",
        content: `
<div class="code-block"><span class="cmt"># ===== إنشاء وإعداد =====</span>
git init                    <span class="cmt"># تهيئة repo جديد</span>
git clone [url]             <span class="cmt"># نسخ repo من GitHub</span>

<span class="cmt"># ===== الحالة والتاريخ =====</span>
git status                  <span class="cmt"># حالة الملفات</span>
git log                     <span class="cmt"># تاريخ كامل</span>
git log --oneline           <span class="cmt"># تاريخ مختصر</span>
git log --oneline --graph   <span class="cmt"># تاريخ مع branches</span>
git diff                    <span class="cmt"># شوف التعديلات اللي لسه متحفظتش</span>
git diff --staged           <span class="cmt"># شوف التعديلات في الـ Staging</span>

<span class="cmt"># ===== حفظ التعديلات =====</span>
git add [file]              <span class="cmt"># إضافة ملف واحد</span>
git add .                   <span class="cmt"># إضافة كل الملفات</span>
git commit -m "message"     <span class="cmt"># عمل commit</span>
git commit -am "message"    <span class="cmt"># add + commit دفعة واحدة</span>

<span class="cmt"># ===== التراجع =====</span>
git restore [file]          <span class="cmt"># التراجع عن تعديل</span>
git restore --staged [file] <span class="cmt"># إزالة من الـ Staging</span>
git reset HEAD~1            <span class="cmt"># إلغاء آخر commit (محافظاً على التعديلات)</span>
git revert [hash]           <span class="cmt"># عكس commit بـ commit جديد</span></div>`
      }
    ]
  },

  // ==================== القسم 3 ====================
  {
    id: 3, icon: "🚀",
    title: "رفع HTML, CSS, JS",
    desc: "ارفع مشروعك الأول واحصل على رابط حي مجاناً من GitHub Pages",
    lessons: [
      {
        title: "إنشاء Repo على GitHub",
        content: `
<p>عندك طريقتين لإنشاء الـ Repo:</p>

<div class="method-tabs">
<div class="method">
<strong>🌐 الطريقة الأولى: من GitHub مباشرة</strong>
<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>سجّل دخول على <strong>github.com</strong></span></div>
<div class="step-item"><span class="step-n">2</span><span>اضغط على <strong>"+"</strong> في الزاوية اليمنى ثم <strong>"New repository"</strong></span></div>
<div class="step-item"><span class="step-n">3</span><span>اكتب اسم المشروع مثلاً: <code>my-portfolio</code></span></div>
<div class="step-item"><span class="step-n">4</span><span>اختار <strong>Public</strong> (مهم عشان GitHub Pages يشتغل مجاناً)</span></div>
<div class="step-item"><span class="step-n">5</span><span>اضغط <strong>"Create repository"</strong></span></div>
</div>
</div>
</div>`
      },
      {
        title: "رفع مشروعك على GitHub",
        content: `
<p>بعد إنشاء الـ Repo على GitHub، ارفع المشروع المحلي بتاعك:</p>

<div class="code-block"><span class="cmt"># لو عندك مشروع محلي موجود</span>
cd my-portfolio

<span class="cmt"># ربط المشروع بـ GitHub</span>
git remote add origin https://github.com/username/my-portfolio.git

<span class="cmt"># تغيير اسم الـ branch لـ main</span>
git branch -M main

<span class="cmt"># رفع الكود لأول مرة</span>
git push -u origin main

<span class="out">Enumerating objects: 5, done.
Writing objects: 100% (5/5), done.
Branch 'main' set up to track 'origin/main'.</span></div>

<p>بعد أول push، أي تعديل بعد كده بيكون أبسط:</p>
<div class="code-block">git add .
git commit -m "update: improve design"
git push
<span class="cmt"># كفاية كده من غير origin main!</span></div>

<div class="tip-box">💡 <strong>إيه معنى origin؟</strong> ده اسم مختصر للـ remote (السيرفر البعيد). بدل ما تكتب الـ URL الطويل كل مرة، بتقول <code>origin</code>.</div>`
      },
      {
        title: "تفعيل GitHub Pages",
        content: `
<p>GitHub Pages بيحوّل الـ Repo بتاعك لموقع حي مجاناً على الإنترنت!</p>

<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>افتح الـ Repo على GitHub</span></div>
<div class="step-item"><span class="step-n">2</span><span>اضغط على <strong>Settings</strong> في الـ tabs أعلى الصفحة</span></div>
<div class="step-item"><span class="step-n">3</span><span>من القايمة الجانبية اضغط <strong>Pages</strong></span></div>
<div class="step-item"><span class="step-n">4</span><span>في Source اختار <strong>Deploy from a branch</strong></span></div>
<div class="step-item"><span class="step-n">5</span><span>اختار <strong>main</strong> ثم <strong>/ (root)</strong></span></div>
<div class="step-item"><span class="step-n">6</span><span>اضغط <strong>Save</strong> وانتظر دقيقة</span></div>
</div>

<p>بعد التفعيل، موقعك هيكون متاح على:</p>
<div class="code-block">https://username.github.io/my-portfolio/</div>

<div class="info-box">
<strong>🔄 تحديث تلقائي!</strong>
<p>كل ما تعمل <code>git push</code>، GitHub Pages بيتحدث تلقائياً خلال دقيقة. مش محتاج تعمل أي حاجة تانية!</p>
</div>`
      },
      {
        title: "ملف .gitignore",
        content: `
<p>بعض الملفات والمجلدات مش محتاج ترفعها على GitHub — زي <code>node_modules</code> أو ملفات الـ secrets:</p>

<div class="code-block"><span class="cmt"># إنشاء ملف .gitignore</span>
touch .gitignore</div>

<p>وحط فيه:</p>
<div class="code-block"><span class="cmt"># Dependencies</span>
node_modules/

<span class="cmt"># Environment files (secrets!)</span>
.env
.env.local
.env.production

<span class="cmt"># Build output</span>
dist/
build/
.next/

<span class="cmt"># OS files</span>
.DS_Store
Thumbs.db

<span class="cmt"># Logs</span>
*.log
npm-debug.log*</div>

<div class="tip-box">💡 <strong>اختصار:</strong> موقع <strong>gitignore.io</strong> بيولّد لك ملف .gitignore مناسب لمشروعك تلقائياً — بس اكتب التقنيات اللي بتستخدمها.</div>`
      }
    ]
  },

  // ==================== القسم 4 ====================
  {
    id: 4, icon: "⚡",
    title: "رفع Next.js على Vercel",
    desc: "ارفع مشروع Next.js واحصل على رابط احترافي مجاناً مع SSL",
    lessons: [
      {
        title: "ليه Vercel مش GitHub Pages؟",
        content: `
<div class="compare-box">
<div class="compare-item">
  <div class="compare-icon">📄</div>
  <strong>GitHub Pages</strong>
  <p>مناسب لـ HTML/CSS/JS بس — Static sites فقط</p>
  <span class="badge-bad">❌ لا يدعم Next.js</span>
</div>
<div class="compare-arrow">vs</div>
<div class="compare-item">
  <div class="compare-icon">▲</div>
  <strong>Vercel</strong>
  <p>مصمم خصيصاً لـ Next.js — بيدعم SSR وAPI Routes</p>
  <span class="badge-good">✅ الخيار الأمثل</span>
</div>
</div>

<div class="feature-list">
<span>✅ مجاني للمشاريع الشخصية</span>
<span>✅ SSL تلقائي (HTTPS)</span>
<span>✅ CDN عالمي سريع</span>
<span>✅ Deploy تلقائي مع كل push</span>
<span>✅ Preview لكل PR</span>
<span>✅ Analytics مجاني</span>
</div>`
      },
      {
        title: "إعداد مشروع Next.js ورفعه",
        content: `
<div class="code-block"><span class="cmt"># إنشاء مشروع Next.js</span>
npx create-next-app@latest my-app

<span class="cmt"># الأسئلة اللي هتظهر:</span>
<span class="out">✔ Would you like to use TypeScript? › No
✔ Would you like to use ESLint? › Yes
✔ Would you like to use Tailwind CSS? › Yes
✔ Would you like to use App Router? › Yes</span>

cd my-app

<span class="cmt"># تجربة محلياً</span>
npm run dev
<span class="out">▲ Next.js 14 ready on http://localhost:3000</span>

<span class="cmt"># رفع على GitHub</span>
git init
git add .
git commit -m "init: next.js app with tailwind"
git remote add origin https://github.com/username/my-app.git
git branch -M main
git push -u origin main</div>`
      },
      {
        title: "ربط GitHub بـ Vercel",
        content: `
<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>روح <strong>vercel.com</strong> واضغط <strong>Sign Up</strong></span></div>
<div class="step-item"><span class="step-n">2</span><span>سجّل دخول بـ <strong>GitHub</strong> (الأسهل)</span></div>
<div class="step-item"><span class="step-n">3</span><span>اضغط <strong>"New Project"</strong></span></div>
<div class="step-item"><span class="step-n">4</span><span>اختار الـ Repo بتاعك من القايمة</span></div>
<div class="step-item"><span class="step-n">5</span><span>Vercel هيكتشف إنه Next.js تلقائياً ويضبط الإعدادات</span></div>
<div class="step-item"><span class="step-n">6</span><span>اضغط <strong>"Deploy"</strong> وانتظر دقيقتين</span></div>
</div>

<p>بعد الـ Deploy، موقعك على رابط زي:</p>
<div class="code-block">https://my-app-username.vercel.app</div>

<div class="info-box">
<strong>🔄 Deploy تلقائي!</strong>
<p>من النهارده، كل ما تعمل <code>git push</code>، Vercel هيشوف التعديلات ويعمل deploy جديد تلقائياً — حتى من غير ما تفتح Vercel!</p>
</div>`
      },
      {
        title: "المتغيرات البيئية على Vercel",
        content: `
<p>لو مشروعك محتاج API Keys أو بيانات سرية، متحطهاش في الكود مباشرة!</p>

<div class="code-block"><span class="cmt"># محلياً: اعمل ملف .env.local</span>
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=mongodb+srv://...
SECRET_KEY=your_super_secret_key</div>

<p>وعلى Vercel:</p>
<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>افتح مشروعك على Vercel</span></div>
<div class="step-item"><span class="step-n">2</span><span>اضغط <strong>Settings</strong></span></div>
<div class="step-item"><span class="step-n">3</span><span>اضغط <strong>Environment Variables</strong></span></div>
<div class="step-item"><span class="step-n">4</span><span>أضف كل متغير باسمه وقيمته</span></div>
</div>

<div class="warn-box">⚠️ <strong>مهم جداً:</strong> المتغيرات اللي بتبدأ بـ <code>NEXT_PUBLIC_</code> بتكون مرئية في الكود على المتصفح. المتغيرات السرية زي Database URL متبدأش بيها!</div>

<div class="tip-box">💡 <strong>تذكّر:</strong> أضف <code>.env.local</code> لملف <code>.gitignore</code> عشان متتحملش على GitHub!</div>`
      }
    ]
  },

  // ==================== القسم 5 ====================
  {
    id: 5, icon: "🔀",
    title: "Branches والعمل الذكي",
    desc: "اشتغل على features جديدة بأمان من غير ما تخرب الكود الأصلي",
    lessons: [
      {
        title: "ما هو الـ Branch ولماذا نستخدمه؟",
        content: `
<p>Branch هو <strong>نسخة موازية من الكود</strong>. بيخليك تشتغل على feature جديدة أو تصلح bug بأمان من غير ما تأثر على الكود الأصلي في main.</p>

<div class="diagram-box">
<pre class="diagram">
main  ●──────●──────●──────────────────● (الكود المستقر)
              \\                        /
feature        ●──●──●──●──●──●──● (بتشتغل هنا بحرية)
</pre>
</div>

<div class="info-box">
<strong>🎯 متى تعمل Branch؟</strong>
<ul>
<li>لما تضيف feature جديدة</li>
<li>لما تصلح bug معين</li>
<li>لما تجرب تصميم جديد</li>
<li>لما تشتغل مع فريق وكل واحد على task مختلفة</li>
</ul>
</div>`
      },
      {
        title: "أوامر الـ Branches الكاملة",
        content: `
<div class="code-block"><span class="cmt"># عرض كل الـ branches (النجمة * على الـ branch الحالي)</span>
git branch
<span class="out">* main
  feature-navbar
  fix-login-bug</span>

<span class="cmt"># إنشاء branch جديد</span>
git branch feature-navbar

<span class="cmt"># الانتقال لـ branch</span>
git checkout feature-navbar

<span class="cmt"># ✅ إنشاء والانتقال دفعة واحدة (الطريقة الأسرع)</span>
git checkout -b feature-navbar

<span class="cmt"># أو بالطريقة الجديدة</span>
git switch -c feature-navbar

<span class="cmt"># حذف branch (بعد الـ merge)</span>
git branch -d feature-navbar

<span class="cmt"># حذف branch من GitHub</span>
git push origin --delete feature-navbar

<span class="cmt"># عرض كل الـ branches (محلي + GitHub)</span>
git branch -a</div>`
      },
      {
        title: "Workflow احترافي مع Branches",
        content: `
<div class="code-block"><span class="cmt"># 1. ابدأ دايماً من main محدّث</span>
git checkout main
git pull origin main

<span class="cmt"># 2. عمل branch جديد بالاسم المناسب</span>
git checkout -b feature/user-authentication

<span class="cmt"># 3. اشتغل وعمل commits صغيرة ومتعددة</span>
git add .
git commit -m "feat: add login form UI"
git add .
git commit -m "feat: add form validation"
git add .
git commit -m "feat: connect to auth API"

<span class="cmt"># 4. ارفع الـ branch على GitHub</span>
git push origin feature/user-authentication

<span class="cmt"># 5. بعد الموافقة، ادمج مع main</span>
git checkout main
git merge feature/user-authentication

<span class="cmt"># 6. ارفع main المحدّث</span>
git push origin main

<span class="cmt"># 7. احذف الـ branch المنتهي</span>
git branch -d feature/user-authentication</div>`
      },
      {
        title: "حل الـ Merge Conflicts",
        content: `
<p>Conflict بيحصل لما نفس الجزء في نفس الملف يتعدّل في برانشين مختلفين. Git مش بيعرف يختار أنهيهم الصح فبيعلمك:</p>

<div class="code-block"><span class="cmt"># لما يحصل conflict، هيظهر في الملف كده:</span>
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
&lt;h1&gt;مرحباً بالعالم&lt;/h1&gt;
=======
&lt;h1&gt;أهلاً وسهلاً&lt;/h1&gt;
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/new-text</div>

<p>خطوات الحل:</p>
<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>افتح الملف في VS Code</span></div>
<div class="step-item"><span class="step-n">2</span><span>VS Code هيعرضلك خيارات: "Accept Current" أو "Accept Incoming" أو "Accept Both"</span></div>
<div class="step-item"><span class="step-n">3</span><span>اختار الصح أو عدّل يدوياً</span></div>
<div class="step-item"><span class="step-n">4</span><span>امسح كل الأسطر اللي فيها <code>&lt;&lt;&lt;</code> و <code>===</code> و <code>&gt;&gt;&gt;</code></span></div>
<div class="step-item"><span class="step-n">5</span><span>احفظ الملف وعمل commit</span></div>
</div>

<div class="code-block">git add .
git commit -m "fix: resolve merge conflict in index.html"</div>

<div class="tip-box">💡 VS Code عنده Merge Editor بصري رائع — ابحث عنه وهيوفّر عليك وقت كتير في حل الـ Conflicts!</div>`
      }
    ]
  },

  // ==================== القسم 6 ====================
  {
    id: 6, icon: "🤝",
    title: "Pull Requests والعمل الجماعي",
    desc: "تعلم طريقة العمل الاحترافية مع الفريق على GitHub",
    lessons: [
      {
        title: "ما هو الـ Pull Request؟",
        content: `
<p>Pull Request (PR) هو <strong>طلب رسمي</strong> لدمج الكود بتاعك في الـ main branch. بيخلي الفريق يراجع الكود قبل ما يتضاف.</p>

<div class="diagram-box">
<pre class="diagram">
feature branch ──► Pull Request ──► Code Review ──► Merge to main
                   (طلب الدمج)    (مراجعة الكود)  (دمج نهائي)
</pre>
</div>

<div class="info-box">
<strong>🎯 فايدة الـ Pull Request:</strong>
<ul>
<li>كل كود بيدخل main بيكون متراجع</li>
<li>بيمنع الأخطاء قبل ما توصل لـ production</li>
<li>بيعلّم الناس من بعض عن طريق مراجعة الكود</li>
<li>بيحفظ تاريخ كل تعديل وسببه</li>
</ul>
</div>`
      },
      {
        title: "إنشاء Pull Request احترافي",
        content: `
<div class="code-block"><span class="cmt"># ارفع الـ branch على GitHub</span>
git push origin feature/contact-form</div>

<p>بعدها على GitHub:</p>
<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>هيظهر banner أصفر <strong>"Compare & pull request"</strong> — اضغطه</span></div>
<div class="step-item"><span class="step-n">2</span><span>اكتب عنوان واضح</span></div>
<div class="step-item"><span class="step-n">3</span><span>في الوصف اكتب: إيه اللي عملته؟ ليه؟ إزاي تختبره؟</span></div>
<div class="step-item"><span class="step-n">4</span><span>اضغط <strong>"Create pull request"</strong></span></div>
</div>

<p>مثال لـ PR description كويس:</p>
<div class="code-block">## 📝 التغييرات
- أضفت نموذج التواصل في الصفحة الرئيسية
- أضفت validation للإيميل والاسم
- ربطت النموذج بـ EmailJS

## 🧪 كيف تختبره؟
1. افتح الصفحة الرئيسية
2. اسكرول لقسم "تواصل معنا"
3. جرّب تبعت رسالة

## 📸 Screenshots
[صورة النموذج هنا]</div>`
      },
      {
        title: "Code Review — مراجعة الكود",
        content: `
<p>بعد فتح الـ PR، أي حد في الفريق يقدر يراجع الكود:</p>
<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>يضغط على تاب <strong>Files changed</strong></span></div>
<div class="step-item"><span class="step-n">2</span><span>يضغط على أي سطر يعلّق عليه</span></div>
<div class="step-item"><span class="step-n">3</span><span>يختار: <strong>Approve</strong> (موافق) أو <strong>Request changes</strong> (محتاج تعديل)</span></div>
</div>

<p>لو طلبوا منك تعديلات:</p>
<div class="code-block"><span class="cmt"># عدّل الكود محلياً</span>
git add .
git commit -m "fix: apply review comments"
git push origin feature/contact-form
<span class="cmt"># الـ PR هيتحدث تلقائياً!</span></div>

<div class="tip-box">💡 <strong>نصيحة:</strong> لما تراجع كود حد تاني، ركّز على الـ logic والـ bugs — متعلقش على style أو formatting، فيه tools تعمل ده تلقائياً.</div>`
      },
      {
        title: "الـ Fork والمساهمة في Open Source",
        content: `
<p>Fork بيعمل نسخة من مشروع شخص تاني في حسابك — بيخليك تساهم حتى لو مش في الفريق:</p>

<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>اضغط <strong>Fork</strong> على الـ Repo اللي عايز تساهم فيه</span></div>
<div class="step-item"><span class="step-n">2</span><span>استنسخ نسختك محلياً</span></div>
<div class="step-item"><span class="step-n">3</span><span>عمل branch وعمل تعديلاتك</span></div>
<div class="step-item"><span class="step-n">4</span><span>ارفع وافتح PR للمشروع الأصلي</span></div>
</div>

<div class="code-block"><span class="cmt"># استنسخ نسختك</span>
git clone https://github.com/YOUR-USERNAME/forked-repo.git
cd forked-repo

<span class="cmt"># ربط المشروع الأصلي عشان تجيب التحديثات</span>
git remote add upstream https://github.com/ORIGINAL/repo.git

<span class="cmt"># تحديث Fork من المشروع الأصلي</span>
git fetch upstream
git checkout main
git merge upstream/main
git push</div>

<div class="info-box">
<strong>🌟 ابدأ بـ "good first issue"!</strong>
<p>في كتير من المشاريع Open Source، في issues مميزة بـ label <code>good first issue</code> — دي خصيصاً للمبتدئين. ابدأ بيها!</p>
</div>`
      }
    ]
  },

  // ==================== القسم 7 ====================
  {
    id: 7, icon: "📋",
    title: "Issues & GitHub Projects",
    desc: "نظّم مشروعك وتابع المهام زي المحترفين",
    lessons: [
      {
        title: "ما هو الـ Issue؟",
        content: `
<p>Issue هو <strong>تذكرة رسمية</strong> لأي حاجة محتاج تتعمل في المشروع. زي نظام Trello بس داخل GitHub مباشرة.</p>

<div class="feature-list">
<span>🐛 الإبلاغ عن Bugs</span>
<span>✨ اقتراح Features جديدة</span>
<span>❓ طرح أسئلة</span>
<span>📝 توثيق مهام</span>
<span>🔧 تتبع التحسينات</span>
</div>

<div class="info-box">
<strong>🔑 ليه Issues مهمة؟</strong>
<p>بدل ما يبعتلك حد على واتساب "فيه bug في الـ login" — بيفتح Issue على GitHub. بيتحفظ كل شيء، وبيتربط بالكود، وبيتقفل تلقائياً لما تحله!</p>
</div>`
      },
      {
        title: "كتابة Issue احترافية",
        content: `
<p>Issue كويسة بتحتوي على معلومات كافية عشان أي حد يفهم المشكلة من غير ما يسألك:</p>

<div class="code-block"><span class="cmt">## 🐛 وصف المشكلة</span>
زرار الـ Login مش شغال على موبايل

<span class="cmt">## 📋 خطوات إعادة المشكلة</span>
1. افتح الموقع على موبايل
2. اضغط زرار Login
3. مفيش حاجة بتحصل

<span class="cmt">## ✅ المتوقع</span>
يفتح صفحة تسجيل الدخول

<span class="cmt">## ❌ اللي بيحصل فعلاً</span>
الزرار مش بيستجاوب

<span class="cmt">## 📱 البيئة</span>
- iPhone 14, iOS 17
- Safari Browser
- الموقع: https://...</div>`
      },
      {
        title: "الـ Labels والتنظيم",
        content: `
<p>Labels بتساعدك تصنّف وتفلتر الـ Issues بسرعة:</p>

<div class="labels-grid">
<span class="label-item label-bug">🔴 bug — مشكلة في الكود</span>
<span class="label-item label-feat">🔵 enhancement — ميزة جديدة</span>
<span class="label-item label-docs">🟢 documentation — تحسين التوثيق</span>
<span class="label-item label-good">🟣 good first issue — للمبتدئين</span>
<span class="label-item label-help">🟡 help wanted — محتاج مساعدة</span>
<span class="label-item label-pri">🔴 priority: high — عاجل</span>
</div>

<p>ربط Commits بـ Issues — وقفلها تلقائياً:</p>
<div class="code-block"><span class="cmt"># لما تحل bug في Issue رقم 15</span>
git commit -m "fix: login button not working on mobile, closes #15"

<span class="cmt"># الكلمات السحرية:</span>
<span class="cmt"># closes, fixes, resolves</span>
<span class="cmt"># بتقفل الـ Issue تلقائياً لما الـ PR يتدمج!</span></div>`
      },
      {
        title: "GitHub Projects — Kanban Board",
        content: `
<p>GitHub Projects هو Kanban Board متكامل جوّه GitHub:</p>

<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>روح الـ Repo واضغط على تاب <strong>Projects</strong></span></div>
<div class="step-item"><span class="step-n">2</span><span>اضغط <strong>New project</strong></span></div>
<div class="step-item"><span class="step-n">3</span><span>اختار <strong>Board</strong> template</span></div>
<div class="step-item"><span class="step-n">4</span><span>هتلاقي أعمدة جاهزة: Todo / In Progress / Done</span></div>
</div>

<div class="diagram-box">
<pre class="diagram">
┌──────────────┬──────────────────┬──────────────┐
│    Todo      │   In Progress    │    Done ✅   │
├──────────────┼──────────────────┼──────────────┤
│ Add dark mode│ Fix login bug    │ Add homepage │
│ Write docs   │ Redesign navbar  │ Setup CI/CD  │
│ Add search   │                  │ Write README │
└──────────────┴──────────────────┴──────────────┘
</pre>
</div>

<div class="tip-box">💡 ربط الـ Issues بالـ Project بيخلي لما تحل Issue وتقفلها، بتنتقل تلقائياً لعمود Done!</div>`
      }
    ]
  },

  // ==================== القسم 8 ====================
  {
    id: 8, icon: "⚙️",
    title: "GitHub Actions (CI/CD)",
    desc: "أتمتة الاختبارات والنشر — اشتغل أذكى مش أكتر",
    lessons: [
      {
        title: "ما هو CI/CD؟",
        content: `
<p><strong>CI (Continuous Integration):</strong> كل ما ترفع كود، يتختبر تلقائياً عشان تكتشف الأخطاء بدري.</p>
<p><strong>CD (Continuous Deployment):</strong> لو الاختبارات نجحت، الكود بيتنشر تلقائياً على السيرفر.</p>

<div class="diagram-box">
<pre class="diagram">
git push ──► GitHub Actions ──► Tests Pass? ──► Deploy ✅
                                   │
                                   └──► Tests Fail? ──► Notify ❌
</pre>
</div>

<div class="info-box">
<strong>🎯 فايدة CI/CD:</strong>
<ul>
<li>بتكتشف الـ bugs قبل ما توصل لـ production</li>
<li>بتوفر وقت الـ manual deployment</li>
<li>بيضمن إن الكود اللي على السيرفر شغّال دايماً</li>
<li>GitHub بيديك 2000 دقيقة مجاناً كل شهر!</li>
</ul>
</div>`
      },
      {
        title: "هيكل الـ Workflow",
        content: `
<p>الـ Workflows بتتحفظ في مجلد <code>.github/workflows/</code>:</p>

<div class="code-block">my-project/
└── .github/
    └── workflows/
        ├── ci.yml        ← اختبار الكود
        └── deploy.yml    ← نشر تلقائي</div>

<p>كل Workflow ملف YAML بيكون فيه:</p>
<div class="code-block"><span class="cmt"># اسم الـ Workflow</span>
name: CI Pipeline

<span class="cmt"># إمتى يشتغل؟</span>
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

<span class="cmt"># المهام</span>
jobs:
  test:                      <span class="cmt"># اسم الـ Job</span>
    runs-on: ubuntu-latest   <span class="cmt"># على إيه يشتغل</span>
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Run tests
        run: npm test
        
      - name: Build project
        run: npm run build</div>`
      },
      {
        title: "Workflow عملي لـ Next.js",
        content: `
<div class="code-block">name: Deploy Next.js to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Setup Node.js 18
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run linting
        run: npm run lint
        
      - name: Build application
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'</div>`
      },
      {
        title: "الـ Secrets في GitHub Actions",
        content: `
<p>البيانات السرية زي API Keys متكتبهاش في الـ Workflow مباشرة:</p>

<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>روح الـ Repo على GitHub</span></div>
<div class="step-item"><span class="step-n">2</span><span>اضغط <strong>Settings</strong></span></div>
<div class="step-item"><span class="step-n">3</span><span>اضغط <strong>Secrets and variables → Actions</strong></span></div>
<div class="step-item"><span class="step-n">4</span><span>اضغط <strong>New repository secret</strong></span></div>
<div class="step-item"><span class="step-n">5</span><span>أضف الاسم والقيمة</span></div>
</div>

<p>وفي الـ Workflow بتستخدمها كده:</p>
<div class="code-block"><span class="cmt"># ✅ الطريقة الصح</span>
env:
  DATABASE_URL: ${{ secrets.DATABASE_URL }}
  API_KEY: ${{ secrets.API_KEY }}

<span class="cmt"># ❌ الطريقة الغلط (أبداً متعملش كده!)</span>
env:
  DATABASE_URL: "mongodb+srv://user:password@..."</div>

<div class="tip-box">💡 الـ Secrets مش بتظهر أبداً في الـ logs حتى لو حاولت تطبعها — GitHub بيخفيها تلقائياً.</div>`
      }
    ]
  },

  // ==================== القسم 9 ====================
  {
    id: 9, icon: "✨",
    title: "Profile & Portfolio احترافي",
    desc: "اعمل GitHub profile يلفت نظر أي recruiter ويحكي قصتك",
    lessons: [
      {
        title: "الـ Profile README",
        content: `
<p>لو اسم حسابك على GitHub مثلاً <code>mohamedghanem</code>، اعمل Repo اسمه <code>mohamedghanem</code> وحط فيه <code>README.md</code> — هيظهر على صفحتك الرئيسية مباشرة!</p>

<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>اضغط <strong>New repository</strong></span></div>
<div class="step-item"><span class="step-n">2</span><span>اكتب اسم الـ Repo نفس اسم حسابك بالظبط</span></div>
<div class="step-item"><span class="step-n">3</span><span>اختار <strong>Public</strong> وفعّل <strong>Add a README file</strong></span></div>
<div class="step-item"><span class="step-n">4</span><span>اضغط <strong>Create repository</strong></span></div>
</div>

<div class="info-box">
<strong>🌟 ليه Profile README مهم؟</strong>
<p>ده أول حاجة أي Recruiter أو Developer بيشوفها لما يفتح حسابك على GitHub. لازم يحكي قصتك المهنية بوضوح وجاذبية.</p>
</div>`
      },
      {
        title: "Profile README متكامل",
        content: `
<div class="code-block"><span class="cmt"># مثال Profile README احترافي</span>

# أهلاً، أنا Mohamed Ghanem 👋

> مبرمج ويب | Full Stack Developer | بحب أحل مشاكل الناس بالكود

## 🛠️ التقنيات

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)

## 📊 إحصائياتي على GitHub

![Stats](https://github-readme-stats.vercel.app/api?username=mohamedghanem&show_icons=true&theme=tokyonight)

![Streak](https://github-readme-streak-stats.herokuapp.com/?user=mohamedghanem&theme=tokyonight)

## 🚀 مشاريعي المميزة

| المشروع | الوصف | Demo |
|---------|-------|------|
| GitMastery | منصة تعليمية لـ GitHub | [🔗](https://...) |
| My Portfolio | موقعي الشخصي | [🔗](https://...) |

## 📫 تواصل معايا

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://linkedin.com/in/...)</div>`
      },
      {
        title: "README المشروع الاحترافي",
        content: `
<p>كل مشروع على GitHub لازم يكون فيه README كويس — ده زي واجهة مشروعك:</p>

<div class="code-block"># 🚀 اسم المشروع

وصف قصير ومفيد في جملة أو اتنين.

## 🔗 Demo حي
[شوف المشروع هنا](https://your-project.vercel.app)

## 📸 Screenshots
![Homepage](./screenshots/home.png)

## ⚙️ التقنيات المستخدمة
- Next.js 14
- Tailwind CSS  
- MongoDB
- GitHub Actions

## 🚀 تشغيل المشروع محلياً
\`\`\`bash
git clone https://github.com/username/project.git
cd project
npm install
cp .env.example .env.local
npm run dev
\`\`\`

## 📁 هيكل المشروع
\`\`\`
project/
├── app/           ← صفحات الموقع
├── components/    ← المكونات
├── public/        ← الملفات الثابتة
└── lib/           ← الدوال المساعدة
\`\`\`

## 👤 المطور
**Mohamed Ghanem** — [GitHub](https://github.com/...) | [LinkedIn](https://linkedin.com/in/...)</div>`
      },
      {
        title: "Pinned Repositories وإحصائيات الـ Profile",
        content: `
<p>اختار 6 مشاريع تعرضهم على صفحتك الرئيسية:</p>
<div class="steps-list">
<div class="step-item"><span class="step-n">1</span><span>روح الـ Profile بتاعك</span></div>
<div class="step-item"><span class="step-n">2</span><span>اضغط <strong>"Customize your pins"</strong></span></div>
<div class="step-item"><span class="step-n">3</span><span>اختار أحسن 6 مشاريع عندك</span></div>
</div>

<p>إحصائيات تضيفها في الـ Profile README:</p>
<div class="code-block"><span class="cmt"># إحصائيات عامة</span>
![Stats](https://github-readme-stats.vercel.app/api?username=USERNAME&show_icons=true&theme=tokyonight&locale=ar)

<span class="cmt"># أكتر لغات بتستخدمها</span>
![Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=USERNAME&layout=compact&theme=tokyonight)

<span class="cmt"># أيام متتالية بـ commits (GitHub Streak)</span>
![Streak](https://github-readme-streak-stats.herokuapp.com/?user=USERNAME&theme=tokyonight)</div>

<div class="tip-box">💡 <strong>نصيحة ذهبية:</strong> GitHub Profile كويس = CV قوي. كتير من الشركات التقنية بتشوف GitHub قبل ما تشوف الـ CV التقليدي!</div>`
      }
    ]
  },

  // ==================== القسم 10 ====================
  {
    id: 10, icon: "🏆",
    title: "الاحتراف الكامل",
    desc: "أوامر متقدمة ونصايح المحترفين — وصلت للمستوى الأخير!",
    lessons: [
      {
        title: "git stash — احفظ شغلك مؤقتاً",
        content: `
<p>لو بتشتغل على حاجة وفجأة محتاج تروح لـ branch تاني من غير ما تعمل commit:</p>

<div class="code-block"><span class="cmt"># احفظ التعديلات مؤقتاً</span>
git stash
<span class="out">Saved working directory and index state WIP on feature: a1b2c3d</span>

<span class="cmt"># دلوقتي ممكن تتنقل بين الـ branches براحتك</span>
git checkout main
git pull

<span class="cmt"># ارجع تاني لشغلك</span>
git checkout feature/my-work
git stash pop
<span class="out">On branch feature/my-work
Changes not staged for commit: ...</span>

<span class="cmt"># لو عندك أكتر من stash</span>
git stash list
<span class="out">stash@{0}: WIP on feature: أحدث stash
stash@{1}: WIP on main: stash قديم</span>

git stash pop stash@{1}  <span class="cmt"># ارجع stash معين</span>
git stash drop stash@{0} <span class="cmt"># احذف stash</span>
git stash clear          <span class="cmt"># احذف كل الـ stashes</span></div>`
      },
      {
        title: "git rebase — تاريخ commits نظيف",
        content: `
<p>Rebase بيعيد بناء الـ commits بتاعتك كأنها اتعملت فوق آخر حاجة في main:</p>

<div class="code-block"><span class="cmt"># بدل merge:</span>
git checkout feature
git merge main
<span class="cmt"># النتيجة: merge commit زيادة في التاريخ</span>

<span class="cmt"># باستخدام rebase:</span>
git checkout feature
git rebase main
<span class="cmt"># النتيجة: تاريخ نظيف بدون merge commits زيادة</span></div>

<p><strong>Interactive Rebase — تعديل الـ Commits:</strong></p>
<div class="code-block"><span class="cmt"># تعديل آخر 3 commits</span>
git rebase -i HEAD~3

<span class="cmt"># هيفتح editor فيه:</span>
pick a1b2c3d feat: add login form
pick b2c3d4e fix: typo in button text
pick c3d4e5f feat: add form validation

<span class="cmt"># الخيارات:</span>
<span class="cmt"># pick    = احتفظ بالـ commit زي ما هو</span>
<span class="cmt"># reword  = غيّر رسالة الـ commit بس</span>
<span class="cmt"># squash  = ادمج مع الـ commit اللي قبله</span>
<span class="cmt"># drop    = احذف الـ commit نهائياً</span></div>

<div class="warn-box">⚠️ <strong>تحذير:</strong> متعملش rebase على branches مشتركة مع الفريق — بيغيّر التاريخ وبيسبب مشاكل!</div>`
      },
      {
        title: "git cherry-pick والـ Tags",
        content: `
<p><strong>Cherry-pick</strong> — خذ commit معين بس من branch تاني:</p>
<div class="code-block"><span class="cmt"># شوف الـ commits</span>
git log --oneline feature-branch
<span class="out">a1b2c3d feat: add dark mode toggle
b2c3d4e fix: navbar responsive bug
c3d4e5f feat: add search bar</span>

<span class="cmt"># طبّق commit معين على الـ branch الحالي</span>
git cherry-pick b2c3d4e
<span class="out">Applied: fix: navbar responsive bug</span>

<span class="cmt"># لو حصل conflict</span>
git cherry-pick --continue
git cherry-pick --abort  <span class="cmt"># إلغاء</span></div>

<p><strong>Tags والـ Releases</strong> — وسّم الإصدارات:</p>
<div class="code-block"><span class="cmt"># إنشاء tag</span>
git tag v1.0.0
git tag -a v1.0.0 -m "First stable release 🎉"

<span class="cmt"># رفع الـ tag على GitHub</span>
git push origin v1.0.0

<span class="cmt"># رفع كل الـ tags</span>
git push origin --tags

<span class="cmt"># عرض الـ tags</span>
git tag</div>`
      },
      {
        title: "GitHub CLI وAliases للاحتراف",
        content: `
<p><strong>GitHub CLI</strong> — تحكم في GitHub من الـ Terminal:</p>
<div class="code-block"><span class="cmt"># تثبيت</span>
brew install gh                    <span class="cmt"># Mac</span>
winget install GitHub.cli          <span class="cmt"># Windows</span>

<span class="cmt"># تسجيل دخول</span>
gh auth login

<span class="cmt"># إنشاء Repo</span>
gh repo create my-project --public

<span class="cmt"># إنشاء PR من الـ Terminal</span>
gh pr create --title "Add login" --body "Description"

<span class="cmt"># عرض وقبول PRs</span>
gh pr list
gh pr merge 15

<span class="cmt"># العمل مع Issues</span>
gh issue list
gh issue create --title "Bug: login broken"

<span class="cmt"># فتح الـ Repo في المتصفح</span>
gh repo view --web</div>

<p><strong>Git Aliases</strong> — اختصارات توفّر وقتك:</p>
<div class="code-block">git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --all --decorate"

<span class="cmt"># استخدامها:</span>
git st     <span class="cmt"># بدل: git status</span>
git co main  <span class="cmt"># بدل: git checkout main</span>
git lg     <span class="cmt"># عرض جميل وملوّن للتاريخ</span></div>

<div class="tip-box">🏆 <strong>مبروك! وصلت للمستوى الاحترافي!</strong> دلوقتي أنت جاهز تشتغل على أي مشروع، تتعاون مع أي فريق في العالم، وتساهم في مشاريع Open Source!</div>`
      }
    ]
  }
];

// ==================== ARTICLES ====================
let articles = JSON.parse(localStorage.getItem('gm_articles')) || [
  {
    id: 1,
    title: "GitHub Copilot يدعم الآن Claude من Anthropic",
    category: "github",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",
    body: "أعلنت GitHub عن دعم GitHub Copilot لنماذج Claude من Anthropic كخيار إضافي للمطورين، مما يمنح المستخدمين المزيد من الخيارات في مساعد الكود الخاص بهم. هذه الخطوة تعكس التنافس المتزايد في سوق مساعدي الكود الذكية.",
    date: "2025-06-10",
    readTime: "3 دقايق"
  },
  {
    id: 2,
    title: "GPT-4o يغير قواعد اللعبة في الذكاء الاصطناعي",
    category: "ai",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    body: "أطلقت OpenAI نموذجها الجديد GPT-4o الذي يدمج بين النص والصوت والصورة في نموذج واحد متكامل بأداء أسرع وتكلفة أقل. النموذج يدعم الاستجابة الفورية للصوت بشكل يجعله أقرب للمحادثة الطبيعية.",
    date: "2025-05-28",
    readTime: "4 دقايق"
  },
  {
    id: 3,
    title: "Next.js 15: كل الجديد في أحدث إصدار",
    category: "dev",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80",
    body: "أصدرت Vercel النسخة 15 من Next.js مع تحسينات ضخمة في الأداء ودعم كامل لـ React 19. من أبرز الجديد: تحسين Turbopack، وميزات جديدة في App Router، وتقليل حجم الـ bundle.",
    date: "2025-05-20",
    readTime: "5 دقايق"
  },
  {
    id: 4,
    title: "GitHub أعلن عن Copilot Workspace",
    category: "github",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=80",
    body: "GitHub كشف عن Copilot Workspace، بيئة تطوير متكاملة مدعومة بالذكاء الاصطناعي تسمح للمطورين بتحويل Issues إلى كود جاهز للنشر في خطوات قليلة. الميزة الجديدة تعتمد على فهم السياق الكامل للمشروع.",
    date: "2025-05-15",
    readTime: "3 دقايق"
  }
];
