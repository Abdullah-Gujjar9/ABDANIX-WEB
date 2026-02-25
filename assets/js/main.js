window.addEventListener('scroll', () => {
  const nav = document.querySelector('.glass-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
});

// reveal animations
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('show'));
}

// counters
const counters = document.querySelectorAll('.counter');
let counterPlayed = false;
function animateCounters(){
  if(counterPlayed || !counters.length) return;
  counterPlayed = true;
  counters.forEach(el => {
    const target = +el.dataset.target || 0;
    let val = 0;
    const step = Math.max(1, Math.ceil(target / 80));
    const t = setInterval(() => {
      val += step;
      if (val >= target) { el.textContent = target; clearInterval(t); }
      else el.textContent = val;
    }, 18);
  });
}
const hero = document.querySelector('.hero');
if(hero){
  const io2 = new IntersectionObserver((entries)=>{
    entries.forEach(e => { if(e.isIntersecting){ animateCounters(); io2.disconnect(); } });
  }, {threshold:.2});
  io2.observe(hero);
}
window.addEventListener('load', ()=> document.querySelector('.glass-nav')?.classList.toggle('scrolled', window.scrollY > 24));
