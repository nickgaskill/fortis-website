(function () {
  var btn = document.getElementById('menuBtn');
  var closeBtn = document.getElementById('menuClose');
  var scrim = document.getElementById('scrim');
  var drawer = document.getElementById('drawer');

  function setOpen(open) {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (open) {
      drawer.querySelector('a').focus();
    } else {
      btn.focus();
    }
  }
  btn.addEventListener('click', function () { setOpen(true); });
  closeBtn.addEventListener('click', function () { setOpen(false); });
  scrim.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setOpen(false);
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
