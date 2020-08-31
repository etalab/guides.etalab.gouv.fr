---
permalink: /annotation/
---
# Guide pour préparer et conduire votre campagne d'annotation 

## Introduction : pourquoi annoter ? 

Pour analyser le contenu de vos données, entraîner des algorithmes supervisés et mener à bien votre projet d’intelligence artificielle, vous aurez besoin de données « structurées » ou « annotées ». 

Il se peut que vos données soient annotées de facto, si elles sont déjà structurées, c’est-à-dire collectées en amont de façon à ce qu’elles apparaissent dans un tableau, avec des lignes correspondant à des observations et des colonnes correspondant à des variables. En intégrant un processus de structuration de la donnée ex ante, vous bénéficiez d’un gain de temps significatif et n’aurez probablement pas besoin d’une phase d’annotation, vos données étant déjà structurées et de facto annotées. 

Par opposition, vous aurez probablement besoin d’annoter vos données si elles sont « non structurées », c’est-à-dire non descriptibles par un modèle prédéfini, non catégorisées et potentiellement très diverses (images, textes, vidéos, etc.). Le caractère non structuré des données rend leur exploitation par des algorithmes d’intelligence artificielle beaucoup plus complexe. Dans ce cas, vous aurez besoin d’organiser une phase d’annotation. 

La phase d’annotation, qui consiste à assigner une ou plusieurs étiquettes à des éléments d’un jeu de données, permet ainsi la constitution d’un jeu de données structuré, rendant possible l’entraînement d’algorithmes supervisés. 

::: lexique L’annotation en Traitement Automatique du Langage (TAL ou NLP en anglais) est la tâche qui consiste à attribuer à chaque donnée l’étiquette qui lui corresponds. Par exemple, il s’agit d’attribuer l’étiquette « chien » ou « chat » à une base de photographies d’animaux, ou encore d’attribuer l’étiquette correcte entre « nom », « prénom », « adresse », « date » ou « aucun » à chacun des mots d’un document. On distinguera l’annotation manuelle, lorsque cette tâche est effectuée par des humains (les annotateurs), de l’annotation automatique, lorsque cette tâche est effectuée par un outil informatique. :::

L’élaboration et la performance de votre solution d’IA dépendra fortement de la qualité des données, dont la qualité des étiquettes est une dimension importante ; même si d’autres aspects qualitatifs peuvent entre en jeu (complétude des variables explicatives, valeurs aberrantes, etc.). La phase d’annotation doit donc être réalisée en veillant à obtenir des étiquettes de bonne qualité. Ce guide présente les étapes clés et quelques bonnes pratiques afin d’y parvenir.

## À quoi sert ce guide ?

Ce guide propose des étapes et bonnes pratiques pour conduire une campagne d’annotation nécessaire à un projet d’intelligence artificielle, notamment lorsqu’on ne dispose pas de données structurées. Ce guide se concentrera essentiellement sur l'annotation de documents textuels, mais beaucoup d'éléments se généralisent aux projets d'annotation d'autres types de documents. 

## À qui s'adresse ce guide ?

Ce guide s’adresse à toute personne :
-	Chef de projet/responsable de la mise en œuvre d’une campagne d’annotation 
-	Expert métier participant à une campagne d’annotation 
-	Data scientist, développeur ou designer  d’une campagne d’annotation 
Nous le verrons, réussir une campagne d’annotation nécessite d’impliquer conjointement des profils techniques et des profils « métier ».

## Sommaire

Ce guide est composé de trois parties et d'un lexique :

Introduction : pourquoi annoter ? 

I. [Votre projet d’IA nécessite-t-il une phase d’annotation ?](1-pourquoi-annoter.md) 
- Analyser votre corpus de données 
- Exemples de projets comportant une phase d'annotation 

II. [Organiser et conduire votre campagne d’annotation](2-comment-annoter.md) 
-	Planifier votre campagne d’annotation 
o	La mobilisation d’une équipe projet 
o	Définir la problématique 
o	Elaborer le schéma d’annotation 
o	Développer la documentation 
-	Conduire votre campagne d’annotation 
o	Former et mobiliser les annotateurs 
o	Annoter et s’assurer de la qualité 
o	Accélérer le processus d’annotation : pré-annoter ou pas ? 
-	Evaluer votre campagne d’annotation manuelle 

III. [Critères de sélection d’un logiciel d’annotation de documents textuels ](3-les-logiciels-d'annotation.md) 

Le [lexique](4-lexique.md) propose les définitions de termes techniques utilisés de façon récurrente dans ce guide. 


## Comment contribuer ?

Ce document est un outil évolutif et ouvert. Vous pouvez contribuer à l'améliorer en proposant une modification sur [GitHub](https://github.com/etalab/guides.etalab.gouv.fr/edit/master/pseudonymisation/) ou en [contactant directement](mailto:lab-ia@data.gouv.fr) l'équipe du Lab IA d'Etalab. 

## Ressources externes 

- Ouvrage collectif sur l'annotation lingustistique : Handbook of Linguistic Annotation, Springer, 2017
- Un sondage sur les logiciels d'annotation consultable [ici](https://github.com/alvations/annotate-questionnaire)
- Un [benchmark de 78 outils d'annotation](https://academic.oup.com/bib/article/doi/10.1093/bib/bbz130/5670958#190144135 ) avec bcp de critères pris en compte 
