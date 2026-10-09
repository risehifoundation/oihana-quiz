/* ʻOihana Career Explorations — Career Interest Assessment
   Hosted file loaded by the Thinkific snippet. Courses come from the Google Sheet
   linked in the snippet's data-sheet="..." attribute. */
(function(){
  if(document.getElementById("oq-css")) return;
  var l=document.createElement("link"); l.rel="stylesheet";
  l.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Source+Serif+4:wght@400;600&display=swap";
  document.head.appendChild(l);
  var st=document.createElement("style"); st.id="oq-css";
  st.textContent="\n#oihana-quiz{\n  --ink:#231e2a; --white:#ffffff; --vanilla:#fffae8; --lime:#c9d96e;\n  --cloud:#eeeeee; --fog:#ccd9e5;\n  --R:#5cc1ee; --I:#375ba6; --A:#ef5da8; --S:#2ecc71; --E:#ff914d; --C:#fddf66;\n  font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;\n  color:var(--ink); line-height:1.5; max-width:880px; margin:0 auto; padding:0 6px 6px 0;\n  -webkit-font-smoothing:antialiased;\n}\n#oihana-quiz *,#oihana-quiz *::before,#oihana-quiz *::after{box-sizing:border-box}\n#oihana-quiz button{font-family:inherit;cursor:pointer}\n#oihana-quiz .oq-card{background:var(--white);border:2px solid var(--ink);border-radius:16px;overflow:hidden;box-shadow:6px 6px 0 var(--ink)}\n/* header */\n#oihana-quiz .oq-head{display:flex;align-items:center;justify-content:space-between;gap:12px;background:var(--ink);color:var(--white);padding:14px 22px}\n#oihana-quiz .oq-brand{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.08em;font-size:20px}\n#oihana-quiz .oq-brand small{font-weight:500;letter-spacing:.08em;font-size:11px;opacity:.85;border-left:1px solid rgba(255,255,255,.4);padding-left:10px;line-height:1.25}\n#oihana-quiz .oq-head .oq-step{font-size:13px;font-weight:600;color:var(--lime);white-space:nowrap}\n/* grid motif */\n#oihana-quiz .oq-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(28px,1fr));border-bottom:2px solid var(--ink);background:var(--white)}\n#oihana-quiz .oq-grid span{aspect-ratio:1;border-right:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5}\n#oihana-quiz .oq-body{padding:32px 28px 36px;background:var(--white)}\n#oihana-quiz h2{font-weight:900;font-size:clamp(26px,5vw,38px);line-height:1.1;margin:0 0 12px;letter-spacing:-.01em}\n#oihana-quiz h3{font-weight:800;font-size:20px;margin:0 0 6px}\n#oihana-quiz .oq-serif{font-family:'Source Serif 4','Source Serif Pro',Georgia,serif}\n#oihana-quiz p{margin:0 0 14px}\n#oihana-quiz .oq-lede{font-size:18px;max-width:60ch}\n#oihana-quiz .oq-meta{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 26px}\n#oihana-quiz .oq-pill{display:inline-flex;align-items:center;gap:6px;background:var(--vanilla);border:1.5px solid var(--ink);border-radius:999px;padding:5px 12px;font-size:13px;font-weight:600}\n#oihana-quiz .oq-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--lime);color:var(--ink);border:2px solid var(--ink);border-radius:12px;padding:14px 26px;font-size:17px;font-weight:800;box-shadow:3px 3px 0 var(--ink);transition:transform .08s,box-shadow .08s;text-decoration:none}\n#oihana-quiz .oq-btn:hover{transform:translate(-1px,-1px);box-shadow:4px 4px 0 var(--ink)}\n#oihana-quiz .oq-btn:active{transform:translate(2px,2px);box-shadow:1px 1px 0 var(--ink)}\n#oihana-quiz .oq-btn.oq-ghost{background:var(--white)}\n#oihana-quiz .oq-btn:focus-visible,#oihana-quiz .oq-opt:focus-visible{outline:3px solid var(--I);outline-offset:3px}\n/* progress */\n#oihana-quiz .oq-progress{height:10px;background:var(--cloud);border:1.5px solid var(--ink);border-radius:999px;overflow:hidden;margin-bottom:30px}\n#oihana-quiz .oq-progress i{display:block;height:100%;background:var(--lime);transition:width .25s ease}\n#oihana-quiz .oq-q-label{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;opacity:.65;margin-bottom:8px}\n#oihana-quiz .oq-q{font-size:clamp(22px,4vw,30px);font-weight:800;line-height:1.25;min-height:2.6em;margin-bottom:26px}\n#oihana-quiz .oq-opts{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}\n#oihana-quiz .oq-scale-ends{display:flex;justify-content:space-between;font-size:12px;font-weight:700;opacity:.6;margin-top:8px}\n#oihana-quiz .oq-dot{width:22px;height:22px;border:2px solid var(--ink);border-radius:50%;background:var(--white)}\n#oihana-quiz .oq-opt.oq-sel .oq-dot{background:var(--ink)}\n#oihana-quiz .oq-logo{height:34px;width:auto;display:block}\n#oihana-quiz .oq-paths{display:grid;gap:14px;margin:16px 0 8px}\n#oihana-quiz .oq-path{border:2px solid var(--ink);border-radius:14px;padding:18px 20px;background:var(--vanilla)}\n#oihana-quiz .oq-path-head{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:6px}\n#oihana-quiz .oq-path-head h4{margin:0;font-size:20px;font-weight:800}\n#oihana-quiz .oq-path-icon{font-size:24px;line-height:1}\n#oihana-quiz .oq-path p{margin:0 0 12px;font-size:15px}\n#oihana-quiz .oq-path-courses{display:flex;flex-wrap:wrap;gap:8px}\n#oihana-quiz .oq-path-courses a,#oihana-quiz .oq-path-courses span{font-size:13px;font-weight:700;background:var(--white);border:1.5px solid var(--ink);border-radius:8px;padding:4px 10px;color:var(--ink);text-decoration:none}\n#oihana-quiz .oq-path-courses a:hover{background:var(--lime)}\n#oihana-quiz .oq-pathname{font-size:12px;font-weight:700;opacity:.75}\n#oihana-quiz .oq-research{margin-top:30px;border:2px dashed var(--ink);border-radius:14px;padding:18px 20px;background:var(--white)}\n#oihana-quiz .oq-research h4{margin:0 0 6px;font-size:17px;font-weight:800}\n#oihana-quiz .oq-research p{margin:0 0 8px;font-size:15px}\n#oihana-quiz .oq-research p:last-child{margin:0}\n#oihana-quiz .oq-research a{color:var(--I);font-weight:700}\n#oihana-quiz .oq-opt{background:var(--white);border:2px solid var(--ink);border-radius:14px;padding:16px 6px;font-size:14px;line-height:1.2;text-align:center;color:var(--ink);font-weight:700;display:flex;flex-direction:column;align-items:center;gap:6px;box-shadow:3px 3px 0 var(--ink);transition:transform .08s,background .15s}\n#oihana-quiz .oq-opt b{font-size:28px;line-height:1}\n#oihana-quiz .oq-opt:hover{background:var(--vanilla)}\n#oihana-quiz .oq-opt.oq-sel{background:var(--lime)}\n#oihana-quiz .oq-nav{display:flex;justify-content:space-between;margin-top:22px}\n#oihana-quiz .oq-link{background:none;border:0;color:var(--ink);font-weight:600;text-decoration:underline;padding:6px 0;font-size:15px}\n#oihana-quiz .oq-link[disabled]{opacity:.3;cursor:default}\n/* results */\n#oihana-quiz .oq-types{display:grid;gap:10px;margin:18px 0 8px}\n#oihana-quiz .oq-row{display:grid;grid-template-columns:120px 1fr 34px;align-items:center;gap:10px;font-size:14px;font-weight:700}\n#oihana-quiz .oq-bar{height:16px;border:1.5px solid var(--ink);border-radius:6px;background:var(--cloud);overflow:hidden}\n#oihana-quiz .oq-bar i{display:block;height:100%}\n#oihana-quiz .oq-top{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:18px 0 30px}\n#oihana-quiz .oq-type{border:2px solid var(--ink);border-radius:14px;padding:16px 18px;background:var(--vanilla)}\n#oihana-quiz .oq-type .oq-chip{display:inline-block;border:1.5px solid var(--ink);border-radius:8px;padding:2px 10px;font-weight:800;font-size:13px;margin-bottom:8px}\n#oihana-quiz .oq-type p{margin:0;font-size:15px}\n#oihana-quiz .oq-section{font-weight:900;font-size:22px;margin:30px 0 4px}\n#oihana-quiz .oq-courses{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;margin-top:16px}\n#oihana-quiz .oq-course{border:2px solid var(--ink);border-radius:14px;overflow:hidden;display:flex;flex-direction:column;background:var(--white)}\n#oihana-quiz .oq-course-top{padding:14px 16px 12px;border-bottom:2px solid var(--ink);position:relative}\n#oihana-quiz .oq-course-top h4{margin:0;font-size:19px;font-weight:800;line-height:1.2;padding-right:4px}\n#oihana-quiz .oq-match{display:inline-block;margin-top:8px;background:var(--white);border:1.5px solid var(--ink);border-radius:999px;padding:2px 10px;font-size:12px;font-weight:800}\n#oihana-quiz .oq-course-body{padding:14px 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1}\n#oihana-quiz .oq-course-body p{margin:0;font-size:15px}\n#oihana-quiz .oq-mentor{font-size:13px;font-style:italic;opacity:.8}\n#oihana-quiz .oq-tags{display:flex;flex-wrap:wrap;gap:6px}\n#oihana-quiz .oq-tag{font-size:11px;font-weight:800;border:1.5px solid var(--ink);border-radius:6px;padding:1px 7px}\n#oihana-quiz .oq-course .oq-btn{margin-top:auto;padding:10px 16px;font-size:15px;align-self:flex-start}\n#oihana-quiz .oq-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}\n#oihana-quiz .oq-note{font-size:13px;opacity:.7;margin-top:22px}\n#oihana-quiz .oq-loading{padding:40px;text-align:center;font-weight:600}\n@media (max-width:560px){\n  #oihana-quiz .oq-body{padding:24px 18px 28px}\n  #oihana-quiz .oq-opts{grid-template-columns:1fr;gap:8px}\n  #oihana-quiz .oq-opt{flex-direction:row;justify-content:flex-start;gap:12px;padding:12px 14px;font-size:15px;text-align:left}\n  #oihana-quiz .oq-scale-ends{display:none}\n  #oihana-quiz .oq-row{grid-template-columns:96px 1fr 28px;font-size:13px}\n  #oihana-quiz .oq-brand small{display:none}\n  #oihana-quiz .oq-head{padding:12px 16px}\n}\n@media (prefers-reduced-motion:reduce){#oihana-quiz *{transition:none!important}}\n";
  document.head.appendChild(st);
})();
(function(){
/* =====================  SETTINGS  ===================== */
var SETTINGS = {
  // 1) Paste your Google Sheet's "Publish to web" CSV link here (between the quotes).
  //    Leave it empty to use the built-in backup list at the bottom of this file.
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcFpGSvatpx0WydmZsgMOgCd7kkRuYQmLPactcgZOZ9oLE9ek33PhHwnqn_oHB6sZ23jO33puVU6v-/pub?output=csv",

  // 2) Where the "Start this course" button goes if a course has no Thinkific Link yet.
  //    (e.g. your course catalog page). Leave empty to hide the button for those courses.
  DEFAULT_COURSE_LINK: "https://oihana.thinkific.com/hub",

  // 3) How many top matches to show before "See all courses".
  TOP_MATCHES: 5,

  // 4) Logo shown in the dark header bar (use a white/light version of the logo).
  //    Leave empty to use the built-in logo below.
  LOGO_URL: ""
};
/* ====================================================== */

/* The six interest types (Holland Codes / RIASEC), in ʻOihana colors */
var TYPES = {
  R:{name:"Builder",   formal:"Realistic",    color:"var(--R)", desc:"You like hands-on work: building, fixing, using tools, and being active. You'd rather do it than read about it."},
  I:{name:"Thinker",   formal:"Investigative",color:"var(--I)", desc:"You're curious about how things work. You like solving problems, science, tech, and figuring things out."},
  A:{name:"Creator",   formal:"Artistic",     color:"var(--A)", desc:"You like making original things: designs, videos, food, fashion, and ideas no one has tried yet."},
  S:{name:"Helper",    formal:"Social",       color:"var(--S)", desc:"You care about people. You like helping, teaching, and taking care of others and your community."},
  E:{name:"Leader",    formal:"Enterprising", color:"var(--E)", desc:"You like taking charge, pitching ideas, starting things, and leading a team toward a goal."},
  C:{name:"Organizer", formal:"Conventional", color:"var(--C)", desc:"You like order and getting the details right. Numbers, schedules, and clear steps are your thing."}
};
var TYPE_ORDER = ["R","I","A","S","E","C"];

/* Questions: 5 per type, mixed together. "Would you enjoy…" */
var QUESTIONS = [
  ["R","Building or fixing things with my hands"],
  ["I","Figuring out how things work"],
  ["A","Designing how something looks"],
  ["S","Helping people with their problems or needs"],
  ["E","Starting my own business someday"],
  ["C","Keeping things neat, organized, and in order"],
  ["R","Working outside instead of sitting at a desk"],
  ["I","Solving a tricky puzzle or problem until I crack it"],
  ["A","Creating art, music, videos, or writing"],
  ["S","Explaining or teaching something to someone else"],
  ["E","Leading a team or being in charge of a project"],
  ["C","Following steps carefully so everything comes out exact"],
  ["R","Working with machines, vehicles, tools, or equipment"],
  ["I","Running experiments or testing out ideas to see what happens"],
  ["A","Making something original that's all my own"],
  ["S","Helping people feel calm and comfortable"],
  ["E","Convincing people to support my idea"],
  ["C","Working with numbers, schedules, or records"],
  ["R","Working with plants, animals, or the ocean"],
  ["I","Researching a topic until I understand it really well"],
  ["A","Coming up with creative ideas no one has tried before"],
  ["S","Serving my community, like kūpuna, keiki, and neighbors"],
  ["E","Sharing my ideas with a group to get them excited"],
  ["C","Double-checking details so nothing gets missed"],
  ["R","Doing active, physical work where I can see what I got done"],
  ["I","Using science, math, or technology to answer questions"],
  ["A","Using my imagination and my own style in my work"],
  ["S","Working on a team where everyone looks out for each other"],
  ["E","Making big decisions and being responsible for the results"],
  ["C","Budgeting or keeping track of money"]
];
var OPTIONS = [{v:0,label:"Disagree"},{v:1,label:"Slightly disagree"},{v:2,label:"Not sure"},{v:3,label:"Slightly agree"},{v:4,label:"Agree"}];
var MAX_PER_Q = 4;

/* Hawaiʻi CTE Career Pathways. A pathway only shows up if at least one Live course uses it.
   The name must match the "Career Pathway" column in the sheet exactly. */
var PATHWAYS = {
  "Health Services":{icon:"🩺",desc:"Careers that keep people healthy: caring for patients, running tests, and supporting doctors and nurses."},
  "Arts & Communication":{icon:"🎨",desc:"Careers in design, media, and storytelling: creating things people see, wear, watch, and live in."},
  "Business":{icon:"💼",desc:"Careers in starting, running, and growing a business: leading people, managing money, and making deals."},
  "Industrial & Engineering Technology":{icon:"🛠️",desc:"Careers that build, power, move, and connect Hawaiʻi: construction, engineering, energy, transportation, and tech."},
  "Public & Human Services":{icon:"🤝",desc:"Careers that serve the community and its guests: keeping people safe, feeding them, and welcoming visitors."},
  "Agriculture, Food & Natural Resources":{icon:"🌱",desc:"Careers that care for the ʻāina and the ocean: farming, food production, and protecting natural resources."}
};

var root = document.getElementById("oihana-quiz");
/* A sheet link on the Thinkific snippet (data-sheet="...") overrides the setting above */
if(root && root.getAttribute("data-sheet")) SETTINGS.SHEET_CSV_URL = root.getAttribute("data-sheet").trim();
var courses = [];
var answers = [];
var current = 0;

/* ---------- helpers ---------- */
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function parseCSV(text){
  var rows=[],row=[],f="",q=false,i,c;
  text=text.replace(/^﻿/,"");
  for(i=0;i<text.length;i++){
    c=text[i];
    if(q){ if(c==='"'){ if(text[i+1]==='"'){f+='"';i++;} else q=false; } else f+=c; }
    else if(c==='"') q=true;
    else if(c===','){row.push(f);f="";}
    else if(c==='\n'||c==='\r'){ if(c==='\r'&&text[i+1]==='\n') i++; row.push(f); rows.push(row); row=[]; f=""; }
    else f+=c;
  }
  if(f!==""||row.length){row.push(f);rows.push(row);}
  return rows.filter(function(r){return r.some(function(x){return x.trim()!=="";});});
}
function toCourses(csvText){
  var rows=parseCSV(csvText); if(!rows.length) return [];
  var head=rows[0].map(function(h){return h.trim().toLowerCase();});
  function col(name){return head.indexOf(name);}
  var ci={order:col("order"),name:col("course"),status:col("status"),mentor:col("mentor"),
          codes:col("interest codes"),path:col("career pathway"),desc:col("description"),link:col("thinkific link")};
  return rows.slice(1).map(function(r){
    function g(k){return ci[k]>-1&&r[ci[k]]!=null?r[ci[k]].trim():"";}
    var codes=g("codes").toUpperCase().split(/[^RIASEC]+/).filter(Boolean);
    return {order:parseFloat(g("order"))||999,name:g("name"),status:g("status").toLowerCase(),
            mentor:g("mentor"),codes:codes,paths:g("path").split(";").map(function(p){return p.trim();}).filter(Boolean),desc:g("desc"),link:g("link")};
  }).filter(function(c){return c.name && c.status==="live" && c.codes.length;});
}
function grid(){
  var tints=["#fddf66","#5cc1ee","#f3b6d4","#c9d96e","#ccd9e5","#eeeeee","#2ecc71","#ff914d"],h="";
  for(var i=0;i<64;i++){var r=Math.random();h+='<span style="background:'+(r<.22?tints[i%tints.length]+(r<.08?"":"66"):"#fff")+'"></span>';}
  return '<div class="oq-grid" aria-hidden="true" style="grid-template-rows:28px;overflow:hidden;height:28px">'+h+'</div>';
}
var LOGO_DATA="data:image/png;base64,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"; /* built-in logo image (filled in below if available) */
var LEAF='<svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true"><path d="M13 1.5C6 4 1.8 11 1.8 18.3c0 5.6 3.6 9.6 7.4 9.6 1.6 0 2.9-.8 3.8-2 .9 1.2 2.2 2 3.8 2 3.8 0 7.4-4 7.4-9.6C24.2 11 20 4 13 1.5z" fill="#c9d96e" stroke="#fff" stroke-width="2.2"/><path d="M13 3v22M13 25c-2-4-6-6-9.5-6.5M13 25c2-4 6-6 9.5-6.5M13 19c-2-3-5-5-8-6M13 19c2-3 5-5 8-6" fill="none" stroke="#231e2a" stroke-width="1.6" stroke-linecap="round"/></svg>';
function frame(stepText, inner){
  var logo = SETTINGS.LOGO_URL || LOGO_DATA;
  var brand = logo ? '<img class="oq-logo" src="'+logo+'" alt="ʻOihana"><small>CAREER<br>EXPLORATIONS</small>'
                   : LEAF+'<span>ʻOIHANA</span><small>CAREER<br>EXPLORATIONS</small>';
  return '<div class="oq-card"><div class="oq-head"><div class="oq-brand">'+brand+'</div>'+
         (stepText?'<div class="oq-step">'+esc(stepText)+'</div>':'')+'</div>'+grid()+'<div class="oq-body">'+inner+'</div></div>';
}
function scrollTop(){var r=root.getBoundingClientRect(); if(r.top<0) window.scrollBy({top:r.top-20,behavior:"smooth"});}

/* ---------- screens ---------- */
function showIntro(){
  root.innerHTML=frame("",
    '<h2>Find careers that fit <em class="oq-serif" style="font-weight:600">you</em>, right here at home.</h2>'+
    '<p class="oq-lede">Answer '+QUESTIONS.length+' quick questions about what you enjoy. We\'ll show you which ʻOihana career courses match your interests best.</p>'+
    '<div class="oq-meta"><span class="oq-pill">⏱ About 5 minutes</span><span class="oq-pill">✅ No right or wrong answers</span><span class="oq-pill">📚 '+courses.length+' career courses</span></div>'+
    '<div class="oq-research" style="margin:0 0 26px"><h4>🔎 Heads up</h4><p>This assessment only matches you with careers that ʻOihana currently has courses for, and there are many more careers that fit your interests! Use your results as a starting point for your own research.</p></div>'+
    '<button class="oq-btn" data-act="start">Let\'s go →</button>'+
    '<p class="oq-note" style="margin-top:20px"><em>This career interest assessment is based on the Holland Codes (RIASEC) model, the same six interest types used in the U.S. Department of Labor\'s <a href="https://www.onetcenter.org/IP.html" target="_blank" rel="noopener" style="color:inherit">O*NET Interest Profiler</a>.</em></p>');
}
function showQuestion(){
  var q=QUESTIONS[current], pct=Math.round(current/QUESTIONS.length*100);
  var opts=OPTIONS.map(function(o){
    return '<button class="oq-opt'+(answers[current]===o.v?' oq-sel':'')+'" data-val="'+o.v+'" aria-pressed="'+(answers[current]===o.v)+'"><span class="oq-dot"></span>'+o.label+'</button>';
  }).join("");
  root.innerHTML=frame("Question "+(current+1)+" of "+QUESTIONS.length,
    '<div class="oq-progress" role="progressbar" aria-valuenow="'+pct+'" aria-valuemin="0" aria-valuemax="100"><i style="width:'+pct+'%"></i></div>'+
    '<div class="oq-q-label">How much do you agree? I would enjoy…</div><div class="oq-q">'+esc(q[1])+'</div>'+
    '<div class="oq-opts" role="group" aria-label="How much do you agree?">'+opts+'</div>'+
    '<div class="oq-nav"><button class="oq-link" data-act="back"'+(current===0?' disabled':'')+'>← Back</button>'+
    (answers[current]!=null?'<button class="oq-link" data-act="next">Next →</button>':'<span></span>')+'</div>');
}
function score(){
  var s={},max={};
  TYPE_ORDER.forEach(function(t){s[t]=0;max[t]=0;});
  QUESTIONS.forEach(function(q,i){s[q[0]]+=answers[i]||0;max[q[0]]+=MAX_PER_Q;});
  var norm={}; TYPE_ORDER.forEach(function(t){norm[t]=max[t]?s[t]/max[t]:0;});
  return norm;
}
function rankCourses(norm){
  var W=[3,2,1];
  return courses.map(function(c){
    var tot=0,sum=0;
    c.codes.slice(0,3).forEach(function(t,i){tot+=W[i];sum+=W[i]*(norm[t]||0);});
    return {c:c,m:tot?sum/tot:0};
  }).sort(function(a,b){return b.m-a.m||a.c.order-b.c.order;});
}
function rankPathways(ranked){
  var by={};
  ranked.forEach(function(x){ x.c.paths.forEach(function(p){ (by[p]=by[p]||[]).push(x); }); });
  return Object.keys(by).map(function(p){
    var list=by[p], top=list.slice(0,2), m=top.reduce(function(a,x){return a+x.m;},0)/top.length;
    return {name:p,m:m,list:list};
  }).sort(function(a,b){return b.m-a.m;});
}
function pathCard(p){
  var info=PATHWAYS[p.name]||{icon:"🧭",desc:""};
  return '<div class="oq-path"><div class="oq-path-head"><span class="oq-path-icon">'+info.icon+'</span><h4>'+esc(p.name)+'</h4><span class="oq-match">'+matchLabel(p.m)+'</span></div>'+
    (info.desc?'<p>'+esc(info.desc)+'</p>':'')+
    '<div class="oq-pathname" style="margin-bottom:8px">ʻOihana courses in this pathway, best match first:</div>'+
    '<div class="oq-path-courses">'+p.list.map(function(x){var l=x.c.link||SETTINGS.DEFAULT_COURSE_LINK;
      return l?'<a href="'+esc(l)+'" target="_top">'+esc(x.c.name)+'</a>':'<span>'+esc(x.c.name)+'</span>';}).join("")+'</div></div>';
}
function matchLabel(m){return m>=.7?"⭐ Strong match":m>=.45?"Good match":"Worth exploring";}
function courseCard(x){
  var c=x.c, t=TYPES[c.codes[0]], link=c.link||SETTINGS.DEFAULT_COURSE_LINK;
  return '<div class="oq-course"><div class="oq-course-top" style="background:'+t.color+';'+(c.codes[0]==="I"?'color:#fff':'')+'">'+
    '<h4>'+esc(c.name)+'</h4><span class="oq-match" style="color:var(--ink)">'+matchLabel(x.m)+'</span></div>'+
    '<div class="oq-course-body"><p>'+esc(c.desc)+'</p>'+
    (c.paths.length?'<div class="oq-pathname">'+c.paths.map(function(p){return (PATHWAYS[p]?PATHWAYS[p].icon+' ':'')+esc(p);}).join(' · ')+'</div>':'')+
    (c.mentor?'<div class="oq-mentor">Learn from '+esc(c.mentor)+'</div>':'')+
    '<div class="oq-tags">'+c.codes.map(function(k){return '<span class="oq-tag" style="background:'+TYPES[k].color+(k==="I"?';color:#fff':'')+'">'+TYPES[k].name+'</span>';}).join("")+'</div>'+
    (link?'<a class="oq-btn" href="'+esc(link)+'" target="_top">Start this course →</a>':'')+
    '</div></div>';
}
function showResults(showAll){
  var norm=score();
  var order=TYPE_ORDER.slice().sort(function(a,b){return norm[b]-norm[a];});
  var top=order.slice(0,2);
  var ranked=rankCourses(norm);
  var list=showAll?ranked:ranked.slice(0,SETTINGS.TOP_MATCHES);
  var paths=rankPathways(ranked).slice(0,2);
  var bars=order.map(function(t){
    return '<div class="oq-row"><span>'+TYPES[t].name+'</span><div class="oq-bar"><i style="width:'+Math.round(norm[t]*100)+'%;background:'+TYPES[t].color+'"></i></div><span>'+Math.round(norm[t]*100)+'</span></div>';
  }).join("");
  var tops=top.map(function(t){
    return '<div class="oq-type"><span class="oq-chip" style="background:'+TYPES[t].color+(t==="I"?';color:#fff':'')+'">'+TYPES[t].name+'</span><p>'+TYPES[t].desc+'</p></div>';
  }).join("");
  root.innerHTML=frame("Your results",
    '<h2>You\'re a '+TYPES[top[0]].name+' + '+TYPES[top[1]].name+'!</h2>'+
    '<p class="oq-lede">Here\'s what you\'re into, and the ʻOihana courses that match it best.</p>'+
    '<div class="oq-top">'+tops+'</div>'+
    '<h3>Your interest mix</h3><div class="oq-types">'+bars+'</div>'+
    (paths.length?'<div class="oq-section">Your best-match career pathways</div>'+
      '<p style="margin:0;opacity:.75">Career pathways group careers that share similar interests and skills.</p>'+
      '<div class="oq-paths">'+paths.map(pathCard).join("")+'</div>':'')+
    '<div class="oq-section">'+(showAll?'All '+ranked.length+' courses, best match first':'Your top course matches')+'</div>'+
    '<p style="margin:0;opacity:.75">Every career on this list is happening right here in Hawaiʻi.</p>'+
    '<div class="oq-courses">'+list.map(courseCard).join("")+'</div>'+
    '<div class="oq-research" style="border-style:solid;background:var(--vanilla)"><h4>📸 Save your results!</h4><p>Take a screenshot before you leave this page. Your results will disappear once you click away. You can retake the assessment at any time.</p></div>'+
    '<div class="oq-actions">'+
      (showAll?'':'<button class="oq-btn" data-act="all">See all '+ranked.length+' courses</button>')+
      '<button class="oq-btn oq-ghost" data-act="restart">↺ Retake the quiz</button></div>'+
    '<div class="oq-research"><h4>🔎 Keep exploring beyond ʻOihana</h4>'+
      '<p>This assessment only matches you with careers that ʻOihana currently has courses for, and there are many more careers that fit your interests! '+
      'Use your results as a starting point for your own research.</p>'+
      '<p>Try searching for <b>"'+TYPES[top[0]].formal+' and '+TYPES[top[1]].formal+' careers"</b> (the official names for your top two interest types), '+
      'look up careers in your best-match pathways, or take the free interest profiler at '+
      '<a href="https://www.mynextmove.org/explore/ip" target="_blank" rel="noopener">My Next Move</a> to discover even more options.</p></div>'+
    '<p class="oq-note">This quiz is a starting point, not a final answer. Interests change, so explore any course that sparks your curiosity! Your answers are not saved or shared.</p>');
}

/* ---------- events ---------- */
root.addEventListener("click",function(e){
  var b=e.target.closest("button"); if(!b||!root.contains(b)) return;
  var act=b.getAttribute("data-act");
  if(b.hasAttribute("data-val")){
    answers[current]=+b.getAttribute("data-val");
    b.classList.add("oq-sel");
    setTimeout(function(){ if(current<QUESTIONS.length-1){current++;showQuestion();} else {showResults(false);scrollTop();} },180);
    return;
  }
  if(act==="start"){current=0;answers=[];showQuestion();scrollTop();}
  else if(act==="back"&&current>0){current--;showQuestion();}
  else if(act==="next"){ if(current<QUESTIONS.length-1){current++;showQuestion();} else showResults(false); }
  else if(act==="all"){showResults(true);}
  else if(act==="restart"){answers=[];current=0;showIntro();scrollTop();}
});

/* ---------- load courses ---------- */
function useBackup(){courses=toCourses(backupCSV());}
root.innerHTML='<div class="oq-loading">Loading ʻOihana careers…</div>';
if(SETTINGS.SHEET_CSV_URL){
  fetch(SETTINGS.SHEET_CSV_URL+(SETTINGS.SHEET_CSV_URL.indexOf("?")>-1?"&":"?")+"t="+Date.now())
    .then(function(r){if(!r.ok) throw 0; return r.text();})
    .then(function(t){courses=toCourses(t); if(!courses.length) useBackup();})
    .catch(useBackup)
    .then(showIntro);
} else { useBackup(); showIntro(); }

/* ---------- BACKUP COURSE LIST ----------
   Only used if the Google Sheet link above is empty or can't load.
   Same columns as the Master Course List sheet. */
function backupCSV(){ return [
    "Order,Course,Status,Mentor,Interest Codes,Career Pathway,Description,Thinkific Link",
    "1,Pharmacy Technician,Live,Noelle Aiono,\"C,I,S\",Health Services,\"Prepare and dispense medications alongside pharmacists, keeping patients safe through careful, accurate work.\",",
    "2,Hospital Aide,Live,Shanadee Kekauoha,\"S,R\",Health Services,Support nurses and patients with the everyday care that keeps a hospital running.,",
    "3,General Contractor,Live,Nick Tang,\"R,E,C\",Industrial & Engineering Technology,\"Run construction projects from plans to finished build, leading crews and managing budgets.\",",
    "4,Entrepreneur,Live,Tiana Gamble,\"E,A,C\",Business,Turn an idea into your own business and build something on your own terms.,",
    "5,Graphic Designer,Live,Scott Naʻauao,\"A,E\",Arts & Communication,\"Use color, type, and images to create logos, posters, and digital designs that communicate.\",",
    "6,Commercial Driver,Live,Alapaʻi Andrews,\"R,C\",Industrial & Engineering Technology,Operate trucks and heavy vehicles that move the goods our islands depend on.,",
    "7,Chef,Live,Jason Peel,\"A,R,E\",Public & Human Services,\"Create dishes, lead a kitchen, and share the flavors of Hawaiʻi through food.\",",
    "8,Filmmaker,Live,Kolby Moser,\"A,E\",Arts & Communication,\"Tell stories on screen, from the first idea and the shoot to the final edit.\",",
    "9,Licensed Practical Nurse (LPN),Live,Nathalie Badua,\"S,R,C\",Health Services,\"Provide hands-on nursing care, check on patients, and work closely with doctors and registered nurses.\",",
    "10,Fashion Designer,Live,Alexis Akiona,\"A,E\",Arts & Communication,\"Design and create clothing, from the first sketch to the finished piece.\",",
    "11,Phlebotomy,Live,Seth Manning,\"R,S,C\",Health Services,Draw blood for tests and donations while helping patients feel at ease.,",
    "12,Certified Nursing Assistant (CNA),Live,Vailima Mateaki,\"S,R\",Health Services,Help patients with daily care and comfort. A common first step into a healthcare career.,",
    "13,Solar Construction Manager,Live,Devan Araujo,\"E,R,C\",Industrial & Engineering Technology,Lead solar installation projects that power homes and help Hawaiʻi move toward clean energy.,",
    "14,Radiologic Technologist,Live,Marissa Tomasu,\"R,I,S\",Health Services,Use X-ray and imaging equipment to help doctors see inside the body.,",
    "15,Dental Hygienist,Live,Karina Gurat,\"S,R,I\",Health Services,\"Clean teeth, take X-rays, and teach patients how to keep their smiles healthy.\",",
    "16,Ocean Engineer,Live,Jeff Kleyner,\"I,R\",Industrial & Engineering Technology,Design technology and structures that work in and around the ocean.,",
    "17,Executive Producer and TV Host,Live,Kainoa Carlson,\"E,A,S\",Arts & Communication,Lead TV productions behind the scenes and connect with audiences on camera.,",
    "18,Dentist,Live,Matthew Oishi,\"I,R,S\",Health Services,\"Diagnose and treat problems with teeth and gums, and keep patients' smiles healthy.\",",
    "19,Network Engineer,Live,Davin Yasuda,\"I,C,R\",Industrial & Engineering Technology,Build and maintain the computer networks that keep businesses and schools connected.,",
    "20,Firefighter,Live,Casen Cluney,\"R,S\",Public & Human Services,\"Respond to fires and emergencies to protect lives, homes, and ʻāina.\",",
    "21,Hotel General Manager,Live,Haʻaheo Zablan,\"E,S,C\",Public & Human Services,Lead a hotel team and shape the guest experience in Hawaiʻi's visitor industry.,",
    "22,Clinical Assistant,Live,,\"S,C,R\",Health Services,\"Support providers in a clinic by preparing patients, taking vital signs, and keeping the day running smoothly.\",",
    "23,Interior Designer,Live,Shaolin Low,\"A,E\",Arts & Communication,\"Plan spaces that look great and work well, from colors and furniture to the whole layout.\",",
  ].join("\n"); }
})();
