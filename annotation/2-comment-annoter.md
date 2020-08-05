---
permalink: /annotation/comment-annoter/
---

# Comment annoter ? 


## La mobilisation d'une équipe projet 
### Les différents rôles dans un projet d'annotation 

Objectifs fixés dans un projet d'annotation: 
- Annoter un grand nombre de documents (en général, plus de doc annotés mieux c'est)
- Obtenir des annotations de qualité 
- Travail sous contraintes (temps, coûts: en jours hommes)

- manager (expert métier)
Former les annotateurs
Estimer le temps nécessaire moyen pour annoter un document 
Etablir un plan d'annotation (nombre de documents par annotateur et par jour)
Vérifier l’avancement
Vérifier la qualité

- admin plateforme (expert SI): ce rôle sera plus ou moins nécessaire en fonction du logiciel d'annotation 
retenu (et pourra être rempli par le data scientist)
- s'assurer de l'installation du logiciel, de la création de comptes 
- charger les documents à annoter sur la plateforme
- S'assurer du stockage des annotations (travail coûteux en temps, back up/ sauvegardes régulières sont 
importantes afin de ne pas perdre le travail d'annotation )

- data scientist 
    - S'assurer la qualité (par des tests de cohérences sur les données annotées ) différents de vérifications de 
    qualité par le manager qui consistent en une relecture manuelle 
    - Pre-annotater les documents (on y revient plus tard )
    - Prioriser les documents à annoter (sampling : random, stratifié en fonction de différents critères 
    à déterminer avec le métier)

- annotateurs 
    - niveau de compétences dépend de la tâche (important de se poser la question)
    - Comprendre la tâche (le temps nécessaire à la montée en compétence ne doit pas être négligé)
    - annoter les documents
    - faire remonter des questions, des difficultés au fil de l'annotation au manger 
    - Ces rémontées permettront de 
        - compléter la documentation pour clarifier certains points 
        - modifier le schéma d'annotation si nécessaire 








## Les étapes du projet 


### Etape 1 : Définir la problématique 

Les questions à se poser

- Identifier qqn pour former les annotateurs et contrôler la qualité de leurs annotations
- identfier les annotateurs et le profil nécessaire (niveau de connaissance métier requise). En particulier, évaluer la complexité de la tache / quelle niveau de connaissance est nécessaire
- liste des éléments à annoter, pour quels besoins, peut-on les hiérarchiser en fonction de leurs importance pour le projet / l'entraînement du modèle cible (ou des modèles cibles 
- Est ce un type d'annotation qui s'approche d'une tâche standard de NLP : NER, relation extraction. Quel est le degré de proximité avec la tâche à effectuer 
- Dans quel mesure la façon d'effectuer la tâche par deux personnes différentes risque de varier ? 
- Est ce que certaines tâches d'annotation peuvent 



Bien définir la tâche 


### Etape 2 : Elaborer le schéma d'annotation et  constituer une documentation 

cf méthode livre


#### Shéma d'annotation 
Il doit découler de la problématique 
Il peut être appelé à évoluer au cour de l'annotation (méthode itérative)


#### Documentation

Plusieurs niveaux de documentations s'adressant à différentes fonctions dans le projet d'annotation. 

Documentation générale : haut niveau, toute personne qui souhaite comprendre le projet (management (top et 
intermédiaire, grand public à des fins de transparence )
- documenter le cheminement intellectuel menant au schéma d'annotation , les arbitrages (regrouper certaines 
catégories)

- guide annotateurs 
Partie très importante 
- introduction 
- description du projet (peut correspondre à la doc grand public )
- schéma synthétique d'annotation
- Détail des différentes tâches et sous-tâches 
- Lister les cas particuliers, difficiles, donner des exemples concrets (captures d'écran du logiciel 
d'annotation)/ Peut prendre la forme de Questions / Réponses
- doc pour le logiciel d'annotation (se connecter, accéder aux doc, annoter, effacer, enregistrer un document 
annoté finalisé, etc...)

Possibilité de compléter la doc par un quizz 

- Guide admin de la plateforme d'annotation 

- Comment créer des comptes aux annotateurs
- Comment charger des doc 
- comment attribuer des doc
- comment suivre l'avancement 
- comment corriger les annotations 




### Etape 3: Former et mobiliser les annotateurs

Importance du facteur humain 
Former les annotateurs 
niveau de compétences dépend de la tâche (important de se poser la question)

importance de la documentation (est ce qu'on fait une sous partie dédiée à la doc? )

Bien expliquer les enjeux du projet -> implication doit aller au delà de la simple exécution d'une tâche 
souvent répétitive 
Acculturer les annotateurs à l'IA 
(pas trop de top down, créer une communauté d'échange)-> partage des questions, difficultés, cohésion 
de la communauté, encouragement
Inclure les annotateurs dans la construction puis l'affinage du schéma d'annotation 
Organiser des sessions d'harmonisation 
Gamification: attribuer des bagdes, montrer une jauge d'avancement des annotations globales (c'est plus motivant 
de travailler quand on sait que c'est utile)



### Etape 4: Annoter et s'assurer de la qualité 

S'assurer de la qualité 
	- Créer un gold standard data set 
	- Multi annoter plusieurs documents - > tests de cohérences 
	- créer des indicateurs customs : tests de cohérence automatisés (traduction de règles métiers) : permet de faire remonter de facon automatique des documents annotés comportant un fort risque d'être mal annoté 




### Etape 5: Accéler le processus 

Un passage à l'échelle peut nécessiter de d'employer des méthodes automatiques ou semi-automatiques. 
Préannotation 
- Snorkel 
- active learning 


## Le suivi de la qualité des annotations 

A faire tout au long du projet 

- gold standard data set 
- les métriques de justesse (accuracy)
- contrôles aléatoires 
- sample annotés par plusieurs annotateurs 
- tests de cohérences automatisés 

