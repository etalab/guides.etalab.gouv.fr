---
permalink: /annotation/
---
# Guide pour préparer et conduire votre campagne d'annotation 

## Introduction : pourquoi annoter ? 

Pour analyser le contenu de vos données, entraîner des algorithmes supervisés et mener à bien votre projet d’intelligence artificielle, vous aurez besoin de données « structurées » ou « annotées ». 

Il se peut que vos données soient déjà structurées, c’est-à-dire collectées en amont de façon à ce qu’elles apparaissent dans un tableau, avec des lignes correspondant à des observations et des colonnes correspondant à des variables. En intégrant un processus de structuration de la donnée *ex ante*, vous bénéficiez d’un gain de temps significatif et n’aurez probablement pas besoin d’une phase d’annotation, vos données étant déjà structurées. 

Par opposition, vous aurez probablement besoin d’annoter vos données si elles sont « non structurées », c’est-à-dire non descriptibles par un modèle prédéfini, non catégorisées et potentiellement très diverses (images, textes, vidéos, etc.). Le caractère non structuré des données rend leur exploitation par des algorithmes d’intelligence artificielle beaucoup plus complexe. Dans ce cas, vous aurez besoin d’organiser une phase d’annotation. 

La phase d’annotation, qui consiste à assigner une ou plusieurs étiquettes à des éléments d’un jeu de données, permet ainsi la constitution d’un jeu de données structuré, rendant possible l’entraînement d’algorithmes supervisés. 

::: lexique 
L'annotation est la tâche qui consiste à attribuer à chaque donnée le label qui lui correspond. Par exemple, à attribuer le label « chien » ou « chat » à une base de photographies d'animaux. Ou encore à attribuer le label correct entre « nom », « prénom », « adresse », « date » ou « aucun » à chacun des mots d'un document. On distinguera **l'annotation manuelle**, lorsque cette tâche est effectuée par un humain, de **l'annotation automatique**, lorsque cette tâche est effectuée par un programme informatique. 
:::

La pertinence et la performance de votre solution d’IA dépendra fortement de la qualité des données, dont la qualité des étiquettes est une dimension importante ; même si d’autres aspects qualitatifs peuvent entrer en jeu (complétude des variables explicatives, valeurs aberrantes, etc.). La phase d’annotation doit donc être réalisée en veillant à obtenir des étiquettes de bonne qualité. Ce guide présente les étapes clés et quelques bonnes pratiques afin d’y parvenir.

## À quoi sert ce guide ?

Ce guide propose des étapes et bonnes pratiques pour conduire une campagne d’annotation nécessaire à un projet d’intelligence artificielle, notamment lorsqu’on ne dispose pas de données structurées. Ce guide se concentrera essentiellement sur l'annotation de documents textuels, mais beaucoup d'éléments se généralisent aux projets d'annotation d'autres types de documents. 

## À qui s'adresse ce guide ?

Ce guide est susceptible d'intéresser différents types de profils amenés à être impliqués dans une campagne d'annotation:
-	Chef de projet/responsable de la mise en œuvre d’une campagne d’annotation 
-	Expert métier 
-	Data scientist, développeur ou designer  

Nous le verrons, réussir une campagne d’annotation nécessite d’impliquer conjointement des profils techniques et des profils «métier».

## Sommaire

Ce guide est composé de quatre parties et d'un lexique :

Introduction : pourquoi annoter ? 

I. [Mon projet nécessite-t-il une phase d'annotation et quelle stratégie d'annotation adopter ?](1-annotation-ia.md) 

II. [Préparer votre campagne d’annotation](2-preparer-campagne-annotation.md) 

III. [Conduire votre campagne d'annotation](3-conduire-campagne-annotation.md) 

VI. [Critères de sélection d’un logiciel d’annotation de documents textuels ](4-les-logiciels-d-annotation.md) 

Le [lexique](5-lexique.md) propose les définitions de termes techniques utilisés de façon récurrente dans ce guide. 


## Comment contribuer ?

Ce document est un outil évolutif et ouvert. Vous pouvez contribuer à l'améliorer en proposant une modification sur [GitHub](https://github.com/etalab/guides.etalab.gouv.fr/edit/master/annotation/) ou en [contactant directement](mailto:lab-ia@data.gouv.fr) l'équipe du Lab IA d'Etalab. 

## Ressources externes 

- [Thèse de doctorat](https://tel.archives-ouvertes.fr/tel-00797760v1/document) portant sur la préparation et l'organisation de campagnes d'annotation 
- Ouvrage collectif sur l'annotation linguistique : *Handbook of Linguistic Annotation*, Springer, 2017
- Un sondage sur les logiciels d'annotation consultable [ici](https://github.com/alvations/annotate-questionnaire)
- Un [benchmark de 78 outils d'annotation](https://academic.oup.com/bib/article/doi/10.1093/bib/bbz130/5670958#190144135 ) avec de nombreux critères pris en compte 
