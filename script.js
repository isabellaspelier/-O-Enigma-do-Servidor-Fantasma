const EV={log:"Logs: senha da Mariana usada de fora",troj:"Trojan no PC da Mariana",alex:"Alerta do Alex sobre e-mail",mail:"E-mail de phishing"};
const KD={go:"Avançar",back:"Retornar",act:"Ação direta",path:"Escolha seu caminho"};
const S={
start:{ch:"Capítulo 1",t:"O aviso de incidente",sc:"srv",x:"02h00. O alerta chega ao seu celular: o banco de dados da startup TechShield foi invadido. Dados confidenciais vazaram e um ransomware bloqueou o acesso aos servidores.\n\nVocê é a investigadora ou o investigador da Unidade de Crimes Digitais. Cada minuto conta. Como começar?",c:[["path","Caminho 1: Investigação técnica, com análise de logs e servidores","c1a"],["path","Caminho 2: Investigação humana, com interrogatórios e pessoas","c2a"]]},
c1a:{ch:"Caminho 1 · Fase 1",t:"Análise de rede",sc:"net",ev:"log",x:"Você abre os registros do servidor e vê acessos com as credenciais administrativas da funcionária Mariana, vindos de um IP remoto que ninguém reconhece. O que fazer?",c:[["go","Rastrear os pacotes de dados do IP e procurar a porta de entrada","c1b"],["back","Mudar de abordagem e interrogar a equipe presencialmente","c2a"],["act","Bloquear o IP remoto agora e revogar o acesso da Mariana","e_blq"]]},
c1b:{ch:"Caminho 1 · Fase 2",t:"Encontrando o trojan",sc:"troj",ev:"troj",x:"Seguindo a rede, você encontra um arquivo malicioso (trojan) instalado no computador da Mariana. Ele envia credenciais para um servidor externo chamado Ciber_Shadow. Como prosseguir?",c:[["go","Descompilar o malware para achar a chave de descriptografia e a localização do servidor","win"],["back","Voltar à análise geral de logs para ver se outros servidores foram afetados","c1a"],["act","Invadir de volta o Ciber_Shadow sem mascarar seu IP","e_inv"]]},
c2a:{ch:"Caminho 2 · Fase 1",t:"Interrogatório e suspeitos",sc:"ppl",ev:"alex",x:"Você conversa com a equipe. Alex, ex-desenvolvedor, diz que foi demitido injustamente e avisa sobre um e-mail suspeito de “Atualização de Sistema” que todos receberam. Mariana diz que só clicou no link da TI. O que fazer?",c:[["go","Analisar o e-mail que a Mariana recebeu e a caixa de entrada da equipe","c2b"],["back","Mudar para o caminho técnico e analisar os logs do servidor","c1a"],["act","Acusar o Alex agora e mandar prender o ex-funcionário","e_alx"]]},
c2b:{ch:"Caminho 2 · Fase 2",t:"A armadilha de phishing",sc:"mail",ev:"mail",x:"Você confirma: Mariana foi vítima de engenharia social. O e-mail falso roubou as senhas dela. O remetente usou um domínio disfarçado que aponta para um servidor remoto.",c:[["go","Usar o cabeçalho do e-mail para rastrear a origem do ataque e isolar o vírus","win"],["back","Voltar e reinterrogar o Alex sobre o domínio falso","c2a"],["act","Responder ao golpista oferecendo dinheiro de recompensa","e_neg"]]},
e_blq:{end:"bad",back:"c1a",ch:"Fim de jogo",t:"Bloqueio prematuro",sc:"bad",x:"Ao bloquear o IP sem rastrear a origem, o invasor percebeu a movimentação e ativou um comando de autodestruição. Os dados da empresa foram apagados para sempre.",l:"Antes de cortar o acesso, descubra por onde o invasor entrou. Bloquear cedo demais avisa o atacante."},
e_inv:{end:"bad",back:"c1b",ch:"Fim de jogo",t:"Contra-ataque falho",sc:"bad",x:"Você tentou contra-atacar sem proteção. O cibercriminoso detectou a conexão, invadiu seu computador de investigação e vazou as informações.",l:"Revidar sem mascarar o IP expõe quem investiga. Primeiro proteja a si mesmo, depois rastreie."},
e_alx:{end:"bad",back:"c2a",ch:"Fim de jogo",t:"Acusação sem provas",sc:"bad",x:"Você prendeu o Alex sem provas. Ele era inocente e só tentava alertar a empresa. O verdadeiro criminoso manteve o acesso total e concluiu o roubo dos dados.",l:"Ter motivo não é ter prova. Acusar sem evidência deixa o culpado livre."},
e_neg:{end:"bad",back:"c2b",ch:"Fim de jogo",t:"Armadilha de negociação",sc:"bad",x:"O chantagista usou a conversa para ganhar tempo, extrair informações confidenciais do seu sistema e expor os dados na dark web mesmo assim.",l:"Nunca negocie nem responda a golpistas sem apoio da equipe de resposta a incidentes."},
win:{end:"win",back:"start",ch:"Caso encerrado",t:"Caso resolvido!",sc:"win",x:"Você identificou a técnica de invasão, isolou o malware e recuperou a chave de descriptografia antes do vazamento final. O sistema foi restaurado e a segurança da TechShield saiu mais forte.",l:"Phishing e trojans atacam pessoas, não só máquinas. Rastrear a origem antes de agir foi o que resolveu o caso."},
cred:{ch:"Créditos",t:"Quem fez este caso",sc:"gh",x:"Criação:\nIsabella Spelier e Ana Luiza\n\nSuporte tecnológico:\nGemini (IA) e Claude (IA)\n\nApoio e aprendizado:\nAlura e Google Classroom",c:[["go","Voltar ao início","start"]]}
};
const sw=(c,w)=>`<g fill="none" stroke="${c}" stroke-width="${w||2}">`;
const G=(x,y,s,c)=>`<g transform="translate(${x} ${y}) scale(${s})" class="float"><use href="#gh"/></g>`;
const P=(x,y,n,col)=>`<circle cx="${x}" cy="${y}" r="26" fill="${col}"/><circle cx="${x}" cy="${y-6}" r="8" fill="#fff" opacity=".85"/><path d="M${x-14} ${y+20}a14 12 0 0 1 28 0z" fill="#fff" opacity=".85"/><text x="${x}" y="${y+46}" text-anchor="middle" font-size="13" fill="var(--ink)">${n}</text>`;
const ART={
srv:()=>`<svg viewBox="0 0 400 170">${[0,1,2].map(i=>`<rect x="${40+i*58}" y="30" width="48" height="110" rx="4" fill="var(--pn)" stroke="var(--ln)"/>${[0,1,2,3].map(j=>`<circle cx="${52+i*58}" cy="${48+j*24}" r="3" fill="${(i+j)%3?'var(--ok)':'var(--bad)'}" class="blink" style="animation-delay:${(i*4+j)*.17}s"/><rect x="${60+i*58}" y="${45+j*24}" width="20" height="6" rx="2" fill="var(--ln)"/>`).join('')}`).join('')}${G(285,75,2.2)}<text x="285" y="150" text-anchor="middle" font-size="13" fill="var(--mut)">02:00 · acesso negado</text></svg>`,
net:()=>`<svg viewBox="0 0 400 170">${sw('var(--ln)')}<path d="M70 85L160 40M70 85L160 130M160 40L260 85M160 130L260 85M260 85L340 85"/></g>${[[70,85],[160,40],[160,130],[260,85]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="12" fill="var(--pn)" stroke="var(--gh)" stroke-width="2"/>`).join('')}<circle cx="340" cy="85" r="16" fill="var(--bad)" class="blink"/><text x="340" y="125" text-anchor="middle" font-size="13" fill="var(--bad)">IP desconhecido</text></svg>`,
troj:()=>`<svg viewBox="0 0 400 170"><rect x="110" y="30" width="180" height="105" rx="8" fill="var(--pn)" stroke="var(--ln)" stroke-width="2"/><rect x="90" y="135" width="220" height="10" rx="5" fill="var(--ln)"/><path d="M200 55l30 52h-60z" fill="var(--bad)" class="blink"/><text x="200" y="100" text-anchor="middle" font-size="22" font-weight="800" fill="#fff">!</text>${G(335,55,1.1)}<text x="200" y="165" text-anchor="middle" font-size="12" fill="var(--mut)">→ Ciber_Shadow</text></svg>`,
ppl:()=>`<svg viewBox="0 0 400 170">${P(110,60,'Alex','var(--gh)')}${P(290,60,'Mariana','var(--ok)')}<text x="200" y="68" text-anchor="middle" font-size="26" fill="var(--mut)">?</text></svg>`,
mail:()=>`<svg viewBox="0 0 400 170"><rect x="110" y="40" width="180" height="110" rx="10" fill="var(--pn)" stroke="var(--ln)" stroke-width="2"/><path d="M110 50l90 55 90-55" fill="none" stroke="var(--ln)" stroke-width="2"/><path d="M335 25v45a14 14 0 0 1-28 0M335 25h-12" fill="none" stroke="var(--bad)" stroke-width="4" stroke-linecap="round"/><text x="200" y="138" text-anchor="middle" font-size="12" fill="var(--bad)">Atualização de Sistema</text></svg>`,
bad:()=>`<svg viewBox="0 0 400 170"><rect x="120" y="25" width="160" height="110" rx="8" fill="var(--pn)" stroke="var(--bad)" stroke-width="3"/>${sw('var(--bad)',8)}<path d="M170 55l60 50M230 55l-60 50" stroke-linecap="round"/></g><path d="M120 60l30 10-20 20 30 15" fill="none" stroke="var(--bad)" stroke-width="2"/></svg>`,
win:()=>`<svg viewBox="0 0 400 170"><path d="M200 20l60 20v45c0 30-25 50-60 65-35-15-60-35-60-65V40z" fill="var(--ok)"/>${sw('#fff',9)}<path d="M172 82l20 20 38-40" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`,
gh:()=>`<svg viewBox="0 0 400 170">${G(200,85,3.2)}</svg>`};
const $=id=>document.getElementById(id);
let ev=new Set(),found=new Set(),sound=true,ac,timer,cur;
try{found=new Set(JSON.parse(localStorage.getItem('enigma-finais')||'[]'))}catch(e){}
function tone(f,d,t,v,at){if(!sound)return;try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain(),s=ac.currentTime+(at||0);o.type=t||'sine';o.frequency.value=f;g.gain.setValueAtTime(v||.07,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g);g.connect(ac.destination);o.start(s);o.stop(s+d)}catch(e){}}
const sfx={click:()=>tone(520,.08,'triangle'),ev:()=>{tone(660,.12,'square',.04);tone(990,.18,'square',.04,.1)},win:()=>[523,659,784,1047].forEach((f,i)=>tone(f,.3,'triangle',.08,i*.12)),bad:()=>[330,262,196,147].forEach((f,i)=>tone(f,.35,'sawtooth',.05,i*.16))};
function hud(){$('hud').innerHTML=Object.keys(EV).map(k=>`<span class="tag ${ev.has(k)?'':'no'}">${ev.has(k)?EV[k]:'Evidência não encontrada'}</span>`).join('')+`<span class="cnt">Finais: ${found.size}/5</span>`}
function go(k){
  clearInterval(timer);const n=S[k];cur=k;
  if(k==='start')ev.clear();
  if(n.ev&&!ev.has(n.ev)){ev.add(n.ev);sfx.ev()}
  if(n.end){found.add(k);try{localStorage.setItem('enigma-finais',JSON.stringify([...found]))}catch(e){}n.end==='win'?sfx.win():sfx.bad()}else sfx.click();
  $('sc').innerHTML=ART[n.sc]();$('chp').textContent=n.ch;
  const h=$('tt');h.textContent=n.t;h.className=n.end||'';
  $('ls').innerHTML=n.l?'':'';$('ch').innerHTML='';hud();
  let c=n.c;
  if(n.end==='bad')c=[['go','Voltar à decisão anterior',n.back,'back'],['go','Recomeçar o caso','start'],['go','Ver créditos','cred']];
  if(n.end==='win')c=[['go','Jogar de novo e descobrir outros finais','start'],['go','Ver créditos','cred']];
  const tx=$('tx'),full=n.x,box=$('ch');
  const done=()=>{clearInterval(timer);tx.textContent=full;if(n.l)$('ls').innerHTML=`<div class="lesson"><b>Lição de segurança:</b> ${n.l}</div>`;
    box.innerHTML=c.map((o,i)=>`<button class="opt ${o[3]||o[0]}${i===0&&n.end?' main':''}" data-k="${o[2]}" style="animation-delay:${i*.08}s"><small>${i+1}. ${o[3]?KD[o[3]]:(KD[o[0]]||'')}</small>${o[1]}</button>`).join('');
    box.querySelectorAll('button').forEach(b=>b.onclick=()=>go(b.dataset.k));box.firstChild&&box.firstChild.focus({preventScroll:true})};
  tx.onclick=done;tx.textContent='';let i=0;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return done();
  timer=setInterval(()=>{i+=2;tx.textContent=full.slice(0,i);if(i%6===0)tone(900+Math.random()*200,.02,'square',.012);if(i>=full.length)done()},16);
  scrollTo({top:0,behavior:'smooth'});
}
addEventListener('keydown',e=>{const b=document.querySelectorAll('#ch .opt')[+e.key-1];if(b)b.click();else if(e.key==='Enter'&&!document.querySelector('#ch .opt'))$('tx').click()});
$('snd').onclick=e=>{sound=!sound;e.target.textContent='Som: '+(sound?'ligado':'desligado');e.target.setAttribute('aria-pressed',sound)};
go('start');
