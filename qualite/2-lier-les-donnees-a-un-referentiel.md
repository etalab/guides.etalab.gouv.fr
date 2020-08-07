---
permalink: /qualite/lier-les-donnees-a-un-referentiel
---

# Lier les données à un référentiel


Comme explicité dans la page [Préparer le jeu de données - *Cas 2 - La structure du jeu de données ne correspond à aucun schéma de données existant*](/qualite/preparer-le-jeu-de-donnees/#cas-2-la-structure-du-jeu-de-donnees-ne-correspond-a-aucun-schema-de-donnees-existant), il est important d'intégrer dans vos jeux de données des données pivots relevant d'un référentiel.

::: tip Exemple
Mon jeu de données est une liste d'actions culturelles menées par ma région. Certaines de ces actions sont gérées par des associations. Il peut être intéressant de publier un jeu de données recensant ces actions avec un champ correspondant à l'identification des associations. Cet identifiant existe et est standardisé, il s'agit du numéro RNA, identifiant national des associations dont le répertoire est opéré par le ministère de l'Intérieur.
:::

## Avantages

L'intégration dans votre jeu de données de données pivots qui correspondent à un référentiel offre plusieurs avantages : 
- **Une meilleure formalisation** : en se basant sur un référentiel, le producteur de données a l'assurance d'utiliser un format de données standard et partagé par un grand nombre de jeux de données ;
- **Une meilleure synthèse** : en se basant sur un référentiel, le producteur évite l’abondance de détails et va à l’essentiel. L'’obtention d’informations complémentaires se fera par le biais de la consultation du référentiel en lui-même ;
- **Une meilleure compréhension** : en intégrant dans son jeu de données des données correspondant à un référentiel, le producteur facilite la compréhension de celui-ci par des éventuels utilisateurs car il se réfère à un standard largement adopté ;
- **Une meilleure réutilisation** : intégrer des données liées à un référentiel facilitera la réutilisation du jeu de données et permettra son enrichissement avec d'autres données partageant la même donnée pivot ;
- **Une meilleure interopérabilité** : intégrer des données pivots facilite le lien avec des données de référence fiables et à jour.



## Exemples de référentiels

### Le service public de la donnée

Parmi les nombreux référentiels existants, nous pouvons citer le service public de la données (SPD) qui référence 9 jeux de données maintenus de manière pérenne par des administrations. 

![Service Public de la Donnée](./images/spd.png)
*Vous pouvez consulter sur le site data.gouv.fr la liste [des données du service public de la donnée](https://www.data.gouv.fr/fr/reference).*

Parmi ces jeux de données, nous pouvons citer entre autres : 
- La [base Siren](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/)e qui liste l'ensemble des entreprises françaises. Les identifiants principaux liés à cette base sont le N° SIREN (identifiant d'une unité légale) et le numéro SIRET (identifiant d'un établissement) ;
- La [base du répertoire national des associations (RNA)](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/), qui répertorie l’ensemble des associations relevant de [la loi du 1er juillet 1901 relative au contrat d’association](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=LEGITEXT000006069570). L'identifiant des associations est le numéro RNA ;
- Le [code officiel géographique (COG](https://www.data.gouv.fr/fr/datasets/code-officiel-geographique-cog/)) qui décrit les codes et libellés des communes, des cantons, des arrondissements, des départements, des régions et des pays et territoires étrangers.

::: tip Exemple
Afin de lister l'ensemble des actions culturelles de ma région, nous avons vu que le numéro RNA pouvait être utile pour identifier les associations. Grâce à celui-ci, il est également possible de récupérer le numéro SIRET de l'association si celle-ci en possède un. Il est également possible de détailler dans le jeu de données le code commune et le code département de chaque action. Pour cela, il convient de se référer au Code officiel géographique. **Attention à bien respecter celui-ci. Par exemple, le code département de l'Ariège est le "09" et pas le "9". Ce type d'erreur pourrait entraîner des difficultés lors de la réutilisation des données.**
:::

### Les autres référentiels

Au-delà du service public de la donnée, il existe un grand nombre de jeux de données standardisées et communément partagées avec le plus grand nombre. Il est conseillé d'intégrer les données pivots de ces référentiels dans vos jeux de données, si vous pensez que la démarche est pertinente.
::: tip Exemple
L'identifiant unique d'une certification professionnelle est le [numéro RNCP](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-certifications-professionnelles-et-repertoire-specifique/). Ce jeu de données ne fait pas partie du service public de la donnée mais est largement partagé par les acteurs du domaine de la formation professionnelle.
:::

Vous trouverez ci-dessous un recensement, non exhaustif, de référentiels sur lesquels vous pouvez vous appuyer pour l'intégration de variables pivots :

#### Référentiels métiers

| Nom du jeu de données | Variable(s) pivot(s) | Description | Producteur |
| --- | --- | --- | --- |
| [Base SIRENE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) | SIRET, SIREN | Liste des établissements (SIRET) et unités légales (SIREN) françaises | [INSEE](https://www.data.gouv.fr/fr/organizations/institut-national-de-la-statistique-et-des-etudes-economiques-insee/) |
| [Base Adresse Nationale (BAN)](https://www.data.gouv.fr/fr/datasets/base-adresse-nationale/) | BAN | Référencement de l'intégralité des adresses du territoire français | [BAN](https://www.data.gouv.fr/fr/organizations/base-adresse-nationale/) |
| [Code Officiel Géographique (COG)](https://www.data.gouv.fr/fr/datasets/code-officiel-geographique-cog/) | Codes et libellés | Liste des communes, cantons, arrondissements, départements, régions, pays et territoires étrangers | [INSEE](https://www.data.gouv.fr/fr/organizations/institut-national-de-la-statistique-et-des-etudes-economiques-insee/) |
| [Plan Cadastral Informatisé (PCI)](https://www.data.gouv.fr/fr/datasets/plan-cadastral-informatise/) | Identifiant | Représentation de chacune des sections du cadastre français | [Ministère de l'économie et des finances](https://www.data.gouv.fr/fr/organizations/ministere-de-leconomie-et-des-finances/) |
| [Registre parcellaire graphique (RPG)](https://www.data.gouv.fr/fr/datasets/registre-parcellaire-graphique-rpg-contours-des-parcelles-et-ilots-culturaux-et-leur-groupe-de-cultures-majoritaire/) | Identifiant | Base de données géographiques de référence pour l'instruction des aides de la politique agricole commune (PAC) | [IGN](https://www.data.gouv.fr/fr/organizations/institut-national-de-l-information-geographique-et-forestiere/) |
| [Référentiel de l'organisation administrative de l'Etat](https://www.data.gouv.fr/fr/datasets/referentiel-de-lorganisation-administrative-de-letat/) | Identifiant | Liste des institutions régies par la Constitution de la Ve république ainsi que les administrations qui en dépendent | [DILA](https://www.data.gouv.fr/fr/organizations/premier-ministre/) |
| [Référentiel à grande échelle (RGE)](https://www.data.gouv.fr/fr/datasets/referentiel-a-grande-echelle-rge/) | Identifiant | Composantes orthophotographique, topographique et adresse, parcellaire et altimétrique des territoires de l'Etat français | [IGN](https://www.data.gouv.fr/fr/organizations/institut-national-de-l-information-geographique-et-forestiere/) |
| [Répertoire National des Associations (RNA)](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/) | N° RNA / N° Waldec | Ensemble des associations relevant de la loi du 1er juillet 1901 relative au contrat d’association, dont le siège est en France | [Ministère de l'intérieur](https://www.data.gouv.fr/fr/organizations/ministere-de-l-interieur/) |
| [Répertoire Opérationnel des Métiers et des Emplois (ROME)](https://www.data.gouv.fr/fr/datasets/repertoire-operationnel-des-metiers-et-des-emplois-rome/) | Code ROME | Inventaire des dénominations d’emplois/métiers les plus courantes, analyse des activités et compétences, regroupement des emplois selon un principe d’équivalence ou de proximité | [Pôle Emploi](https://www.data.gouv.fr/fr/organizations/pole-emploi/) |
| [Nomenclature d’activités française (NAF)](https://www.data.gouv.fr/fr/datasets/nomenclature-dactivites-francaise-naf/) | Code NAF | Nomenclature des activités économiques productives, principalement élaborée pour faciliter l'organisation de l'information économique et sociale | [INSEE](https://www.data.gouv.fr/fr/organizations/institut-national-de-la-statistique-et-des-etudes-economiques-insee/) |
| [Répertoire National des Certifications Professionnelles (RNCP) et Répertoire Spécifique (RS)](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-certifications-professionnelles-et-repertoire-specifique/) | N°RNCP / N°RS | Répertoire des certifications officielles inscrites au RNCP et au RS| [France Compétences](https://www.data.gouv.fr/fr/organizations/france-competences/) |
| [Fichier FANTOIR des voies et lieux-dits](https://www.data.gouv.fr/fr/datasets/fichier-fantoir-des-voies-et-lieux-dits/) | N° FANTOIR | Nom des lieux-dits et des voies pour chaque commune, y compris celles situées dans les lotissements et les copropriétés | [Ministère de l'économie et des finances](https://www.data.gouv.fr/fr/organizations/ministere-de-leconomie-et-des-finances/) |
| [Etats et capitales du monde](https://www.data.gouv.fr/fr/datasets/etats-et-capitales-du-monde/#_) | Code Pays | Liste des états indépendants reconnus par la France | [Ministère de l'Europe et des Affaires Etrangères](https://www.data.gouv.fr/fr/organizations/ministere-des-affaires-etrangeres-et-du-developpement-international/) |
| [Nomenclatures des professions et catégories socioprofessionnelles](https://www.insee.fr/fr/information/2406153) | Code PCS / Code PCS-ESE  | Nomenclatures des professions et catégories socioprofessionnelles | [INSEE](https://www.data.gouv.fr/fr/organizations/institut-national-de-la-statistique-et-des-etudes-economiques-insee/) |
| [Liste des établissements d'enseignements supérieurs](https://www.data.gouv.fr/fr/datasets/etablissements-denseignement-superieur-2/)<br><br>[Liste des établissements d'enseignements secondaires](https://www.data.gouv.fr/fr/datasets/etablissements-denseignement-secondaire/) | N°UAI | Liste des unités administratives immatriculées  | [ONISEP](https://www.data.gouv.fr/fr/organizations/office-national-d-information-sur-les-enseignements-et-les-professions/) |


#### Référentiels techniques

Les référentiels techniques n'ont pas de significations métiers. Cependant, ils permettent de décrire une donnée de manière standardisée. Ces standards permettent aux utilisateurs et aux algorithmes de pouvoir interpréter automatiquement la donnée de manière correcte. C'est le cas principalement des dates et des coordonnées géographiques pour lesquels sont listés ci-dessous deux exemples de standards largement adoptés.

| Nom du référentiel | Description | Information |
| --- | --- | --- |
| WGS84 | Coordonnées géodésique d'un lieu | [Wikipedia](https://fr.wikipedia.org/wiki/WGS_84) |
| ISO8601 | Représentation numérique d'une date et d'une heure | [Wikipedia](https://fr.wikipedia.org/wiki/ISO_8601) |


### Partager ses propres référentiels


::: warning À noter
Le [Cadre Commun d'Architecture des référentiels de données de l'Etat](https://references.modernisation.gouv.fr/sites/default/files/Cadre%20Commun%20d%27Architecture%20des%20R%C3%A9f%C3%A9rentiel%20de%20donn%C3%A9es%20v1.0_0.pdf) fait spécifiquement mention de l'importance des variables pivots dans le partage et la publication de données. Il stipule notamment que : 
- Les données sont un bien, un actif de l’État, elles doivent être gérées et valorisées en conséquence ;
- Les données doivent être standardisées, définies sur la base d’un vocabulaire commun, contextualisées, et combinables les unes aux autres ;
- Les données doivent être facilement réutilisables, partageables et accessibles à travers les frontières des administrations ;
- Les données publiques doivent être mises à disposition librement et ouvertement sur internet ;
- La sécurité et l'archivage des données doit être assuré.
:::

Pour favoriser au mieux le partage et l'interopérabilité des données, les acteurs sont encouragés à mettre en place leurs propres référentiels internes ou à les partager s'ils existent déjà. 

Ainsi, il est pertinent de diffuser, en même temps que votre jeu de données, la liste des valeurs possibles correspondant à votre propre référentiel métier. Celui-ci sera connu et potentiellement réutilisé par d'autres acteurs.

La mise en place de référentiels fait également parti d'une stratégie de montée en qualité de la donnée. Mettre en place n'est souvent pas suffisant : il est ensuite nécessaire de diffuser, former et vérifier que les données produites intègrent ces référentiels et n'en dérivent pas (à partir d'un contrôle humain ou de tests automatiques).

::: tip Exemple
J'utilise en interne un numéro unique permettant d'identifier chaque type d'action culturelle (arts du spectacle, cirque, arts plastiques...). Il peut être pertinent de diffuser en parallèle à la diffusion de mon jeu de données la liste de mon référentiel. Des communes de ma région pourraient potentiellement le réutiliser pour décrire leurs actions culturelles à une maille plus fine.
:::

## Le cas spécifique des adresses

Il est fréquent que les producteurs de données souhaitent ajouter des adresses dans leurs jeux de données. 

De la même manière, il existe des référentiels pour décrire une adresse de manière unique. Le référentiel officiel d'adresse s'intitule la [base d'adresse nationale (ou BAN précédemment listé)](https://www.data.gouv.fr/fr/datasets/base-adresse-nationale/). Si vous partez de zéro pour constituer votre jeu de données, il est pertinent de partir de cette base de données pour décrire vos adresses.

Cependant, il arrive souvent qu'un producteur travaille sur un jeu de données qui contient déjà des adresses saisies. Il peut s'avérer fastidieux de corriger manuellement l'ensemble des adresses erronées. Heureusement, il existe un certains nombre d'outils pour obtenir une base d'adresse normalisée ! 

### Le géocodage

Le géocodage consiste à affecter des coordonnées géographiques à une adresse postale. Cette opération peut être en partie automatisée grâce à des outils proposés par Etalab.

Le site [https://adresse.data.gouv.fr/](https://adresse.data.gouv.fr/) permet de géocoder une liste d'adresse via un appel à une API ou par le dépôt de fichier csv.

En utilisant l'outil avec un jeu de données contenant des adresses déja saisies, l'applicatif nous retourne un jeu de données enrichi :
- De coordonnées géographiques (longitude/latitude) ;
- Des adresses « corrigées » récupérées de la BAN ;

**Géocodage massif**

Le site [adresse.data.gouv.fr](https://adresse.data.gouv.fr) est limité à des utilisations ponctuelles et des volumétries de données considérées faibles (moins d'un million de lignes). Si vous souhaitez géocoder un très gros jeu de données (plusieurs millions de lignes), il est recommandé d'installer votre propre environnement de géocodage, en utilisant par exemple le géocodeur [Addok](https://addok.readthedocs.io/fr/latest/). Vous pouvez consulter des ressources sur [GitHub](https://github.com/etalab/addok-docker) pour vous aider dans l'installation de votre environnement.

Qu'importe la méthode utilisée, le processus de géocodage retournera une liste d'adresses standardisées avec leurs coordonnées géographiques associées. De plus, vous aurez également accès à une information `geo_score` correspondant au score de confiance que le géocodeur accorde à l'adresse retournée. Cet indicateur peut être utile à garder dans votre jeu de données final, puisqu'il donnera une indication aux utilisateurs sur la performance du géocodage pour chaque adresse.