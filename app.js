// Go Learning Path — Premium App v2 (53 pelajaran, 5 modul)
const MODULES = [
  {
    "id": 1,
    "title": "Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 2,
    "title": "Modul 2: Struktur Kontrol & Alur Program",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 3,
    "title": "Modul 3: Fungsi, Closures & Method",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 4,
    "title": "Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 5,
    "title": "Modul 5: Goroutines, Channels & Concurrency",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 6,
    "title": "Modul 6: Context & Error Handling",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 7,
    "title": "Modul 7: Generics, Koleksi & Pipeline",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 8,
    "title": "Modul 8: Paket, Modul & Dependency Management",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 9,
    "title": "Modul 9: Testing, Benchmarking & Quality",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 10,
    "title": "Modul 10: Proyek Akhir & Best Practices Industri",
    "desc": "Go modern",
    "icon": "fa-solid fa-code"
  }
];
const lessons = [];


let currentLesson = -1;
let progress = JSON.parse(localStorage.getItem("go_progress")||"{}");
let filterQuery = "";

function filteredLessons(){
  if(!filterQuery) return lessons;
  const q=filterQuery.toLowerCase();
  return lessons.filter(l=> l.title.toLowerCase().includes(q) || l.slug.includes(q) || l.module.toLowerCase().includes(q));
}

function renderNav(filter){
  if(typeof filter==='string') filterQuery=filter;
  const nav=document.getElementById('lessons-nav');
  if(!nav) return;
  const q=(filterQuery||'').toLowerCase().trim();
  const curModId = lessons[currentLesson] ? lessons[currentLesson].moduleId : 1;
  nav.innerHTML = MODULES.map(function(mod){
    const modLessons = lessons.filter(function(l){ return l.moduleId===mod.id; });
    const filtered = q ? modLessons.filter(function(l){ return l.title.toLowerCase().includes(q) || mod.title.toLowerCase().includes(q) || (l.slug||'').includes(q); }) : modLessons;
    if(q && filtered.length===0) return '';
    const doneCount = modLessons.filter(function(l){ return !!progress[l.id]; }).length;
    const isCurrentModule = q ? true : mod.id===curModId;
    const lessonRows = filtered.map(function(l){
      const idx = lessons.findIndex(function(x){ return x.id===l.id; });
      const isActive = idx===currentLesson;
      const isDone = !!progress[l.id];
      const cls = isActive ? 'lesson-active font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';
      return '<button onclick="loadLesson('+idx+'); if(typeof closeSidebar===\'function\')closeSidebar();" class="w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center gap-2.5 '+cls+'">' +
        '<span class="text-[11px] shrink-0">'+(isDone ? '&#9989;' : '&#9675;')+'</span>' +
        '<span class="truncate flex-1">'+l.title+'</span></button>';
    }).join('');
    const badgeCls = doneCount===modLessons.length ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-500';
    return '<div class="mb-1">' +
      '<button onclick="toggleModule('+mod.id+')" class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition rounded-lg text-left">' +
      '<span class="flex items-center gap-2 truncate"><i class="'+mod.icon+' text-cyan-400 text-sm w-4 text-center"></i><span class="truncate">'+mod.title+'</span></span>' +
      '<span class="text-[10px] font-mono px-2 py-0.5 rounded-full '+badgeCls+'">'+doneCount+'/'+modLessons.length+'</span></button>' +
      '<div id="module-'+mod.id+'" class="space-y-0.5 mt-0.5 px-2 '+(isCurrentModule?'':'hidden')+'">'+lessonRows+'</div></div>';
  }).join('');
  updateProgress();
}


function closeSidebar(){ try{ document.getElementById('sidebar')?.classList.remove('open'); document.getElementById('backdrop')?.classList.remove('show'); document.getElementById('sidebarOverlay')?.classList.remove('show'); document.getElementById('sidebar-overlay')?.classList.add('hidden'); }catch(e){} }
function toggleModule(id){
  const el=document.getElementById('module-'+id);
  if(el) el.classList.toggle('hidden');
}

function updateGutter(){
  const ta=document.getElementById('code-editor');
  const gutter=document.getElementById('editor-gutter');
  if(!ta||!gutter) return;
  const lines=ta.value.split('\n').length;
  gutter.innerHTML=Array.from({length:lines},(_,i)=>i+1).join('<br>');
}

async function loadLesson(index){
    try { localStorage.setItem('go_last_lesson', String(index)); } catch(e){}
  if(index<0||index>=lessons.length) return;
  currentLesson=index;
  const lesson=lessons[index];
  if(typeof closeSidebar==='function') closeSidebar();
  const bc=document.getElementById('breadcrumb');
  const lt=document.getElementById('lesson-title');
  const ld=document.getElementById('lesson-duration');
  const ll=document.getElementById('lesson-level');
  const li=document.getElementById('lesson-id');
  if(bc) bc.textContent=lesson.module + ' • ' + lesson.duration;
  if(lt) lt.textContent=lesson.title.replace(/^\d+\.\s*/,'');
  if(ld) ld.innerHTML='<i class="fa-regular fa-clock"></i> '+lesson.duration;
  if(ll) ll.textContent=lesson.level;
  if(li) li.textContent=lesson.slug;

  const contentEl=document.getElementById('lesson-content');
  if(contentEl) contentEl.innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-muted)"><i class="fa-solid fa-spinner fa-spin"></i> Memuat materi…</div>`;

  let html = lesson.description || '';
  try{
    const res=await fetch(lesson.mdFile);
    if(res.ok){
      const md=await res.text();
      if(typeof marked!=='undefined'){
        marked.setOptions({gfm:true,breaks:true});
        html=marked.parse(md);
      } else html=`<pre>${escapeHtml(md)}</pre>`;
    } else {
      html+=`<div style="margin-top:12px;padding:12px;background:rgba(6,182,212,.08);border:1px solid #06b6d4;border-radius:8px;color:#22d3ee">Materi <code>${lesson.mdFile}</code> belum tersedia. Editor di bawah tetap bisa dipakai.</div>`;
    }
  }catch(e){
    html+=`<div style="color:var(--text-muted);font-size:.8rem;margin-top:8px">Gagal memuat markdown: ${escapeHtml(e.message)}</div>`;
  }
  if(contentEl) contentEl.innerHTML='<div class="prose max-w-none">'+html+'</div>';

  // code
  let code=lesson.defaultCode||'';
  try{
    const r2=await fetch('lessons/'+lesson.slug+'.json');
    if(r2.ok){ const j=await r2.json(); if(j.code) code=j.code; }
  }catch(e){}
  code=code.replace(/\\n/g,'\n');
  const ed=document.getElementById('code-editor');
  if(ed){ ed.value=code; updateGutter(); }
  const out=document.getElementById('output');
  if(out) out.innerHTML='<span class="muted"># Klik Run atau jalankan `go run main.go` di terminal</span>';
  const vm=document.getElementById('validation-msg');
  if(vm){ vm.className='validation hidden'; vm.innerHTML=''; }
  // quiz
  const qs=document.getElementById('quiz-section');
  const qc=document.getElementById('quiz-content');
  const qr=document.getElementById('quiz-result');
  if(qr) qr.textContent='';
  if(lesson.quiz && qc && qs){
    qs.classList.remove('hidden');
    qc.innerHTML='<p class="text-slate-200 text-sm font-medium mb-3">'+escapeHtml(lesson.quiz.question)+'</p>' +
      '<div class="space-y-2">'+lesson.quiz.options.map(function(opt,i){
        return '<label class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-white/5 border border-white/5 cursor-pointer transition text-xs sm:text-sm text-slate-300">' +
          '<input type="radio" name="quiz-opt" value="'+i+'" class="accent-cyan-500">' +
          '<span>'+escapeHtml(opt)+'</span></label>';
      }).join('')+'</div>';
  } else if(qs){ qs.classList.add('hidden'); }

  const prev=document.getElementById('prev-btn');
  const next=document.getElementById('next-btn');
  if(prev) prev.disabled=index===0;
  if(next) next.disabled=index===lessons.length-1;
  updateCompleteButtons();
  renderNav();
  
  document.getElementById('content-scroll')?.scrollTo({top:0,behavior:'smooth'});
}

// Terminal simulation
const TERM_CMDS={
  help:`Perintah tersedia:\n  go run main.go    — jalankan editor\n  go build          — simulasi build\n  go test           — jalankan validasi\n  go fmt            — format info\n  go vet            — cek statis\n  clear / cls       — bersihkan terminal\n  help              — bantuan ini`,
  "go fmt":"gofmt: semua file terformat rapi (simulasi).",
  "go vet":"go vet: no issues (simulasi).",
  "go build":"build: ./app -> binary siap (simulasi). Jalankan ./app untuk menjalankan.",
};

function termLog(html, cls=""){
  const log=document.getElementById('terminal-log');
  if(!log) return;
  const d=document.createElement('div');
  d.className='term-line '+cls;
  d.innerHTML=html;
  log.appendChild(d);
  log.scrollTop=log.scrollHeight;
}
function clearTerminal(){
  const log=document.getElementById('terminal-log');
  if(log) log.innerHTML='<div class="term-line muted">$ terminal dibersihkan</div>';
}
function clearOutput(){
  const o=document.getElementById('output');
  if(o) o.innerHTML='<span class="muted"># Output dibersihkan</span>';
  const v=document.getElementById('validation-msg'); if(v){ v.className='validation hidden'; v.innerHTML='';}
}
function copyCode(){
  const ta=document.getElementById('code-editor');
  if(!ta) return;
  navigator.clipboard.writeText(ta.value).then(()=>termLog('<span class="success">✓ Kode disalin ke clipboard</span>'));
}

async function runTerminal(){
  const inp=document.getElementById('terminal-input');
  if(!inp) return;
  const raw=inp.value.trim();
  if(!raw) return;
  termLog('<span style="color:var(--accent)">➜</span> '+escapeHtml(raw));
  inp.value='';
  const cmd=raw.toLowerCase();
  if(cmd==="clear"||cmd==="cls"){ clearTerminal(); return; }
  if(TERM_CMDS[cmd]){ termLog(escapeHtml(TERM_CMDS[cmd]).replace(/\n/g,'<br>')); return; }
  if(cmd.startsWith("go run")){
    termLog('<span class="muted">menjalankan go run…</span>');
    await runCode();
    return;
  }
  if(cmd.startsWith("go test")){
    termLog('<span class="muted">menjalankan go test…</span>');
    await runCode();
    return;
  }
  termLog('<span class="err">unknown command: '+escapeHtml(raw)+' (ketik help)</span>');
}

async function runCode(){
  const codeEl=document.getElementById('code-editor');
  const out=document.getElementById('output');
  const validation=document.getElementById('validation-msg');
  if(!codeEl||!out) return;
  // Sanitize code: normalize Windows \r\n to \n (prevents "newline in string" on Go playground)
  let code = codeEl.value.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  // Auto-detect if double-quoted string was broken by accidental Enter inside string and convert to backtick
  // e.g. "foo\nbar" on separate lines without closing quote
  // Also trim trailing whitespaces
  code = code.split('\n').map(l => l.replace(/\s+$/, '')).join('\n');
  out.innerHTML='<span style="color:#22d3ee">⏳ Menjalankan Go…</span>';
  if(validation){ validation.className='validation hidden'; validation.innerHTML=''; }
  // try play.golang.org
  let success=false;
  try{
    const controller=new AbortController();
    const t=setTimeout(()=>controller.abort(),8000);
    const res=await fetch('https://play.golang.org/compile?output=json',{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:'version=2&body='+encodeURIComponent(code),
      signal: controller.signal
    });
    clearTimeout(t);
    if(res.ok){
      const result=await res.json();
      if(result.Errors){
        out.innerHTML='<span style="color:#ef4444">❌ '+escapeHtml(result.Errors)+'</span>';
        termLog('<span class="err">compile error: '+escapeHtml(result.Errors).slice(0,300)+'</span>');
      } else {
        const goOut=(result.Events||[]).map(e=>e.Message).join('');
        out.innerHTML='<span style="color:#10b981">'+escapeHtml(goOut||'(tidak ada output)')+'</span>';
        termLog('<span class="success">go run: selesai</span><br>'+escapeHtml(goOut||'(no output)').slice(0,500));
        const expected=lessons[currentLesson]?.expectedOutput;
        if(expected && goOut.includes(expected.trim())){
          if(validation){ validation.className='validation correct'; validation.innerHTML='✅ Output sesuai ekspektasi! <b>'+escapeHtml(expected)+'</b> — progress tersimpan.'; }
          progress[lessons[currentLesson].id]=true;
          localStorage.setItem('go_progress',JSON.stringify(progress));
          updateProgress(); renderNav(); updateCompleteButtons();
        } else if(expected){
          if(validation){ validation.className='validation wrong'; validation.innerHTML='💡 Hint: output harus mengandung <b>'+escapeHtml(expected)+'</b><br><span style="color:var(--text-muted)">'+escapeHtml(lessons[currentLesson]?.hint||'')+'</span>'; }
        }
      }
      success=true;
    }
  }catch(e){
    // fallback simulation
  }
  if(!success){
    // local simulation fallback
    const simulated = simulateGo(code);
    out.innerHTML=simulated.html;
    termLog(simulated.term);
    if(simulated.ok){
      const expected=lessons[currentLesson]?.expectedOutput;
      if(expected && simulated.text.includes(expected.trim())){
        if(validation){ validation.className='validation correct'; validation.innerHTML='✅ Simulasi lokal: output mengandung <b>'+escapeHtml(expected)+'</b>'; }
        progress[lessons[currentLesson].id]=true;
        localStorage.setItem('go_progress',JSON.stringify(progress));
        updateProgress(); renderNav(); updateCompleteButtons();
      } else if(expected){
        if(validation){ validation.className='validation wrong'; validation.innerHTML='💡 Simulasi: output harus mengandung <b>'+escapeHtml(expected)+'</b>'; }
      }
    }
  }
}

function simulateGo(code){
  // very simple simulation: extract Println/Printf strings and basic expressions
  try{
    const lines=code.split('\n');
    let out=[];
    let ok=true;
    for(let line of lines){
      const m=line.match(/fmt\.Println\s*\(\s*["`](.*)["`]/);
      if(m) out.push(m[1]);
      const m2=line.match(/fmt\.Printf\s*\(\s*["`](.*)["`]/);
      if(m2) out.push(m2[1].replace(/%[vdsT%][^"]*/g,'').replace(/\\n/g,''));
      const m3=line.match(/fmt\.Print\s*\(\s*["`](.*)["`]/);
      if(m3) out.push(m3[1]);
    }
    if(out.length===0){
      // try to detect obvious syntax error
      if(code.includes("func main") && code.includes("fmt.")){
        out=["(simulasi lokal) program Go terdeteksi — klik Run dengan koneksi untuk eksekusi penuh di play.golang.org"];
      } else if(!code.includes("package main")){
        return {html:'<span style="color:#ef4444">❌ Simulasi: package main tidak ditemukan</span>', term:'<span class="err">simulasi: missing package main</span>', text:"", ok:false};
      } else {
        out=["(simulasi lokal) tidak ada fmt.Println terdeteksi — periksa kode"];
      }
    }
    const text=out.join(" ");
    return {html:'<span style="color:#10b981">'+escapeHtml(out.join("\n"))+'</span><br><span class="muted" style="font-size:.65rem">— simulasi lokal (offline fallback)</span>', term:escapeHtml(out.join("\n")), text, ok};
  }catch(e){
    return {html:'<span style="color:#ef4444">❌ Simulasi error: '+escapeHtml(e.message)+'</span>', term:'<span class="err">simulasi error</span>', text:"", ok:false};
  }
}

async function resetCode(){
  if(currentLesson<0) return;
  let code=lessons[currentLesson].defaultCode||'';
  try{
    const r=await fetch('lessons/'+lessons[currentLesson].slug+'.json');
    if(r.ok){ const j=await r.json(); if(j.code) code=j.code; }
  }catch(e){}
  const ed=document.getElementById('code-editor'); if(ed){ ed.value=code.replace(/\\n/g,'\n'); updateGutter(); }
  clearOutput();
}
function checkQuiz(){
  const lesson=lessons[currentLesson];
  if(!lesson||!lesson.quiz) return;
  const sel=document.querySelector('input[name="quiz-opt"]:checked');
  const res=document.getElementById('quiz-result');
  if(!sel){ if(res){res.innerHTML='<div class="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs">Pilih salah satu jawaban dahulu.</div>';} return; }
  const isCorrect=parseInt(sel.value)===lessons[currentLesson].quiz.answer;
  const qc=document.getElementById('quiz-content');
  let msg=document.getElementById('quiz-feedback');
  if(!msg){ msg=document.createElement('div'); msg.id='quiz-feedback'; msg.style.marginTop='12px'; msg.style.padding='12px'; msg.style.borderRadius='8px'; qc.appendChild(msg); }
  if(isCorrect){
    msg.style.background='rgba(16,185,129,.08)'; msg.style.border='1px solid #10b981'; msg.style.color='#10b981';
    msg.innerHTML='<i class="fa-solid fa-circle-check"></i> Benar! Lanjutkan ke pelajaran selanjutnya.';
    if(res){res.innerHTML='<div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs"><div class="font-bold flex items-center gap-2"><i class="fas fa-check-circle"></i> Jawaban Benar!</div></div>';}
    progress[lesson.id]=true;
    localStorage.setItem('go_progress',JSON.stringify(progress));
    updateProgress(); renderNav(); updateCompleteButtons();
  } else {
    msg.style.background='rgba(239,68,68,.08)'; msg.style.border='1px solid #ef4444'; msg.style.color='#ef4444';
    msg.innerHTML='<i class="fa-solid fa-circle-xmark"></i> Kurang tepat — coba lagi! Baca kembali materinya.';
    if(res){res.innerHTML='<div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs"><div class="font-bold flex items-center gap-2"><i class="fas fa-times-circle"></i> Belum tepat</div><p class="text-slate-400 mt-1">Coba baca kembali materinya.</p></div>';}
  }
}
function nextLesson(){ if(currentLesson < lessons.length-1) loadLesson(currentLesson+1); }
function prevLesson(){ if(currentLesson > 0) loadLesson(currentLesson-1); }
function updateCompleteButtons(){
  const cur=lessons[currentLesson];
  const isDone=cur && !!progress[cur.id];
  const a=document.getElementById('complete-btn');
  const b=document.getElementById('completed-btn');
  if (a) a.style.display = isDone ? 'none' : 'inline-flex';
  if (b) b.style.display = isDone ? 'inline-flex' : 'none';
}
function markComplete(){
  if(currentLesson<0) return;
  progress[lessons[currentLesson].id]=true;
  localStorage.setItem('go_progress',JSON.stringify(progress));
  updateProgress(); renderNav(); updateCompleteButtons();
  if(currentLesson < lessons.length-1) setTimeout(()=>loadLesson(currentLesson+1),600);
}
function updateProgress(){
  const done=Object.keys(progress).filter(function(k){return !!progress[k];}).length;
  const total=lessons.length;
  const pct=Math.round((done/total)*100);
  const elP=document.getElementById('course-progress'); if(elP) elP.textContent=pct+'%';
  const elF=document.getElementById('progress-fill'); if(elF) elF.style.width=pct+'%';
  const elDone=document.getElementById('stat-done'); if(elDone) elDone.textContent=String(done);
  const mob=document.getElementById('mobile-progress'); if(mob) mob.textContent=pct+'%';
  const bar=document.getElementById('progress-fill-bar'); if(bar) bar.style.width=pct+'%';
  const t=document.getElementById('progress-text'); if(t) t.textContent=pct+'%';
}
function resetProgress(){ if(!confirm('Reset semua progress?')) return; progress={}; localStorage.removeItem('go_progress'); updateProgress(); renderNav(); updateCompleteButtons(); }
function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

document.addEventListener('DOMContentLoaded',()=>{
  progress=JSON.parse(localStorage.getItem('go_progress')||'{}');
  renderNav();
  updateProgress();
  updateCompleteButtons();
  // gutter live
  const ed=document.getElementById('code-editor');
  if(ed){ ed.addEventListener('input',updateGutter); ed.addEventListener('scroll',()=>{ const g=document.getElementById('editor-gutter'); if(g) g.scrollTop=ed.scrollTop; }); }
  // tabs
  document.querySelectorAll('.tab').forEach(t=>{
    t.addEventListener('click',()=>{
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
      const panel=document.getElementById('tab-'+t.dataset.tab);
      if(panel) panel.classList.add('active');
    });
  });
  // search
  const s=document.getElementById('searchInput') || document.getElementById('lesson-search');
  const sm=document.getElementById('searchInputMobile') || document.getElementById('lesson-search-mobile');
  const handler=(v)=>{ filterQuery=v; renderNav(); };
  if(s) s.addEventListener('input',e=>handler(e.target.value));
  if(sm) sm.addEventListener('input',e=>{ handler(e.target.value); if(s) s.value=e.target.value; });
  document.addEventListener('keydown',e=>{
    if(e.key==='/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)){ e.preventDefault(); s?.focus(); }
    if((e.metaKey||e.ctrlKey) && e.key==='Enter'){ e.preventDefault(); runCode(); }
    if(e.key==='Escape'){ document.getElementById('sidebar')?.classList.remove('open'); document.getElementById('backdrop')?.classList.remove('show'); }
  });
  // terminal enter
  const ti=document.getElementById('terminal-input');
  if(ti) ti.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); runTerminal(); }});
  // mobile
  const mt=document.getElementById('menuToggle');
  const bd=document.getElementById('backdrop');
  if(mt) mt.addEventListener('click',()=>{
    const sb=document.getElementById('sidebar');
    sb?.classList.toggle('open');
    bd?.classList.toggle('show');
  });
  if(bd) bd.addEventListener('click',()=>{
    document.getElementById('sidebar')?.classList.remove('open');
    bd.classList.remove('show');
  });
  // theme
  const stored=localStorage.getItem('theme');
  if(stored==='light') document.body.classList.add('light');
  // initial gutter
  setTimeout(updateGutter,200);
  // auto-load first lesson
  if (typeof loadLesson === 'function') setTimeout(() => {
    try {
      const savedLast = parseInt(localStorage.getItem('go_last_lesson') || '0', 10);
      loadLesson(!isNaN(savedLast) && savedLast >= 0 && savedLast < lessons.length ? savedLast : 0);
    } catch(e) { loadLesson(0); }
  }, 80);
});


// ============================================

// ============================================
// Unified Certificate Generator & Gating (100% Completion Only)
// ============================================

window.isCourseFullyCompleted = function() {
    const total = typeof lessons !== 'undefined' ? lessons.length : 40;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    return total > 0 && done >= total;
};

window.openCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const total = typeof lessons !== 'undefined' ? lessons.length : 40;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isCompleted = done >= total && total > 0;

    const lockedView = document.getElementById('cert-locked-view');
    const unlockedView = document.getElementById('cert-unlocked-view');
    const unlockedFooter = document.getElementById('cert-unlocked-footer');

    if (!isCompleted) {
        // Show Locked State
        if (lockedView) lockedView.classList.remove('hidden');
        if (unlockedView) unlockedView.classList.add('hidden');
        if (unlockedFooter) unlockedFooter.classList.add('hidden');

        const pText = document.getElementById('cert-locked-progress-text');
        const pBar = document.getElementById('cert-locked-progress-bar');
        const rText = document.getElementById('cert-locked-remaining-text');
        if (pText) pText.textContent = `${done} / ${total} (${pct}%)`;
        if (pBar) pBar.style.width = `${pct}%`;
        if (rText) rText.textContent = `Tersisa ${Math.max(0, total - done)} pelajaran lagi untuk membuka sertifikat.`;
    } else {
        // Show Unlocked State
        if (lockedView) lockedView.classList.add('hidden');
        if (unlockedView) unlockedView.classList.remove('hidden');
        if (unlockedFooter) unlockedFooter.classList.remove('hidden');

        const savedName = localStorage.getItem('user_cert_name') || 'Software Engineer';
        const input = document.getElementById('cert-name-input');
        if (input) input.value = savedName;

        setTimeout(() => {
            window.drawCertificate();
        }, 100);
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.drawCertificate = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const studentName = (document.getElementById('cert-name-input')?.value || 'Software Engineer').trim();
    localStorage.setItem('user_cert_name', studentName);
    
    // Background Dark Luxury
    ctx.fillStyle = '#0a0f1a';
    ctx.fillRect(0, 0, width, height);
    
    // Outer Border & Accents
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#06b6d4');
    gradient.addColorStop(0.5, '#0d9488');
    gradient.addColorStop(1, '#06b6d4');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, width - 60, height - 60);
    
    // Inner thin border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, width - 90, height - 90);
    
    // Corner ornaments
    const drawCorner = (x, y) => {
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
    };
    drawCorner(45, 45);
    drawCorner(width - 45, 45);
    drawCorner(45, height - 45);
    drawCorner(width - 45, height - 45);
    
    // Header Tag
    ctx.textAlign = 'center';
    ctx.font = '600 16px Inter, sans-serif';
    ctx.fillStyle = '#06b6d4';
    ctx.letterSpacing = '4px';
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 120);
    
    // Title
    ctx.font = '800 38px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Go Learning Path — Idiomatic & High Performance', width / 2, 175);
    
    // Subtext
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Diberikan kepada:', width / 2, 240);
    
    // Student Name
    ctx.font = '700 46px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(studentName, width / 2, 310);
    
    // Underline name
    const textWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((width - textWidth) / 2 - 20, 335);
    ctx.lineTo((width + textWidth) / 2 + 20, 335);
    ctx.stroke();
    
    // Paragraph
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Telah berhasil menyelesaikan 100% seluruh kurikulum interaktif, latihan kode praktik,', width / 2, 400);
    ctx.fillText('dan uji pemahaman (quiz) pada platform Go Learning Path dengan predikat Sangat Memuaskan.', width / 2, 430);
    
    // Verification & Date Footer
    const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const codeId = 'LP-' + Math.abs(studentName.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)).toString(36).toUpperCase().padStart(8, '0');
    
    ctx.textAlign = 'left';
    ctx.font = '500 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Tanggal: ${today}`, 90, 560);
    ctx.fillText(`ID Sertifikat: #${codeId}`, 90, 585);
    ctx.fillText(`Status: Terverifikasi (100% Selesai)`, 90, 610);
    
    // Seal / Badge
    ctx.save();
    ctx.beginPath();
    ctx.arc(width - 150, 570, 48, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fill();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.textAlign = 'center';
    ctx.font = '32px Inter, sans-serif';
    ctx.fillText('🐹', width - 150, 565);
    ctx.font = '700 10px Inter, sans-serif';
    ctx.fillStyle = '#06b6d4';
    ctx.fillText('VERIFIED', width - 150, 595);
    ctx.restore();
};

window.downloadCertificatePNG = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat diunduh setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    const name = (document.getElementById('cert-name-input')?.value || 'sertifikat').trim().toLowerCase().replace(/\s+/g, '-');
    link.download = `sertifikat-${name}-go.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
};

window.printCertificate = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat dicetak setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (win) {
        win.document.write(`
            <html>
                <head>
                    <title>Cetak Sertifikat</title>
                    <style>
                        body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #111; }
                        img { max-width: 95vw; max-height: 95vh; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
                        @media print {
                            body { background: transparent; }
                            img { width: 100%; max-width: 100%; }
                        }
                    </style>
                </head>
                <body onload="window.print()">
                    <img src="${dataUrl}">
                </body>
            </html>
        `);
        win.document.close();
    }
};
