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
  document.documentElement.classList.add("anim");
  const obs = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("vu");
      obs.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  blocs.forEach((b) => obs.observe(b));
} else {
  blocs.forEach((b) => b.classList.add("vu"));
}

// Bandeau cookies. Le site n'utilise aucun traceur : le choix est seulement
// mémorisé dans le navigateur, pour ne plus afficher le bandeau.
const CLE_COOKIES = "elouan-cookies";
function lireChoix() {
  try { return JSON.parse(localStorage.getItem(CLE_COOKIES)); } catch (e) { return null; }
}
function enregistrerChoix(choix) {
  try { localStorage.setItem(CLE_COOKIES, JSON.stringify({ ...choix, date: new Date().toISOString() })); } catch (e) {}
}

function bandeauCookies() {
  if (document.querySelector(".cookies")) return;
  const choix = lireChoix() || { mesure: false, video: false };
  const b = document.createElement("div");
  b.className = "cookies";
  b.setAttribute("role", "dialog");
  b.setAttribute("aria-labelledby", "titre-cookies");
  b.innerHTML = `
    <svg class="ico" aria-hidden="true"><use href="images/icones.svg#cookie"/></svg>
    <h2 id="titre-cookies">Un petit cookie ?</h2>
    <p>Elouan nettoie les maisons, pas vos données. Nous n'utilisons que ce qui est nécessaire au site, et rien n'est partagé. <a href="mentions-legales.html#cookies">En savoir plus</a></p>
    <div class="cookies-choix" hidden>
      <label>Nécessaires au fonctionnement <input type="checkbox" checked disabled></label>
      <label>Mesure d'audience anonyme <input type="checkbox" name="mesure" ${choix.mesure ? "checked" : ""}></label>
      <label>Vidéos intégrées <input type="checkbox" name="video" ${choix.video ? "checked" : ""}></label>
    </div>
    <div class="cookies-actions">
      <button type="button" class="btn btn-secondaire" data-action="perso">Personnaliser</button>
      <button type="button" class="btn btn-secondaire" data-action="refuser">Tout refuser</button>
      <button type="button" class="btn" data-action="accepter">Tout accepter</button>
    </div>`;
  document.body.appendChild(b);
  setTimeout(() => b.classList.add("visible"), 30);

  const fermer = (c) => {
    enregistrerChoix(c);
    b.classList.remove("visible");
    setTimeout(() => b.remove(), 500);
  };
  b.addEventListener("click", (e) => {
    const a = e.target.closest("[data-action]");
    if (!a) return;
    const zone = b.querySelector(".cookies-choix");
    if (a.dataset.action === "perso") {
      if (zone.hidden) { zone.hidden = false; a.textContent = "Enregistrer mes choix"; return; }
      fermer({ mesure: b.querySelector("[name=mesure]").checked, video: b.querySelector("[name=video]").checked });
    }
    if (a.dataset.action === "refuser") fermer({ mesure: false, video: false });
    if (a.dataset.action === "accepter") fermer({ mesure: true, video: true });
  });
}

if (!lireChoix()) setTimeout(bandeauCookies, 800);
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-cookies]")) bandeauCookies();
});
