---
permalink: /anonymisation/principe/
---

# Principe

## Les critères d'anonymisation

Les données personnelles ne peuvent être traitées, par une personne ou un algorithme, ou publiées que dans des situations strictement encadrées par la législation. Dès lors que  l'on sort de ce cadre, tout traitement ou publication doit être précédé par une stricte <b>anonymisation</b> des données. 

L'<b>anonymisation</b> est l'opération qui modifie ou retire des informations personnelles d'une base de données (avec une acception large de ce qu'est une donnée personnelle), dans l'optique de rendre très difficile (et idéalement impossible) la "ré-identification" d'un individu et d'empêcher que l'on puisse déduire des informations sensibles sur un individu en croisant la base de données à d'autres sources de données auxquelles il aurait accès (à l'ère d'internet, ces sources de données tierces sont nombreuses et variées).

_En particulier, avec des informations tierces, il est assez facile de se douter que telle ou telle personne figure dans la base de données. L'étape d'anonymisation doit suffisamment brouiller les pistes pour qu'on ne puisse pas lire dans la base anonymisée des informations qui permettraient de relier une personne à des informations sensibles la concernant._

L'anonymisation de données provoque à dessein une perte d'information, et doit généraliser suffisamment les données de la base pour que les informations ne soient plus spécifiques à un individu mais portent sur un ensemble de personnes qu'il ne sera plus possible de distinguer les unes des autres. Dans cette fin, l'altération des données directement identifiantes est une condition nécessaire, mais pas du tout suffisante.

Une base de données est considérée comme anonymisée si les trois critères suivants sont réunis :

- *critère de non-individualisation* : il n'est pas possible d'isoler un individu ;

- *critère de non-corrélation* : il n'est pas possible de corréler des ensembles de données distincts concernant un même individu ;

- *critère de non-inférence* : il n'est pas possible de déduire, de façon certaine, de nouvelles informations sur un individu.

Si ces trois critères ne sont pas réunis après l'opération d'anonymisation, il faut procéder à une analyse approfondie des risques de ré-identification sur la base de données ainsi stransformée avant d'envisager une publication des données. 

Il n'est pas évident de valider ces critères lors de la publication ponctuelle d'une base de données. A fortiori il faut être particulièrement vigilants si de nouvelles données anonymisées sont publiées régulièrement (ce qui est le cas par exemple d'une base de données qui serait anonymisée "au vol" au fur et à mesure que les utilisateurs requièrent de nouvelles données), car il faut s'assurer que les publications ultérieures ne compromettent pas rétroactivement la confidentialité des données déjà publiées (ce sujet est développé [sur cette autre page](/anonymiser/2-methodes.md#la-confidentialité-différentielle)).

## Rechercher le juste équilibre entre l'occultation nécessaire d'informations confidentielles et la préservation souhaitable d'information collective à des fins de traitement

L'anonymisation des données est nécessaire pour de nombreux usages (protéger des données personnelles ou des données sensibles) mais provoque, par définition, la suppression ou l'altération d'informations, qui aurait potentiellement eu de la valeur pour un traitement ultérieur mais que l'on s'interdit d'utiliser. Il est donc utile d'identifier le bon niveau d'altération des données pour respecter les obligations de confidentialité, en tâchant de préserver des informations génériques utiles. 

Mais attention, chaque information conservée peut éventuellement faire "fuiter" de l'information personnelle, c'est pourquoi il importe d'être vigilant sur le "comment anonymiser". En particulier, il est intéressant de publier des statistiques agrégées anonymes, mais plus ces statistiques sont nombreuses et visent des groupes aux effectifs réduits, plus le risque de réidentification grandir.

Pour conduire l'anonymisation empirique d'une base, il faut toujours procéder au cas par cas : 
- d'une part l'on définit le niveau et la nature des informations qu'on veut mettre à disposition des utilisateurs de la base anonymisée ;
- d'autre part l'on anticipe TOUS les cas de compromissions de données personnelles et sensibles que l'on doit empêcher ;
- en comparant ces objectifs contraires, et sans transiger sur la confidentialité, on réévalue (à la hausse ou à la baisse) le niveau d'information que l'on va effectivement publier, et l'on choisit une méthode d'anonymisation adaptée

Dans les cas où l'anonymisation des données avant publication n'est pas une obligation légale, mais une mesure de protection d'informations sensibles, l'on peut arbitrer au cas par cas le risque de compromissions d'informations sensibles VS la quantité d'information utile qui demeure dans la base après anonymisation.

Remarque : une bonne anonymisation doit prendre en compte que les possibilités techniques de croiser des données issues de sources externes évoluent rapidement, et qu'il en va de même des méthodes d'anonymisation.


## Publication de données à caractère personnel préalablement anonymisées : que dit la CNIL ?

La CNIL a publié en 2019 un guide sur la publication de données : [2019 - guide de la CNIL](https://www.cnil.fr/sites/default/files/atoms/files/guide_open_data.pdf), dont est extrait le passage suivant :

#### _" Le principe de l’anonymisation des documents contenant des données à caractère personnel (Article L. 312-1-2 alinéa 2 du CRPA ; articles 4 et 7 du RGPD ; conseil CADA 20180650) :_

_Lorsque les données à caractère personnel relèvent de la vie privée des personnes concernées, elles ne peuvent être communiquées à des tiers et ne seront donc pas non plus publiables._

_Relèvent, par exemple, de la vie privée : au titre de l'état civil, la date de naissance et l'âge, les coordonnées personnelles, notamment l'adresse postale, l'adresse électronique et le numéro de téléphone, la situation patrimoniale et financière, en particulier le patrimoine immobilier, les revenus perçus, y compris les aides ou revenus de remplacement, les impôts et taxes acquittés, la domiciliation bancaire et l'identification des comptes bancaires et postaux mettent en cause la vie privée, la qualité de travailleur handicapé, la formation initiale, les horaires de travail, les sympathies politiques et l'appartenance à un parti politique ainsi que les croyances religieuses._

_Certains documents administratifs comportent des données personnelles qui  ne sont pas couvertes en tant que telles par le secret de la vie privée._

_Il s’agit notamment du nom et du prénom d'une personne qui ne font pas, par eux-mêmes, partie des éléments protégés au titre de la vie privée. Ainsi, un « document nominatif », n'est pas exclu, de ce seul fait, du champ du droit d'accès : il ne le sera que s'il comporte par ailleurs des éléments couverts par le secret de la vie privée et que la personne à laquelle se rapportent les informations est identifiable._

_Entrent, également, dans cette catégorie les données dont on estime que le public doit avoir connaissance, soit au titre de l'organisation du service public, soit afin de pouvoir exercer pleinement son droit de recours. Il en va ainsi par exemple d'un arrêté de nomination d'un agent communal, des mentions relatives au nom et à l'adresse du bénéficiaire d'une autorisation d'urbanisme ou encore des informations librement consignées sur des registres d'enquête publique par les personnes ayant formulé des observations sur le projet soumis à enquête._

_Lorsqu'un document administratif comporte de telles données à caractère personnel, il peut être communiqué à toute personne qui en fait la demande. En revanche et par principe, la diffusion des données à caractère personnel en ligne est proscrite. Tout document contenant de telles données doit avoir préalablement fait l'objet d'un traitement permettant de rendre impossible l'identification des personnes (anonymisation). "_

## Exemples d'anonymisation et retours d'expérience

_A venir_