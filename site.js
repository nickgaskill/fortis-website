(function () {
  var btn = document.getElementById('menuBtn');
  var panel = document.getElementById('menuPanel');
  if (!btn || !panel) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  }
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(panel.hidden);
  });
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', function (e) {
    if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { setOpen(false); btn.focus(); }
  });
})();

(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();

/* Force the hero background video to autoplay (muted) across browsers */
(function () {
  var v = document.querySelector('.hero-video');
  if (!v) return;
  v.muted = true;
  v.defaultMuted = true;
  v.setAttribute('muted', '');
  function play() {
    var p = v.play();
    if (p && typeof p.catch === 'function') { p.catch(function () {}); }
  }
  play();
  v.addEventListener('canplay', play, { once: true });
  v.addEventListener('loadeddata', play, { once: true });
  document.addEventListener('touchstart', play, { once: true });
  document.addEventListener('click', play, { once: true });
})();

/* Process journey: light up each step as it scrolls into view,
   cross-fading the matching photo in the sticky frame */
(function () {
  var steps = document.querySelectorAll('.pjour-step');
  if (!steps.length) return;
  var imgs = document.querySelectorAll('.pjour-img');
  function showImg(i) {
    imgs.forEach(function (im, k) { im.classList.toggle('show', k === i); });
  }
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    steps.forEach(function (s) { s.classList.add('on'); });
    showImg(0);
    return;
  }
  var ticking = false;
  function update() {
    ticking = false;
    var line = window.innerHeight * 0.62;
    var current = 0;
    steps.forEach(function (s, i) {
      var on = s.getBoundingClientRect().top < line;
      s.classList.toggle('on', on);
      if (on) current = i;
    });
    if (imgs.length) showImg(Math.min(current, imgs.length - 1));
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();

/* Before & after comparison sliders */
(function () {
  document.querySelectorAll('.ba').forEach(function (ba) {
    var range = ba.querySelector('.ba-range');
    if (!range) return;
    function update() { ba.style.setProperty('--pos', range.value + '%'); }
    range.addEventListener('input', update);
    update();
  });
})();
