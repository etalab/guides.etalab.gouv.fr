---
permalink: /annotation/lexique/
---

# Lexique des termes techniques

Dans cette annexe, nous recensons les définitions des termes techniques utilisés dans ce guide.

[[toc]]

### Active learning 

L'active learning est un champ de l'apprentissage automatique qui fait interagir l'algorithme d'apprentissage avec le système en charge de la labélisation (l'annotateur dans notre cas). Cette méthode est particulièrement utile dans les situations où l'obtention de labels est coûteuse. Au fur et à mesure de l'annotation, l'algorithme va apprendre à prioriser les documents à faire annoter afin de maximiser le gain d'information de la nouvelle donnée annotée, et ainsi permettre de minimiser le nombre de documents nécessaires pour entraîner un algorithme avec de bonnes performances. 

### Annotation

L'annotation est la tâche qui consiste à attribuer à chaque donnée le label qui lui correspond. Par exemple, à attribuer le label « chien » ou « chat » à une base de photographies d'animaux. Ou encore à attribuer le label correct entre « nom », « prénom », « adresse », « date » ou « aucun » à chacun des mots d'un document. On distinguera **l'annotation manuelle**, lorsque cette tâche est effectuée par un humain, de **l'annotation automatique**, lorsque cette tâche est effectuée par un programme informatique. 


### Apprentissage supervisé

L'apprentissage supervisé est une tâche d'apprentissage automatique qui consiste à partir d'exemples labélisés, à trouver une fonction permettant d'attribuer un label à chaque exemple à partir d'un ensemble de caractéristiques (variables ou *features*). Cette fonction pourra être appliquée à de nouveaux exemples non labélisés afin de leur attribuer une prédiction du label. L'apprentissage non supervisé, par opposition, a pour objectif de déterminer des structures sous-jacentes à un ensemble de données non-labélisées (regroupement d'exemples similaires ou détection d'anomalies par exemple). 


### Docker 

[Docker](https://www.docker.com/) est un logiciel libre permettant de lancer des applications dans des conteneurs logiciels. Il permet ainsi de faciliter le déploiement d'une application sur un serveur. 


### Données tabulaires

Un jeu de données tabulaire se présente sous forme d'un tableau dont les lignes sont des entrées et les colonnes des catégories d'information. Par exemple, un tableur CSV ou une base SQL dans lesquels chaque ligne correspond à un individu et chaque colonne à ses caractéristiques propres (nom, âge, profession, etc.). Les données tabulaires sont des données structurées. 

### Données non structurées

À l'inverse des données tabulaires, les données non structurées sont des données qui ne sont pas stockées sous un format prédéfini et où l'information est donc plus dispersée. Cela recouvre par exemple le texte libre comme des documents administratifs, des lettres, des décisions de justice, mais aussi des images, des enregistrement sonores, des vidéos, etc.

### Format CoNLL

Le format CoNLL, pour « Conference on Natural Language Learning », est un format général, dont il existe de nombreuses versions et déclinaisons, couramment employé pour les tâches de traitement automatique du langage naturel. Il décrit des données textuelles sous forme de colonne selon un nombre d'attributs : catégorie d'entité nommée, nature grammaticale, etc. Il permet ainsi de stocker un texte [annoté](#annotation).


### Jeu de données d'apprentissage et jeu de données de test 

Afin de développer un modèle d'apprentissage supervisé, un jeu de données labélisées est nécessaire. Ce jeu de données est alors divisé en deux (en général par un échantillonnage aléatoire) : un jeu de données d'apprentissage et un jeu de données de test. Le **jeu d'apprentissage**, comme son nom l'indique, est utilisé pendant la phase d'apprentissage, afin de trouver une fonction qui permette de prédire le label à partir des variables en entrée. Afin de s'assurer que l'algorithme ait de bonnes performances sur des exemples différents de ceux utilisés lors de la phase d'apprentissage, les différentes métriques de performance de l'algorithme (justesse, précision, rappel, ...) sont calculées sur le **jeu de données de test**. 

### Librairie (code)

En informatique, une librairie, aussi appelée « bibliothèque de code » ou « package », est un ensemble de code prêt à l'usage qui peut être facilement importé et réutilisé par un utilisateur pour que celui-ci n'ait besoin de réécrire ces portions de code. Par exemple, la librairie « [NLTK](https://www.nltk.org/) » sous Python permet d'utiliser tout un ensemble de méthode pour pré-traiter des données textuelles. Les librairies permettent ainsi un énorme gain de temps en évitant que de nombreux développeurs ne codent des portions de code identiques chacun de leur côté.


### Moteur de règles

Un moteur de règles est un ensemble de règles prédéfinies « à l'avance ». Par exemple, une règle de pseudonymisation pourrait être « si le mot qui suit "Monsieur" ou "Madame" commence par une majuscule, alors ce mot est un prénom ». La complexité du langage naturel et la diversité des formulations qui se trouvent dans les documents fait que ce type de moteur de règles a de forte chance de faire beaucoup d'erreurs dans des textes complexes, ou dont la forme varie souvent.

### Pré-annotation

La pré-annotation consiste à annoter de façon automatique les documents, afin que l’annotateur les vérifie, en les complétant ou en les corrigeant si nécessaire. 

### Pseudonymisation

Le [guide de la CNIL sur l'anonymisation des données](https://www.cnil.fr/fr/lanonymisation-des-donnees-un-traitement-cle-pour-lopen-data) définit l'anonymisation comme « un traitement de données personnelles réalisé de manière à ce qu'on ne puisse plus attribuer les données relatives à une personne physique sans avoir recours à des informations supplémentaires. En pratique la pseudonymisation consiste à remplacer les données directement identifiantes (nom, prénom, etc.) d’un jeu de données par des données indirectement identifiantes (alias, numéro dans un classement, etc.) ».


### Reconnaissance d'entités nommées

La reconnaissance d'entités nommées, ou *Named Entity Recognition* (NER) en anglais, est une tâche d'apprentissage supervisée où les données d'entrées sont chacun des mots d'un document et le label qu'on leur attribue est une catégorie sémantique à laquelle il se rattache : par exemple « verbe », « adjectif » ou « adverbe » dans un cas général et « nom », « prénom », « adresse », « date » pour une tâche de pseudonymisation.


### Traitement automatique du langage ou traitement du langage naturel 

Le traitement automatique du langage (TAL), aussi connu sous l'acronyme « NLP » pour *Natural Language Processing*, désigne le domaine de l'intelligence artificielle qui s'intéresse au texte. Il regroupe plusieurs grands types de tâches, comme la reconnaissance d'entités, les agents conversationnels, la classification de documents, le question-answering, etc.
