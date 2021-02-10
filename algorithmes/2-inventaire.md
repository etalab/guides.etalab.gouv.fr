---
permalink: /algorithmes/inventaire
---

# Fiche pratique : l'inventaire des principaux traitements algorithmiques

::: tip Mise à jour
Ce contenu a été mis à jour le 11 février 2021.
:::

::: tip Version beta
Cette fiche pratique a été élaborée dans le cadre d'un [groupe de travail sur les inventaires](https://www.etalab.gouv.fr/faire-linventaire-des-algorithmes-publics-point-detape-sur-les-actions-detalab) animé par Etalab et composé de quatre administrations (centrales et territoriales). C'est une "V1" que nous allons continuer à améliorer.<br>
Nous remercions chaleureusement Anthony Claverie, Maryse Le Bras, Cécile Le Guen et Nathalie Vernus-Prost pour nos échanges. Ce travail n'aurait pas pu avoir lieu sans leurs avancées, leurs retours et leur motivation.<br> 
Pour toute remarque concernant cette fiche, vous pouvez contacter Etalab à l'adresse algorithmes@etalab.gouv.fr (qui renvoie vers Simon Chignard, Cindy Kus et Soizic Pénicaud).
:::

L'obligation pour une administration de réaliser un inventaire des principaux traitements algorithmiques utilisés pour prendre des décisions administratives individuelles et de leurs règles est prévue par [l'article L312-1-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033205516/) du code des relations entre le public et l'administration (CRPA). 

Elle rentre dans le cadre des obligations de transparence des administrations ayant recours à des traitements algorithmiques. Le code des relations entre le public et l'administration (CRPA) précise le périmètre des administrations et traitement concernés. 

La transparence permet aux personnes concernées : 
- de comprendre la manière dont une décision administrative a été rendue ;
- de faciliter l'exercice de leurs droits.

Pour les administrations, elle permet d'instaurer une relation de confiance avec les personnes concernées. 

## Dans quels cas une administration doit-elle réaliser un inventaire de ses algorithmes ? 

Si :

* Vous êtes une administration d’État, une collectivité, un organisme de droit public ou de droit privé intervenant dans le cadre d’une mission de service public ([article L.300-2 du CRPA](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033218936&cidTexte=LEGITEXT000031366350&dateTexte=20161009)),
* Vous comptez plus de 50 équivalents temps plein (agents et/ou salariés) et/ou vous êtes une collectivité de plus de 3500 habitants,
* Vous utilisez un ou plusieurs traitements algorithmiques, c'est-à-dire « un ensemble de règles opératoires dont l'application permet de résoudre un problème énoncé au moyen d'un nombre fini d'opérations »,
* À l’aide de ce(s) traitement(s), vous prenez des [décisions administratives individuelles](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000031367495&cidTexte=LEGITEXT000031366350&dateTexte=20160101) envers des personnes physiques ou morales, de droit public ou privé nommément désignées,
* Ce(s) traitement(s) ne sont pas couverts par l’un des secrets définis par la loi ([2° de l'article L.311-5 du CRPA](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033265181&cidTexte=LEGITEXT000031366350&dateTexte=20170701)), et notamment: délibérations du gouvernement, défense nationale, conduite de la politique extérieure, sûreté de l’État, sécurité publique, sécurité des personnes ou des systèmes d’information, recherche et prévention d’infractions, etc.

Alors vous devez remplir les [obligations liées à la transparence des algorithmes](https://guides.etalab.gouv.fr/algorithmes/guide/#quelles-sont-ces-obligations-en-matiere-de-transparence), dont l'obligation de publier en ligne les principaux traitements algorithmiques. 

::: tip Rappels et précisions
* Par **« principaux traitements »**, on entend les traitements qui concernent un grand nombre de personnes et/ou qui entraînent des effets importants pour une catégorie de personnes.  
* La notion de « traitement algorithmique » s'étend au-delà de l'intelligence artificielle ou des algorithmes de _machine learning_. **Un classeur Excel constitue un traitement algorithmique.** De même, un traitement algorithmique peut exister sous la forme d'un document non-informatisé (par exemple une grille de notation d'un projet).
* Cette obligation s'applique pour les décisions individuelles envers des personnes physiques **et morales**. 
:::

## En pratique : quelles informations dois-je indiquer dans mon inventaire ? 

[L'article L312-1-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033205516/) prévoit que les administrations concernées « publient en ligne les règles définissant les principaux traitements algorithmiques utilisés dans l'accomplissement de leurs missions lorsqu'ils fondent des décisions individuelles ».

Voici une liste d'informations que vous pouvez rassembler pour chaque algorithme inventorié.

Certaines de ces informations seront également utiles pour répondre à des demandes d'explication individuelle. 

### Informations sur l'administration

| Information | Précisions |
| ----------- | ---------- |
|   Nom de l'administration concernée          |            |
|    Direction/service porteur         |            |
|  Contact au sein de l'administration concernée           |            |
|  Date de mise à jour des informations           |            |

### Informations métier sur l'algorithme et la décision prise

| Information | Précisions |
| ----------- | ---------- |
| Nom de l'algorithme       | _S'il n'en a pas, indiquer la décision mise en oeuvre. Exemple : calcul de la taxe de séjour._       |
| Contexte global           | _Pourquoi une décision administrative est-elle prise ? Qui sont les acteurs de la décision ? Quelles sont les tâches à accomplir ?_            |
| Finalité de l'algorithme | _À quoi sert cet algorithme ? Exemple : l'algorithme sert à calculer la taxe de séjour due. <br> Cette catégorie peut également comporter des éléments de justification : pourquoi un algorithme a-t-il été utilisé dans ce processus ?_          |
| Comment et quand l'algorithme intervient-il dans la prise de décision ? |_Pour effectuer lesdites tâches, à quel moment s'insère l'algorithme dans le processus de décision ? Quel est le processus complet et quelle(s) partie(s) l'algorithme prend-il en charge ?_            | 
| Niveau d'automatisation de la décision | _Préciser si la décision est entièrement automatisée ou s'il s'agit d'un outil d'aide à la décision._          |
| Fondements juridiques  | _Le(s) fondement(s) juridique(s) de la mise en oeuvre de la décision individuelle et, le cas échéant, du traitement des données._           |
| Ressources connexes | _Par exemple, un lien externe vers la plateforme où se connecter pour remplir un formulaire._|

### Informations sur l'impact de la décision

| Information | Précisions |
| ----------- | ---------- |
|  Nombre de décisions administratives prises par an           |            |
| Portée de la décision            | _Préciser si la décision a une portée externe (par exemple : pour un usager) ou concerne une procédure interne (par exemple : traitement de la mobilité des agents)._           |
| Public concerné par la décision            | _Qui est affecté par cette décision ? Est-ce que la décision emporte des effets importants sur ce public ?_           |


### Informations sur le fonctionnement interne de l'algorithme

| Information | Précisions |
| ----------- | ---------- |
| Données traitées*            |            |
| Source des données traitées*            | _Qui fournit les données (l'usager, une autre administration, etc.) ? Comment sont elles fournies (un dossier, une API, etc.) ? Exemple : "dossier rempli par le demandeur sur une plateforme en ligne" ou "revenu fiscal de référence fourni par la DGFIP"._             |
| Mode de collecte des données traitées*            | _Comment les données sont-elles initialement collectées ? Exemple : "Les inscriptions sont très majoritairement prises en charge au sein d'un portail virtuel dédié aux familles, plus exceptionnellement par voie papier"._      |
| Type d'algorithme            | _Préciser s'il s'agit d'un système de règles (les règle de calculs sont codées par des personnes) ou d'un algorithme reposant sur l'apprentissage machine (machine learning)._           |
| Opérations effectuées par l'algorithme             | _Donnez des détails sur les opérations techniques effectuées par l'algorithme. Cette catégorie peut être simple ou complexe, en fonction du type d'algorithme mobilisé._           |

::: tip Sur les données, leur(s) source(s) et leur(s) mode(s) de collecte
* *Les catégories "données traitées", "source des données" et "mode de collecte des données" doivent être pensées ensemble. Un même algorithme peut traiter des données de sources différentes. L'information doit alors être recueillie séparément pour les différents types de données.
* Rappelons que les algorithmes ne sont pas uniquement numériques.  
:::

## Comment réaliser mon inventaire ? 

Plusieurs questions se posent autour des modalités pratiques de réalisation et de publication des inventaires.

### Qui impliquer ? 
Le sujet des algorithmes publics est à la croisée de beaucoup de domaines et compétences de l'administration. 

Il est probable que cette démarche rassemble beaucoup d'acteurs traditionnellement impliqués dans la gouvernance de données ou celle de l'ouverture de données. 

Parmi eux, on peut nommer (liste non exhaustive) :
* La ou les personne(s) en charge de l'ouverture des données et de la transparence ;
* Les services métiers, qui disposent d'une connaissance forte des algorithmes utilisés dans les services, leur fonctionnement et leur impact ; 
* Les équipes techniques (en cas d'algorithmes numériques) ;
* La ou le délégué à la protection des données ;
* Le service juridique ;
* Les directions des administrations ;
* Dans le cadre des collectivités territoriales, les élus. 

**Nous vous conseillons qu'une personne (chef/cheffe de mission ou de projet) soit en charge de piloter cet inventaire** et puisse coordonner différents acteurs afin que l'action ne soit pas conduite en silos. 

Rappelons que, bien que cette liste ne soit pas ordonnée, c'est  le métier qui est susceptible de disposer du plus d'informations sur les algorithmes, leur fonctionnement et leur impact. **Ainsi, réaliser un inventaire des algorithmes et publier leurs règles de fonctionner ne doit pas être relégué à un simple enjeu technique**. 

::: tip Autres modalités
D'autres questions se posent : où publier cet inventaire ? Sous quelle forme ? 
Cette section continuera à être enrichie dans les prochains mois pour apporter plus de précisions sur ces sujets. 
:::

## Ressources : panorama d'inventaires existants

* Les inventaires des villes d'[Amsterdam](https://algoritmeregister.amsterdam.nl/en/ai-register/) et [Helsinki](https://ai.hel.fi/en/ai-register/) ;
* Le premier rapport annuel sur les algorithmes de la [ville de New-York](https://www1.nyc.gov/assets/ampo/downloads/pdf/AMPO-CY-2020-Agency-Compliance-Reporting.pdf) ;
* La V1 de l'inventaire des algorithmes de [la ville d'Antibes Juan-les-Pins](https://www.antibes-juanlespins.com/administration/acces-aux-documents-administratifs), accessible sur le site de la ville ;
* La liste des algorithmes de [Nantes-Métropole](https://data.nantesmetropole.fr/pages/algorithmes_nantes_metropole/) ;
* La liste des algorithmes de [Pôle Emploi](https://www.pole-emploi.fr/candidat/algorithmes.html).

## Contact
Si vous souhaitez qu'[Etalab](https://www.etalab.gouv.fr/qui-sommes-nous) vous accompagne sur ces questions, vous pouvez nous contacter à l'adresse [algorithmes@etalab.gouv.fr](mailto:algorithmes@etalab.gouv.fr) (qui renvoie vers Simon Chignard, Cindy Kus et Soizic Pénicaud).
