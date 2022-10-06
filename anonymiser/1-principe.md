---
permalink: /anonymisation/principe/
---

# Principe

La [CNIL](https://www.cnil.fr/fr/definition/donnee-personnelle) définit une <b>donnée personnelle</b> comme "_toute information se rapportant à une personne physique identifiée ou identifiable. Une personne physique peut être identifiée directement (exemple : nom et prénom) ou indirectement (exemple : par un numéro de téléphone ou de plaque d’immatriculation, un identifiant tel que le numéro de sécurité sociale, une adresse postale ou courriel, mais aussi la voix ou l’image)_". 

Une donnée identifiante (ou "quasi-identifiante") est une donnée qui permet de caractériser (de manière unique) l'<b>identité d’un individu</b>, soit <b>à elle seule</b> (par exemple le nom d'une personne), soit <b>combinée à d'autres données</b> (par exemple, la combinaison d'une adresse, d'une date de naissance et d'une profession).

Les données personnelles ne peuvent être traitées, ou encore publiées, par une personne ou un algorithme, que dans des situations encadrées par la législation. En l'absence d'un cadre légal autorisant la publication ou le traitement de données personnelles telles quelles, il est nécessaire de procéder à une rigoureuse <b>anonymisationdes données</b> avant ces traitements et publications.

## Définition

L'<b>anonymisation</b> est l'<b>opération par laquelle on altère ou retire l'ensemble des données identifiantes issues d'une base de données</b>, de sorte qu'après cette étape il soit impossible (ou, au minimum, très difficile) de relier des informations issues de la base de données anonymisée à la véritable identité de la personne qu'elle concerne. On dit que l'anonymisation doit empêcher la <b>ré-idenfication rétrospective d'une personne physique</b>.

Ainsi définie, l'anonymisation doit empêcher, entre autres, que l'on puisse inférer des informations sensibles sur un individu par le biais du croisement de notre base de données à d'autres sources d'informations</b> auxquelles on aurait accès (à l'ère d'internet, ces sources de données tierces sont nombreuses et facilement accessibles). Ainsi on ne peut se contenter d'occulter uniquement les données directement identifiantes, mais il faut s'intéresser aussi aux données indirectement identifiantes.

_Remarque : en particulier, avec des informations tierces, il peut être assez facile de se douter que telle ou telle personne figure dans la base de données. Aussi l'étape d'anonymisation doit suffisamment brouiller les pistes pour qu'on ne puisse pas lire dans la base anonymisée des informations qui permettraient de relier une personne à des informations sensibles la concernant._

## Les critères d'anonymisation

Pour atteindre cet objectif d'anonymisation, on se donne ces trois critères :

- <b>critère de non-individualisation</b> : il n'est pas possible d'isoler un individu ;

- <b>critère de non-corrélation</b> : il n'est pas possible de corréler des ensembles de données distincts concernant un même individu ;

- <b>critère de non-inférence</b> : il n'est pas possible de déduire, de façon certaine, de nouvelles informations sur un individu.

Si <b>ces trois critères sont réussis, on peut considérer que la base est parfaitement anonymisée</b>.

Si en revanche ces trois critères ne sont pas réunis après l'opération d'anonymisation, il faut procéder à une analyse approfondie des risques de ré-identification sur la base de données ainsi transformée avant d'envisager une publication des données. 

Il n'est déjà pas évident de valider ces critères lors de la publication ponctuelle d'une base de données. A fortiori il importe d'être encore plus vigilant si de nouvelles données anonymisées sont publiées régulièrement (ce qui est le cas par exemple d'une base de données qui serait anonymisée "au vol" au fur et à mesure que les utilisateurs requièrent de nouvelles données), car il faut s'assurer que les publications ultérieures ne compromettent pas rétroactivement la confidentialité des données déjà publiées (ce sujet est développé [sur cette autre page](/anonymiser/2c-methodes-differentielle.md)).

## Les champs de données à protéger lors de la publication de documents administratifs

La loi française définit les documents administratifs pouvant être publiés sans processus d'anonymisation ([Article 1 du décret 2018-1117 du 10 décembre 2018](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000037797147/)). 

Certains documents ne sont en pas communicables au public ([Article L311-5 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033265181/)), ou seulement au public concerné ([Article L311-6 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037269056/)), tandis que d'autres doivent faire l'objet de processus d'anonymisation, en vue de protéger les secrets suivants :  
- les données personnelles des personnes physiques : données identifiantes, données ayant trait à la confession, à l'orientation politique, ou à l'origine ethnique ;
- les données couvertes par le secret médical ;
- les données soumises au secret statistique, qui font l'objet d'un cadre juridique spécifique ;
- les données protégées par le secret des affaires.

Ces secrets doivent être protégés autant que possible en suivant les trois critères d'anonymisation décrits plus haut.

## Rechercher le juste équilibre entre l'occultation nécessaire d'informations confidentielles et la préservation souhaitable d'information collective à des fins de traitement

L'anonymisation de données provoque à dessein une perte d'information, et doit généraliser suffisamment les données de la base pour que les informations ne soient plus spécifiques à un individu identifiable, mais portent sur un ensemble de personnes qu'il ne sera plus possible de distinguer les unes des autres.

L'anonymisation des données est nécessaire pour de nombreux usages (protéger des données personnelles ou des données sensibles) mais provoque, par définition, la suppression ou l'altération d'informations, qui aurait potentiellement eu de la valeur pour un traitement ultérieur mais que l'on s'interdit d'utiliser. Il est donc utile d'identifier le bon niveau d'altération des données pour respecter les critères de confidentialité ci-dessus, en tâchant de préserver des informations génériques utiles.

Mais attention, chaque information conservée peut éventuellement faire "fuiter" de l'information personnelle, c'est pourquoi il importe d'être vigilant sur le "comment anonymiser". En particulier, s'il est intéressant de publier des statistiques agrégées, il faut le servir avec mesure car plus ces statistiques sont nombreuses et visent des groupes aux effectifs réduits, plus le risque de réidentification grandit.

Pour conduire l'anonymisation empirique d'une base, il faut toujours procéder au cas par cas : 
- d'une part l'on définit le niveau et la nature des informations qu'on veut mettre à disposition des utilisateurs de la base anonymisée ;
- d'autre part l'on anticipe TOUS les cas de compromissions de données personnelles et sensibles que l'on doit empêcher ;
- en comparant ces objectifs contraires, et sans transiger sur la confidentialité, on réévalue (à la hausse ou à la baisse) le niveau d'information que l'on va effectivement publier, et l'on choisit une méthode d'anonymisation adaptée

Dans les cas où l'anonymisation des données avant publication n'est pas une obligation légale, mais une mesure de protection d'informations sensibles, l'on peut arbitrer au cas par cas le risque de compromissions d'informations sensibles VS la quantité d'information utile qui demeure dans la base après anonymisation.

Remarque : une bonne anonymisation doit prendre en compte que les possibilités techniques de croiser des données issues de sources externes évoluent rapidement, et qu'il en va de même des méthodes d'anonymisation.


## Publication de données à caractère personnel préalablement anonymisées : que dit la CNIL ?

La CNIL a publié en 2019 un guide pratique sur la publication et la réutilisalisatin de données publiques ([2019 - guide de la CNIL](https://www.cnil.fr/sites/default/files/atoms/files/guide_open_data.pdf)), qui donne quelques éléments sur la notion de données personnelles dans les documents administratifs. En voici un extrait :

#### _" Le principe de l’anonymisation des documents contenant des données à caractère personnel (Article L. 312-1-2 alinéa 2 du CRPA ; articles 4 et 7 du RGPD ; conseil CADA 20180650) :_

_Lorsque les données à caractère personnel relèvent de la vie privée des personnes concernées, elles ne peuvent être communiquées à des tiers et ne seront donc pas non plus publiables._

_Relèvent, par exemple, de la vie privée : au titre de l'état civil, la date de naissance et l'âge, les coordonnées personnelles, notamment l'adresse postale, l'adresse électronique et le numéro de téléphone, la situation patrimoniale et financière, en particulier le patrimoine immobilier, les revenus perçus, y compris les aides ou revenus de remplacement, les impôts et taxes acquittés, la domiciliation bancaire et l'identification des comptes bancaires et postaux mettent en cause la vie privée, la qualité de travailleur handicapé, la formation initiale, les horaires de travail, les sympathies politiques et l'appartenance à un parti politique ainsi que les croyances religieuses._

_Certains documents administratifs comportent des données personnelles qui  ne sont pas couvertes en tant que telles par le secret de la vie privée._

_Il s’agit notamment du nom et du prénom d'une personne qui ne font pas, par eux-mêmes, partie des éléments protégés au titre de la vie privée. Ainsi, un « document nominatif », n'est pas exclu, de ce seul fait, du champ du droit d'accès : il ne le sera que s'il comporte par ailleurs des éléments couverts par le secret de la vie privée et que la personne à laquelle se rapportent les informations est identifiable._

_Entrent, également, dans cette catégorie les données dont on estime que le public doit avoir connaissance, soit au titre de l'organisation du service public, soit afin de pouvoir exercer pleinement son droit de recours. Il en va ainsi par exemple d'un arrêté de nomination d'un agent communal, des mentions relatives au nom et à l'adresse du bénéficiaire d'une autorisation d'urbanisme ou encore des informations librement consignées sur des registres d'enquête publique par les personnes ayant formulé des observations sur le projet soumis à enquête._

_Lorsqu'un document administratif comporte de telles données à caractère personnel, il peut être communiqué à toute personne qui en fait la demande. En revanche et par principe, la diffusion des données à caractère personnel en ligne est proscrite. Tout document contenant de telles données doit avoir préalablement fait l'objet d'un traitement permettant de rendre impossible l'identification des personnes (anonymisation). "_

## Exemples d'anonymisation et retours d'expérience

_Une page sera rajoutée ultérieurement avec des exemples de procédures d'anonymisation conduites par des administrations publiques._