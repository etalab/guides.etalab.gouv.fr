---
permalink: /annotation/pourquoi-annoter/
---

# Pourquoi annoter ? 

## De bonnes données pour de bonnes IA 

Le développement de solutions dites d'Intelligence Artificielle et l'amélioration constante de leurs performances
au cours de la dernière décennie sont rendus possibles par trois facteurs: le développement de modèles 
de plus en plus complexes, l'accroissement des capacités de calculs et la disponnibilité de données de 
plus en plus volumineuses. On fait souvent référence à ce dernier facteur par l'expression Big Data. Or, même 
s'il est vrai qu'un large volume de données est en général nécessaire pour entraîner des algorithmes supervisés,
il ne faut pas négliger l'importance que joue la qualité de la donnée dans les performances de tels algorithmes.

L'accroissement du volume de données va en effet de pair avec une diversification du type de données. De plus en 
plus de données sont ainsi des données dites "non structurées", par opposistion aux données dites 
"structurées". Les données structurées sont celle que l'on peut mettre dans un tableau, avec des lignes correspondant à des obervations et 
des colonnes correspondant à des variables. Les données non structurées qui ne sont pas descriptibles par un modèle
prédéfini, et peuvent être très diverses: images, textes, vidéos, etc... Leur caractère non structé rend leur
exploitation beaucoup plus complexe, notamment par des algorithmes d'intelligence artificielle. Si l'on souhaite  
utiliser ces données pour développer des solutions d'intelligence artificielle, une phase d'annotation est 
souvent nécessaire. La phase d'annotation, qui consistera à assigner un ou plusieurs labels à des éléments d'un jeu de 
données, permettra ainsi la constitution d'un jeu de données structuré, rendant possible la mise en 
place d'algorithmes supervisés. 

Les solutions d'IA qui ont recours à des modèles de machine learning sont en très grande majorité des 
algorithmes supervisés. La qualité de la données est une condition nécessaire à l'élaboration d'un modèle performant, 
et la qualité des labels est une dimension importante de la qualité globale des données. En effet d'autres aspects 
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

Parler du décret Open Data -> ouverture par défaut des décisions de justice 
QUi implique d'occulter les données à caractère personnel : pseudonymisation. Pour plus d'information sur 
ce sujet, vous pouvez consulter notre [guide pseudonymisation](https://guides.etalab.gouv.fr/pseudonymisation/#a-quoi-sert-ce-guide)
Parler : 
- projet Open Justice , [lien](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/openjustice.html)
- équipe d'une dizaine d'annotateur afin de créer un corpus d'entraînement 
Objectif à termes de la solution d'IA: automatiser complètement le processus de pseudonymisation 


Annotation : [projet EIG Label](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2020/label.html) 
à venir : 




Le principe de l’ouverture des décisions de justice a vocation à permettre une plus grande transparence de 
la justice, mais nécessite l’occultation d’informations personnelles comme des noms et des adresses, afin 
de respecter la vie privées des personnes mentionnées dans les décisions. A l’heure actuelle, ce travail 
colossal doit être réalisée à la main (humaine), ce qui empêche une publication généralisée des 3,9 millions
 de décisions produites chaque année. Nous travaillons donc à l’automatisation de cette tâche, en ayant 
 recours à diverses approches de traitement automatique du langage, la plus évidente étant la reconnaissance 
 d’entités nommées qui consiste à reconnaitre la catégorie d’éléments d’une phrase : noms de personnes, noms 
 d’organisations ou d’entreprises, noms de lieux, quantités, dates, etc. Une fois ces éléments reconnus, il 
 suffit de retirer les éléments relevant de catégories comme les noms et les lieux.


EN 3eme EXEMLE CHOISIR PARMI

### Projet d'aide à la décision de l'Autorité de Sûreté Nucléaire (ASN) 
### CARTO FRICHE ou c'est de l'annotation d'images?
### Projet DDTM Hérault : annotation d'images satellites 
Identification et qualification manuelle d'objets sur des images satellites (caravanes, mobile 
homes, constructions en dur, piscines, navires. )



## Les différents objectifs de l'annotation 

L'annotation pour entraîner un algorithme d'IA vs l'annotation pour structurer de la donnée

Dépend aussi de l'objectif que l'on s'est fixé: 
- analyse de données ex post 
- flux continu de données et on souhaite automatisder le processus d'analyse 

L'annotation est parfois la conséquence d'un SI mal configuré : 
- ex des décisions de justice 

La différence entre données structurées et non structurée
La structuration de la donnée permet : 
- mieux connaitre son jeu de données 
- réaliser des opérations / statistiques (moyennes, comptage par catégories, etc...)
- faire de la visualisation de données, métriques d'intérêt

Effet de seuil en fonction de la taille du jeu de données à analyser : est ce qu'on annote 
la totalité (et donc pas de recours à l'IA) ou est-ce qu'on annote une partie et on étend les labels à l'aide 
d'un modèle supervisé

-> exemple d'un questionnaire à champ libre 

Les deux objectifs ne sont pas incompatibles 


## Ressources externes (ou à mettre à la fin plutôt ?? )

- Livre: Handbook of Linguistic Annotation, Springer, 2017

- benchmark de Guillaume: https://airtable.com/shriJ539wx973NWEo/tblF1dF1WgXRaRp1o 

- survey: https://github.com/alvations/annotate-questionnaire

- benchmark de 78 outils avec bcp de critères pris en compte : https://academic.oup.com/bib/article/doi/10.1093/bib/bbz130/5670958#190144135 

- benchmark d'outil d'annotation [trantorinc](https://www.trantorinc.com/blog/best-data-labeling-tools-2019/):
    - bella (OS) -> https://github.com/dennybritz/bella
    - stanford core NLP (OS) -> https://stanfordnlp.github.io/CoreNLP/ 
    - tagtog 

- benchmark [bohemian ai](https://bohemian.ai/blog/text-annotation-tools-which-one-pick-2020/)
    - dataturk https://dataturks.com/ 
    - label studio https://labelstud.io/
    
- Nouveau logiciel open source : https://www.teamtat.org/ , Team Tat papier ici https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkaa333/5834578 , github ici https://github.com/ncbi-nlp/TeamTat

- image : 
    - http://yannickprie.net/oldsite/ens/06-07/TIA/Annotation-Image.pdf
    - http://www.cea.fr/presse/Pages/actualites-communiques/ntic/pixano-intelligence-artificielle.aspx

- approche mixte : 
    - https://likeabot.io/blog/intelligence-artificielle-classifier-annoter-apprentissage