---
permalink: /annotation/les-logiciels-d-annotation/
---

# Les critères de sélection des logiciels d'annotation 

L'objectif de cette partie est de lister un ensemble de critères à prendre en compte pour le choix d'un logiciel d'annotation. De nombreux logiciels d'annotation sont disponibles (certains sont open source, d'autres sont payants). Certains critères seront plus ou moins déterminants en fonction des spéficités de chaque projet. 

Dans certains cas, les besoins en termes d'annotation peuvent être très spécifiques et il peut être bénéfique de développer un logiciel d'annotation "sur mesure" (ce qui suppose d'avoir les ressources pour un tel développement, qui nécessite un développeur et un designer). 

## Le caractère open source
L'avantage de logiciel open source est qu'ils sont gratuits. Lorsque le logiciel a une communauté d'utilisateurs et de développeurs actifs, de nouvelles fonctionnalités ou des améliorations sont susceptiles d'être développées. 

- contributions actives 
- communauté d'utilisateurs importante (cela aura pour avantage de pouvoir en général bénéficier d'aide à la résolution de bugs, 
en postant des issues par exemple)

## Les types d'annotation 
Les logiciels d'annotation n'offrent pas tous les mêmes fonctionnalités. Il est important de choisir un logiciel qui soit adapté aux types d'annotations de votre schéma d'annotation. Parmi les types d'annotation, on trouve: 
- classification de document (attribuer un label à chaque document) 
- sequence to sequence (NER, POS Tagging, extraction d'information ): attribuer un label à un sous-ensemble de mots du documents 
- relations : fonction qui permet deux entités annotées entre elles (les liens peuvent dirigés ou non)
- Question-Réponse
- Parsing syntaxique (ex : Treebank, cf [artcile](https://cl.lingfil.uu.se/~nivre/docs/hsk.pdf), pour une application en français voir [The French Question Bank](http://alpage.inria.fr/Treebanks/FQB/lrec2016_QuestionBank.pdf) )

## L'expérience utilisateur (UX) pour l'annotateur 
L'UX est également un aspect important. Parmi les critère de l'expérience utilisateurs, on compte:
- la sélection des segments 
- la facilité à sélectionner parmi différents tags
- la gestion de tags multiples 
- les raccourcis claviers pour les différenrs tags 
- la facilité à corriger un tag erroné
- la facilité à corriger la longueur du segment sélectionné 
- la lisibilité du texte et des annotations 
- la gestion des textes longs 

    
## Les formats 
Les format d'entrées et de sorties permis par le logiciel sont des critères à prendre en compte, en particulier pour permettre une interopérabilité entre différents logiciels. Parmi les formats standards de données textuelles annotées, on compte: 
- CONLL
- xml / html 
- json with standard format 


## L'interface de gestion du projet d'annotation  

Lorsque plusieurs annotateurs contribuent au projet, il est particulièrement d'utiliser un logiciel qui propose une interface de gestion de projet afin que le chef de projet puissse suivre l'avancement du projet et contrôler / corriger les annotations des différents annotateurs. 

- L'aspect collaboratif 
    - les différents rôles: admin/manager, curator, annotateur
    - le suivi de l'avancée des différentes tâches 
    - la facilité d'attribuer les docs aux différents annotateurs

- Le suivi de la qualité 
    - correction des annotations par le chef de projet 
    - résolution des conflits (lorsqu'une même document est annoté par plusieurs annotateurs)

- le crowdsourcing : le fait de pouvoir collecter des informations d'un public très large (exemple de la plateforme  d'annotation PIAF)


## La suggestion des annotations à l'aide de IA 
Certains logiciels d'annotation incluent des modules de suggestions d'annotations (à l'aide de modèle de machine learning notamment) ou permettent d'implémenter des règles de pré-annotation déterministes. 

Les fonctionnalités à rechercher dans ce domaines peuvent être: 
- La suggestion de tags par des modèles entraînés directement dans la plateforme 
- La possibilité d'intégrer son propre modèle de pré-annotation 


## La facilité d'installation 

La facilité d'installation du logiciel d'annotation est également un critère à prendre en compte et le choix optimal dépendra également des compétences disponibles dans votre équipe (certains logiciels open source nécessitent des compétences en développement informatique pour l'installation), de vos ressources informatiques (serveur disponible) de la sensibilité de vos données. 
- Saas ou on premise : un logiciel SaaS (Software as a Service) est directement utilisable en ligne alors qu'un logiciel on premise aura son architecture hébergée sur votre propre serveur
- Docker ou non: Docker permet de faciliter le deploiement du logiciel sur un serveur

::: lexique [Docker](https://www.docker.com/) est un logiciel libre permettant de lancer des applications dans des conteneurs logiciels. Il permet ainsi de faciliter le déploiement d'une application sur un serveur. :::

Les solutions Saas présentent l'avantage de ne pas nécessiter ni de serveur ni d'installation. Si les données à annoter sont sensibles, il faudra cependant s'assurer de les modalités de stockage des données sur la solution en ligne sont conformes aux exigences de sécurité et de protection des données. 
