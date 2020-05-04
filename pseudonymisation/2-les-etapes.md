---
permalink: /pseudonymisation/etapes/
---

# Les étapes d'un projet de pseudonymisation grâce à l'IA

Nous proposons dans cette partie de passer en revue les différentes étapes d'un projet de pseudonymisation de documents textuels de bout en bout. À ce stade, nous faisons l'hypothèse que l'on dispose déjà de données nettoyées prêtes à l'emploi. Le pré-traitement des données brutes évoqué plus tôt (OCR, conversion en format standard, etc.) n'est pas détaillé ici.

### Annoter ses données

Nous l'avons vu plus tôt, le premier prérequis pour mener une pseudonymsiation automatique de données textuelles par l'IA est de **disposer de données annotées**, qui serviront « d'exemples » de pseudonymisation correcte à l'algorithme. Si vous ne disposez pas de telles données en l'état, il sera nécessaire que vous les annotiez à la main. **C'est un processus assez long**, surtout si l'on cherche à disposer de plusieurs milliers de documents ! Il faudra donc rassembler deux éléments. Pour commencer, un logiciel d'annotation, comme nous l'avons déjà vu, comme les outils open source [Doccano](http://doccano.herokuapp.com/), [WebAnno](https://webanno.github.io/webanno/) ou [Universal Data Tool](https://universaldatatool.com/). Le second élément : une équipe d'annotateurs dévoués et patients, qui disposent d'une expertise métier adéquate si vous travaillez sur des documents spécifiques, comme par exemple des décisions de justice.

Gardez à l'esprit que l'annotation est un processus chronophage et peut **nécessiter plusieurs mois de travail pour des documents complexes**. Ceux-ci sont en effet long et fastidieux à lire puis à annoter et il sera donc impossible de procéder d'une traite. Une solution alternative est de procéder **par séances courtes mais fréquentes, et rassemblant de nombreux annotateurs**. L'évaluation précise du temps d'annotation nécessaire ne peut se faire qu'**après quelques séances d'annotation**, afin de pouvoir évaluer la vitesse moyenne d'annotation d'un document.

L'annotation se devra d'être de qualité pour garantir de bonnes performances de l'algorithme. **Une annotation de mauvaise qualité se caractérise par des omissions fréquentes d'entités nommées, ou l'attribution de la mauvaise catégorie d'entité à des mots**, etc. La phase d'entraînement d'un algorithme d'IA consiste en effet à « mimer » la labélisation qu'on lui présente, et de mauvaises annotations vont logiquement conduire l'algorithme à mal prédire les catégories sémantiques dans de nouveaux documents. De plus, une autre partie des données annotées va servir à évaluer la performance de l'algorithme, en comparant les labels prédits par l'algorithme à ceux déterminés « manuellement ». **Si les labels issus de l'annotation par des humains ne sont pas fiables, l'évaluation de la performance de l'algorithme ne sera pas non plus fiable.** La qualité des annotations doit donc être vérifiée par des experts métiers tout au long de la campagne d'annotation.

### Organiser ses données

Dans le cas de la pseudonymisation, les données sont constituées de l'ensemble des documents (texte libre) desquels il faut occulter des éléments identifiants. Dans un projet d'apprentissage supervisé, on distingue deux grands ensemble de données : les **données annotées**, que l'on consacre à la phase d'appentissage du modèle, et les **données à labéliser** (ou non annotées) sur lesquelles on appliquera le modèle une fois celui-ci entraîné.

Les données annotées sont elles-mêmes séparées par la suite en deux groupes, souvent aléatoirement, entre **données d'entraînement** et **données de test**. Les données d'entraînement vont permettre à l'algorithme **d'apprendre à reproduire la tâche de reconnaissance des labels de chacun des mots du texte**. Afin d'évaluer la performance de l'algorithme, il est nécessaire d'utiliser d'autres données annotées, que l'algorithme n'a pas « vu » en entraînement. C'est le rôle du jeu de données de test. 

### Formater ses données

Certains arbitrages doivent être effectués à cette étape, afin de **choisir quels prétraitements vont être appliqués au texte**. Par exemple, dois-je transformer toutes les majuscules en minuscules ? Dois-je conserver la ponctuation ? Et quid des « stop words », ces mots peu porteurs de sens comme « et », « ou », « mais » ? Le but de ces prétraitements est de supprimer l'information inutile, mais d'en conserver assez pour que l'algorithme atteigne son but.

Une fois le texte prétraité, il est **transformé grâce à un modèle de langage**, qui permet, pour faire simple, d'obtenir pour chaque mot une représentation sous forme vectorielle. C'est en effet ce type d'input qu'utilisent les algorithmes d'appentissage automatique, et de nombreux modèles de langages peuvent être utilisés en fonction de la tâche ou de la langue, comme par exemple [CamemBERT](https://camembert-model.fr/) pour le français.

### Entraîner son modèle

Une fois les données formatées et mises sous forme de vecteurs, elles peuvent être utilisées pour entraîner l'algorithme dont la tâche sera de reconnaître le label de chacun des mots du texte. Là encore, **de nombreux arbitrages sont possibles pour choisir l'architecture à utiliser**. Les solutions les plus performantes aujourd'hui s'appuient sur des réseaux de neurones profonds, et qui s'inspirent des mécanismes du cerveau humain. L'un des modèles le plus utilisé pour la tâche qui nous intéresse porte par exemple le nom un peu barbare de [Bidirectional Long Short Term Memory - Conditional Random Fields (ou BiLSTM-CRF)](https://colah.github.io/posts/2015-08-Understanding-LSTMs/). Une fois l'architecture définie, **l'apprentissage consiste à « donner à voir » à l'algorithme les données d'entraînement**, souvent de nombreuses fois d'affilée, afin que celui-ci ajuste ses paramètres pour effectuer au mieux la tâche de reconnaissance du label correspondant à chaque mot.

### Valider ses résultats

La validation des performances du modèle est un double processus qui repose à la fois sur l'analyse de métriques statistiques et d'autres fondées l'expérience humaine. Les métriques statistiques, souvent communes à tous les modèles et indifférentes au type de projet concerné, **permettront d'obtenir un résumé synthétique des performances générales de l'algorithme** et d'apprécier par exemple ses progrès au cours du projet. Cependant, **l'appréciation humaine sera indispensable** pour vérifier dans le détail que les résultats sont réellement satisfaisants sur la tâche particulière que l'on cherche à automatiser. Par exemple, pour la pseudonymisation des décisions de justice, une métrique « métier » consistera à calculer le ratio « nombre des décisions avec au moins une erreur » sur « nombre des décisions analysées ».

D'autres critères **plus « matériels » peuvent entrer en jeu** pour valider que le modèle est satisfaisant. Par exemple pour la pseudonymisation, combien de temps faut-il pour pseudonymiser entièrement un document ? Combien de temps faut-il pour ré-entraîner le modèle avec de nouvelles données annotées ? Quelles ressources de calcul et de stockage cela nécessite-t-il ? Si les réponses à ces questions semblent à chaque fois trop élevées, il est peut-être nécessaire de **questionner les choix de modèles réaliser et de chercher un meilleur compromis** entre performance et exigences matérielles.

### Pseudonymiser de nouveaux documents

Une fois que vous estimez les résultats de votre algorithme convainquants, le tour est joué ! Vous pouvez maintenant lui présenter de nouveaux documents, **que vous n'avez pas annotés**. Si votre algorithme est bien entraîné, il sera capable de reconnaître seul le label de chaque mot. Ainsi, si vous **ajoutez la règle simple de remplacer par un alias tous les mots dont le label est une donnée à caractère personnel** (par exemple les noms par X, Y ou Z, les prénoms par A, B ou C, etc.), vous obtenez un outil de pseudonymisation automatique !
