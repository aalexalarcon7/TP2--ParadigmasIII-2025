
/* Helpers */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

/* menu celular (burguer)  */
(() => {
  const btn = document.querySelector('.nav-toggle, .burger');
  const nav = document.getElementById('mainnav') || document.querySelector('header .nav');
  if (!btn || !nav) return;

  // elimina items no deseados del menu si existen
  nav.querySelectorAll('.nav-backtotop, a').forEach(a => {
    const t = (a.textContent || '').trim().toLowerCase();
    if (t === 'volver arriba' || t === '...') a.remove();
  });

  // Estado / helpers
  const isMobile = () => window.matchMedia('(max-width: 880px)').matches;
  const setOpen  = open => {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (isMobile()) nav.style.display = open ? 'flex' : 'none';
    else nav.style.display = '';
  };

  // inicial
  setOpen(false);
  if (!isMobile()) nav.style.display = ''; 

  // Toggle
  btn.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));

  // cerrar al seleccionar una opcion
  nav.addEventListener('click', e => { if (e.target.matches('a')) setOpen(false); });

  // cerrar con escape 
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && e.target !== btn && !btn.contains(e.target)) setOpen(false);
  });

  // recalcular en resize
  window.addEventListener('resize', () => setOpen(false));
})();

/*  Quitar texto de marca duplicado */
(() => {
  const brand = document.querySelector('.navbar .brand');
  if (!brand) return;

  // elimina elementos de texto en el logo
  brand.querySelectorAll('span,.brand-text,.brand-title,.logo-text,.site-name').forEach(n => n.remove());

  // eliminar nodos de texto con "..." 
  [...brand.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const t = n.textContent.trim();
      if (t === '...' || t.toLowerCase() === "luxury car's") brand.removeChild(n);
    }
  });
})();

/*  Botón volver arriba  */
(() => {
  if (!$('#backtop')) {
    const b = document.createElement('button');
    b.id = 'backtop'; b.setAttribute('aria-label','Volver arriba'); b.textContent = '↑';
    document.body.appendChild(b);
  }
  if (!$('#toast')) {
    const t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast'; t.textContent = '¡Listo!';
    document.body.appendChild(t);
  }
  const back = $('#backtop');
  const toggleBack = () => { back.style.display = window.scrollY > 500 ? 'block' : 'none'; };
  window.addEventListener('scroll', toggleBack); toggleBack();
  back.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
})();

/*  Animaciones on-scroll  */
(() => {
  const els = $$('.card, .section, .product');
  if (!els.length) return;
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting));
  }, { threshold: .12 });
  els.forEach(el => io.observe(el));
})();

/*  búsqueda/orden */
(() => {
  const grid  = $('.grid');
  const q     = $('#q');
  const sort  = $('#sort');
  if (!grid || (!q && !sort)) return;

  const cards = Array.from(grid.querySelectorAll('.card'));
  const baseOrder = cards.slice();
  const norm = s => (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
  const textOf = c => norm(
    (c.querySelector('.tag')?.textContent || '') + ' ' +
    (c.querySelector('.title')?.textContent || '')
  );
  const priceOf = c => +(c.querySelector('.price')?.textContent.replace(/[^\d]/g,'') || 0);

  function apply(){
    const qv = norm(q?.value || '');
    let visibles = [], ocultas = [];

    for (const c of cards){
      if (!qv){ c.hidden = false; visibles.push(c); continue; }
      const ok = textOf(c).split(/[\s-]+/).some(w => w.startsWith(qv));
      c.hidden = !ok; (ok ? visibles : ocultas).push(c);
    }

    if (sort && sort.value){
      visibles.sort((a,b) => sort.value === 'price-asc' ? priceOf(a)-priceOf(b) : priceOf(b)-priceOf(a));
    } else {
      visibles.sort((a,b) => baseOrder.indexOf(a) - baseOrder.indexOf(b));
    }

    const frag = document.createDocumentFragment();
    visibles.forEach(v => frag.appendChild(v));
    ocultas.forEach(o => frag.appendChild(o));
    grid.appendChild(frag);
  }

  ['input','keyup','change'].forEach(ev => {
    q?.addEventListener(ev, apply);
    sort?.addEventListener(ev, apply);
  });
  apply();
})();

/*  búsqueda/orden  */
(() => {
  const table = document.querySelector('table.products') || document.getElementById('tablaAutos');
  const q     = document.querySelector('#q-table, #qTabla');
  const sort  = document.querySelector('#sort-table, #sortTabla');
  if (!table || !table.tBodies.length) return;

  const tbody = table.tBodies[0];
  const rows  = Array.from(tbody.rows);
  const norm  = s => (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
  const rowText = r => norm(Array.from(r.cells).map(td => td.textContent).join(' '));
  const priceOf = r => +((Array.from(r.cells).find(td => /usd/i.test(td.textContent))?.textContent.replace(/[^\d]/g,'') || 0));

  function apply(){
    const qv = norm(q?.value || '');
    let visibles = rows.filter(r => !qv || rowText(r).split(/\s+/).some(w => w.startsWith(qv)));

    if (sort && sort.value){
      visibles.sort((a,b) => sort.value === 'price-asc' ? priceOf(a)-priceOf(b) : priceOf(b)-priceOf(a));
    }

    const frag = document.createDocumentFragment();
    visibles.forEach(r => frag.appendChild(r));
    tbody.appendChild(frag);

    rows.forEach(r => { if (!visibles.includes(r)) r.style.display='none'; else r.style.display=''; });
  }

  ['input','keyup','change'].forEach(ev => { q?.addEventListener(ev, apply); sort?.addEventListener(ev, apply); });
  apply();
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.getElementById('mainnav');

  if (!toggle || !nav) return; // si alguna página no tiene header completo

  const openNav = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('body-no-scroll');
  };

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('body-no-scroll');
  };

  const toggleNav = () => {
    if (nav.classList.contains('is-open')) closeNav();
    else openNav();
  };

  // Click en botón
  toggle.addEventListener('click', toggleNav);

  // Click en enlaces del menú → cerrar
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeNav();
  });

  // Esc para cerrar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // Al pasar a desktop, asegurar cerrado
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) closeNav();
  });
});

/* limpieza de “…” */
(() => {
  const header = document.querySelector('.navbar .wrap') || document.querySelector('header .wrap') || document.querySelector('header');
  if (!header) return;

  // eliminar nodos de texto que sean exactamente "..." 
  [...header.childNodes].forEach(n => {
    if (n.nodeType === 3) { // texto
      const t = (n.textContent || '').trim();
      if (t === '...' || t === '…') n.remove();
    }
  });

  // si existe un “…” al lado del logo borra
  const brand = document.querySelector('.navbar .brand');
  if (brand) {
    brand.querySelectorAll('span,.brand-text,.logo-text,.site-name').forEach(el => {
      const t = (el.textContent || '').trim();
      if (!t || t === '...' || t === '…') el.remove();
    });
  }

  // Por si alguna página aún trae el trigger viejo
  document.querySelectorAll('.mobile-menu').forEach(el => el.remove());
})();

