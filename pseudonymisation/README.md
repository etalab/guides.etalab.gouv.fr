---
permalink: /pseudonymisation/
---

# Introduction

## À quoi sert ce guide ?

De nombreuses administrations publiques sont confrontées à des problèmes de pseudonymisation dès lors qu'elles ont à publier des **documents textuels contenant des données à caractère personnel**. Ces documents recouvrent par exemple des décisions de justice, des actes administratifs, des procès-verbaux, des notes, etc.

C'est dans ce cadre qu'Etalab a développé [un outil d'intelligence artificielle de pseudonymisation](https://github.com/etalab-ia/pseudonymisation_decisions_ce) pour le Conseil d'État, qui publie en open data des décisions de justice administrative. Cet outil est open-source et peut donc être librement réutilisé pour d'autres projets de pseudonymisation.

Pour accompagner la publication de cet outil technique de pseudonymisation, nous avons pensé qu'il était nécessaire de publier également un **guide qui expose ce qu'est la pseudonymisation de documents textuels et la (possible) utilisation de l'intelligence artificielle (IA) pour la mettre en œuvre**.

## À qui s'adresse ce guide ?

Ce guide s'adresse principalement **aux organismes publics**, et plus particulièrement **aux personnes chargées du traitement et de la protection de données à caractère personnel** dans ces organismes. Ces personnes peuvent être des agents publics, internes à l'administration, mais aussi des prestataires. Dans ce dernier cas, le sous-traitant devra veiller au respect des obligations imposées par le RGPD (voir le [guide de la CNIL sur la sous-traitance des données à caractère personnel](https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf)).

Ce guide pourra également intéresser d'autres acteurs faisant face à un besoin de pseudonymisation de documents textuels, dans le cadre de développements de services ou de produits à partir de données à caractère personnel. 

## Sommaire

Ce guide est composé de trois parties et d'un lexique :

- La [première partie](pourquoi-comment) permet de **découvrir ce qu'est la pseudonymisation, pourquoi elle est utile dans les administrations publiques** et présente les méthodes de pseudonymisation existantes.
- La [deuxième partie](etapes) expose une vue d'ensemble de la **méthode basée sur l'IA** que nous avons développée à Etalab.
- La [troisième partie](en-pratique) s'adresse à un public plus technique, comme des data scientists, et **présente de manière plus détaillée la mise en œuvre de cette approche** basée sur l'IA.
- Le [lexique proposé en annexe](lexique) vous permet finalement de retrouver une définition des termes techniques mentionnés tout au long du guide.

::: tip Ce que ce guide n'est pas
- un guide juridique sur la protection des données à caractère personnel ;
- un guide sur la pseudonymisation de données autres que textuelles (en particulier tabulaires) ;
- un guide sur la sécurité des données.
:::

## Comment contribuer ?

Ce document est un outil évolutif et ouvert. Vous pouvez contribuer à l'améliorer en proposant une modification sur [GitHub](https://github.com/etalab/guides.etalab.gouv.fr/edit/master/pseudonymisation/) ou en [contactant directement](mailto:lab-ia@data.gouv.fr) l'équipe du Lab IA d'Etalab. 
