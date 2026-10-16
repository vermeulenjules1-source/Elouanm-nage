// Comportements communs à toutes les pages (voir CHARTE.md)

// Ombre sous l'en-tête dès qu'on fait défiler la page
const entete = document.querySelector(".entete");
if (entete) {
  const majEntete = () => entete.classList.toggle("defile", scrollY > 10);
  addEventListener("scroll", majEntete, { passive: true });
  majEntete();
}

// Apparition en douceur des blocs .revele quand ils arrivent à l'écran
const blocs = document.querySelectorAll(".revele");
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("vu");
      obs.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  blocs.forEach((b) => obs.observe(b));
} else {
  blocs.forEach((b) => b.classList.add("vu"));
}
