---
permalink: /annotation/conduire-campagne-annotation/
---

# Conduire votre campagne d'annotation

Le travail préparatoire décrit dans la partie précédente a permis d'identifier une équipe, de formuler clairement la problématique de votre projet et d'élaborer le schéma d'annotation. La campagne d'annotation peut commencer.

## Former et mobiliser les annotateurs

La formation et la mobilisation des annotateurs est un aspect très important. Le caractère répétitif - qui plus est souvent complexe - de la tâche d'annotation est susceptible d'entraîner des erreurs dans l'annotation (oubli d'une section de texte à annoter ou attribution d'un mauvais label par exemple). Bien former et mobiliser les annotateurs, au démarrage ainsi que tout au long du projet, permet de limiter ce risque d'erreurs. Nous verrons dans la partie suivante quels dispositifs d'évaluation des annotations permettent par ailleurs de s'assurer de la qualité des annotations.


### Former les annotateurs

En amont du projet, il est important de bien expliquer les enjeux du projet à l'équipe d'annotateurs ainsi que le rôle clé de l'annotation dans le projet. Cet *on-boarding* peut aussi être l'opportunité d'acculturer les annotateurs à l'Intelligence Artificielle.

::: tip PIAF: un projet collaboratif
C'est notamment le pari fait par le projet collaboratif [PIAF](https://piaf.etalab.studio/) (voir l'exemple présenté en partie [Mon projet nécessite-t-il une phase d'annotation et quelle stratégie d'annotation adopter ?](1-annotation-ia.md)), pour lequel ont été organisés des *annotathons* dont le but était de former les annotateurs à l'IA tout en récoltant des contributions au projet d'annotation. [Cet article](https://piaf.etalab.studio/enseignements-contributions/) détaille la méthodologie adoptée pour ce projet.
:::

Il peut aussi être bénéfique au projet d'impliquer les annotateurs dans l'élaboration du schéma d'annotation, dans la mesure où cette élaboration  passe par une phase d'itérations entre définition du schéma et annotation de documents. L'implication des annotateurs aura également pour avantage une meilleure appropriation de leur part des tâches à effectuer.

La documentation (décrite dans la partie [Préparer votre campagne d’annotation](2-preparer-campagne-annotation.md)) est centrale pour la formation. La documentation peut également être complétée par un quizz qui recense les principaux types d'éléments à annoter et fournit des exemples de cas les plus difficiles.


### Mobiliser les annotateurs


Afin de mobiliser les annotateurs tout au long du projet, il est important de maintenir une dynamique d'échange. Il peut être utile de mettre en place des outils de partage (messagerie instantanée, forum de discussion, documents collaboratifs) afin de permettre à l'équipe projet d'échanger sur leurs difficultés, de se poser des questions et de s'entraider. Des sessions d'harmonisation régulières peuvent aussi être mises en place afin de communiquer sur les avancées du projet et partager des éventuels changements ou points d'attention sur l'annotation.

Afin de rendre l'annotation plus ludique, il est envisageable de "gamifier" l'annotation, en attribuant des bagdes, ou en faisant apparaître une jauge d'avancement des annotations (le fait de voir que le projet avance peut constituer une source de motivation).


## Annoter et s'assurer de la qualité

Lorsque le but de l'annotation est de développer un algorithme automatisant une tâche, la présence d'erreurs dans le corpus annoté servant à l'entraînement risque de conduire l'algorithme à reproduire les erreurs de l'annotation manuelle. Ce phénomène bien connu est désigné par l'expression *"Garbage In, Garbage Out"*. S'assurer d'obtenir des annotations de qualité est donc particulièrement important. Nous proposons ci-après quelques recommandations pour le suivi de la qualité des annotations.

### Créer un jeu de données "Gold Standard"

Un jeu de données que l'on appelle "Gold Standard" est constitué de documents annotés pour lesquels les annotations ont été vérifiées et sont donc de qualité certaine. Ce jeu de données peut être utilisé de plusieurs façons.

D'une part, les documents correspondants (sans les annotations) peuvent être donnés à annoter aux annotateurs au début de projet, pour s'assurer que la tâche soit bien comprise par les annotateurs ou pour vérifier que le schéma d'annotation ne soit pas ambigu (c'est-à-dire qu'il puisse conduire deux annotateurs à annoter le même document de façon correcte mais différente). En effet, en comparant les annotations réalisées par les annotateurs et celles dont on est certain de la qualité, on peut faire remonter les erreurs ou ambiguïtés. Ces erreurs permettront soit d'identifier les éléments du schéma d'annotation à réexpliquer, soit de corriger le schéma d'annotation afin de lever certaines ambiguïtés.

D'autre part, le jeu de données "Gold Standard" peut servir de jeu de données de test, afin d'évaluer l'algorithme développé sur un jeu de données dont la qualité soit la plus fiable possible.


::: lexique Jeu de données d'apprentissage et jeu de données de test
Afin de développer un modèle d'apprentissage supervisé, un jeu de données labélisées est nécessaire. Ce jeu de données est alors divisé en deux (en général par un échantillonnage aléatoire) : un jeu de données d'apprentissage et un jeu de données de test. Le **jeu d'apprentissage**, comme son nom l'indique, est utilisé pendant la phase d'apprentissage, afin de trouver une fonction qui permette de prédire le label à partir des variables en entrée. Afin de s'assurer que l'algorithme ait de bonnes performances sur des exemples différents de ceux utilisés lors de la phase d'apprentissage, les différentes métriques de performance de l'algorithme (justesse, précision, rappel, ...) sont calculées sur le **jeu de données de test**.
:::

### Faire annoter une partie des documents par plusieurs annotateurs

Tout au long du projet, il est conseillé de faire annoter une partie des documents par plusieurs annotateurs, afin de comparer leurs annotations. Si des divergences trop importantes sont remontées lors de la comparaison (voir le paragraphe ci-dessous sur les métriques de justesse), il faut alors identifier si la divergence provient d'une erreur d'un des annotateurs ou si elle provient d'une ambiguïté du schéma d'annotation qui peut conduire à deux façons correctes d'annoter le même document.

### Relecture aléatoire de documents annotés par l'expert métier
Tout au long du projet, il est également conseillé que l'expert métier relise ponctuellement un certain nombre de documents annotés et sélectionnés aléatoirement afin de s'assurer de la qualité des annotations.

### Implémenter des tests de cohérence sur les annotations
Pour certains projets, il est possible d'implémenter des tests automatiques traduisant des règles métier que les annotations doivent respecter. Lorsque de tels tests sont implémentables, ils permettent de faire remonter de façon automatique des documents annotés comportant un fort risque d'erreurs et qui seront donc à vérifier en priorité par l'expert métier.

### Les métriques de concordances entre annotateurs (*Inter Annotater Agreement*)

Des métriques existent pour comparer les annotations réalisées par différents annotateurs: le [Fleiss-Kappa](https://fr.wikipedia.org/wiki/Kappa_de_Fleiss) pour comparer les annotations entre *n* annotateurs et le [Kappa de Cohen](https://fr.wikipedia.org/wiki/Kappa_de_Cohen) pour comparer les annotations de deux annotateurs seulement. Des librairies dans les langages open source R ou Python permettent d'implémenter ces métriques.

Calculer ces métriques suppose cependant des choix méthodologiques plus ou moins complexes selon la complexité du schéma et des consignes d'annotation. Ces choix méthodologiques sont très bien détaillés dans la partie intitulée *"Mesure des accords inter- et intra-annotateur"* de la [thèse de doctorat](https://tel.archives-ouvertes.fr/tel-00797760v1/document) citée dans les ressources.



## Accélérer le processus d'annotation grâce à la pré-annotation

L'annotation manuelle étant un processus long et couteux en temps, il est souvent judicieux d'employer des méthodes automatiques ou semi-automatiques afin d'accélérer le processus d'annotation.

::: lexique La pré-annotation
La pré-annotation consiste à annoter de façon automatique les documents, afin que l’annotateur les vérifie, en les complétant ou en les corrigeant si nécessaire.
:::

Plusieurs possibilités sont envisageables pour mettre en œuvre la pré-annotation, détaillées dans les deux paragraphes ci-dessous.

### La pré-annotation par moteur de règles

Cette méthode présente l'avantage de ne pas nécessiter de données annotées. Elle peut donc être implémentée dès le début du projet. Dans certains cas, des règles simples peuvent permettre d'annoter des documents avec une performance plus ou moins bonne. Par exemple, afin de repérer les nom de personnes physiques dans un document, on peut utiliser la règle : tout ce qui suit "Madame" ou "Monsieur" est un nom de personne physique. Bien évidemment, cette règle ne permettra pas de repérer tous les noms de personnes physiques (certains noms ne seront pas précédés de Madame ou Monsieur) et conduira également à des faux-positifs (certains mots qui suivent Monsieur ou Madame ne seront pas des personnes physiques). L'implémentation de ce type de règles par des méthodes informatiques peut cependant permettre d'accélérer le processus d'annotation, afin d'annoter les cas simples, c'est-à-dire ceux qui sont conformes à certains règles métier ou d'usage.

La pertinence de cette méthode est à évaluer au cas par cas avec les experts métiers, afin d'identifier l'ensemble des règles pertinentes. Une fois ces règles établies, il faudra les traduire informatiquement afin de pré-annoter les documents, un travail à réaliser par un profil de data scientist.

[Snorkel](https://www.snorkel.org/) est un outil open source développé par une équipe de Standford University permettant d'annoter des documents de façon automatique par le croisement de différentes règles métier. Une librairie est disponible en Python pour implémenter ces méthodes et de nombreux exemples et tutoriels sont proposés sur le [site du projet](https://www.snorkel.org/).

### La pré-annotation par un modèle d'apprentissage supervisé

Ce type de méthodes nécessite un premier jeu de données annotées. Une fois qu'un premier jeu de données annotées est constitué, il est alors possible d'entraîner un premier algorithme d'apprentissage afin de labéliser les documents. Ce processus est itératif : il est en effet difficile de connaître à l'avance la taille minimale requise du jeu d'apprentissage permettant de bonnes performances. On peut alors, à partir d'un faible volume de données, entraîner un premier algorithme qui n'aura probablement pas des performances suffisantes pour passer en production, mais dont on peut cependant espérer qu'il permette d'accélérer le processus d'annotation. Il faudra veiller à calibrer l'algorithme pour favoriser la précision au rappel, ce qui impliquera pour l'annotateur de corriger peu des champs annotés automatiquement (un taux de faux positifs faible) mais de rajouter les labels que l'algorithme omettra (taux de faux négatifs plus élevé).



## La priorisation des documents à annoter avec l'active learning


 Dans un projet d'annotation, les documents à annoter sont souvent sélectionnés aléatoirement parmi l'ensemble des documents.

 ::: lexique Active learning
 L'active learning est un champ de l'apprentissage automatique qui fait interagir l'algorithme d'apprentissage avec le système en charge de la labélisation (l'annotateur dans notre cas). Cette méthode est particulièrement utile dans les situations où l'obtention de labels est coûteuse. Au fur et à mesure de l'annotation, l'algorithme va apprendre à prioriser les documents à faire annoter afin de maximiser le gain d'information du nouveau document annoté, et ainsi permettre de minimiser le nombre de documents nécessaires pour entraîner un algorithme avec de bonnes performances.
 :::

 L'idée sous-jacente est que tous les documents n'apporteront pas la même contribution à l'algorithme d'apprentissage. Pour plus d'informations à ce sujet, [cet article](https://pdfs.semanticscholar.org/799c/1a76e9ef45d543cb0b0169550e761376e975.pdf?_ga=2.78090388.1614533376.1600861526-210375121.1588074514) détaille comment implémenter des méthodes d'active learning appliquées à l'annotation de documents textuels.

## Faire le bilan de votre campagne d'annotation manuelle

Conduire une campagne d'annotation est souvent complexe. Une fois la campagne terminée, en faire le bilan pourra s'avérer fort utile à de futurs projets impliquant de l'annotation, en documentant la démarche, le déroulement de la campagne ainsi que les métriques clés. Nous proposons dans cette partie une liste, non exhaustive, de métriques et de questions à se poser pour faire le bilan de votre campagne d'annotation et en tirer des enseignements.

### Les métriques d'évaluation de la campagne

### Les métriques quantitatives
- Durée de la campagne d'annotation
- Nombre d'annotateurs mobilisés
- Volume total de documents annotés
- Temps moyen passé à annoter un document

Dans le cas où une solution d'automatisation de l'annotation a été développée à l'aide d'outils d'intelligence artificielle :
- Métriques de performance de l'algorithme d'automatisation de l'annotation (justesse, précision, rappel, F1-Score) globales et ventilées selon les différentes catégories d'annotations si pertinent
- Evolution de ces différentes métriques en fonction de la taille de l'échantillon d'apprentissage

### Les métriques qualitatives

- Adéquation du logiciel d'annotation (au vu notamment des différents critères listés dans la partie [Critères de sélection d’un logiciel d’annotation de documents textuels ](4-les-logiciels-d-annotation.md))
- Adéquation du schéma d'annotation (lisibilité, reproductibilité, couverture des cas particuliers)
- Si les objectifs de volumes de documents à annoter initialement prévus ont été revus à la baisse, en identifier les raisons, qui peuvent être liées :
     - aux difficulté de mobiliser les annotateurs
     - au temps d'annotation par document plus long que prévu
     - aux itérations pour trouver un schéma d'annotation plus nombreuses que prévu, ce qui a ralenti le démarrage effectif de la campagne


### Constituer de ressources mutualisables

Au-delà de la documentation développée au cours du projet et en fin de projet qui constituent des ressources potentiellement utiles à d'autres projets, une campagne d'annotation peut aussi être l'opportunité de constituer des ressources mutualisables. Lorsque les règles de protection de données le permettent, publier en open data un corpus de données annotées peut permettre à d'autres projets de se réaliser. Si la publication en open data n'est pas envisageable, le corpus de données annotées pourra s'avérer utile à de futurs projets de votre organisation. Il est donc utile de conserver ce corpus avec la documentation associée.

Lorsqu'un logiciel d'annotation est développé pour répondre au besoin spécifique de votre projet, il peut également être intéressant de publier le code source de l'application sur un repertoire public de type GitHub (on parle alors de code *open source*).







