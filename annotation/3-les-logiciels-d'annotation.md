---
permalink: /annotation/les-logiciels-d-annotation/
---

# Les critères de sélection des logiciels d'annotation 

Objectif de cette partie: lister un ensemble de critère à avoir en tête lorsqu'on 
sélectionne un logiciel d'annotation. 

Parler de l'arbitrage de développer logiciel custom (en forkant un projet open source par exemple)

## le caractère open source
- développeurs actifs, développement continu de nouvelles fonctionnalités 
- grosse communauté d'utilisateurs 

## les types d'annotation 
- classification de doc 
- seq to seq (NER, POS Tagging, extraction d'info )
- relations : dirigées ou non, type de liens: ex Entity relation 
- QA
- parsing syntaxique (ex : Treebank, 
cf [artcile](https://cl.lingfil.uu.se/~nivre/docs/hsk.pdf), pour une application en français
 voir [The French Question Bank](http://alpage.inria.fr/Treebanks/FQB/lrec2016_QuestionBank.pdf) )

## L'UX pour l'annotateur 
- la sélection des segments 
- la facilité à sélectionner parmi différents tags
- la gestion de tags multiples 
- les raccourcis claviers pour les différenrs tags 
- la facilité à corriger un tag erroné
- la facilité à corriger la longueur du segment sélectionné 
- la lisibilité du texte et des annotations 
- la gestion des textes longs 

- custom interface: trouver un exemple pour illustrer 
    
## Les formats d'entrées (pour la pré annotation notamment) et de sorties (pour faciliter le post-processing)
- CONLL
- xml / html 
- json with standard format 


## L'interface de gestion de projets: 

- L'aspect collaboratif 
    - les différents rôles: admin/manager, curator, annotateur
    - le suivi de l'avancée des différentes tâches 
    - la facilité d'attribuer les docs aux différents annotateurs

- le suivi de la qualité 
    - correction 
    - résolution des conflits 

- le crowdsourcing 


## La suggestion des annitations à l'aide de IA 
- suggestion de tags (active learning, regex, weak supervision)
- possibilité d'intégrer différents modèles custom pour la préannotation 


## la facilité d'installation : 
- Docker
- Saas ou On premise : 
L'architecture SaaS, acronyme pour Software as a Service est une solution logicielle utilisable en ligne (on 
parle aussi de Cloud ou de on demand). Le logiciel est délocalisé et accessible à distance par 
réseau, moyennant un abonnement auprès de l’éditeur/hébergeur, sur n’importe quel navigateur.

A contrario, les solutions on premise sont les logiciels dont l’architecture est physiquement 
présente au sein de l’entreprise (c’est à dire installée sur les serveurs de l’entreprise) qui 
s’est acquittée d’une licence auprès de l’éditeur.