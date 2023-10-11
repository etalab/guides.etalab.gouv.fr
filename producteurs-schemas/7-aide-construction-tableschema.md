---
permalink: /producteurs-schemas/aide-construction-tableschema
---

# Aide à la construction d'un schéma TableSchema

La pertinence de la mise en place d'un standard de données réside dans son adéquation entre les capacités de sa mise en oeuvre par les producteurs de données et les outils permattant l'automatisation des jeux de données valides par rapport à cette spécification. Cette standardisation doit permettre de **faciliter la mise en relation des jeux de données** issus de différents producteurs.

Il ne s'agit donc pas de règles mais de recommandations, visant à faciliter la création de nouveaux schémas et **leur intégration dans une chaîne de validation et de publication généralisable**. 

## Recommandations pour le formatage des fichiers csv <a name="formatage-csv"></a>

Un des formats privilégiés pour les standards de données est le [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) \(Comma Separated Values, valeurs séparées par des virgules\). Il s'agit d'un format de données "à plat", **adéquat pour les structures de données simples**. Cependant ce format simple ne dispose pas de spécifications contraignant la saisie des données. Pour cela un schéma en Json est ajouté dont la structure est défini par le standard [TableSchema](https://specs.frictionlessdata.io/table-schema/). TableSchema permet d'indiquer les formats des données attendus, de spécifier des contraintes (types de valeurs, cardinalité) et de documenter les différents champs composant le schéma.

::: tip 
L'outil de validation utilisé pour vérifier la conformité d'un fichier csv au standard auquel il fait référence s'appuie sur la structure tabulaire des données. Elles peuvent donc être contenues dans un tableur numérique au format .xls, .xlsx ou .ods ou dans un fichier texte au format .csv, .txt ou autre.
:::

La question du séparateur utilisé pour séparer deux champs de données dans un fichier .csv n'est donc pas essentielle. Cependant, certains outils se basent sur la valeur de ce séparateur pour traiter et publier des jeux de données. Nous vous proposons donc un certain nombre de recommandations afin de favoriser la généralisation d'un usage contribuant à l'interopérabilité des données produites. 

### Format de fichier csv

Bien que de nombreux jeux de données en CSV utilisent le point-virgule comme séparateur de champs, il a été décidé de privilégier le **séparateur virgule** car plus conforme à l'esprit du format csv.

Les tableurs numériques courants (Excel et Calc) peuvent produire et lire des fichiers csv. Lors de l'enregistrement d'un fichier créé avec l'outil Calc, l'utilisatrice ou utilisateur doit spécifier le format d'encodage des données ainsi que le séparateur de champs. Lorsque le séparateur de champs retenu est la virgule, il est recommandé d'utiliser les guillemets double " comme séparateur de chaîne de caractères. De cette manière, si une virgule est présente à l'intérieur d'une cellule elle ne sera pas considérée comme un séparateur de champs.

::: tip
Lors de l'ouverture d'un fichier csv dans Calc, une fenêtre modale propose plusieurs options permettant de spécifier un caractère de séparation et un encodage des données.

Dans Excel, il faut aller dans l'onglet données et sélectionner l'option Fichier texte pour accéder à l'assistant d'import des données.
:::

L’encodage des caractères à privilégier est l'[UTF-8](https://fr.wikipedia.org/wiki/UTF-8) de manière à garantir une **meilleure interopérabilité des données**.

Pour faciliter la lecture des fichiers publiés en CSV il est recommandé d'y associer dans les outils de publication le **type MIME ou Content-Type "text/csv"**.

**Chaque ligne du fichier doit avoir le même nombre de champs**, ce qui signifie que lorsqu'une cellule est vide elle doit quand même être présente soit avec la valeur Null, soit avec des crochets vides [] dans le cas des champs de type tableau (array), soit laissée vide mais apparaître à l'export avec 2 virgules qui se suivent ,, .

## Recommandations de formatage des données

Les recommandations de formatage pour les données sont généralement issues du standard [TableSchema](https://specs.frictionlessdata.io/table-schema/), lui-même inspiré des spécifications du format [Json](https://www.json.org/json-fr.html), dans lequel sont exprimés les schémas de données permettant l'automatisation de leur validation.

Ce standard dispose des types de données suivants :

* **string** : s'applique pour toutes les chaînes de caractères
* **number** : s'applique pour les chiffres et nombres contenant éventuellement des décimales
* **integer** : s'applique pour les chiffres et nombres entiers
* **boolean** : s'applique pour indiquer que la valeur d'un champs ne peut être égale qu'à "vrai" ou "faux" (ou "1" et "0" ou "oui" ou "non")
* **object** : s'applique pour les données de type objet
* **array** : s'applique pour les tableaux de données

Les types de données peuvent être assortis de formats de données facilitant l'automatisation de leur validation.

Pour déclarer un format de données dans un schéma JSON il est possible d'utiliser différentes propriétés permettant de le caractériser : 

* **name** : le nom du champ
* **title** : le titre du champ
* **description** : la description des valeurs attendues dans ce champ
* **format** : le format du champ
* **type** : le type du champ

Il est également possible de contraindre les valeurs autorisées dans ce champ à l'aide de plusieurs proriétés : 

* **required** : indique l'obligation de la présence d'une valeur pour ce champ dans toutes les lignes du fichier
* **unique** : indique que chaque valeur de ce champ à l'intérieur du fichier doit être unique
* **minLength** : indique la taille minimale des valeurs de ce champ
* **maxLength** : indique la taille maximale des valeurs de ce champ
* **minimum** : indique la valeur minimum autorisée pour ce champ (par exemple pour une date on peut indiquer une année en deça de laquelle les valeurs ne sont pas autorisées)
* **maximum** : indique la valeur maximale autorisée pour ce champ
* **pattern** : indique une expression régulière à laquelle doivent être conforme les valeurs de ce champ (par exemple pour un numéro SIRET on peut indiquer `^\\d{14}$` ce qui signifie que les valeurs de ce champ doivent contenir exactement 14 chiffres)
* **enum** : indique une liste de valeurs autorisées pour ce champ

Ci-dessous quelques exemples tirés du schéma des menus de la restauration collective.

Le champ permettant d'indiquer le numéro SIRET d'une collectivité est spécifiée de la manière suivante


    {
        "name": "menuCollSiret",
        "title": "Code SIRET de la collectivité qui produit les données.",
        "description": "Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui commandé le menu. Ce code doit obligatoirement être composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.",
        "type": "string",
        "examples": "21330063500017",
        "constraints": {
            "required": true,
            "pattern":	"^\\d{14}$"
        }
    }

Le champ permettant d'indiquer la date de publication d'un enregistrement du jeu de données est spécifié de la manière suivante :

    {
        "name": "menuPublicationDate",
        "title": "Date de publication de l'enregistrement d'un menu",
        "description": "Lors de la publication ce champ d'horodatage permet d'indiquer la date de publication de la donnée présente dans le fichier.",
        "type": "datetime",
        "examples": "2020-05-11T14:08:32Z",
        "constraints": {
        "required": true
        }
    }

Les informations ci-dessous décrivent les différents types de champs disponibles dans la spécification TableSchema.

### Données de type string

Pour le type string, les formats de données suivants sont disponibles : 

* **default** : n'importe quelle chaîne de caractère
* **email** : une adresse email valide.
    * motif de validation : 
* **uri** : une URI valide
* binary: une chaîne de caractère encodées en base 64 représentant des données binaires.
* uuid: une chaîne de caractère représentant un identifiant unique.

### Données de type décimal

* **Description** : Les valeurs décimales doivent utiliser le point afin d'être plus facilement exploitables par les tableurs numériques.
* **Type** : number
* **Exemple** : 3900.50

### Données de type date

* **Description** : date au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).
* **Type** : date
* **Exemple** : 2017-10-15
* **Format** : "%Y-%m-%d"
* **Nommage** : abreviation-du-schemaDate

### Données de type date avec heure

* **Description** : date au format aaaa-mm-jjThh:mi:ssZZZZZZ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601). On considérera que ZZZZZZ (+ou- décalage horaire GMT), est par défaut +01:00 en France et qu'il est inutile de le préciser dans les formats. 
* **Type** : datetime
* **Exemple** : 1997−07−16T19:20:00

### Données de type date avec heure de début et de fin

* **Description** : date au format aaaa-mm-jjThh:mi/hh:mi suivant la norme internationale ISO 8601. Ce type de données s'applique pour un créneau horaire dans la même journée, sans les secondes. Pour une extension de ces conditions, voir la norme [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).
* **Type** : datetime
* **Exemple** : 1997−07−16T08:30/17:30


### Données de type horaires d'ouverture

* **Description** : horaires indiquant les heures d'ouverture d'un service ou d'un commerce. Ce type de données permet de préciser les différents horaires d'ouverture pour les différents jours de la semaine. Il s'agit donc d'un type de données multi-valeur au sein duquel le nom du jour de la semaine est abrégé et suivi par les heures d'ouvertures. Les abréviations pour les jours sont en anglais (Mo, Tu, We, Th, Fr, Sa, Su) et les horaires sont sous la forme HH:MM

::: tip
Un assistant graphique en ligne [yohours](https://projets.pavie.info/yohours) permet de générer simplement cette structure de données
:::

* **Type** : string (chaîne de caractères)
* **Exemple** : Mo 08:15-13:15; Tu 03:15-06:15; We 03:15-09:30; Th 02:30-07:15; Fr 01:30-05:45; Sa 00:30-05:00; Su 02:45-08:30
* **Nommage** : abreviation-du-schemaHoraires

### Données de type géolocalisation

La possibilité est laissée de décrire les points de géolocalisation d'une donnée à l'intérieur d'un champ unique (geopoint) ou à l'aide de 2 champs (latitude et longitude).

#### Latitude
* **Description** : ce type de données permet de saisir la coordonnée de latitude exprimée en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84) permettant de localiser un équipement. Le signe de séparation entre les parties entière et décimale du nombre est le point. Précision : 6 décimales maximum.
* **Type** : number
* **Exemple** : 48.563433
* **Nommage** : abreviation-du-schemaLat

#### Longitude
* **Description** : ce type de données permet de saisir la coordonnée de longitude exprimée en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84) permettant de localiser un équipement. Le signe de séparation entre les parties entière et décimale du nombre est le point. Précision : 6 décimales max.
* **Type** : number
* **Exemple** : 2.572875
* **Nommage** : abreviation-du-schemaLon

#### Geopoint
* **Description** : ce type de données permet de saisir les coordonnées de latitude et de longitude exprimée en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84) permettant de localiser un équipement. Le signe de séparation entre les parties entière et décimale du nombre est le point. Précision : 6 décimales max. Le séparateur de valeur est la virgule. Il est donc nécessaire d'entourer ces valeurs de guillemets. La première valeur est la latitude
* **Type** : number
* **Exemple** : "48.563433, 2.572875"
* **Nommage** : abreviation-du-schemaGeo

#### Geoshape
* **Description** : ce type de données permet de décrire la forme géographique d'un équipement. La forme est décrite à l'aide de paires de coordonnées, séparées par un espace vide et chaque paire séparée par une virgule. La description d'une ligne est exprimée à l'aide de 2 ou plus paires de points séparés par des virgules. La description d'un polygone est exprimée par 4 ou plus paires de points séparés par des virgules dont la dernière est identique à la première.
* **Type** : string
* **Exemple** : "48.563433 2.572875, 49.234933 2.134432, 49.885311 2.134003, 48.974635 2.1134567, 48.563433 2.572875"

### Données de type adresse

Ce type de champ permet de décrire l'adresse postale d'un équipement. Il est décomposé entre 3 champs permettant de distinguer et de faciliter le tri à l'intérieur des informations de voirie, de code postal et de commune. Le numéro et le nom de la voie sont séparés par une virgule.

#### Voie
* **Description** : ce type de champs permet de saisir le numéro et le nom de la voie
* **Type** : string
* **Exemple** : 34, rue de Latresne
* **Nommage** : abreviation-du-schemaVoie
#### Code postal ou Code INSEE
* **Description** : ce type de champs permet de saisir le code postal (ou le code INSEE) de la commune
* **Type** : number
* **Exemple** : 45800
* **Nommage** : abreviation-du-schemaCodePostal

#### Commune
* **Description** : ce type de champs permet de saisir le nom de la commune
* **Type** : string
* **Exemple** : Saint-Jean-de-Braye
* **Nommage** : abreviation-du-schemaCommune

## Recommandations de champs obligatoires

Afin d'unifier la description des données au travers des différentes thématiques abordées par le propositions de standard de données, **il est fortement recommandé de rendre obligatoire la présence d'un  certains nombre de champs**. Ceux-ci contribuent à la **portabilité des données** (qui produit la donnée) ou à **leur fiabilité** (quand a été produite la donnée)

### Identification du producteur

Pour l'identification des autorités publiques à l'origine de la production et de la publication des jeux de données, il est recommandé d'indiquer le nom et le numéro de siret sur chaque ligne de chaque jeu de données.

#### Nom de la collectivité
* **Description** : ce champs permet de saisir le nom de l'autorité publique responsable de la production des données
* **Type** : string
* **Exemple** : Conseil départemental de la Creuse
* **Nommage** : abreviation-du-schemaColl

Par exemple

    {
        "name": "menuCollNom",
        "title": "Nom de la collectivité qui produit les données",
        "description": "Nom officiel de la collectivité ou de l'établissement public responsable de l'offre de restauration collective et qui produit les données.",
        "type": "string",
        "examples": "Grand Poitiers Communauté urbaine",
        "constraints": {
            "required": true 
        }
    }

##### Siret de la collectivité
* **Description** : ce champ permet d'indiquer le numéro d'identification de l'autorité publique au sein de la base nationale des établissements.
* **Type** : string
* **Exemple** : 21330063500017
* **Motif** : ^\\d{14}$
* **Nommage** : nom-ou-abreviation-du-schemaCollSiret

Par exemple :

    {
        "name": "menuCollSiret",
        "title": "Code SIRET de la collectivité qui produit les données.",
        "description": "Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui commandé le menu. Ce code doit obligatoirement être composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.",
        "type": "string",
        "examples": "21330063500017",
        "constraints": {
            "required": true,
            "pattern":	"^\\d{14}$"
        }
    }

#### Horodatage des données

Pour faciliter la réutilisation et la mise à jour des données, il est recommandé de fournir aux réutilisatrices et réutilisateurs potentiels des date de première publication et de dernière modification pour chaque entité du jeu de données.

Ces informations au format Date avec horaire peuvent correspondre à la date de première publication et faire apparaître les dates de dernière modification pour l'ensemble des lignes ou en cas de mise à jour partielle pour une ligne de données particulière.

Il est également recommandé d'y associer un champ permettant de décrire la raison ayant entraîné une mise à jour des données depuis leur publication

##### Date de création/publication
* **Description** : ce champs permet de décrire la date de première publication de la donnée
* **Type** : datetime
* **Exemple** : 2020-05-11T14:08:32Z
* **Nommage** : nom-ou-abreviation-du-schemaPublicationDate

Par exemple : 

    {
        "name": "menuPublicationDate",
        "title": "Date de publication de l'enregistrement d'un menu",
        "description": "Lors de la publication ce champ d'horodatage permet d'indiquer la date de publication de la donnée présente dans le fichier.",
        "type": "datetime",
        "examples": "2020-05-11T14:08:32Z",
        "constraints": {
            "required": true
        }
    }

##### Date de dernière modification
* **Description** : ce champs permet de décrire la date de dernière modification de la donnée
* **Type** : datetime
* **Exemple** : 2020-05-11T14:08:32Z
* **Nommage** : nom-ou-abreviation-du-schemaModificationDate

Par exemple : 


    {
        "name": "menuModificationDate",
        "title": "Date de dernière modification de l'enregistrement d'un menu",
        "description": "Lors de la modification ce champ d'horodatage permet d'indiquer la date de dernière modification de la donnée présente dans le fichier.",
        "type": "datetime",
        "examples": "2020-05-11T14:08:32Z",
        "constraints": {
        "required": false
        }
    }

##### Information sur les modifications
* **Description** : ce champs permet de décrire la raison d'une modification de la donnée depuis sa publication initiale
* **Type** : string
* **Exemple** : changement dû à un aléa de livraison
* **Nommage** : nom-ou-abreviation-du-schemaModificationInfo

Par exemple : 

    {
        "name": "menuModificationInfo",
        "title": "Information sur la modification ayant entraîné une mise à jour de la donnée",
        "description": "Afin de renseigner les usagers de la donnée, il est possible de préciser dans ce champ la raison de la mise à jour effectuée.",
        "type": "string",
        "examples": "changement dû à un aléa de livraison",
        "constraints": {
            "required": false
        }
    }

## Recommandations pour le nommage des fichiers

Les fichiers doivent, sauf exception et autant que possible, respecter les règles de nommage suivantes :

**AAAAMMJJ_idProducteur_nom-du-fichier.extension**

- **AAAAMMJJ** : Date de création du fichier
- **idProducteur** : Numéro [SIREN](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_entreprises) sur 9 chiffres pour identifier le producteur
- **nom-du-fichier** Chaîne de caractères dont les termes, en minuscules non accentuées, sont séparés par un tiret du milieu
- **.extension** : Si les règles de formatage sont respectées, l'extension est .csv

Les 3 éléments constitutifs de la chaîne principale avant l'extension sont assemblés en un seul tenant et séparés par un tiret du bas.

* **Exemple** : '20180314_213502388_prenoms-nouveaux-nes-rennes-2017.csv'

## Recommnandations pour le nommage des champs

Afin d'uniformiser les fichiers produits dans le cadre de schémas de standardisation, il est recommande de normaliser les intitulés des champs composant chaque standard.

La règle générale préconisée est l'utilisation de l'écriture camelCase où chaque mot composant l'intitulé du champ est écrit avec une majuscule à l'exception du premier. En complément il est recommandé d'utiliser un préfixe (mot complet ou abréviation) pour l'ensemble des champs d'un standard. En conséquence pour le standard des menus les intitulés des champs sont préfixés par le mot menu suivi des intitulés à proprement dit. Par exemple : 

- menuCollNom
- menuRestaurantIdType
- menuRepasType

Aucun caractère accentué ou spécial ne doit être utilisé dans l'intitulé d'un champ. Il est également préconisé de ne pas dépasser 50 caractères pour l'intitulé d'un champ et d'utiliser le singulier pour les mots composant l'intitulé du champ.


## Recommandations pour la mise en conformité

Pour garantir la conformité des jeux de données, il est demandé aux producteurs de s'assurer que la structure, les champs et les contenus attendus sont effectivement respectés.

De fait, les fichiers tabulaires doivent, autant que possible, contenir :

- **Toutes les colonnes**, y compris celles dont les cellules ne sont pas renseignées, dans le bon ordre, et avec des en-têtes correctement nommées sur la première ligne
- **Autant de lignes que nécessaire** comprenant des cellules dont les valeurs peuvent être **obligatoires** \(elles doivent être impérativement renseignées\) ou **optionnelles** \(elles sont seulement recommandées ou soumises à condition de disponibilité / pertinence\)
