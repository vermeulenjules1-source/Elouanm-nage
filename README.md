# Elouan Ménage — site vitrine

Site statique en HTML/CSS pour une entreprise **fictive** de services à domicile.

**À lire avant de commencer :**
- [CONTEXTE.md](CONTEXTE.md) : l'entreprise, les services, le ton, ce que doit contenir chaque page
- [CHARTE.md](CHARTE.md) : couleurs, polices, composants prêts à l'emploi

Chaque page est développée sur sa propre branche :

| Page | Fichier | Branche | Responsable |
|---|---|---|---|
| Accueil | `index.html` | `rachel/accueil` | Rachel |
| Notre histoire | `notre-histoire.html` | `edgar/notre-histoire` | Edgar |
| Tarifs | `tarifs.html` | `elouan/tarifs` | Elouan |
| Avis | `avis.html` | `jules/avis` | Jules |
| Devis pré-rempli | `devis.html` | `main` | commun |
| Mentions légales | `mentions-legales.html` | `main` | commun |

Site en ligne : https://vermeulenjules1-source.github.io/Elouanm-nage/

## Travailler sur sa page

```bash
git clone https://github.com/vermeulenjules1-source/Elouanm-nage.git
cd Elouanm-nage
git switch <ta-branche>      # ex. git switch rachel/accueil
git pull origin main         # récupérer les dernières mises à jour communes
# modifier ta page, puis :
git add .
git commit -m "Accueil : ajout de la section services"
git push
```

Quand la page est prête, ouvrir une Pull Request vers `main`.

Le style commun est dans `style.css` (sur `main`) : évitez de le modifier
dans vos branches pour limiter les conflits.
