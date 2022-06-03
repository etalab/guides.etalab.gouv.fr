---
permalink: /anonymisation/definition/
---

# Définition

L'anonymisation est l'opération de protection des données personnelles qui vise à empêcher qu'un utilisateur adverse de la base de données puisse déduire des informations sensibles sur un individu en croisant la base de données à d'autres sources de données auxquelles il aurait accès. Par construction, l'anonymisation d'une base de données passe par la suppression ou l'altération d'une partie (possiblement importante) des données communiquée aux usagers de la base anonymisée.

Une base de données est considérée comme anonymisée si les trois critères suivants sont réunis :

- *critère de non-individualisation* : il n'est pas possible d'isoler un individu (") ;

- *critère de non-corrélation* : il n'est pas possible de corréler des ensembles de données distincts concernant un même individu ;

- *critère de non-inférence* : il n'est pas possible de déduire, de façon certaine, de nouvelles informations sur un individu.

Si ces trois critères ne sont pas réunis après l'opération d'anonymisation, il faut procéder à une analyse approfondie des risques de ré-identification sur la base de données ainsi stransformée avant d'envisager une publication des données. 

Remarque : si de nouvelles données anonymisées sont publiées régulièrement (ce qui est le cas par exemple d'une base de données personnelles qui serait anonymisée "au vol" au fur et à mesure que les utilisateurs requièrent de nouvelles données), il faut que les publications ultérieures ne compromettent pas la confidentialité des données déjà publiées.

### Analyse de risques de compromissions de données personnelles.

Pour conduire l'anonymisation empirique d'une base, il faut procéder au cas par cas : d'une part l'on définit le niveau et la nature des informations qu'on veut mettre à disposition des utilisateurs de la base anonymisée, et d'autre part l'on anticipe TOUS les cas de compromissions de données sensibles que l'on doit empêcher. En comparant ces objectifs opposés, on peut réévaluer (à la hausse ou à la baisse) le niveau d'information que l'on va effectivement publier, et choisir une méthode d'anonymisation adaptée

Dans les cas où l'anonymisation des données avant publication n'est pas une obligation légale, mais une mesure de protection d'informations sensibles, l'on arbitre au cas par cas le risque de compromissions d'informations sensibles VS la quantité d'information utile qui demeure dans la base après anonymisation.

L'anonymisation des données est nécessaire pour de nombreux usages (protéger des données personnelles ou des données sensibles) mais provoque, par fin, la suppression ou l'altération d'informations. Pour s'assurer que la base de données est correctement anonymisée (ce qui est exigeant) tout en s'efforçant 

Une bonne anonymisation doit prendre en compte que les possibilités techniques de croiser des données issues de sources externes évoluent rapidement, et qu'il en va de même des méthodes d'anonymisation.s


Un ensemble de techniques contribue à l'anonymisation des bases de données, m

L'anonymisation de données provoque à dessein une perte d'information, et doit généraliser suffisamment les données de la base pour que les informations ne soient plus spécifiques à un individu mais portent sur un ensemble de personnes qu'il ne sera plus possible de distinguer les unes des autres.


L'anonymisation nécessite de supprimer ou d'altérer suffisamment d'informations pour valider ces trois critères.

La suppression des données directement identifiantes est une condition nécessaire, mais pas du tout suffisante (dans le cas cela n'empêche ni )

Bien entendu, la suppression d'informations diminue 
L'anonymisation doit être calibrée de façon à garantir l'anonymat de chaque individu sans vider de son intérêt l'analyse statistique de la base. La difficulté de l'anonymisation provient du fait que l'on doit supposer que "l'adversaire" voulant ré-identifier des individus de la base peut disposer d'informations tierces qu'il tentera de croiser avec la base anonymisée.

 L'anonymisation vise à annuler le risque de ré-identification de chacun des individus de la base.

### Publication de données à caractère personnel préalablmement anonymisées : qu'en dit la CNIL ?

La CNIL a publié en 2019 un guide sur la publication de données : [2019 - guide de la CNIL](https://www.cnil.fr/sites/default/files/atoms/files/guide_open_data.pdf), dont est extrait le passage suivant :

#### _" Le principe de l’anonymisation des documents contenant des données à caractère personnel (Article L. 312-1-2 alinéa 2 du CRPA ; articles 4 et 7 du RGPD ; conseil CADA 20180650) :_

_Lorsque les données à caractère personnel relèvent de la vie privée des personnes concernées, elles ne peuvent être communiquées à des tiers et ne seront donc pas non plus publiables._

_Relèvent, par exemple, de la vie privée : au titre de l'état civil, la date de naissance et l'âge, les coordonnées personnelles, notamment l'adresse postale, l'adresse électronique et le numéro de téléphone, la situation patrimoniale et financière, en particulier le patrimoine immobilier, les revenus perçus, y compris les aides ou revenus de remplacement, les impôts et taxes acquittés, la domiciliation bancaire et l'identification des comptes bancaires et postaux mettent en cause la vie privée, la qualité de travailleur handicapé, la formation initiale, les horaires de travail, les sympathies politiques et l'appartenance à un parti politique ainsi que les croyances religieuses._

_Certains documents administratifs comportent des données personnelles qui  ne sont pas couvertes en tant que telles par le secret de la vie privée._

_Il s’agit notamment du nom et du prénom d'une personne qui ne font pas, par eux-mêmes, partie des éléments protégés au titre de la vie privée. Ainsi, un « document nominatif », n'est pas exclu, de ce seul fait, du champ du droit d'accès : il ne le sera que s'il comporte par ailleurs des éléments couverts par le secret de la vie privée et que la personne à laquelle se rapportent les informations est identifiable._

_Entrent, également, dans cette catégorie les données dont on estime que le public doit avoir connaissance, soit au titre de l'organisation du service public, soit afin de pouvoir exercer pleinement son droit de recours. Il en va ainsi par exemple d'un arrêté de nomination d'un agent communal, des mentions relatives au nom et à l'adresse du bénéficiaire d'une autorisation d'urbanisme ou encore des informations librement consignées sur des registres d'enquête publique par les personnes ayant formulé des observations sur le projet soumis à enquête._

_Lorsqu'un document administratif comporte de telles données à caractère personnel, il peut être communiqué à toute personne qui en fait la demande. En revanche et par principe, la diffusion des données à caractère personnel en ligne est proscrite. Tout document contenant de telles données doit avoir préalablement fait l'objet d'un traitement permettant de rendre impossible l'identification des personnes (anonymisation). "_

# Exemples et retours d'expérience

_A venir_