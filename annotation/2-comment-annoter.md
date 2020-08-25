---
permalink: /annotation/comment-annoter/
---

# Comment annoter ? 

Nous avons présenté dans la partie précédente les différents objectifs de l'annotation. Nous détaillons maintenant les différents rôles à attribuer dans une équipe d'un projet d'annotation ainsi que ses différentes étapes. Les recommendations données ici ne seront pas nécessairement toutes pertinentes pour tous les projets, chaque projet comportant ses spécificités.  

## La mobilisation d'une équipe projet 

Mener à bien un projet d'annotation nécessite la mobilisation d'une équipe dont les membres remplissent des fonctions bien précises. En plus des personnes en charge de réaliser les annotations (on parlera d'annotateurs), un profil ayant des connaissances métier (chef de projet) ainsi qu'un profil technique (data scientist) seront nécessaires.

### Un chef de projet : l'expert métier 
Un chef de projet disposant des connaissances métier sera nécessaire. Ses attributions seront de: 
- Etablir le schéma d'annotation (conjointement avec les autres parties prenantes du projet)
- Former les annotateurs (plus de détail dans la partie Etape 3: Former et mobiliser les annotateurs)
- Estimer le temps moyen pour annoter un document afin de mesurer la charge de travail nécessaire 
- Etablir un plan d'annotation prévisonnel définissant le nombre moyen de documents à annoter par annotateurs et par jour 
- Suivre l'avancement des annotations 
- S'assurer de la qualité des annotations

En fonction de la complexité du projet, le chef de projet pourra faire appel à d'autres experts métier. 

### Le data scientist : l'expert technique 
Un profil de type data scientist permettra, en complément du suivi qualitatif assuré par l'expert métier, de mettre en oeuvre un suivi de l'avancement et de la qualité par des méthodes de data science (plus de détails sur les métriques de qualité dans la suite). L'avantage de ce type de suivi est d'être généralisable à un grand nombre de documents annotés sans nécessiter de coût humain supplémentaire. Par opposition, le suivi qualitatif de l'expert métier permettra de prendre en compte les cas particuliers et les spécificités métier mais le temps nécessaire au suivi sera proportionnel au nombre de documents vérifiés. Les deux type de suivi sont donc complémentaires. 

Le data scientist pourra également mettre en oeuvre des méthodes informatiques ou de machine learning afin de pré-annoter les documents et permettre d'accélérer le processus d'annotation (plus de détails à ce sujet dans le paragraphe Etape 6 : Accéler le processus d'annotation).
 
Les attributions du profil de type data scientist sont de: 
- S'assurer la qualité des annotations (par des tests de cohérence sur les données annotées) 
- Pre-annotater les documents 
- Prioriser les documents à annoter (par des méthodes d'échantillonnage à définir en fonction de différents critères à déterminer avec le métier)
- Si nécessaire, analyse et traitements des documents annotés afin de visualiser différentes métriques et/ou intégrer les documents annotés à la solution d'Intelligence Artificielle 

### L'administrateur de la plateforme d'annotation (expert SI)
Ce rôle sera plus ou moins nécessaire en fonction du logiciel d'annotation retenu et pourra être assuré par le data scientist. Les attributions de l'administrateur de la plateforme d'annotation sont de: 
- s'assurer de l'installation du logiciel, de la création de comptes utilisateurs pour les différents annotateurs 
- charger les documents à annoter sur la plateforme
- s'assurer du stockage des annotations
Ce dernier aspect est particulièrement important. Le travail d'annotation est coûteux en temps, il est donc primordial de veiller à un avoir des sauvegardes régulières afin de ne pas perdre le travail des annotateurs. 

### Les annotateurs 
Le profil des annotateurs dépend du type de tâche d'annotation à effectuer. Certaines tâches nécessitent seulement la maîtrise de la langue française (identifier les noms et prénoms de personnes phyisques dans un texte par exemple) et ne font pas appel à d'autres connaissances spécifiques. D'autres tâches nécessitent en revanche un certain niveau d'expertise et il faudra veiller à recruter les bon profils d'annotateurs. 

L'annoteur a pour attributions de : 
- Comprendre la tâche (le temps nécessaire à la montée en compétence ne doit pas être négligé)
- Annoter les documents
- Faire remonter des questions, des difficultés au fil de l'annotation au chef de projet


## Les étapes du projet 


### Etape 1 : Définir la problématique 

L'annotation est généralement une étape liminaire d'un projet ayant une finalité plus large. Une réflexion globale sur la problématique du projet est cependant indispensable avant le démarrage effectif de la phase d'annotation, afinque les annotations réalisées permettent de répondre de manière efficace à la problématique. Il est donc important de répondre à un certain nombre de questions. 

#### A quel problème répond le projet ? 

Bien cadrer la problématique du projet est une étape essentielle. Il est en particulier utile de se demander : 

1. Quel est le contexte du projet? 

A quelle mission de service public contribut le projet? A quel problème doit répondre le projet ? Des solutions pour répondre à ce problème sont-elles déjà en place ? Si oui quelles sont leurs limites ou leurs défauts? 

2. Quels sont les objectifs stratégiques du projet ? 

A quel objectif de mon organisation répond le projet (intérêt général, amélioration de la qualité d'un service, etc.)?

3. Quels objectifs opérationnels du projet ?

Quels sont les impacts attendus de la solution dans l'organisation du service (du point de vue des agents publics et/ou des utilisateurs du service)? 

4. Existe-t-il des projets similaires desquels je gagnerais à prendre connaissance ? 

Bien que chaque projet ait ses spécificités, il peut être utile de se renseigner sur d'autres projets ayant une problématique similaire. Parmi les grandes problématiques en traitement du langage naturel, on trouve la classification de documents (par exemple, déterminer si un e-mail est un spam ou non), l'extraction d'informations (par exemple, identifier les moyens et la conclusion dans un décision de justice), la priorisation de documents à traiter (par exemple, attribuer un note de gravité à des signalementsd'événements sanitaires), corriger des erreurs de saisies dans un formulaires (par exemple, le projet AMI IA de la DGCL), détecter des éléments manquants dans un texte (par exemple, projet AMI IA pour la DGGN de détecter les éléments manquants dans un plainte déposée en ligne). 

#### Quel est le périmètre de la solution ? 
Cette question aura en général un impact direct sur le périmètre des données à annoter, elle est donc très importante. Le périmètre peut être géographique, fonctionnel, etc.


### Etape 2 : Elaborer le schéma d'annotation 

Le schéma d'annotation est un modèle qui permet décrire les annotations de votre projet. Il doit découler de la problématique définie précédemment. Concrètement, il est consititué a minima d'un ensemble de labels (c'est-à-dire des termes permettant de caractériser telle ou telle information dans un document) et d'une définition précise de ces différents labels. Pour certains projets, le schéma d'annotation peut en plus être défini par une hiérarchisation entre les termes ou encore par des relations entre les termes. L'ensemble des labels peuvent en effet être hiérarchisées entre eux (par exemple, un schéma peut se décliner en thèmes et sous-thèmes, où à chaque thème correspond une liste spécifique de sous-thèmes) ou être reliés entre eux (par exemple, une tâche d'annotation pourra être de relier un pronom au nom auquel il se rapporte). 

La problématique métier à laquelle le projet répond est souvent complexe, avec beaucoup de cas particuliers ou d'exceptions aux règles usuelles. Elaborer un schéma d'annotation adéquat implique de trouver un équilibre entre la compléxité du phénomène en question et la simplicité du modèle résultant du schéma. Afin de trouver cet équilibre, un processus itératif est généralement la meilleure méthode à adopter. 

Etablir un schéma d'annotation implique souvent un travail de simplification (qui a également pour conséquence une perte d'information ou de précision). 

::: tip Exemple du choix des catégories pour pseudonymiser les décisions de justice: afin de limiter au maximum le risque de réidentification, il faut se demander quelles informations doivent être retirées et comment les catégoriser. Un nombre restreint de catégories (nom, prénom, adresse, date de naissance) par exemple aura pour avantage des consignes d'annotations plus simples, alors qu'une catégorisation plus fine (personnes physiques, personnes morales, adresse complète, lieu de résidence par exemple) permettra de mieux cibler certaines informations sensibles. :::

Il est important d'évaluer la clarté du schéma d'annotation et des consignes pour l'implémenter et de la reproductibilité des tâches d'annotation entre différentes annotateurs. En effet des consignes d'annotation peut claires ou intéreprétables de façon différentes par différents annotateurs auront pour conséquences: 
- de rendre inopérable l'évaluation de la qualité des annotations 
- de compromettre l'automatisation de la tâche par un algorithme d'intelligence artificielle 

::: tip Exemple: Analyse de l'ironie dans des tweet.  Des interprétations différentes du langage, des prisese en compte différentes du contexte peuvent amener deux personnes différentes à percevoir caractériser différemment le caractère ironique ou non d'un tweet. [Ce papier](https://hal.archives-ouvertes.fr/hal-01429673/document) de chercheurs en traitement automatique du langage présente un schéma d'annotation élaboré pour analyser l'ironie dans les tweets. :::
 

Deux types de cycles d'itérations sont envisageables: le cycle schéma / annotations et le cycle schéma / annotation / modèle IA, tous deux détaillés ci-dessous. 

#### 1. Le cycle schéma / annotations

Elaborer un schéma d'annotation nécessite de prendre en compte à la fois la problématique du projet et les caractéristiques des documents à annoter. Ainsi élaborer un premier schéma d'annotation répondant à la problématique, le tester en annotant des documents puis le réviser au fur et à mesure de l'annotation. C'est en général en annotatant que l'on s'aperçoit si le schéma d'annotation est adapté aux documents. 

![cycle iteration 1](./images/cycle_iteration_1.drawio)

::: tip Par exemple, pour un projet d'annotation de réponses à un questionnaire en texte libre, on peut avoir une idée a priori des thèmatiques abordées, ce qui permet d'élaborer une première version du schéma d'annotation, mais l'annotation des réponses pourra faire émerger de nouvelles thématiques qui pourront venir compléter le schéma d'annotation. :::


#### 2. Le cycle schéma / annotation / modèle IA (est ce que je laisse cette partie ?? -> c'est souvent pas faisable en 
réalité car boucle d'itération très longue)

Ce type de cycle d'itération ne concerne que les travaux d'annotation ayant pour but d'entraîner un algorithme supervisé. Il peut alors être pertinent de compléter le cycle d'itérations précédent d'un cycle d'itérations faisant intervenir l'entraînement de l'algorithme supervisé. Il est en effet possible q'un schéma d'annotation paraisse adapté aux documents lors de l'annotation manuelle, mais qu'un algorithme supervisé ait des difficultés à apprendre à automatiser la tâche (c'est-à-dire ne parvienne pas à apprendre à partir du jeu de documents annotés, dit jeu d'apprentissage). 

Si de mauvaises performances de l'algorithme entraîné sur les données annotées sont constatées, modifier le schéma d'annotation, puis réannoter des documents avec le nouveau chemin et réentraîner l'algorithme peut parfois permettre d'améliorer les performances. A noter que ce cycle est beaucoup plus long que le cycle d'itérations précédent, et n'est donc pas nécessairement réalisable lorsque le temps du projet est contraint. 

#### TO DO : rajouter un schéma du cycle 


De mauvais résultats lors de l'entraînement peuvent cependant être liés à d'autres facteurs que celui d'un schéma d'annotation mal adapté. En particulier, la taille de l'échantillon d'apprentissage joue un rôle déterminant. 


### Etape 3: La documentation 

La documentation dans un projet d'annotation est essentielle. En gardant une trace de la démarche adoptée et en recensant les difficultés rencontrées, la documentation est très utile pour que tous les membres de l'équipe projet partagent le même niveau d'information et peut également bénéficier à d'autres projets similaires. 

Plusieurs types de documentations s'adressant à différentes fonctions dans le projet sont utiles: une documentation générale, une documentation pour les annotateurs et une documentation pour l'administrateur de la plateforme d'annotation. 


##### Une Documentation générale 
Une documentation générale décrivant le contexte et les objectifs du projet, expliquant pourquoi l'annotation est nécessaire est utile. Cette documentation s'adresse à toute personne qui souhaite comprendre le projet (directeur, grand public si le projet est open source). Il est également important de documenter le cheminement intellectuel menant au schéma d'annotation et les différentes itérations s'il y en a eu. 


##### Un guide à destination des annotateurs 
Cette documentation est notamment le support de formation des annotateurs, elle est donc très importante, et donc inclure notamment: 
- La description du projet
- Le schéma synthétique d'annotation (c'est-à-dire la liste des labels du schéma d'annotation, hiérarchisés le cas échéant)
- L'explication des différents labels (définitions et exemples pour chacun des labels)
- S'il existe des relations à annoter entre les termes, explications et exemples pour chacune des relations 
- Liste des cas particuliers ou des cas suceptibles de poser des difficultés, accompagnée d'exemples concrets (ne pas hésiter à 
faire des captures d'écran du logiciel d'annotation). Cette partie peut prendre la forme d'une rubrique de Questions / Réponses. 
- Documentation pour le logiciel d'annotation (comment se connecter, accéder aux documents à annoter, enregistrer un document 
annoté finalisé, etc...)


##### Un guide à destination de l'administrateur de la plateforme d'annotation 

Il est également important de documenter le fonctionnement de la plateforme d'annotation et de constituer un guide à destination de l'administrateur de la plateforme d'annotation. Ce guide pourra expliquer: 
- Comment créer des comptes aux annotateurs
- Comment charger des documents sur la plateforme 
- Comment attribuer des documents aux annotateurs 
- Comment suivre l'avancement des annotations 
- Comment corriger les annotations 
- Comment exporter les documents annotés 


### Etape 4: Former et mobiliser les annotateurs

La formation et la mobilisation des annotateurs est un aspect très important. Le caractère répétitif - qui plus est souvent complexe - de la tâche d'annotation est susceptible d'entraîner des erreurs dans l'annotation (oubli d'une section de texte à annoter ou attribution d'un mauvais label par exemple). Bien former et mobiliser les annotateurs, au démarrage ainsi que tout au long du projet, permet de limiter ce risque d'erreurs. Nous verrons dans la partie suivante comment le contrôle de la qualité  des annotations permet aussi de s'assurer de la qualité des annotations. 


#### Former les annotateurs 

En amont du projet, il est important de bien expliquer les enjeux du projet à l'équipe d'annotateurs ainsi que le rôle clé de l'annotation dans le projet. Cet on-boarding peut aussi être l'opportunité d'acculturer les annotateurs à l'Intelligence Artificielle. 

::: tip C'est notamment le pari fait par le projet collaboratif [PIAF](https://piaf.etalab.studio/) (voir l'exemple présenter en partie 1), pour lequel ont été organisés des *annotathons* dont le but était de former les annotateurs à l'IA tout en récoltant des contributions au projet d'annotation. [Cet article](https://piaf.etalab.studio/enseignements-contributions/) détaille la méthodologie adoptée pour ce projet. :::

Il peut aussi être bénéfique au projet d'impliquer les annotateurs dans l'élaboration du schéma d'annotation, dans la mesure où cette élaboration  passe par une phase d'itération entre schéma et annotations de documents. L'implication des annotateurs aura également pour avantage une meilleure appropriation de leur part des tâches à effectuer. 

La documentation (décrite dans le paragraphe Un guide à destination des annotateurs) est centrale pour la formation. La documentation peut également complétée par un quizz qui récense les principaux types d'éléments à annoter et fournit des exemples des cas les plus difficiles. 

#### Mobiliser les annotateurs tout au long du projet 
Afin de mobiliser les annotateurs tout au long du projet, il est important de maintenir une dynamique d'échange. Il peut être utile de mettre en place des outils de partage (messagerie instannée, forum de discussion, documents collaboratifs) afin de permettre à l'équipe projet d'échanger sur leurs difficultés, de se poser des questions et de s'entraider. Des sessions d'harmonisation régulières peuvent aussi être mises en place afin de communiquer sur les avancées du projet et partager des éventuels changements ou points d'attention sur l'annotation. 

Afin de rendre l'annotation plus ludique, il est envisageable de "gamifier" l'annoation, en attribuant des bagdes, ou en faisant apparaître une jauge d'avancement des annotations (le fait de voir que le projet avance peut être une source de motivation). 



### Etape 5: Annoter et s'assurer de la qualité 

Lorsque le but de l'annotation est de développer un algorithme automatisant une tâche, la présence d'erreurs dans le corpus annoté servant à l'entraînement risque de conduire l'algorithme à reproduire les erreurs de l'annotation. Ce phénomène bien connu est désigné par l'expression *$"Garbage In, Garbage Out"*. S'assurer d'obtenir des annotations de qualité est donc particulièrement important. Nous proposons ci-après quelques recommandations pour le suivi de la qualité des annotations. 


#### Créer un jeu de données "Gold Standard"

Un jeu de données que l'on appelle "Gold Standard" est consitué de documents annotés pour lesquels les annotations ont été vérifiées et sont donc de qualité certaine. Ce jeu de données peut être utilisé de plusieurs façons. 

D'une part, les documents correspondants (sans les annotations) peuvent être donnés aux annotateurs au début de projet, pour s'assurer que la tâche soit bien comprise par les annotateurs ou pour vérifier que le schéma d'annotation ne soit pas ambigu (c'est-à-dire puisse conduire deux annotateurs à annoter le même document de façon correcte mais différente). En effet, en comparant les annotations réalisées par les annotateurs et celles dont on est certain de la qualité, on peut faire remonter les erreurs ou ambiguités. Ces erreurs permettront soit d'identifier les éléments du schéma d'annotation à réexpliquer, soit de corriger le schéma d'annotation afin de lever certaines ambiguités. 

D'autre part, le jeu de données "Gold Standard" peut servir de jeu de données de test, afin d'évaluer l'algorithme développé sur un jeu de données de qualité la plus fiable possible. 

### TO DO rajouter la déf de jeu d'apprentissage / jeu de test dans le lexique 

#### Faire annoter une partie des documents par plusieurs annotateurs 

Tout au long du projet, il est conseillé de faire annoter une partie des documents par plusieurs annotateurs, afin de comparer leurs annotations. Si des divergences trop importantes sont remontées lors de la comparaison (voir le paragraphe ci dessous sur les métriques de justesse), il faut alors identifier si la divergence provient d'une erreur d'un des annotateurs ou si elle provient d'une ambiguité du schéma d'annotation qui peut conduire à deux façons correctes d'annoter le même document. 


#### Relecture aléatoire de documents annotés par l'expert métier 
Tout au long du projet, il est également conseillé que l'expert métier relise ponctuellement un certain nombre de documents annotés sélectionnés aléatoirement afin de s'assurer de la qualité des annotations. 

#### Implémenter des tests de cohérences sur les annotations 
Pour certains projets, il est possible d'implémenter des tests automatiques traduisant des règles métier que les annotations doivent respecter. Lorsque de tels tests sont implémentables, ils permettent de faire remonter de facon automatique des documents annotés comportant un fort risque d'erreurs et qui seront donc à vérifier en priorité par l'expert métier.  


#### Les métriques de concordances entre annotateurs (*Inter Annotater Agreement*)

Des métriques existent pour comparer les annotations réalisées par différents annotateurs: le [Fleiss-Kappa](https://fr.wikipedia.org/wiki/Kappa_de_Fleiss) pour comparer les annotations entre *n* annotateurs et le [Kappa de Cohen](https://fr.wikipedia.org/wiki/Kappa_de_Cohen) pour comparer les annotations de deux annotateurs seulement. Des librairies dans les langages open source R ou Python permettent d'implémenter ces métriques. 


### Etape 6: Accélérer le processus d'annotation 

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









