---
permalink: /anonymisation/
---

# Introduction

::: tip Rédaction de ce guide
Ce guide a été publié initialement en juin 2022 et sera mis à jour de manière régulière. 
Si vous souhaitez faire des propositions pour le faire évoluer, vous êtes invités à proposer une modification sur [GitHub](https://github.com/etalab/guides.etalab.gouv.fr/edit/master/pseudonymisation/) ou en [contactant directement](mailto:lab-ia@data.gouv.fr) l'équipe du Lab IA d'Etalab. 
En particulier, le lab IA d'Etalab est preneur de tout retour d'expérience pour faire évoluer ce guide et mettre à jour nos bonnes pratiques.
:::

## À quoi sert ce guide ?

Ce guide est une introduction à <b>des techniques d'anonymisation de données tabulaires</b>. Il vous propose un accompagnement méthodologique dans votre procédure d'anonymisation, afin de limiter les risques que des personnes issues de votre base anonymisée soit ré-identifiée a postériori.

Il est important de garder à l'esprit que la publication de données personnelles est encadrée légalement, et qu'il y a plusieurs niveaux d'occultation, depuis le simple brouillage des éléments directement identifiants jusqu'à des techniques plus poussées pour prévenir que des informations sensibles ne puissent être déduites d'analyse de corrélations effectuées sur la base anonymisée.

## À qui s'adresse ce guide ?

Ce guide s'intéresse à des personnes désireuses de publier des données, notamment dans le cadre de l'_open data_, tout en protégeant la confidentialité de données à caractère personnel (ce qui constitue dans bien des cas une obligation légale) ou de données jugées sensibles.

Ce guide pourra également intéresser d'autres acteurs faisant face à un besoin d'anonymisation de bases tabulaires, dans le cadre de développements de services ou de produits à partir de données à caractère personnel ou sensible. 

## Sommaire

Ce guide est composé de quatre parties :
- une définition et des exemples dr projets d'anonymisation ;
- une revue de quelques méthodes d'anonymisation ;
- une mesure du niveau de brouillage d'une base anonymisée ;
- une présentation non exhaustive de quelques solutions techniques pour aider à l'anonymisation.

::: tip Ce que ce guide n'est pas
- un guide juridique sur la protection des données à caractère personnel ;
- un guide sur l'anonymisation de textes ;
- un guide sur la sécurité des données et des systèmes d'information.
:::

## Comment contribuer ?

Ce document est un outil évolutif et ouvert. Vous pouvez contribuer à l'améliorer en proposant une modification sur [GitHub](https://github.com/etalab/guides.etalab.gouv.fr/edit/master/anonymisation/) ou en [contactant directement](mailto:lab-ia@data.gouv.fr) l'équipe du Lab IA d'Etalab. 
