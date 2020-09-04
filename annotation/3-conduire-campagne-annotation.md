---
permalink: /annotation/conduire-campagne-annotation/
---

# Conduire votre campagne d'annotation

Le travail préparatoire décrit dans la partie précédente a permis d'identifier une équipe, de formuler clairement la problématique de votre projet et de constituer une premère version de l'application. La campagne d'annotation peut commencer.

## Former et mobiliser les annotateurs

La formation et la mobilisation des annotateurs est un aspect très important. Le caractère répétitif - qui plus est souvent complexe - de la tâche d'annotation est susceptible d'entraîner des erreurs dans l'annotation (oubli d'une section de texte à annoter ou attribution d'un mauvais label par exemple). Bien former et mobiliser les annotateurs, au démarrage ainsi que tout au long du projet, permet de limiter ce risque d'erreurs. Nous verrons dans la partie suivante comment le contrôle de la qualité  des annotations permet aussi de s'assurer de la qualité des annotations.


### Former les annotateurs

En amont du projet, il est important de bien expliquer les enjeux du projet à l'équipe d'annotateurs ainsi que le rôle clé de l'annotation dans le projet. Cet on-boarding peut aussi être l'opportunité d'acculturer les annotateurs à l'Intelligence Artificielle.

::: tip C'est notamment le pari fait par le projet collaboratif [PIAF](https://piaf.etalab.studio/) (voir l'exemple présenter en partie 1), pour lequel ont été organisés des *annotathons* dont le but était de former les annotateurs à l'IA tout en récoltant des contributions au projet d'annotation. [Cet article](https://piaf.etalab.studio/enseignements-contributions/) détaille la méthodologie adoptée pour ce projet. :::

Il peut aussi être bénéfique au projet d'impliquer les annotateurs dans l'élaboration du schéma d'annotation, dans la mesure où cette élaboration  passe par une phase d'itération entre schéma et annotations de documents. L'implication des annotateurs aura également pour avantage une meilleure appropriation de leur part des tâches à effectuer.

La documentation (décrite dans le paragraphe Un guide à destination des annotateurs) est centrale pour la formation. La documentation peut également complétée par un quizz qui récense les principaux types d'éléments à annoter et fournit des exemples des cas les plus difficiles.


### Mobiliser les annotateurs


Afin de mobiliser les annotateurs tout au long du projet, il est important de maintenir une dynamique d'échange. Il peut être utile de mettre en place des outils de partage (messagerie instannée, forum de discussion, documents collaboratifs) afin de permettre à l'équipe projet d'échanger sur leurs difficultés, de se poser des questions et de s'entraider. Des sessions d'harmonisation régulières peuvent aussi être mises en place afin de communiquer sur les avancées du projet et partager des éventuels changements ou points d'attention sur l'annotation.

Afin de rendre l'annotation plus ludique, il est envisageable de "gamifier" l'annoation, en attribuant des bagdes, ou en faisant apparaître une jauge d'avancement des annotations (le fait de voir que le projet avance peut être une source de motivation).

"En cas d’absence de lien hiérarchique direct avec les annotateurs, besoin de support hiérarchique, dans la mesure où cette tâche n’est pas leur tâche prioritaire : nous n’avons pu, en tant que gestionnaire, nous assurer de leur disponibilité pour permettre la continuité de l’annotation. La campagne s’en est retrouvée rallongée et la qualité s’en est ressentie. Préférable que le gestionnaire, s’il est aussi expert, travaille avec d’autres experts." source: https://tel.archives-ouvertes.fr/tel-00797760v1/document (point qui pourrait s'ajouter ici avec un exemple citation projet AMI IA)

(Ajouter un point sur la diversité et représentativité des annotateurs? exemple si différentes interprétations/activités. exemple avec un projet AMI IA?)

## Annoter et s'assurer de la qualité

Lorsque le but de l'annotation est de développer un algorithme automatisant une tâche, la présence d'erreurs dans le corpus annoté servant à l'entraînement risque de conduire l'algorithme à reproduire les erreurs de l'annotation. Ce phénomène bien connu est désigné par l'expression *$"Garbage In, Garbage Out"*. S'assurer d'obtenir des annotations de qualité est donc particulièrement important. Nous proposons ci-après quelques recommandations pour le suivi de la qualité des annotations.

### Créer un jeu de données "Gold Standard"

Un jeu de données que l'on appelle "Gold Standard" est consitué de documents annotés pour lesquels les annotations ont été vérifiées et sont donc de qualité certaine. Ce jeu de données peut être utilisé de plusieurs façons.

D'une part, les documents correspondants (sans les annotations) peuvent être donnés aux annotateurs au début de projet, pour s'assurer que la tâche soit bien comprise par les annotateurs ou pour vérifier que le schéma d'annotation ne soit pas ambigu (c'est-à-dire puisse conduire deux annotateurs à annoter le même document de façon correcte mais différente). En effet, en comparant les annotations réalisées par les annotateurs et celles dont on est certain de la qualité, on peut faire remonter les erreurs ou ambiguités. Ces erreurs permettront soit d'identifier les éléments du schéma d'annotation à réexpliquer, soit de corriger le schéma d'annotation afin de lever certaines ambiguités.

D'autre part, le jeu de données "Gold Standard" peut servir de jeu de données de test, afin d'évaluer l'algorithme développé sur un jeu de données de qualité la plus fiable possible.

### TO DO rajouter la déf de jeu d'apprentissage / jeu de test dans le lexique

### Faire annoter une partie des documents par plusieurs annotateurs

Tout au long du projet, il est conseillé de faire annoter une partie des documents par plusieurs annotateurs, afin de comparer leurs annotations. Si des divergences trop importantes sont remontées lors de la comparaison (voir le paragraphe ci dessous sur les métriques de justesse), il faut alors identifier si la divergence provient d'une erreur d'un des annotateurs ou si elle provient d'une ambiguité du schéma d'annotation qui peut conduire à deux façons correctes d'annoter le même document.

### Relecture aléatoire de documents annotés par l'expert métier
Tout au long du projet, il est également conseillé que l'expert métier relise ponctuellement un certain nombre de documents annotés sélectionnés aléatoirement afin de s'assurer de la qualité des annotations.

### Implémenter des tests de cohérences sur les annotations
Pour certains projets, il est possible d'implémenter des tests automatiques traduisant des règles métier que les annotations doivent respecter. Lorsque de tels tests sont implémentables, ils permettent de faire remonter de facon automatique des documents annotés comportant un fort risque d'erreurs et qui seront donc à vérifier en priorité par l'expert métier.

### Les métriques de concordances entre annotateurs (*Inter Annotater Agreement*)

Des métriques existent pour comparer les annotations réalisées par différents annotateurs: le [Fleiss-Kappa](https://fr.wikipedia.org/wiki/Kappa_de_Fleiss) pour comparer les annotations entre *n* annotateurs et le [Kappa de Cohen](https://fr.wikipedia.org/wiki/Kappa_de_Cohen) pour comparer les annotations de deux annotateurs seulement. Des librairies dans les langages open source R ou Python permettent d'implémenter ces métriques.

## Accélérer le processus d'annotation : pré-annoter ou pas ?

L'annotation manuelle étant un processus long et couteux en temps, il est souvent judicieux d'employer des méthodes automatiques ou semi-automatiques afin d'accélérer le processus d'annotation.

::: lexique La pré-annotation consiste à annoter de façon automatique les documents, afin que l’annotateur les vérifie, en les complétant ou en les corrigeant si nécessaire. :::

Plusieurs possibilités sont envisageables pour mettre en oeuvre la pré-annotation, détaillées dans les deux paragraphes ci-dessous.

#### La pré-annotation par des règles

Cette méthode présente l'avantage de ne pas nécessiter de données annotées. Elle peut donc être implémentée dès le début du projet. Dans certains cas, des règles simples peuvent permettre d'annoter des documents avec une performance plus ou moins bonne. Par exemple, afin de repérer les nom de personnes physiques dans un document, on peut utiliser la règle: tout ce qui suit "Madame" ou "Monsieur" est un nom de personne physique. Bien évidemment, cette règle ne permettra pas de repérer tous les noms de personnes physiques (certains noms ne seront pas précédés de Madame ou Monsieur) et conduira également à des faux-positifs (certains mots qui suivent Monsieur ou Madame ne seront pas des personnes physiques). L'implémentation de ce type de règles par des méthodes informatiques peut cependant permettre d'accéler le processus d'annotation, afin d'annoter les cas simples, c'est-à-dire ceux qui sont conformes à certains règles métier ou d'usage.

La pertinence de cette méthode est à évaluer au cas par cas avec les experts métiers, afin d'identifier l'ensemble des règles pertinentes. Une fois ces règles établies, il faudra les traduire informatiquement afin de pré-annoter les documents, un travail à réaliser par un profil de data scientist.

[Snorkel](https://www.snorkel.org/) est un outil développé par une équipe de Standford University permettant d'annoter des documents de façon automatique par le croisement de règles métier. Une librairie est disponible en Python pour implenter l'outil et de nombreuxexemples et tutoriels sont proposés sur leur site.

#### La pré-annotation par un modèle de machine learning supervisé

Ce type de méthodes nécessite un premier jeu de données annotées. Une fois qu'un premier jeu de données annotées est constitué, il est alors de possible d'entraîner un premier algorithme d'apprentissage afin de labéliser les documents. Ce processus est itératif: il est en effet difficile de connaître à l'avance la taille minimale requise du jeu d'apprentissage permettant de bonnes performances. On peut alors, à partir d'un faible volume de données, entraîner un premier algorithme qui n'aura probablement pas des performances suffisantes pour passer en production, mais dont on peut cependant espérer qu'il permette d'accéler le processus d'annotation. Il faudra veiller à calibrer l'algorithme pour favoriser la précision au rappel, ce qui impliquera pour l'annotateur de corriger peu des champs annotés automatiquement (car un taux de faux positifs faible) mais de rajouter les labels que l'algorithme omettra (taux de faux négatif plus élevé).



#### La priorisation des documents à annoter avec l'active learning


 Dans un projet d'annotation, les documents à annoter sont souvent sélectionnés aléatoirement parmi l'ensemble des documents.

 ::: lexique L'active learning est un champ de l'apprentissage automatique qui fait interagir l'algorithme d'apprentissage avec le système en charge de la labélisation (l'annotateur dans notre cas). Cette méthode est particulièrement utile dans les situations où l'obtention de labels est coûteuse. Au fur et à mesure de l'annotation, l'algorithme va apprendre à prioriser les documents à faire annoter afin de maximiser le gain d'information de la nouvelle donnée annotée, et ainsi permettre de minimiser le nombre de documents nécessaires pour entraîner un algorithmes avec de bonnes performances. :::

 L'idée sous-jacente est que tous les documents n'apporteront pas la même contribution à l'algorithme d'apprentissage. Pour plus d'informations à ce sujet, [cet article](https://jlcl.org/content/2-allissues/4-Heft1-2016/jlcl-2016-1-5SkeppstedtEtAl.pdf) détaille comment implémenter des méthodes d'active learning appliquées à l'annotation de documents textuels.

## Evaluer votre campagne d'annotation manuelle

(Ajouter ici contenu?) et aussi éventulelement comment on finalise la campagne d'annotation ? (correction, manuelle ou non du corpus annoté, avant sa publication? indicateurs? publier/réviser/renoncer à la publication etc.? faire une liste de questions à se poser si pertinent?




