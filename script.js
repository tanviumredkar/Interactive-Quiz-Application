const CATS = [
    { id: 'ai', name: 'Artificial Intelligence (AI)', icon: '🤖' },
    { id: 'tech', name: 'Technology & Programming', icon: '💻' },
    { id: 'mv', name: 'Movies & OTT Entertainment', icon: '🎬' },
    { id: 'sp', name: 'Sports', icon: '🏆' },
    { id: 'gk', name: 'General Knowledge', icon: '🌍' },
    { id: 'gg', name: 'Gaming', icon: '🎮' }
];
const QS = {
    ai: [
        { q: 'What does AI stand for?', o: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Internet', 'Artificial Internet'], a: 1 },
        { q: 'Which company developed ChatGPT?', o: ['Google', 'Microsoft', 'OpenAI', 'Amazon'], a: 2 },
        { q: 'AI that creates images and text is called?', o: ['Traditional AI', 'Generative AI', 'Reactive AI', 'Mechanical AI'], a: 1 },
        { q: 'Which programming language is most popular for AI?', o: ['Python', 'HTML', 'CSS', 'PHP'], a: 0 },
        { q: 'Machine Learning is a subset of?', o: ['Web Development', 'Artificial Intelligence', 'Networking', 'Cybersecurity'], a: 1 },
        { q: 'Which AI tool is known for generating images?', o: ['Excel', 'DALL·E', 'Chrome', 'Git'], a: 1 },
        { q: 'Robots often use which technology?', o: ['Artificial Intelligence', 'Paint', 'Photoshop', 'Bluetooth only'], a: 0 },
        { q: 'AI can be used in which of the following fields?', o: ['Healthcare', 'Education', 'Transportation', 'All of these'], a: 3 },
        { q: 'Which of these is an AI assistant?', o: ['Siri', 'Paint', 'Notepad', 'Calculator'], a: 0 },
        { q: 'AI systems primarily learn from?', o: ['Data', 'Water', 'Hardware only', 'Electricity'], a: 0 }
    ],
    tech: [
        { q: 'HTML stands for?', o: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyper Tool Markup Language', 'Home Tool Markup Language'], a: 0 },
        { q: 'CSS is used for?', o: ['Styling webpages', 'Database', 'Networking', 'Security'], a: 0 },
        { q: 'JavaScript is mainly used for?', o: ['Interactivity', 'Printing', 'Hardware Design', 'Storage'], a: 0 },
        { q: 'Git is used for?', o: ['Networking', 'Gaming', 'Photo Editing', 'Version Control'], a: 3 },
        { q: 'GitHub is a?', o: ['Code Hosting Platform', 'Browser', 'IDE', 'Database'], a: 0 },
        { q: 'Which symbol is used for IDs in CSS?', o: ['.', '#', '*', '&'], a: 1 },
        { q: 'Creator of Java?', o: ['Microsoft', 'Apple', 'Sun Microsystems', 'IBM'], a: 2 },
        { q: 'Which company created JavaScript?', o: ['Netscape', 'Microsoft', 'IBM', 'Apple'], a: 0 },
        { q: 'Company that developed Android?', o: ['Apple', 'Microsoft', 'Google', 'Samsung'], a: 2 },
        { q: 'Frontend development includes?', o: ['HTML', 'CSS', 'JavaScript', 'All of these'], a: 3 }
    ],
    mv: [
        { q: 'Hollywood is primarily located in?', o: ['New York', 'Los Angeles', 'Chicago', 'Miami'], a: 1 },
        { q: 'Which superhero is known as the Man of Steel?', o: ['Batman', 'Iron Man', 'Superman', 'Thor'], a: 2 },
        { q: 'Which company owns Marvel?', o: ['Sony', 'Disney', 'Netflix', 'Warner Bros'], a: 1 },
        { q: 'Netflix is a?', o: ['Streaming Platform', 'Browser', 'Search Engine', 'Game'], a: 0 },
        { q: 'Which movie features Pandora?', o: ['Avatar', 'Titanic', 'Frozen', 'Joker'], a: 0 },
        { q: 'Bollywood is based in?', o: ['Delhi', 'Mumbai', 'Pune', 'Chennai'], a: 1 },
        { q: 'Who is known as the King of Bollywood?', o: ['Salman Khan', 'Shah Rukh Khan', 'Aamir Khan', 'Hrithik Roshan'], a: 1 },
        { q: 'Anime originated in?', o: ['China', 'Japan', 'Korea', 'India'], a: 1 },
        { q: 'Which platform created Stranger Things?', o: ['Disney+', 'Netflix', 'Prime Video', 'Hulu'], a: 1 },
        { q: 'Oscar Awards are related to?', o: ['Sports', 'Movies', 'Music', 'Gaming'], a: 1 }
    ],
    sp: [
        { q: 'Players on a soccer team?', o: ['9', '10', '11', '12'], a: 2 },
        { q: 'Grand Slam tournaments in tennis?', o: ['2', '3', '4', '5'], a: 2 },
        { q: 'Most FIFA World Cup wins?', o: ['Germany', 'Argentina', 'Brazil', 'France'], a: 2 },
        { q: 'Sport played at Wimbledon?', o: ['Cricket', 'Tennis', 'Badminton', 'Squash'], a: 1 },
        { q: 'Olympic flag rings?', o: ['4', '5', '6', '7'], a: 1 },
        { q: 'Points for a basketball free throw?', o: ['1', '2', '3', '4'], a: 0 },
        { q: 'National sport of Japan?', o: ['Judo', 'Kendo', 'Sumo', 'Baseball'], a: 2 },
        { q: 'Length of a standard marathon?', o: ['40 km', '42.195 km', '44 km', '45 km'], a: 1 },
        { q: 'Country that invented cricket?', o: ['Australia', 'India', 'England', 'South Africa'], a: 2 },
        { q: 'Material used for tennis balls?', o: ['Leather', 'Rubber', 'Wool & Rubber', 'Plastic'], a: 2 }
    ],
    gk: [
        { q: 'What is the capital of France?', o: ['Berlin', 'Madrid', 'Paris', 'Rome'], a: 2 },
        { q: 'Which is the largest planet in our solar system?', o: ['Earth', 'Mars', 'Jupiter', 'Saturn'], a: 2 },
        { q: 'What is the largest ocean?', o: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], a: 3 },
        { q: 'Chemical symbol for Gold?', o: ['Ag', 'Au', 'Fe', 'Cu'], a: 1 },
        { q: 'Which planet is known as the Red Planet?', o: ['Venus', 'Mars', 'Jupiter', 'Mercury'], a: 1 },
        { q: 'The Taj Mahal is located in?', o: ['Delhi', 'Agra', 'Jaipur', 'Mumbai'], a: 1 },
        { q: 'Which country has the largest population?', o: ['USA', 'India', 'China', 'Brazil'], a: 2 },
        { q: 'What is the longest river in the world?', o: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], a: 1 },
        { q: 'Who painted the Mona Lisa?', o: ['Van Gogh', 'Picasso', 'Da Vinci', 'Rembrandt'], a: 2 },
        { q: 'How many bones in the adult human body?', o: ['196', '206', '216', '226'], a: 1 }
    ],
    gg: [
        { q: 'Minecraft was created by?', o: ['Valve', 'Epic Games', 'Rockstar Games', 'Mojang'], a: 3 },
        { q: 'BGMI stands for?', o: ['Battle Grounds Mobile India', 'Best Gaming Mobile India', 'Battle Game Mobile India', 'Gaming India'], a: 0 },
        { q: 'Which company created Valorant?', o: ['Ubisoft', 'EA', 'Riot Games', 'Activision'], a: 2 },
        { q: 'GTA stands for?', o: ['Grand Theft Auto', 'Great Traffic Area', 'Game Time Action', 'Global Traffic Agency'], a: 0 },
        { q: 'Free Fire is a?', o: ['Battle Royale Game', 'Racing Game', 'Puzzle Game', 'Sports Game'], a: 0 },
        { q: 'PlayStation is made by?', o: ['Microsoft', 'Sony', 'Nintendo', 'Apple'], a: 1 },
        { q: 'Xbox is made by?', o: ['Sony', 'Apple', 'Microsoft', 'Google'], a: 2 },
        { q: 'Which game features Steve?', o: ['GTA', 'Minecraft', 'Valorant', 'BGMI'], a: 1 },
        { q: 'Esports refers to?', o: ['Electronic Sports', 'Easy Sports', 'Entertainment Sports', 'Event Sports'], a: 0 },
        { q: 'Valorant is a?', o: ['Puzzle Game', 'Racing Game', 'Cricket Game', 'Strategy Shooter'], a: 3 }
    ]
};
const DT = { easy: 30, medium: 20, hard: 10 };
const PM = [
    { min: 90, msg: '🔥 Outstanding! True master!', t: '🏆' },
    { min: 70, msg: '⭐ Great job! You know your stuff!', t: '🥇' },
    { min: 50, msg: '👍 Good effort! Keep practicing!', t: '🥈' },
    { min: 30, msg: '📚 Not bad — room to grow!', t: '🥉' },
    { min: 0, msg: '💪 Keep trying — every quiz teaches!', t: '😅' },
];

let selC = null, selD = null, qs = [], cq = 0, sc2 = 0, tl = 30, tmr = null, ans = false, rv = [], corr = 0, wrng = 0;

function thm() { const h = document.documentElement, d = h.getAttribute('data-theme') === 'dark'; h.setAttribute('data-theme', d ? 'light' : 'dark'); document.querySelector('.tog').textContent = d ? '🌞' : '🌙'; }

function go(id) {
    document.querySelectorAll('.sc').forEach(s => s.classList.remove('on'));
    document.getElementById(id).classList.add('on');
    if (id === 'lb') rlb();
    if (id === 'rev') rrv();
    document.getElementById('lnk').classList.remove('open');
}

// CATEGORIES
(function () {
    document.getElementById('cgrid').innerHTML = CATS.map(c => `<div class="cc" onclick="sc3('${c.id}',this)"><div class="ci">${c.icon}</div><div class="cn">${c.name}</div></div>`).join('');
})();
function sc3(id, el) { selC = id; document.querySelectorAll('.cc').forEach(c => c.classList.remove('sel')); el.classList.add('sel'); document.getElementById('cnxt').style.display = 'inline-flex'; }

// DIFFICULTY
function sd(d, el) { selD = d; document.querySelectorAll('.dc').forEach(c => c.classList.remove('sel')); el.classList.add('sel'); document.getElementById('dnxt').style.display = 'inline-flex'; }

// START
function startQ() {
    if (!selC || !selD) return;
    qs = [...QS[selC]].sort(() => Math.random() - .5).slice(0, 10);
    cq = 0; sc2 = 0; corr = 0; wrng = 0; rv = [];
    const cat = CATS.find(c => c.id === selC);
    document.getElementById('cb').textContent = cat.icon + ' ' + cat.name;
    document.getElementById('db').textContent = selD[0].toUpperCase() + selD.slice(1);
    go('quiz'); lq();
}

// LOAD QUESTION
function lq() {
    ans = false; const q = qs[cq]; tl = DT[selD];
    document.getElementById('qn').textContent = 'Question ' + (cq + 1);
    document.getElementById('qt').textContent = q.q;
    document.getElementById('pl').textContent = 'Question ' + (cq + 1) + ' of ' + qs.length;
    const p = Math.round((cq / qs.length) * 100);
    document.getElementById('pp').textContent = p + '%';
    document.getElementById('pf').style.width = p + '%';
    document.getElementById('sb').textContent = 'Score: ' + sc2;
    document.getElementById('fb').className = 'fb';
    document.getElementById('nxt').style.display = 'none';
    const L = ['A', 'B', 'C', 'D'];
    document.getElementById('og').innerHTML = q.o.map((o, i) => `<div class="opt" onclick="so(${i},this)" id="o${i}"><span class="ol">${L[i]}</span><span>${o}</span></div>`).join('');
    utd(); clearInterval(tmr); tmr = setInterval(tick, 1000);
}

// TIMER
function tick() { tl--; utd(); if (tl <= 0) { clearInterval(tmr); if (!ans) tu(); } }
function utd() { const e = document.getElementById('tt'); e.textContent = tl; e.className = 'ttxt' + (tl <= 5 ? ' dng' : ''); }
function tu() { ans = true; const q = qs[cq]; mo(q.a, -1); sf(false, q.o[q.a]); wrng++; rv.push({ q: q.q, o: q.o, c: q.a, ch: -1 }); document.getElementById('nxt').style.display = 'inline-flex'; }

// SELECT OPTION
function so(i, el) { if (ans) return; ans = true; clearInterval(tmr); const q = qs[cq], ok = i === q.a; if (ok) { sc2 += selD === 'easy' ? 10 : selD === 'medium' ? 15 : 20; corr++; } else wrng++; mo(q.a, i); sf(ok, q.o[q.a]); rv.push({ q: q.q, o: q.o, c: q.a, ch: i }); document.getElementById('nxt').style.display = 'inline-flex'; }
function mo(ci, ch) { document.querySelectorAll('.opt').forEach(o => o.classList.add('dis')); document.getElementById('o' + ci).classList.add('ok'); if (ch >= 0 && ch !== ci) document.getElementById('o' + ch).classList.add('ng'); }
function sf(ok, ca) { const b = document.getElementById('fb'); b.className = 'fb ' + (ok ? 'ok' : 'ng'); b.innerHTML = ok ? '✅ Correct! Well done!' : `❌ Wrong! Correct answer: <strong>${ca}</strong>`; }

// NEXT
function nxQ() { cq++; if (cq >= qs.length) sres(); else lq(); }

// RESULTS
function sres() {
    clearInterval(tmr);
    const tot = qs.length, mx = tot * (selD === 'easy' ? 10 : selD === 'medium' ? 15 : 20), pc = Math.round((corr / tot) * 100), perf = PM.find(p => pc >= p.min);
    document.getElementById('rt').textContent = perf.t;
    document.getElementById('rm').textContent = perf.msg;
    document.getElementById('sp').textContent = pc + '%';
    document.getElementById('sc').style.setProperty('--pct', `${pc * 3.6}deg`);
    document.getElementById('r1').textContent = tot;
    document.getElementById('r2').textContent = sc2 + ' / ' + mx;
    document.getElementById('r3').textContent = corr;
    document.getElementById('r4').textContent = wrng;
    go('res'); slb(sc2, pc);
}

// LEADERBOARD
function slb(s, p) { const lb = JSON.parse(localStorage.getItem('qm_lb') || '[]'), cat = CATS.find(c => c.id === selC).name; lb.push({ s, p, cat, d: selD, dt: new Date().toLocaleDateString() }); lb.sort((a, b) => b.s - a.s); localStorage.setItem('qm_lb', JSON.stringify(lb.slice(0, 10))); }
function rlb() { const lb = JSON.parse(localStorage.getItem('qm_lb') || '[]'), el = document.getElementById('ll'); if (!lb.length) { el.innerHTML = '<div class="lemp">No scores yet. Play a quiz!</div>'; return; } const md = ['🥇', '🥈', '🥉']; el.innerHTML = lb.map((e, i) => `<li class="li"><span class="lrank">${md[i] || '#' + (i + 1)}</span><div class="linf"><div class="lname">${e.cat} · ${e.d[0].toUpperCase() + e.d.slice(1)}</div><div class="ldet">${e.dt} · ${e.p}% accuracy</div></div><span class="lsc">${e.s} pts</span></li>`).join(''); }
function clrLB() { if (confirm('Clear all scores?')) { localStorage.removeItem('qm_lb'); rlb(); } }

// REVIEW
function rrv() { const c = document.getElementById('rc'); if (!rv.length) { c.innerHTML = '<p style="color:var(--txt2)">Complete a quiz to see the review.</p>'; return; } c.innerHTML = rv.map((r, i) => { const rows = r.o.map((o, j) => { let cl = 'na'; if (j === r.c) cl = 'ca'; else if (j === r.ch && r.ch !== r.c) cl = 'wa'; const ic = j === r.c ? '✅' : j === r.ch ? '❌' : ''; return `<div class="ra ${cl}">${ic} ${String.fromCharCode(65 + j)}. ${o}</div>`; }).join(''); return `<div class="ritem" style="animation-delay:${i * .05}s"><div class="rq"><span class="qn">Q${i + 1}.</span>${r.q}</div><div class="rans">${rows}</div>${r.ch === -1 ? '<div style="color:var(--err);font-size:.8rem;margin-top:6px">⏰ Time ran out</div>' : ''}</div>`; }).join(''); }
