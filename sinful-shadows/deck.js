/* Sinful Shadows launch deck.
   Keys: → / Space / PageDown next · ← / PageUp back · Home / End · F fullscreen · O overview · N notes · Esc close.
   Click any card to enlarge it.
   The seven Sin slides are not in the running order. On the closing slide each Shrine opens its Sin;
   the Back button, B, Esc or any navigation key returns to the closing slide. */

// ───────── The seven sins. Blessing and Punishment are the printed Shrine text. ─────────
const SINS = [
  {
    id: 'pride', name: 'Pride', color: '#8fb8ff', tagline: 'Win from the front, or not at all.',
    blessing: 'Attacks by your Servants of Pride deal +20 damage if you lead in Loot.',
    punishment: 'While you do not lead in Loot, this Shrine\'s Blessing is disabled.',
    servants: [['prideful-pip', 'Prideful Pip'], ['vic-roy', 'Vic Roy'], ['the-mayor-of-nothing', 'The Mayor of Nothing'], ['clever-hans', 'Clever Hans']],
    payoff: ['the-making-of-man', 'The Making of Man'],
    notes: 'Pride rewards you for already winning. Vic Roy is the headline: with 8 or more Loot, you win on the spot.'
  },
  {
    id: 'envy', name: 'Envy', color: '#4fd08a', tagline: 'Strongest when you are behind.',
    blessing: 'Servants of Envy take 30 less damage from attacks if your opponent leads in Loot.',
    punishment: 'While you lead in Loot, this Shrine\'s Blessing is disabled.',
    servants: [['coffee-jr', 'Coffee Jr.'], ['too-tall-astronaut', 'Too Tall Astronaut'], ['the-plaid-penguin', 'The Plaid Penguin'], ['the-impotent-one', 'The Impotent One']],
    payoff: ['size-issues', 'Size Issues'],
    notes: 'Envy is Pride turned inside out: a wall of Warriors that are very hard to hurt while you trail. Size Issues takes Loot away from your opponent.'
  },
  {
    id: 'wrath', name: 'Wrath', color: '#ff5a3c', tagline: 'Hit harder. Fall harder.',
    blessing: 'Attacks from your Servants of Wrath do +30 damage.',
    punishment: 'When your Servant of Wrath is destroyed, your opponent gains +1 Loot.',
    servants: [['the-loop-puncher', 'The Loop Puncher'], ['union-buster', 'Union Buster'], ['widow-killer', 'Widow Killer'], ['queso', 'Queso']],
    payoff: ['urban-assault', 'Urban Assault'],
    notes: 'Pure aggression. Thirty extra damage on every attack, but every Servant you lose costs you an extra Loot.'
  },
  {
    id: 'sloth', name: 'Sloth', color: '#9bc24a', tagline: 'Hard to move. Harder to kill.',
    blessing: 'Your Servants of Sloth in play gain +50 health.',
    punishment: 'The attack cost of your Servants of Sloth in play is +2.',
    servants: [['little-johnny', 'Little Johnny'], ['princess-of-the-house', 'Princess of the House'], ['hydrophobic-dj', 'Hydrophobic DJ'], ['dr-graves', 'Dr. Graves']],
    payoff: ['it-s-all-downhill-from-here', "It's All Downhill From Here"],
    notes: 'Sloth makes everything tougher and slower. The trick is finding ways to attack without paying: Princess of the House and It\'s All Downhill From Here.'
  },
  {
    id: 'greed', name: 'Greed', color: '#f2b632', tagline: 'Every kill pays extra.',
    blessing: 'Take +1 Loot when your Servant of Greed destroys an opponent\'s warrior.',
    punishment: 'Start your turn with 2 less energy.',
    servants: [['the-machine', 'The Machine'], ['the-stowaway', 'The Stowaway'], ['the-lottery-people', 'The Lottery People'], ['3-guys-in-a-trenchcoat', '3 Guys in a Trenchcoat']],
    payoff: ['coin-hoarder', 'Coin Hoarder'],
    notes: 'Greed shortens the race to 10, but you play every turn two Energy down. Barter Dollars and The Lottery People exist to buy that Energy back.'
  },
  {
    id: 'gluttony', name: 'Gluttony', color: '#f08a3c', tagline: 'More than you can stomach.',
    blessing: 'Start your turn with +2 energy.',
    punishment: 'If you end your turn with energy remaining, your warriors in play suffer 20 damage.',
    servants: [['melon-fiend', 'Melon Fiend'], ['oyster-boy', 'Oyster Boy'], ['ken-chugs', 'Ken Chugs'], ['betucci-the-little-boy-pizza', 'Betucci, The Little Boy Pizza']],
    payoff: ['golden-sauce', 'Golden Sauce'],
    notes: 'Two extra Energy every turn, and you had better spend all of it. Leave any behind and your own Warriors pay.'
  },
  {
    id: 'lust', name: 'Lust', color: '#ff4f9a', tagline: 'Cheap thrills, fragile bodies.',
    blessing: 'The attack cost of your Servants of Lust in play is 2 less.',
    punishment: 'Your Servants of Lust in play have 30 less health.',
    servants: [['sexy-building', 'Sexy Building'], ['crank', 'Crank'], ['touche-touche', 'Touche Touche'], ['feet-lover', 'Feet Lover']],
    payoff: ['darling-it-s-you', "Darling It's You"],
    notes: 'Lust attacks almost for free, with Warriors made of glass. Darling It\'s You puts one back to full health.'
  }
];

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
const card = (slug, alt, w, r, i) => `<img class="card" style="--w:${w}px;--r:${r}deg;--i:${i}" src="cards/${slug}.jpg" alt="${alt}">`;

document.getElementById('sins').outerHTML = SINS.map((s, n) => `
<section class="slide sin" data-title="${s.name}" data-sin="${s.id}" style="--accent:${s.color}">
  <div class="art" style="background-image:url(art/${s.id}.jpg)"></div>
  <div class="txt">
    <div class="kicker rise">Shrine of Sin · ${NUMERALS[n]} of VII</div>
    <div class="name rise" style="--i:1">${s.name}</div>
    <div class="tagline rise" style="--i:3">${s.tagline}</div>
    <div class="bp">
      <div class="rise" style="--i:5"><h3>Blessing</h3><p>${s.blessing}</p></div>
      <div class="pun rise" style="--i:6"><h3>Punishment</h3><p>${s.punishment}</p></div>
    </div>
  </div>
  <div class="cards">
    <div class="top">
      <div>${card(s.payoff[0], s.payoff[1], 280, 4, 7)}<div class="lbl">Its Action</div></div>
      <div>${card('shrine-of-' + s.id, 'Shrine of ' + s.name, 372, -2, 1)}<div class="lbl">The Shrine</div></div>
    </div>
    <div>
      <div class="servants">${s.servants.map((c, i) => card(c[0], c[1], 222, [-1.5, 1, -1, 1.5][i], 3 + i)).join('')}</div>
      <div class="lbl">Its four Servants</div>
    </div>
  </div>
  <aside class="notes">${s.notes}</aside>
</section>`).join('');

// ───────── Navigation ─────────
const stage = document.getElementById('stage');
const all = [...document.querySelectorAll('.slide')];
const slides = all.filter(s => !s.dataset.sin); // the running order
const sins = all.filter(s => s.dataset.sin); // opened only from the closing slide
const hub = slides.findIndex(s => s.querySelector('[data-goto]'));
const $ = id => document.getElementById(id);
let cur = 0, step = 0;
let sin = null; // the Sin slide on screen, if one is open

const stepsOf = s => [...s.querySelectorAll('.step')];
const activate = s => all.forEach(x => x.classList.toggle('active', x === s));
const setHash = h => { if (location.hash !== '#' + h) history.replaceState(null, '', '#' + h); };

function fit() {
  stage.style.setProperty('--scale', Math.min(innerWidth / 1920, innerHeight / 1080));
}

function show(i, atEnd) {
  cur = Math.max(0, Math.min(slides.length - 1, i));
  sin = null;
  const s = slides[cur];
  const st = stepsOf(s);
  step = atEnd ? st.length : 0;
  activate(s);
  st.forEach((el, n) => el.classList.toggle('on', n < step));
  $('counter').textContent = String(cur + 1).padStart(2, '0') + ' / ' + slides.length;
  $('progress').style.width = ((cur + 1) / slides.length * 100) + '%';
  $('notes').textContent = s.querySelector('.notes')?.textContent || '';
  $('back').classList.remove('on');
  setHash(cur + 1);
  document.querySelectorAll('#overview button').forEach((b, n) => b.classList.toggle('cur', n === cur));
}

// A Sin slide sits outside the running order: it opens over the closing slide and any
// navigation key, the Back button or B puts the closing slide back.
function openSin(id) {
  const s = sins.find(x => x.dataset.sin === id);
  if (!s) return;
  if (cur !== hub) show(hub, true);
  sin = s;
  activate(s);
  $('counter').textContent = s.dataset.title;
  $('notes').textContent = s.querySelector('.notes')?.textContent || '';
  $('back').classList.add('on');
  setHash(id);
}
function back() { if (sin) show(cur, true); }

function next() {
  if (sin) return back();
  const st = stepsOf(slides[cur]);
  if (step < st.length) { st[step++].classList.add('on'); return; }
  if (cur < slides.length - 1) show(cur + 1);
}
function prev() {
  if (sin) return back();
  const st = stepsOf(slides[cur]);
  if (step > 0) { st[--step].classList.remove('on'); return; }
  if (cur > 0) show(cur - 1, true);
}

function fromHash() {
  const h = location.hash.slice(1);
  if (sins.some(s => s.dataset.sin === h)) { if (sin?.dataset.sin !== h) openSin(h); return; }
  const n = (parseInt(h, 10) || 1) - 1;
  if (sin || n !== cur) show(n);
}

// Overview
$('overview').innerHTML = slides.map((s, n) => `<button data-n="${n}"><span>${String(n + 1).padStart(2, '0')}</span>${s.dataset.title || ''}</button>`).join('');
$('overview').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (b) { show(+b.dataset.n); $('overview').classList.remove('on'); }
});

// Clicks: the Back button, a Shrine link on the closing slide, or a card to enlarge
stage.addEventListener('click', e => {
  const lb = $('lightbox');
  if (lb.classList.contains('on')) { lb.classList.remove('on'); return; }
  if (e.target.closest('#back')) { back(); return; }
  const link = e.target.closest('[data-goto]');
  if (link) { openSin(link.dataset.goto); return; }
  const c = e.target.closest('.card');
  if (c) { lb.querySelector('img').src = c.src; lb.querySelector('img').alt = c.alt; lb.classList.add('on'); }
});

addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const lb = $('lightbox'), ov = $('overview'), notes = $('notes');
  $('help').classList.add('gone');
  if (lb.classList.contains('on')) { lb.classList.remove('on'); e.preventDefault(); return; }
  switch (e.key) {
    case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ': case 'Enter': e.preventDefault(); ov.classList.remove('on'); next(); break;
    case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'Backspace': e.preventDefault(); ov.classList.remove('on'); prev(); break;
    case 'Home': show(0); break;
    case 'End': show(slides.length - 1); break;
    case 'f': case 'F': document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); break;
    case 'o': case 'O': ov.classList.toggle('on'); break;
    case 'n': case 'N': notes.classList.toggle('on'); break;
    case 'b': case 'B': back(); break;
    case 'Escape':
      if (ov.classList.contains('on') || notes.classList.contains('on')) { ov.classList.remove('on'); notes.classList.remove('on'); } else back();
      break;
  }
});

addEventListener('resize', fit);
addEventListener('hashchange', fromHash);
fit();
show(0);
fromHash();
setTimeout(() => $('help').classList.add('gone'), 9000);
