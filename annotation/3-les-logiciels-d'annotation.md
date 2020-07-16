---
permalink: /annotation/les-logiciels-d-annotation/
---

# Les critères de sélection des logiciels d'annotation 

## le caractère open source
- développeurs actifs, développement continu de nouvelles fonctionnalités 
- grosse communauté d'utilisateurs 

## les types d'annotation 
- classification de doc 
- seq to seq (NER, POS Tagging, extraction d'info )
- relations : dirigées ou non, type de liens: ex Entity relation 
- QA

## L'UX pour l'annotateur 
- la sélection des segments 
- la facilité à sélectionner parmi différents tags
- la gestion de tags multiples 
- les raccourcis claviers pour les différenrs tags 
- la facilité à corriger un tag erroné
- la facilité à corriger la longueur du segment sélectionné 
- la lisibilité du texte et des annotations 
- la gestion des textes longs 
    
## Les formats d'entrées (pour la pré annotation notamment) et de sorties (pour faciliter le post-processing)

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
- docker?
- serveur disponible en ligne (donc pas d'installation)-> présente l'inconvénient de ne pas être compatible avec des données "sensibles" / non ouvertes
