# Elouan Ménage — site vitrine

Site statique en HTML/CSS. Chaque page est développée sur sa propre branche :

| Page | Fichier | Branche | Responsable |
|---|---|---|---|
| Accueil | `index.html` | `rachel/accueil` | Rachel |
| Notre histoire | `notre-histoire.html` | `edgar/notre-histoire` | Edgar |
| Tarifs | `tarifs.html` | `elouan/tarifs` | Elouan |
| Avis | `avis.html` | `jules/avis` | Jules |

## Travailler sur sa page

```bash
git clone https://github.com/vermeulenjules1-source/Elouanm-nage.git
cd Elouanm-nage
git switch <ta-branche>      # ex. git switch rachel/accueil
# modifier ta page, puis :
git add .
git commit -m "Accueil : ajout de la section services"
git push
```

Quand la page est prête, ouvrir une Pull Request vers `main`.

Le style commun est dans `style.css` (sur `main`) : évitez de le modifier
dans vos branches pour limiter les conflits.
