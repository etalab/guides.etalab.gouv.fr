---
permalink: /annotation/lexique/
---

# Lexique des termes techniques

Dans cette annexe, nous recensons les définitions des termes techniques utilisés dans ce guide.

[[toc]]

### Active learning 

### Annotation

L'annotation est la tâche manuelle (et donc humaine) qui consiste à attribuer à chaque donnée le label qui lui correspond. Par exemple, à attribuer le label « chien » ou « chat » à une base de photographies d'animaux. Ou encore à attribuer le label correct entre « nom », « prénom », « adresse », « date » ou « aucun » à chacun des mots d'un document. On conçoit ainsi une base de données annotée, utile pour l'[apprentissage supervisé](#apprentissage-supervisé).


### Apprentissage supervisé

L'apprentissage supervisé est une catégorie de tâches de l'apprentissage automatique, principal domaine de l'intelligence artificielle aujourd'hui. Les tâches qu'il recouvre se définissent par l'apprentissage d'un label correspondant à chaque donnée. Elles nécessitent donc en entrée une base de données annotées. En opposition, l'apprentissage non supervisé se caractérise par une situation où les données d'apprentissage ne disposent pas de labels.


### Docker 


### Données d'apprentissage et données de test 

### Données tabulaires

Un jeu de données tabulaire se présente sous forme d'un tableau dont les lignes sont des entrées et les colonnes des catégories d'information. Par exemple, un tableur CSV ou une base SQL dans lesquels chaque ligne correspond à un individu et chaque colonne à ses caractéristiques propres (nom, age, profession, etc.).

### Données non structurées

À l'inverse des données tabulaires, les données non structurées sont des données qui ne sont pas stockées sous un format prédéfini et où l'information est donc plus dispersée. Cela recouvre par exemple le texte libre comme des documents administratifs, des lettres, des décisions de justice, mais aussi des images, des enregistrement sonores, des vidéos, etc.

### Format CoNLL

Le format CoNLL, pour « Conference on Natural Language Learning », est un format général, dont il existe de nombreuses versions et déclinaisons, couramment employé pour les tâches de traitement automatique du langage naturel. Il décrit des données textuelles sous forme de colonne selon un nombre d'attributs : catégorie d'entité nommée, nature grammaticale, etc. Il permet ainsi de stocker un texte [annoté](#annotation).

### Format xml 


### Librairie (code)

En informatique, une librairie, aussi appelée « bibliothèque de code » ou « package », est un ensemble de code prêt à l'usage qui peut être facilement importé et réutilisé par un utilisateur pour que celui-ci n'ait besoin de réécrire ces portions de code. Par exemple, la librairie « [NLTK](https://www.nltk.org/) » sous Python permet d'utiliser tout un ensemble de méthode pour pré-traiter des données textuelles. Les librairies permettent ainsi un énorme gain de temps en évitant que de nombreux développeurs ne codent des portions de code identiques chacun de leur côté.

### Modèle de langage

Un modèle de langage est un modèle qui permet d'associer à chaque mot une représentation sous forme d'un vecteur, aussi appelé *embedding*. De tels modèles sont nécessaire puisque les algorithmes d'IA ne savent travailler qu'avec des données numériques. Ces modèles, entrainés sur des millions de documents, ne sont pas spécifiques à chaque projet mais souvent conçus en amont pour être réutilisés par la suite. On pourra par exemple citer [CamemBERT](https://camembert-model.fr/) pour le français.

### Moteur de règles

Un moteur de règles est un ensemble de règles prédéfinies « à l'avance ». Par exemple, une règle de pseudonymisation pourrait être « si le mot qui suit "Monsieur" ou "Madame" commence par une majuscule, alors ce mot est un prénom ». La complexité du langage naturel et la diversité des formulations qui se trouvent dans les documents fait que ce type de moteur de règles a de forte chance de faire beaucoup d'erreurs dans des textes complexes, ou dont la forme varie souvent.

### Pré-annotation

### Précision 

### Pseudonymisation

Le [guide de la CNIL sur l'anonymisation des données](https://www.cnil.fr/fr/lanonymisation-des-donnees-un-traitement-cle-pour-lopen-data) définit l'anonymisation comme « un traitement de données personnelles réalisé de manière à ce qu'on ne puisse plus attribuer les données relatives à une personne physique sans avoir recours à des informations supplémentaires. En pratique la pseudonymisation consiste à remplacer les données directement identifiantes (nom, prénom, etc.) d’un jeu de données par des données indirectement identifiantes (alias, numéro dans un classement, etc.) ».

### Rappel 

### Reconnaissance d'entités nommées

La reconnaissance d'entités nommées, ou *Named Entity Recognition* (NER) en anglais, est une tâche d'apprentissage supervisée où les données d'entrées sont chacun des mots d'un document et le label qu'on leur attribue est une catégorie sémantique à laquelle il se rattache : par exemple « verbe », « adjectif » ou « adverbe » dans un cas général et « nom », « prénom », « adresse », « date » pour une tâche de pseudonymisation.


### Traitement automatique du langage naturel

Le traitement automatique du langage naturel (TAL), aussi connu sous l'acronyme « NLP » pour *Natural Language Processing*, désigne le domaine de l'intelligence artificielle qui s'intéresse au texte. Il regroupe plusieurs grands types de tâches, comme la reconnaissance d'entités, les agents conversationnels, la classification de documents, le question-answering, etc.
