---
permalink: /apis-geo/
---



# Introduction

::: tip Version bêta
Ce guide a été publié initialement en mars 2022. Il est amené à être ajusté suite aux retours de nos partenaires et lecteurs. Vous pouvez contribuer à l'améliorer en [proposant une modification](https://github.com/etalab/guides.etalab.gouv.fr/edit/master/apis-geo/) ou en [contactant directement](mailto:geo@data.gouv.fr) l'équipe Géo d'Etalab. 
:::

::: lexique API
Une API est un outil informatique qui permet à un site internet ou à un logiciel de communiquer avec un autre ordinateur et échanger de la donnée.
[En savoir plus](https://api.gouv.fr/guides/api-definition)
:::


# Que contient ce guide ? 
Ce guide vise à vous accompagner dans l'usage des API géographiques opérées par Etalab :


::: tip <a href="1-api-adresse">API Adresse (Base Adresse Nationale - BAN)</a>
L'API Adresse permet d'interroger la Base Adresse Nationale, base de données de l’intégralité des adresses du territoire français. 
En intégrant l'API dans votre système d'information, vous pouvez facilement rechercher une adresse et notamment :
- faire de l'autocomplétion et de la vérification d'adresse ;
- géolocaliser une adresse sur une carte ;
- faire une recherche géographique inversée (trouver la rue la plus proche de coordonnées géographiques).
:::

::: tip <a href="2-api-decoupage-administratif">API Découpage Administratif - (API Geo)</a>
L'API Découpage Administratif permet d'interroger les référentiels géographiques plus facilement. 
En intégrant l'API dans votre système d'information, vous pouvez notamment :
- rechercher une commune par nom, code postal ou coordonnées géographiques
- rechercher un département par son nom
- rechercher une région par son nom
:::

::: tip <a href="3-tuiles-vecteur">Les tuiles vectorielles openmaptiles.geo.data.gouv.fr</a>
Cette API permet de mettre à disposition des tuiles vectorielles qui sont affichables sur des cartes géographiques interactives.
Elles servent principalement à afficher des fonds de plan mais aussi les contours cadastrales et les limites administratives en France.
Cela permet de vous affranchir d'APIs cartographiques comme Google Maps.
:::

## À quoi sert ce guide ?
Ce guide propose d'explorer des cas pratiques d'utilisations des API géographiques mises à votre disposition pour vous accompagner dans leurs utilisations que vous oyez en train de construire une carte ou que vous souhaitiez récupérer des données géographiques. 

## À qui s'adresse ce guide ?
Ce guide s'adresse à plusieurs types de profils:
- Néophytes dans l'utilisation des APIs
- Intégrateur web
- Spécialiste du secteur géospatial

## Recommandations logiciels

Il est recommandé d'avoir un navigateur web en ayant installé [l'extension JSONView](https://jsonview.com/) pour faciliter la compréhension des retours JSON.

Vous pouvez aussi installer un éditeur de texte plus agréable à utiliser que le Bloc-Notes/Notepad par défaut si vous êtes sous Windows. Il vous permettra en particulier lorsque vous faites des tests sur les URLs de les modifier avant de les copier dans la barre d'adresse de votre navigateur. Il peut s'agit de [Notepad++](https://notepad-plus-plus.org/downloads/) si vous êtes sous Windows ou bien de [Microsoft Visual Studio Code](https://code.visualstudio.com/) quel que soit votre système d'exploitation. Une liste plus complète d'éditeurs de texte est disponible sur <https://fr.wikipedia.org/wiki/%C3%89diteur_de_texte#%C3%89diteurs_de_texte_couramment_utilis%C3%A9s>

## Sommaire
Ce guide est composé de trois parties:

1. [Utiliser l'API adresse pour récupérer les coordonnées depuis une liste d'adresse ou récupérer les adresses depuis des coordonnées](1-api-adresse.md)
2. [Utiliser l'API découpage administratif](2-api-decoupage-administratif.md)
3. [Consommer des tuiles vectorielles](3-tuiles-vecteur.md)


## Comment contribuer ?
Ce document est un outil évolutif et ouvert. Vous pouvez contribuer à l'améliorer en proposant une modification sur [GitHub](https://github.com/etalab/guides.etalab.gouv.fr/edit/master/apis-geo/) ou en [contactant directement](mailto:geo@data.gouv.fr) l'équipe Géo d'Etalab. 

## Ressources externes
