---
permalink: /annotation/pourquoi-annoter/
---

# Pourquoi annoter ? 

## De bonnes données pour de bonnes IA 

Le développement de solutions dites d'Intelligence Artificielle et l'amélioration constante de leurs performances
au cours de la dernière décennie sont rendus possibles par trois facteurs: le développement de modèles 
de plus en plus complexes, l'accroissement des capacités de calculs et la disponnibilité de données de 
plus en plus volumineuses. On fait souvent référence à ce dernier facteur par l'expression Big Data. Or, même 
s'il est vrai qu'un large volume de données est en général nécessaire pour entraîner des algorithmes supervisés, il
ne faut pas négliger l'importance que joue la qualité de la donnée dans les performances de tels algorithmes.

L'accroissement du volume de données va en effet de pair avec une diversification des types de données. De plus en 
plus de données sont ainsi des données "non structurées", par opposistion aux données "structurées". 

::: tip La différence entre données structurées et non structurée
Les données structurées sont celle que l'on peut mettre dans un tableau, avec des lignes correspondant à des obervations et 
des colonnes correspondant à des variables. Les données non structurées ne sont pas descriptibles par un modèle
prédéfini et peuvent être très diverses: images, textes, vidéos, etc... 
:::

Le caractère non structuré des données rend leur exploitation - notamment par des algorithmes d'intelligence 
artificielle - beaucoup plus complexe. Si l'on souhaite  
utiliser ces données pour développer des solutions d'intelligence artificielle, une phase d'annotation est 
souvent nécessaire. La phase d'annotation, qui consiste à assigner un ou plusieurs labels à des éléments d'un jeu de 
données, permet ainsi la constitution d'un jeu de données structuré, rendant possible l'entraînement
d'algorithmes supervisés. 

Les solutions d'IA qui ont recours à des modèles de machine learning sont en très grande majorité des 
algorithmes supervisés. L'élaboration d'un modèle performant dépend fortement de la qualité des données, dont la 
qualité des labels est une dimension importante, même si d'autres aspects 
qualitatifs peuvent entrer en jeu (complétude des variables explicatives, valeurs abérrantes, etc...). La phase d'annotation 
doit donc être réalisée en veillant à obtenir des labels de bonne qualité. Ce guide présente les étapes clés et quelques 
bonnes pratiques afin d'y parvenir. 



## Des exemples de projets comportant une phase d'annotation 

Les exemples de projets comportant une phase d'annotation sont nombreux. Cette partie présente quelques 
exemples dans le secteur public. 

### PIAF (Pour des IA Francophones)

[PIAF](https://piaf.etalab.studio/) est un projet porté par le Lab IA d'Etalab qui a pour but de 
constituer un jeu de données francophone pour entraîner des algorithmes d’intelligence artificielle (IA) 
de questions-réponses. Ces derniers permettent de trouver des réponses à des questions précises 
portant sur un ensemble de documents. Construire des algorithmes performants de questions-réponses 
(question-answering en anglais) compte aujourd’hui parmi les tâches les plus complexes du 
traitement du langage naturel. Or avant le lancement du projet en 2019, il n'existait pas de jeu de 
données de ce type en français. Les algorithmes de questions-réponses sont pourtant utiles 
dans plein de domaines, et les [cas d'usage](https://piaf.etalab.studio/cas-usage/) 
sont nombreux, on y compte par exemple la création 
d'agents conversationnels ou l'amélioration de moteurs de recherche. 

La tâche d'annotation consiste ici à annoter des paragraphes de wikipédia. Pour chaque paragraphe, 
l'annotateur a pour tâche de trouver cinq questions portant sur le paragraphe et 
y souligner la réponse correpondante. Pour plus d'information, vous pouvez vous référer 
au [protocole d'annotation](https://piaf.etalab.studio/img/fr_protocol.pdf). Une [plateforme d'annotation](https://app.piaf.etalab.studio/signup/) 
a été développée est permet à toute personne francophone d'annoter des paragraphes afin d'alimenter le jeu de 
données. Nous reviendrons plus tard sur la méthode de *crowd sourcing* des annotations. 

 
### La pseudonymisation des décisions de justice à la Cour de Cassation  

La Cour de Cassation est chargée de la diffusion des décisions de justice. Le périmètre de diffision est 
étendu depuis la publication du décret 
sur [l'Open Data des décisions de justice](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000042055251). Cette 
diffusion ne peut cependant se faire qu'après avoir occulté des décisions de justice les éléments à
caractère personnel. Afin de mettre en oeuvre cette occultation, la Cour de Cassation a recours à une équipe 
d'une dizaine d'annotateurs afin d'identifier dans les décisions les éléments à caractère personnel 
à (noms, prénoms, adresses, dates de naissance) retirer avant diffusion. Afin d'automatiser ce processus, la cour 
de cassation à des data scientists via le 
programme [Entrepreneurs d'Intérêt Général](https://entrepreneur-interet-general.etalab.gouv.fr/index.html) pour 
développer une solution d'Intelligence Artificielle de pseudonymisation des décisions : c'est le 
projet  [Open Justice](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/openjustice.html). Cette solution 
est basée sur un algorithme entraîné à partir d'un corpus de décisions annotées par des annotateurs. Afin 
d'optimiser le processus d'annotation, la Cour de cassation va développer un logiciel d'annotation via le projet
[Label](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2020/label.html).

Pour plus d'information sur la pseudonymisation de documents textuels à l'aide de méthodes d'intelligence
artificielle, vous pouvez consulter notre [guide pseudonymisation](https://guides.etalab.gouv.fr/pseudonymisation/#a-quoi-sert-ce-guide). 





EN 3eme EXEMLE CHOISIR PARMI

### Projet d'aide à la décision de l'Autorité de Sûreté Nucléaire (ASN) 
### CARTO FRICHE ou c'est de l'annotation d'images?
### Projet DDTM Hérault : annotation d'images satellites 
Identification et qualification manuelle d'objets sur des images satellites (caravanes, mobile 
homes, constructions en dur, piscines, navires. )



## Les différents objectifs de l'annotation 

L'annotation permet de structurer des données afin de les rendre plus facilement exploitables, même si le 
but final peut être différent (comme c'est le cas pour la pseudonymisation, on 
annote des documents afin d'occulter certains éléments, mais cela passe par une étape de structuration du texte 
libre, en permettant d'identifier où sont les noms et prénoms de personnes physiques  dans le texte par exemple). 

La structuration de la donnée permet de mieux connaître le jeu de données en rendant possible notamment: 
- la réalisation d'opérations ou statistiques (moyennes, comptage par catégories, etc...)
- la visualisation de certaines mértiques d'intérêt du jeu de données 
- la recherche plus rapide d'une information précise (sélection d'un sous-ensemble selon un critère
donné, tri selon une variable, etc...)


### Annoter pour entraîner un algorithme d'intelligence articielle 

En fonction notamment du volume de données à annoter et de la complexité de la tâche d'annotation, il 
est plus ou moins pertinent d'envisager une solution d'intelligence artificielle pour automatiser 
le processus de structuration de la donnée. 

Il faut en effet dans un premier temps prendre en compte la nature des données à analyser (est-ce un 
stock de données historiques qui ne sera pas réalimenté dans le futur ou un flux de données alimenté 
en continu ?) ainsi que la volumétrie des données. 

Si le volume de données est relativement limité, il n'est pas nécessairement
pertinent d'envisager des méthodes d'IA pour structurer la donnée. Par exemple, vous souhaitez analyser les
réponses en texte libre à un questionnaire, afin d'en tirer des conclusions précises sur les thématiques abordées
par les répondants. Si le volume de données est faible, une étape d'annotation seule pourra répondre à votre 
objectif sans être trop coûteux en temps.  Nous ne donnons pas ici de seuil de nombre de documents 
permettant de juger de la pertinence ou non de la mise en place de solutions d'IA car l'évalutation du temps
nécessaire à l'annotation manuelle du jeu de données dépendra de la nature et de la longueur des documents, ainsi
que de la complexité de la tâche d'annotation. 

En revanche, dès lors que l'on est confronté à un volume important de documents ou à un flux continu, il est en 
général pertinent d'envisager d'automatiser le processus d'annotation. Dans ce cas, la phase d'annotation aura 
pour objectif d'annoter une partie des documents (encore une fois, le volume nécessaire de documents annoté 
dependra de la nature des documents et de la complexité de la tâche) afin d'entrâiner un algorithme supervisé 
à automatiser cette tâche. 


### Annoter ou repenser la façon de collecter la donnée ? 

Le besoin en annotation peut parfois mettre en lumière un mode de collecte de la donnée qui n'est pas adapté
aux besoins des utilisateurs. Le travail d'annotation *ex post* aurait parfois pu être évité en 
intégrant un processus de structuration de la donnée *ex ante*, cette dernière solution permettant un gain 
de temps souvent significatif par rapport à la première. 

Par exemple, l'enregistrement dans un système d'information d'une procédure ou d'une déclaration passe par
une application permettant à des agents de remplir un certains nombre de champs. Certains champs à remplir
en texte libre peuvent ainsi nécessitant une annotation *ex post* afin d'utiliser l'information 
alors que la même information aurait pu être saisie via un menu déroulant pour être directement exploitable. 


## Ressources externes 

- Ouvrage collectif sur l'annotation lingustistique : Handbook of Linguistic Annotation, Springer, 2017
- Un sondage sur les logiciels d'annotation consultable [ici](https://github.com/alvations/annotate-questionnaire)
- Un [benchmark de 78 outils d'annotation](https://academic.oup.com/bib/article/doi/10.1093/bib/bbz130/5670958#190144135 ) avec bcp de critères pris en compte : 



