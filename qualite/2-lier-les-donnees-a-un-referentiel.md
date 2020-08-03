---
permalink: /qualite/lier-les-donnees-a-un-referentiel
---

# Lier les données à un référentiel


Comme explicité dans la page [Préparer le jeu de données](1-preparer-le-jeu-de-donnees.md#cas-2-la-structure-du-jeu-de-donnees-ne-correspond-a-aucun-schema-de-donnees-existant), il peut être pertinent d'intégrer dans vos jeux de données des données pivots relevant d'un référentiel.

:::tip Exemple
Mon jeu de données est une liste d'actions culturelles menées par ma région. Certaines de ces actions sont gérées par des associations. Il pourrait être intéressant de publier un jeu de données recensant ces actions avec un champs correspondant à l'identification des associations. Cet identifiant existe et est standardisé, il s'agit du N° RNA, identifiant national des associations porté par le ministère de l'intérieur.
:::

## Avantages

L'utilisation de données pivot correspondant à un référentiel offre plusieurs avantages : 
- une meilleure formalisation : en se basant sur un référentiel, le producteur de données a l'assurance d'utiliser un format de données standard et partagé par un grand nombre de jeux de données.  
- une meilleure synthèse : en se basant sur un référentiel, le producteur évite l’abondance de détails et va à l’essentiel. L'’obtention d’informations complémentaires se fera par le biais de la consultation du référentiel en lui-même.
- une meilleure compréhension : en intégrant dans son jeu de données des données correspondant à un référentiel, le producteur facilite la compréhension de celui-ci par des éventuels utilisateurs car il se réfère à un standard largement adopté
- une meilleure réutilisation : intégrer des données liées à un référentiel facilitera la réutilisation du jeu de données et permettra son enrichissement avec d'autres données partageant la même donnée pivot. 
- une meilleure interopérabilité : intégrer des données pivots facilite le lien avec des données de référence fiables et à jour.

## Exemples de référentiels

### Le service public de la donnée

Parmi les nombreux référentiels existants, nous pouvons citer le service public de la données (SPD) qui contient 9 jeux de données maintenus de manière pérenne par des administrations. 

![Service Public de la Donnée](./images/spd.png)
*Vous pouvez consulter sur le site data.gouv.fr la liste des données du SPD sur [sa page dédiée](https://www.data.gouv.fr/fr/reference).*

Parmi ces jeux de données, nous pouvons citer entre autres : 
- la base SIRENE listant l'ensemble des entreprises française. Les identifiants principaux liés à cette base sont le N° SIREN (identifiant d'une unité légale) et le N° SIRET (identifiant d'un établissement).
- la base du répertoire national des associations (RNA). L'identifiant des associations est le N° RNA
- le code officiel géographique (COG) décrivant les codes et libellés exacts des communes, des cantons, des arrondissements, des départements, des régions et des pays et territoires étrangers.

:::tip Exemple
Pour lister l'ensemble des actions culturelles de ma région, nous avons vu que le N° RNA pouvait être utile pour identifier les associations. Grâce à celui-ci, nous pouvons également récupérer le N° SIRET de l'association si celle-ci en possède un. Nous pouvons également détailler dans notre jeu de données le code commune et le code département de chaque action. Pour cela, on se réfèrera au Code officiel géographique. 
<br>***Attention à bien respecter celui-ci. Par exemple, le code département de l'Ariège est le "09" et pas le "9". Ce type d'erreur pourrait entraîner des problèmes de réutilisation des données.***
:::

### Les autres référentiels

Au-delà du service public de la données, il existe un grand nombre de données standardisées et communément partagées avec le plus grand nombre. N'hésitez pas à intégrer des données pivot vers ces référentiels dans vos jeux de données si vous pensez que ceux-ci pourraient être pertinents.
:::tip Exemple
L'identifiant unique d'une certification professionnelle est le [N° RNCP](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-certifications-professionnelles-et-repertoire-specifique/). Ce jeu de données ne fait pas partie du service public de la données mais est largement partagé par les acteurs du domaine de la formation professionnelle.
:::

Vous trouverez ci-dessous un recensement non exhaustif de différents référentiels sur lesquels vous pouvez vous appuyer pour la mise en place de vos variables pivots :

#### Référentiels métiers

| Nom du jeu de données | Variable(s) pivot(s) | Description | Producteur |
| --- | --- | --- | --- |
| Base SIRENE | SIRET, SIREN | Liste des établissements (SIRET) et unités légales (SIREN) françaises | [INSEE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) |
| Base Adresse Nationale (BAN) | BAN | Référencement de l'intégralité des adresses du territoire français | [BAN](https://www.data.gouv.fr/fr/datasets/base-adresse-nationale/) |
| Code Officiel Géographique (COG) | Codes et libellés | Liste des communes, cantons, arrondissements, départements, régions et pays et territoires étranger | [INSEE](https://www.data.gouv.fr/fr/datasets/code-officiel-geographique-cog/) |
| Plan Cadastral Informatisé (PCI) | Identifiant | Représentation de chacune des sections du cadastre français | [Ministère de l'économie et des finances](https://www.data.gouv.fr/fr/datasets/plan-cadastral-informatise/) |
| Registre parcellaire graphique (RPG) | Identifiant | Base de données géographiques de référence pour l'instruction des aides de la politique agricole commune (PAC) | [IGN](https://www.data.gouv.fr/fr/datasets/registre-parcellaire-graphique-rpg-contours-des-parcelles-et-ilots-culturaux-et-leur-groupe-de-cultures-majoritaire/) |
| Référentiel de l'organisation administrative de l'Etat | Identifiant | Toutes les institutions régies par la Constitution de la Ve république et les administrations qui en dépendent | [DILA](https://www.data.gouv.fr/fr/datasets/referentiel-de-lorganisation-administrative-de-letat/) |
| Référentiel à grande échelle (RGE) | Identifiant | Composantes orthophotographique, topographique et adresse, parcellaire et altimétrique des territoires de l'Etat français | [IGN](https://www.data.gouv.fr/fr/datasets/referentiel-a-grande-echelle-rge/) |
| Répertoire National des Associations (RNA) | N° RNA / N° Waldec | Ensemble des associations relevant de la loi du 1er juillet 1901 relative au contrat d’association, dont le siège est en France | [Ministère de l'intérieur](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/) |
| Répertoire Opérationnel des Métiers et des Emplois (ROME) | Code ROME | Inventaire des dénominations d’emplois/métiers les plus courantes, analyse des activités et compétences, regroupement des emplois selon un principe d’équivalence ou de proximité | [Pôle Emploi](https://www.data.gouv.fr/fr/datasets/repertoire-operationnel-des-metiers-et-des-emplois-rome/) |
| Nomenclature d’activités française (NAF) | Code NAF | Nomenclature des activités économiques productives, principalement élaborée pour faciliter l'organisation de l'information économique et sociale | [INSEE](https://www.data.gouv.fr/fr/datasets/nomenclature-dactivites-francaise-naf/) |
| Répertoire National des Certifications Professionnelles (RNCP) et Répertoire Spécifique (RS) | N°RNCP / N°RS | Liste des certifications officielles inscrites au RNCP et au RS| [France Compétences](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-certifications-professionnelles-et-repertoire-specifique/) |
| Fichier FANTOIR des voies et lieux-dits | N° FANTOIR | nom des lieux-dits et des voies pour chaque commune, y compris celles situées dans les lotissements et les copropriétés | [Ministère de l'économie et des finances](https://www.data.gouv.fr/fr/datasets/fichier-fantoir-des-voies-et-lieux-dits/) |
| Etats et capitales du monde | Code Pays | Liste des états indépendants reconnus par la France | [Ministère de l'Europe et des Affaires Etrangères](https://www.data.gouv.fr/fr/datasets/etats-et-capitales-du-monde/#_) |
| Nomenclatures des professions et catégories socioprofessionnelles | Code PCS / Code PCS-ESE  | Nomenclatures des professions et catégories socioprofessionnelles | [INSEE](https://www.insee.fr/fr/information/2406153) |
| Liste des établissements d'enseignements | N°UAI | liste des unités administrative immatriculée  | [ONISEP](https://www.data.gouv.fr/fr/datasets/etablissements-denseignement-superieur-2/)<br>[ONISEP](https://www.data.gouv.fr/fr/datasets/etablissements-denseignement-secondaire/) |


#### Référentiels techniques

Les référentiels techniques ne portent pas en eux-mêmes de significations métiers. Par contre, ils permettent de décrire une donnée de manière standardisée. Ces standards permettent aux utilisateurs et aux algorithmes de pouvoir automatiquement interpréter la donnée de manière correcte. C'est le cas notamment principalement des dates et des coordonnées géographiques pour lesquels nous listons ci-dessous deux exemples de standards largement adopté.

| Nom du référentiel | Description | Information |
| --- | --- | --- |
| WGS84 | Coordonnées géodésique d'un lieu | [Wikipedia](https://fr.wikipedia.org/wiki/WGS_84) |
| ISO8601 | Représentation numéroque d'une date et d'une heure | [Wikipedia](https://fr.wikipedia.org/wiki/ISO_8601) |


### Partager ses propres référentiels

Pour favoriser au mieux le partage et l'interopérabilité des données, il est donc encourager pour chacun des acteurs de mettre en place ses propres référentiels internes ou de les paratager s'ils existent déjà. 

Ainsi, il est pertinent de diffuser en même temps que votre jeu de données, la liste des valeurs possibles correspondant à votre propre référentiel métier. Celui-ci sera donc connu et potentiellement réutilisé par d'autres.

:::tip Exemple
J'utilise en interne un numéro unique permettant d'identifier chaque type d'action culturelle (arts du spectacles, cirque, arts plastiques...). Il peut être pertinent de diffuser en parallèle à la diffusion de mon jeu de données, la liste de mon référentiel. Des communes de ma région pourraient potentiellement le réutiliser pour décrire leurs actions culturelles à une maille plus fine.
:::

## Le cas spécifique des adresses

Très souvent, les producteurs de données souhaitent publier des adresses dans leurs jeux de données. 

Là aussi, il existe des référentiels pour décrire une adresse de manière unique. Le référentiel d'adresse se nomme la [base d'adresse nationale (ou BAN précédemment listé)](https://www.data.gouv.fr/fr/datasets/base-adresse-nationale/). Si vous partez de zéro pour constituer votre jeu de données, il est pertinent de partir de cette base de données pour décrire vos adresses.

Cependant, les producteurs se retrouvent régulièrement avec une liste d'adresses très longue et il peut s'avérer fastidieux de transcrire manuellement l'ensemble de ces adresses. Heureusement, il existe un certains nombre d'outils pour obtenir une base d'adresse normalisée.

### Le géocodage

Le géocodage consiste à affecter des coordonnées géographiques à une adresse postale. Cette opération peut être en partie automatisée grâce à des outils proposés par Etalab.

Le site [https://adresse.data.gouv.fr/](https://adresse.data.gouv.fr/) permet de géocoder une liste d'adresse soit via un appel à une API, soit via le dépôt direct de fichier csv.

En utilisant l'outil avec un jeu de données contenant des adresses, l'applicatif nous retourne un jeu de données enrichi de coordonnées géographiques (longitude/latitude) ainsi que d’une adresse “corrigée” récupérée de la BAN. 

**Géocodage massif**

Le site https://adresse.data.gouv.fr est limité à des utilisations ponctuelles et des volumétries de données considérées faibles (moins d'un million de lignes). Si vous souhaitez géocoder un très gros jeu de données (plusieurs millions de lignes), il est recommandé d'installer votre propre environnement de géocodage, en utilisant par exemple le géocodeur [Addok](https://addok.readthedocs.io/fr/latest/). Vous pouvez consulter des ressources sur [github](https://github.com/etalab/addok-docker) pour vous aider dans l'installation de votre environnement.

Qu'importe la méthode utilisée, le process de géocodage vous retournera une liste d'adresses standardisées avec leurs coordonnées géographiques associées. De plus, vous aurez également accès à une information `geo_score` correspondant au score de confiance que le géocodeur accorde à l'adresse retournée. Cet indicateur peut être utile à garder dans votre jeu de données final car il donnera une indication aux utilisateurs sur la performance du géocodage pour chaque adresse.
