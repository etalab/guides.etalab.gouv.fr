---
permalink: /annotation/pourquoi-annoter/
---

* Votre projet d'IA nécessite-t-il une phase d'annotation ? 

** 	Connaissance et analyse de votre corpus de données 

/Annotation manuelle ou annotation automatique ?/

L’annotation manuelle est une tâche longue et coûteuse, et il peut être pertinent d’envisager d’automatiser (au moins en partie) l’annotation, en fonction du volume de données à annoter et de la complexité de la tâche d’annotation. On parle alors d’annotation automatique. 
Il faut dans un premier temps prendre en compte la nature des données à analyser : 
-	Est-ce un stock de données historiques qui ne sera pas réalimenté dans le futur ou un flux de données alimenté en continu ? 
-	Quel est le volume des données ? 
-	Autres questions à se poser ? (compléter ici/faire une liste de questions à se poser? si pertinent)

Si le volume des données est relativement limité, il n’est pas nécessairement pertinent d’envisager des méthodes d’IA pour structurer la donnée. Par exemple, vous souhaitez analyser les réponses en texte libre à un questionnaire, afin d’en tirer des conclusions précises sur les thématiques abordées par les répondants. Si le volume des données est faible, une étape d’annotation seule pourra répondre à votre objectif sans être trop couteux en temps. Nous ne donnons pas ici de seuil de nombre de documents permettant de juger de la pertinence ou non de la mise en place de solutions d’IA car l’évaluation du temps nécessaire à l’annotation manuelle du jeu de données dépendra de la nature et de la longueur des documents, ainsi que de la complexité de la tâche d’annotation. 

En revanche, si l’on est confronté à un volume important de documents ou un flux continu, il est en général pertinent d’envisager d’automatiser le processus d’annotation. Dans ce cas, la phase d’annotation aura pour objectif d’annoter une partie des documents (encore une fois, le volume nécessaire de documents annotés dépendra de la nature des documents et de la complexité de la tâche) afin d’entraîner un algorithme supervisé à automatiser cette tâche. 

Nous nous intéressons principalement ici à l’annotation manuelle : c’est une phase très fastidieuse, qui nécessite un travail de qualité constante et un équilibre entre qualité attendue, coût et volume à annoter.

** Exemples de projets comportant une phase d’annotation  
(Faire davantage un focus concis sur l’annotation de chaque projet (problématique, équipe projet, nombre d’annotateurs, temps requis, cible et résultats obtenus, etc.))

Les exemples de projets comportant une phase d'annotation sont nombreux. Par exemple plus de la moitié des projets sélectionnés dans le cadres de l'Appel à Manifestation d'Intérêt pour l'intelligence artificielle (AMI IA 1 et 2) ont nécessité une phase d'annotation. Cette partie présente quelques exemples dans le secteur public. 

### PIAF (Pour des IA Francophones)

[PIAF](https://piaf.etalab.studio/) est un projet porté par le Lab IA d'Etalab qui a pour but de constituer un jeu de données francophone pour entraîner des algorithmes d’intelligence artificielle (IA) de questions-réponses. Ces derniers permettent de trouver des réponses à des questions précises portant sur un ensemble de documents. Construire des algorithmes performants de questions-réponses (question-answering en anglais) compte aujourd’hui parmi les tâches les plus complexes du traitement du langage naturel. Or avant le lancement du projet en 2019, il n'existait pas de jeu de données de ce type en français. Les algorithmes de questions-réponses sont pourtant utiles dans plein de domaines, et les [cas d'usage](https://piaf.etalab.studio/cas-usage/) sont nombreux, on y compte par exemple la création d'agents conversationnels ou l'amélioration de moteurs de recherche. 

La tâche d'annotation consiste ici à annoter des paragraphes de wikipédia. Pour chaque paragraphe, l'annotateur a pour tâche de trouver cinq questions portant sur le paragraphe et y souligner la réponse correpondante. Pour plus d'information, vous pouvez vous référer au [protocole d'annotation](https://piaf.etalab.studio/img/fr_protocol.pdf). Une [plateforme d'annotation](https://app.piaf.etalab.studio/signup/) a été développée est permet à toute personne francophone d'annoter des paragraphes afin d'alimenter le jeu de données. Nous reviendrons plus tard sur la méthode de *crowd sourcing* des annotations. 

 
### La pseudonymisation des décisions de justice à la Cour de Cassation  

La Cour de Cassation est chargée de la diffusion des décisions de justice. Le périmètre de diffision est étendu depuis la publication du décret sur [l'Open Data des décisions de justice](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000042055251). Cette diffusion ne peut cependant se faire qu'après avoir occulté des décisions de justice les éléments àcaractère personnel. Afin de mettre en oeuvre cette occultation, la Cour de Cassation a recours à une équipe d'une dizaine d'annotateurs afin d'identifier dans les décisions les éléments à caractère personnel à (noms, prénoms, adresses, dates de naissance) retirer avant diffusion. Afin d'automatiser ce processus, la cour de cassation à des data scientists via le programme [Entrepreneurs d'Intérêt Général](https://entrepreneur-interet-general.etalab.gouv.fr/index.html) pour développer une solution d'Intelligence Artificielle de pseudonymisation des décisions : c'est le projet  [Open Justice](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/openjustice.html). Cette solution est basée sur un algorithme entraîné à partir d'un corpus de décisions annotées par des annotateurs. Afin d'optimiser le processus d'annotation, la Cour de cassation va développer un logiciel d'annotation via le projet [Label](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2020/label.html).

Pour plus d'information sur la pseudonymisation de documents textuels à l'aide de méthodes d'intelligence artificielle, vous pouvez consulter notre [guide pseudonymisation](https://guides.etalab.gouv.fr/pseudonymisation/#a-quoi-sert-ce-guide). 


### Projet DDTM Hérault : annotation d'images satellites 
Ce projet, réalisé dans le cadre de la première saison de l'[Appel à Manifestation d'Intérêt en Intelligence Artificielle](https://www.etalab.gouv.fr/intelligence-artificielle-decouvrez-les-6-projets-laureats-de-lappel-a-manifestation-dinteret-ia) à la [DDTM de l'Hérault](http://www.herault.gouv.fr/Services-de-l-Etat/Agriculture-environnement-amenagement-et-logement/Direction-Departementale-des-Territoires-et-de-la-Mer-de-l-Herault-DDTM-34) , vise a développer un modèle d’analyse d’images aériennes ou satellites pour automatiser le pré-repérage des infractions potentielles liées à la cabanisation. Cette automatisation nécessite une phase d'annotation manuelle d'images satellites. La tâche d'annotation consiste à repérer sur l'image les zones correspondant à plusieurs types d'objet types d’objets (caravanes, mobile homes, constructions en dur, piscines, navires) et à leur attribuer le label correspondant. Un logiciel d'annotation d'image a été développé à cet effet. 

