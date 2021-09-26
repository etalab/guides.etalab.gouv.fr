<p align="center">
    <img src="https://user-images.githubusercontent.com/60264344/134811322-1133f329-dc35-48d1-863a-0d86254d3d7e.png">  
</p>
<p align="center">
    <i>📚 Les guides d'Etalab 📚</i>
    <br>
    <br>
    <img src="https://img.shields.io/github/issues/etalab/guides.etalab.gouv.fr">
    <img src="https://img.shields.io/github/issues-closed/etalab/guides.etalab.gouv.fr">
    <img src="https://img.shields.io/github/contributors/etalab/guides.etalab.gouv.fr">
    <img src="https://img.shields.io/github/license/etalab/guides.etalab.gouv.fr">
    <img src="https://img.shields.io/github/commit-activity/m/etalab/guides.etalab.gouv.fr">
</p>


# Guides d'Etalab

Ce dépôt contient plusieurs guides rédigés par Etalab ainsi que le code utilisé pour fournir un site web présentant ces guides.

## Ajouter un guide

Pour ajouter un guide, il suffit d'ajouter un répertoire à la racine du dépôt. Ce répertoire doit contenir un fichier `README.md`. Le titre de ce fichier définit le titre du guide.

Pour ajouter des chapitres au guide, il suffit d'ajouter des fichiers `.md` dans le répertoire précédemment créé, par exemple `0-introduction.md`. Les titres de ces fichiers définissent les titres des chapitres.

Les chapitres apparaissent par ordre alphabétique dans les menus de navigation. Il est donc conseillé de préfixer le nom de fichier de chaque chapitre par son numéro, par exemple `0-introduction.md`, `1-chapitre-1.md`...

La page d'accueil et les menus de navigation sont générés automatiquement.

Il est recommandé d'utiliser un `permalink` dans chaque fichier de chapitre afin d'obtenir des URLs propres et stables même en cas de re-numérotation de chapitres, par exemple pour `qualite/1-preparer-le-jeu-de-donnees.md` :

```
---
permalink: /qualite/preparer-le-jeu-de-donnees
---
```

Par convention, les images des guides sont stockées dans un répertoire `images` dans le répertoire de chaque guide.

## Développement local

Dans la majorité des cas, l'utilisation de GitHub par le biais de son interface web vous suffira. Vous pouvez directement éditer le contenu des guides par le biais de *pull-requests* et profiter d'une prévisualisation ensuite.

Si nécessaire, voici comment faire tourner ce projet localement :
```sh
npm install
npm run dev
open http://localhost:8080
```

## Licence

Le contenu de ce dépôt est publié sous 2 licences.

- Le contenu des guides est publié sous [licence Ouverte 2.0](LICENSE.md) ;
- Le code nécessaire à la publication web de ces guides est sous [licence MIT](https://opensource.org/licenses/MIT).

2019 DINSIC, Etalab.
