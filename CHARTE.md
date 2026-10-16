# Charte graphique — Elouan Ménage

> Tout est déjà codé dans `style.css`. **Utilisez les classes et les variables ci-dessous** plutôt que d'écrire vos propres couleurs ou tailles : le site gardera une apparence cohérente d'une page à l'autre.

## Identité

- **Nom :** Elouan Ménage
- **Slogan :** *Un seul pro pour toute la maison.*
- **Logo (provisoire) :** le texte **Elouan Ménage** en Poppins gras, couleur `--vert`, précédé d'une petite feuille 🌿.
- **Ambiance :** nature et propreté, une ambiance de maison claire et rangée avec un jardin entretenu. Chaleureux, rassurant, pas luxueux.

## Couleurs

| Rôle | Variable CSS | Code | Usage |
|---|---|---|---|
| Principale | `--vert` | `#2F6B4F` | Logo, titres, boutons principaux |
| Principale foncée | `--vert-fonce` | `#22513B` | Survol des boutons, pied de page |
| Secondaire | `--bleu` | `#3A7CA5` | Liens, pôle *Nettoyage* |
| Accent | `--soleil` | `#F2B544` | Étoiles des avis, badges, détails (**jamais pour du texte sur fond clair**) |
| Fond | `--fond` | `#FAF8F3` | Fond des pages (blanc cassé) |
| Surface | `--surface` | `#EEF3EE` | Cartes, bandeaux, en-tête |
| Texte | `--texte` | `#1F2A24` | Texte courant |
| Texte secondaire | `--texte-doux` | `#5B675F` | Légendes, petites mentions |

Le texte blanc ne va que sur `--vert` ou `--vert-fonce`.

## Typographies

Les deux polices viennent de Google Fonts et sont déjà chargées par `style.css`.

| Usage | Police | Graisse |
|---|---|---|
| Titres (`h1`, `h2`, `h3`), logo, boutons | **Poppins** | 600–700 |
| Texte courant | **Inter** | 400, avec 600 pour mettre un mot en valeur |

Tailles : `h1` ≈ 2,5 rem, `h2` ≈ 1,75 rem, `h3` ≈ 1,25 rem, texte 1 rem.

## Les 4 pôles de services

Gardez toujours le même pictogramme pour un même pôle, sur toutes les pages :

| Pôle | Pictogramme | Classe de badge |
|---|---|---|
| Entretien | 🧹 | `badge badge-entretien` |
| Nettoyage | 🧽 | `badge badge-nettoyage` |
| Jardinage | 🌿 | `badge badge-jardinage` |
| Petits coups de main | 🔧 | `badge badge-coup-de-main` |

## Composants prêts à l'emploi

```html
<!-- Bandeau d'accroche -->
<section class="hero">
  <h1>Un seul pro pour toute la maison.</h1>
  <p>Ménage, nettoyage, jardinage : Elouan s'occupe de tout.</p>
  <a class="btn" href="tarifs.html">Demander un devis</a>
  <a class="btn btn-secondaire" href="notre-histoire.html">Découvrir Elouan</a>
</section>

<!-- Grille de cartes -->
<div class="grille">
  <article class="carte">
    <span class="badge badge-jardinage">🌿 Jardinage</span>
    <h3>Tonte et taille</h3>
    <p>Un jardin net toute l'année.</p>
  </article>
  <!-- autres cartes… -->
</div>

<!-- Avis -->
<article class="carte avis">
  <p class="etoiles">★★★★★</p>
  <blockquote>« Elouan a fait le ménage et taillé la haie le même jour ! »</blockquote>
  <p class="auteur">Claire, Saint-Herblain</p>
</article>
```

## Mise en page

- Le contenu est centré, sur 1 000 px de large au maximum. C'est déjà géré par `main`.
- Laissez de l'air : séparez les sections avec `<section class="section">`.
- Les coins sont arrondis (`--rayon`, 12 px) et les ombres légères.
- Le site doit être lisible **sur téléphone**. Testez votre page en réduisant la fenêtre : les grilles passent automatiquement sur une colonne.

## Images

- Les photos officielles d'Elouan sont dans `images/`. La **répartition par page** est dans [CONTEXTE.md](CONTEXTE.md#les-photos) : une photo par page, sans doublon.
- Si vous ajoutez d'autres images, choisissez-les lumineuses : maison claire, jardin, mains au travail. On peut les prendre libres de droits sur [Unsplash](https://unsplash.com) ou [Pexels](https://pexels.com).
- Mettez les images dans le dossier `images/` avec des noms simples, par exemple `images/jardin-haie.jpg`.
- Donnez toujours un texte alternatif à l'image : `<img src="…" alt="Elouan taille une haie">`.

## Règles d'équipe

1. Ne modifiez pas `style.css` dans votre branche. S'il manque un style, demandez qu'on l'ajoute sur `main`.
2. Si votre page a besoin d'un style qui lui est propre, ajoutez un petit `<style>` dans votre propre page.
3. Gardez le même `<header>` (menu) et le même `<footer>` sur toutes les pages.
