---
permalink: /annotation/comment-annoter/
---

# Comment annoter ? 

Nous avons présenté dans la partie précédente les différents objectifs de l'annotation. Nous détaillons maintenant les
différents rôles à attribuer dans une équipe d'un projet d'annotation ainsi que ses différentes étapes. Les recommendations 
données ici ne seront pas nécessairement toutes pertinentes pour tous les projets, chaque projet comportant ses spécificités.  

## La mobilisation d'une équipe projet 

Mener à bien un projet d'annotation nécessite la mobilisation d'une équipe dont les membres remplissent des fonctions
bien précises. En plus des personnes en charge de réaliser les annotations (on parlera d'annotateurs), un profil
ayant des connaissances métier (chef de projet) ainsi qu'un profil technique (data scientist) seront
nécessaires.

### Un chef de projet : l'expert métier 
Un chef de projet disposant des connaissances métier sera nécessaire. Ses attributions seront de: 
- Former les annotateurs (plus de détail dans la partie Etape 3: Former et mobiliser les annotateurs)
- Estimer le temps moyen pour annoter un document afin de mesurer la charge de travail nécessaire 
- Etablir un plan d'annotation prévisonnel définissant le nombre moyen de documents à annoter par annotateurs et par jour 
- Suivre l'avancement des annotations 
- S'assurer de la qualité des annotations

### Le data scientist : l'expert technique 
Un profil de type data scientist permettra, en complément du suivi qualitatif assuré par l'expert métier, de
mettre en oeuvre un suivi de l'avancement et de la qualité par des méthodes de data science (plus de détails sur les 
métriques de qualité dans la suite). L'avantage de ce type de suivi est d'être généralisable à un grand nombre 
de documents annotés sans nécessiter de coût humain supplémentaire. Par opposition, le suivi qualitatif de l'expert métier
permettra de prendre en compte les cas particuliers et les spécificités métier mais le temps nécessaire au suivi sera
proportionnel au nombre de documents vérifiés. Les deux type de suivi sont donc complémentaires. 

Le data scientist pourra également mettre en oeuvre des méthodes informatiques ou de machine learning afin de
pré-annoter les documents et permettre d'accélérer le processus d'annotation (plus de détails à ce sujet dans le
paragraphe Etape 6 : Accéler le processus d'annotation).
 
Les attributions du profil de type data scientist sont de: 
- S'assurer la qualité des annotations (par des tests de cohérence sur les données annotées) 
- Pre-annotater les documents 
- Prioriser les documents à annoter (par des méthodes de sampling à définir en fonction de différents critères 
à déterminer avec le métier)
- Si nécessaire, analyse et traitements des documents annotés afin de visualiser différentes métriques et/ou intégrer 
les documents annotés à la solution d'Intelligence Artificielle 

### L'administrateur de la plateforme d'annotation (expert SI)
Ce rôle sera plus ou moins nécessaire en fonction du logiciel d'annotation retenu et pourra être assuré par le data
scientist. Les attributions de l'administrateur de la plateforme d'annotation sont de: 
- s'assurer de l'installation du logiciel, de la création de comptes utilisateurs pour les différents annotateurs 
- charger les documents à annoter sur la plateforme
- s'assurer du stockage des annotations
Ce dernier aspect est particulièrement important. Le travail d'annotation est coûteux en temps, il est donc 
primordial de veiller à un avoir des sauvegardes régulières afin de ne pas perdre le travail des annotateurs. 

### Les annotateurs 
Le profil des annotateurs dépend du type de tâche d'annotation à effectuer. Certaines tâches nécessitent seulement 
la maîtrise de la langue française (identifier les noms et prénoms de personnes phyisques dans un texte par exemple) et ne font pas appel à d'autres 
connaissances spécifiques. D'autres tâches nécessitent en revanche un certain niveau d'expertise et il faudra 
veiller à recruter les bon profils d'annotateurs. 

L'annoteur a pour attributions de : 
- Comprendre la tâche (le temps nécessaire à la montée en compétence ne doit pas être négligé)
- Annoter les documents
- Faire remonter des questions, des difficultés au fil de l'annotation au chef de projet


## Les étapes du projet 


### Etape 1 : Définir la problématique 

L'annotation est généralement une étape liminaire d'un projet ayant une finalité plus large. Une réflexion globale 
sur la problématique du projet est cependant indispensable avant le démarrage effectif de la phase d'annotation, afin
les annotations réalisées permettent de répondre de manière efficace à la problématique. Il est donc important de 
répondre à un certain nombre de questions. 

#### A quel problème répond le projet ? 

Bien cadrer la problématique du projet est une étape essentielle. 
- Quel est le contexte du projet? 

Dans quel service le projet s'inscrit?  A quelle mission de service public contribut le projet? 
A quel problème doit répondre le projet ? Des solutions pour répondre à ce problème sont-elles déjà en place ? Si
oui quelles sont leurs limites ou leurs défauts? 

- Quels sont les objectifs stratégiques du projet ? 
Le projet répond-il a un nouvel objectif de politique publique par exemple?

- Quels objectifs opérationnels du projet ?
Quels sont les changements attendus dans le service concerné (du point de vue des agents publics et/ou des utilisateurs
du service)?  

Bien que chaque projet ait ses spécificités, il peut
être utile de se renseigner sur d'autres projets ayant une problématique similaire. Parmi les grandes problématiques 
en traitement du langage naturel, on trouve la classification de documents (par exemple, déterminer si un e-mail est un 
spam ou non), l'extraction d'informations (par exemple, identifier les moyens et la conclusion dans un décision
de justice), la priorisation de documents à traiter (par exemple, attribuer un note de gravité à des signalements
d'événements sanitaires), corriger des erreurs de saisies dans un formulaires (par exemple, le projet AMI IA de la 
DGCL), détecter des éléments manquants dans un texte (par exemple, projet AMI IA pour la DGGN de détecter les éléments
manquants dans un plainte déposée en ligne). 

#### Quel est le périmètre de la solution ? 
Cette question aura en général un impact direct sur le périmètre des données à annoter, elle est donc très importante. 
Le périmètre peut être géographique, fonctionnel, etc...

#### Quel rôle joue l'annotation dans ce projet? (voir si on laisse cette question)
- Etape intermédiare : entrainer un algorithme à effectuer un tache ? 
- Structuration d'informations contenues dans des données non structurées



### Etape 2 : Elaborer le schéma d'annotation 



Problématique métier souvent complexe, avec beaucoup de cas particuliers, d'exception à la règle
Etablir un schéma d'annotation passe souvent par un travail de simplification (qui implique parfois de perdre en précision 
dans la solution )
ex des catégories pour la pseudo : personne physique / organisation (adresse postale, lieux-dit; etc)

Ex liste fermée / saisie libre -> va également impacter les fonctionnalités requises pour le logiciel d'annotation 

Questions à se poser:
- liste des éléments à annoter, pour quels besoins, peut-on les hiérarchiser en fonction de leurs importance pour le projet / l'entraînement du modèle cible (ou des modèles cibles 
- Est ce un type d'annotation qui s'approche d'une tâche standard de NLP : NER, relation extraction. Quel est le degré de proximité avec la tâche à effectuer 
- Dans quel mesure la façon d'effectuer la tâche par deux personnes différentes risque de varier ? 
- Est ce que certaines tâches d'annotation peuvent 



Il doit découler de la problématique 


Il peut être amené à évoluer au cour de l'annotation (méthode itérative) : MAMA 

#### Etape 3: La documentation 

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




### Etape 4: Former et mobiliser les annotateurs

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



### Etape 5: Annoter et s'assurer de la qualité 

S'assurer de la qualité 
	- Créer un gold standard data set 
	- Multi annoter plusieurs documents - > tests de cohérences 
	- créer des indicateurs customs : tests de cohérence automatisés (traduction de règles métiers) : permet de faire remonter de facon automatique des documents annotés comportant un fort risque d'être mal annoté 

A faire tout au long du projet 

- gold standard data set 
- les métriques de justesse (accuracy)
- contrôles aléatoires 
- sample annotés par plusieurs annotateurs 
- tests de cohérences automatisés 



#### Etape 5: Accélérer le processus d'annotation 

Un passage à l'échelle peut nécessiter de d'employer des méthodes automatiques ou semi-automatiques. 
Préannotation 
- Snorkel / règles métier 
- active learning 

Tests automatiques : faire remonter les annotations avec le plus de proba d'avoir des erreurs: 
- règles 
- modèle d'IA != annotations (discordance)

-> avantage : permet de faire remonter = 
- des choses à clarifier dans les consignes d'annotations 
- des cas ambigues (interprétables de 2 manières), ce qui peut vouloir dire qu'il faut modifier le schéma d'annotation
- faire remonter des problèmes dont on n'avait pas connaissances dans les données (données incohérentes, erreurs 
de saisies, etc)






