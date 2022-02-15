# Adresse

## Introduction

::: tip Les ressources existantes
Si vous êtes familiers des APIs vous pouvez directement vous référer à : 
- La documentation générale autour de l'adresse <https://doc.adresse.data.gouv.fr>
- La documentation de l'API Adresse <https://adresse.data.gouv.fr/api-doc/adresse>
:::

L'objet de ce guide est de compléter la documentation existante par des ressources pratiques pour apprendre à utiliser l'API. 

## Principes du géocodage

### Rappels

> Le géocodage consiste à affecter des coordonnées géographiques (longitude/latitude) à une adresse postale ([Wikipédia](https://fr.wikipedia.org/wiki/G%C3%A9ocodage))

Il permet ainsi depuis des adresses de les positionner sur une carte. Il permet aussi lorsque vous voyagez à trouver les points de départ et d'arrivée pour déterminer votre trajet.

Pour cela, il est nécessaire d'avoir

- des données de référence contenant numéro, nom de rue, code INSEE, code postal, nom de commune ainsi que des coordonnées géographiques x et y qui sont généralement la longitude pour le x et la latitude pour le y.
- une entrée correspondant à l'adresse recherchée

#### A propos des données de référence

Les données textuelles de l'adresse de référence ne sont pas toujours uniformes. Par exemple, "rue" peut être représenté par les lettres "r" ou "R" ou "rue" ou "Rue". Il faut donc déjà aligner les différentes manières de décrire le type de voie. Il fut aussi lorsqu'on compare omettre les articles lors d'une comparaison. Au lieu de chercher "rue des métanies", on cherchera "rue métanies".

Concernant les positions x, y avec une précision plus ou moins grande. On peut ainsi avoir uniquement le centroïde de la commune, de la voie. On a aussi les centroides des lieux-dits qui sont un cas particulier dans l'adresse, ne respectant pas le classique "numéro, nom de rue, code INSEE, code postal, nom de commune".
Dans certains cas, les coordonnées d'une adresse sont interpolées: on a pris une rue faisant 500m dont on sait qu'elle commence au numéro 1 et finit au numéro 26. On a 20m entre les numéros (500 / (26 - 1)). Le numéro 10 sera théoriquement à 180m le long de la rue en partant du numéro 1.

#### Comment opère un géocodeur

Un géocodeur va transformer la donnée textuelle des données de référence en utilisant des algorithmes qui séparent l'adresse en syllabes, mots et groupes de mots. On indexe ces différents éléments. Ensuite, avec des algorithmes relatifs à du traitement textuel, le géocodeur pourra comparer la similarité entre les mots constituants l'adresse à rechercher et ceux qui sont indexés depuis les données de référence. Un algorithme permet généralement d'ordonner les résultats: on veut que lorsque plusieurs résultats sont proposés, les plus proches de coordonnées fixes soit les premiers ou bien que ce soit ceux dont la population est la plus forte. On peut aussi filtrer selon des critères comme le pays si le géocodeur a une vocation internationale, comme par exemple [Nominatim](https://nominatim.openstreetmap.org) ou bien par type de résultat. Dans les faits, un certain nombre de géocodeurs cherchent à gérer de la recherche de communes, de POIs (Points Of Interest ou points d'intérêts) et pas seulement des adresses

Un géocodeur est capable de faire du géocodage dit inverse c'est à dire qu'en envoyant des coordonnées, celui-ci retourne une adresse. Pour que cela fonctionne, la principale condition est de trouver la donnée de référence la plus proche des coordonnées envoyées. Ceci est généralement réalisé avec un index spatial qui accélère la recherche des points les plus proches des coordonnées x, y en entrée.


### Limites du géocodage

Nous allons nous concentrer sur les cas liés aux géocodages sur des adresses, le géocodeur utilisé par <https://adresse.data.gouv.fr> étant ciblé spécifiquement pour ce besoin.

- **Plusieurs communes pour un code postal**. Cela pose problème par exemple si on omet le nom de la commune dans une adresse. On a 68,9% des codes postaux associés à plus d'une commune et on a jusqu'à 46 communes rattachées à un même code postal.

- **Plusieurs codes postaux pour un commune**. 1.5% des communes ont plus d'un seul code postal sur leur territoire. On a pour le cas le plus extrême 9 codes postaux pour une même commune.

- **Des communes ont des noms identiques**. 10.6% des communes ont une ou plusieurs communes homonymes.

- **Des codes postaux n'ont pas le même code que celui du département**. Ce sont des cas très rares: quelques dizaines.

- **Plusieurs noms de voie avec un nom identique situés à différents endroits pour une seule commune**. Cela peut être réglé soit en ajoutant le nom de la commune déléguée dans l'adresse postale, soit en renumérotant les rues, soit en renommant. La limite est que les géocodeurs ne gèrent pas forcément bien voire pas du tout l'usage de l'ajout de l'adresse de la commune déléguée. Cette situation s'explique en particulier avec la création des communes nouvelles qui a encouragé le regroupement de communes.

- **Plusieurs coordonnées pour une même adresse**:
  - des différences liées à la vision sur la position du numéro de l'adresse: entrée principale, boîte aux lettres, bâtiment, cage d’escalier, logement, parcelle, position dérivée du segment de la voie de rattachement, point d’accès technique
  - des référentiels différents selon les acteurs même si la BAN (Base Adresse Nationale) et les BAL (Bases Adresses Locales) amènent à une amélioration et une uniformisation des réferentiels: données héritées de la Poste, de l'IGN, du cadastre, de OpenStreetMap, des opérateurs réseaux (fibre,...)

### Debugger pour savoir à qui s'adresser quand une recherche d'adresse ne fonctionne pas

Souvent, Etalab est sollicité sur des questions d'adresse car historiquement, il portait le projet de la BAN (Base Adresse Nationale), en cours de reprise par l'IGN.

Voilà une recette pour comprendre pourquoi une adresse n'apparait pas ou est "mal" placée.

Dans un premier temps, il faut comprendre comment la BAN est constituée. La donnée adresse qui la compose est soit:

- issue de données provenant d'acteurs historiques de l'adresse (IGN, Cadastre,...)
- issue des BAL (Bases Adresses Locales) qui sont l'inventaires des adresses créé par les communes

A terme, ces dernières devraient devenir la seule source. La commune doit certifier ces adresses c'est à dire valider que les adresses saisies sont justes.

L'image ci-dessous résume la situation pour consolider les données adresse

![](./images/schema-donnees-ban.svg)

Après avoir compris comment les données adresse étaient créés, il fauut comprendre comment on accède aux données. On peut soit directement récupérer les données mais c'est pour des utilisateurs avancés et nous allons volontairement omettre ce cas, soit passer par l'API de recherche. Cette API peut rechercher des adresses soit via un appel unique par adresse soit en mode "batch", c'est à dire où l'on passe un fichier avec une liste d'adresse, une par ligne et on retourne la première adresse retournée pour chacun des lignes.

Après avoir posée ces quelques bases, nous allons entrer dans des scénarios pratiques.

L'adresse n'est pas trouvée: comprendre ce qui peut l'expliquer

- vérifier en utilisant l'autocomplétion sur <https://adresse.data.gouv.fr/base-adresse-nationale#4.4/46.9/1.7>
  - tapez vote adresse. Par exemple, "20 Avenue de Ségur". Si dans les résultats vous voyez que le numéro est bien proposé et que la commune est la bonne pour le premier résultat, c'est la manière dont vous avez récupéré l'adresse qui est en cause. Si vous êtes en mode "batch", la première adresse retournée peut être mauvaise et c'est la 2ème ou 3ème adresse que vous attendiez.
  - imaginons que vous pensiez que le numéro existe mais ne le trouvez pas dans votre résultat de géocodage. Essayez alors de trouver la rue. Essayons "87 avenue de Ségur". On ne voit que des rues qui sont retournées suite à la recherche. Cliquez sur la rue qui semble correspondre à votre recherche. Cela va zoomer. Vous allez pouvoir voir s'il y a des adresses et lesquelles sont inventoriées.

- la donnée de référence n'est pas présente: c'est un oubli ou personne ne l'a encore produite
- le résultat est une adresse BAL. Votre commune est entrée dans une démarche de recensement et valorisation de ces adresses. Vous pouvez confirmer si l'adresse existe en allant sur <https://adresse.data.gouv.fr/deploiement-bal>. Zoomez sur la carte pour trouvez votre commune ou l'organisme qui porte votre BAL, par exemple un intercommunalité. Cliquez sur le polygone. Allons par exemple à [la communauté d'agglomération Arles Crau Camargue Montagnette](https://adresse.data.gouv.fr/bases-locales/jeux-de-donnees/601402f5818a575b16081fe3) Descendons et recherchons une commune puis cliquons dessus, par exemple [Arles](https://adresse.data.gouv.fr/base-adresse-nationale/13004) On peut maintenant chercher par nom de voie ou lieu dit pour vérifier que la voie existe. Prenons [l'allée des Manades](https://adresse.data.gouv.fr/base-adresse-nationale/13004_2865#15.05/43.66235/4.6205) Nous pouvons ensuite vérifier dans la liste l'existence du numéro.

- adresse IGN vs adresse cadastre vs adresse BAL

- la donnée est présente mais les termes de recherche ne permettent pas de la trouver

Vous êtes un particulier, vous pouvez récupérez les coordonnées de votre commune pour lui faire part de vos retours en passant par <https://adresse.data.gouv.fr/contribuer> puis en cherchant votre commune.

     Base Adresse Locale sur le territoire de la communauté d'agglomération ACCM 


## Usages

Ils sont de 2 natures principalement:

- trouver par un formulaire une adresse pour la corriger et/ou récupérer des coordonnées en ayant une liste de choix pour trouver le résultat: c'est l'autocomplétion
- fournir un fichier tabulaire pour obtenir en retour une version enrichie des coordonnées et d'autres informations

### Autocomplétion

Vous avez-besoin de faire de l'auto-complétion dans un outil web?

Il existe plusieurs solutions pour cela. Vous pouvez vous appuyer sur de nombreueses bibliothèques. Elles sont généralement liées à des bibliothèques cartographiques

#### Solutions basées sur Leaflet

- <https://github.com/entrepreneur-interet-general/leaflet-geocoder-ban>
- <https://github.com/komoot/leaflet.photon>

**Exemples**:

- <https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo_control.html>
- <https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo_search_bar.html>
- <https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-leaflet-photon.html>

#### Solutions basées sur OpenLayers

- <https://github.com/webgeodatavore/photon-geocoder-autocomplete>
- <https://viglino.github.io/ol-ext/examples/search/map.control.searchban.html>

**Exemples**:

- <https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-ol.html>

#### Solutions indépendantes de bibliothèques cartographiques

- <https://github.com/webgeodatavore/photon-geocoder-autocomplete>

**Exemples**:

- [Exemple avec Maplibre mais non lié à Maplibre](https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-maplibre.html)
- [Exemple avec OpenLayers mais non lié à OpenLayers](https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-openlayers.html)
- [Formulaire exemple 1](https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-no-map.html)
- [Formulaire exemple 2](https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-form-only-alternate.html)


### Géocodage par adresse unitaire

Avec Python, pour faire des appels unitaires, vous pouvez utilisez [le code de ce script](https://gist.githubusercontent.com/ThomasG77/32329a8557135f11cb5656e3bfd4d35c/raw/9bd7883be31d2c9758d4393d72e9dc1ae4c5bed3/geocode-addok-unit-call.py)

En JavaScript, vous pouvez utiliser les exemples de <https://addok.readthedocs.io/en/latest/examples/#using-javascript-client-side> selon si c'est un usage côté navigateur ou côté serveur (Node.js/deno)

### Géocodage massif

Lorsqu'on choisit cette option, on privilégie l'appel par le endpoint CSV de l'API. Il faut préalablement s'assurer que son CSV est bien formaté. En effet, il s'avère que le géocodage peut ponctuellement dysfonctionner si le CSV n'est pas bien formaté.

### Option manuelle

Il existe une interface graphique pour envoyer des fichiers CSV sur <https://adresse.data.gouv.fr/csv> dont la taille maximum est de 50Mo. Pour tester, téléchargeons [le fichier exemple](https://gist.githubusercontent.com/ThomasG77/32329a8557135f11cb5656e3bfd4d35c/raw/9bd7883be31d2c9758d4393d72e9dc1ae4c5bed3/annuaire-des-debits-de-tabac-2018-utf8-20lines.csv) puis suivez l'exemple en utilisant le GIF animé ci-dessous.

![](./images/geocodage-csv-manuel.gif)

### Python seul

- solution partant d'appels unitaires plutôt que des appels CSV <https://github.com/MTES-MCT/bulk-geocoding-python-client>
- solution partant d'appels à l'API CSV. Il suffit de récupérer [le zip](https://gist.github.com/ThomasG77/32329a8557135f11cb5656e3bfd4d35c/archive/3681bd0c070540abfdae55e6ff0bf9a41795cf42.zip), de décompresser le fichier. Ensuite, il vous suffit de lancer le script Python avec `python chunk-csv-python.py`. Cela permettra de faire l'appel vers l'API CSV soit en une fois, soit en plusieurs phases. On obtiendra ainsi le fichier `annuaire-des-debits-de-tabac-2018-utf8-20lines.geocoded.csv` qui est la version géocodée par l'API CSV d'un fichier de 20 lignes ainsi que `myresults.csv` qui est une version qui résulte d'une phase de découpage d'un gros fichier en plusieurs morceaux, d'appels à l'API CSV à partir de chacun de ces fichiers, puis du réassemblage des fichiers ainsi retournés. Vous n'avez plus qu'à adapter le code du fichier `chunk-csv-python.py`.

#### JavaScript

- Geocodage massif avec une solution en ligne de commande utilisant Node.js <https://github.com/jdesboeufs/addok-geocode-stream>

### Autres outils utilisant la BAN

Vous faites du SIG, néophyte comme expert et utilisez le logiciel SIG QGIS?

- Recherchez des adresses <https://oslandia.gitlab.io/qgis/french_locator_filter/>
- Géocodez des tables depuis une table dans QGIS QBano <https://www.data.gouv.fr/en/reuses/plugin-experimental-qbano-pour-qgis/>. A ce jour, le plugin est mal maintenu, il faut mieux récupérer [ce zip](https://labs.webgeodatavore.com/partage/QBano.zip) puis installer le plugin depuis celui-ci.
- Avec PyQGIS, vous pouvez aussi géocoder en partant de <https://gis.stackexchange.com/a/395415/638>

Vous utilisez d'autres outils?

- Vous faites du R? <https://cran.r-project.org/web/packages/banR/index.html>
- Vous souhaitez intégrer la recherche dans le CMS SPIP? <http://plugins.spip.net/gisban.html>

## Gros consommateurs de l'API api-adresse.data.gouv.fr?

Si vous êtes un organisme public, vous pouvez faire une demande pour augmenter les quotas par défaut sur l'API publique api-adresse.data.gouv.fr

Si ce n'est pas le cas, vous pouvez vous auto-héberger. Dans ce cas, le plus simple est de passer par l'utilisation de Docker

- <https://github.com/etalab/addok-docker#readme>

Il est possible aussi de regarder du côté de Addok, le logiciel open-source derrière l'API Adresse si vous avez des besoins plus spécifiques au niveau de votre installation ou de la personnalisation de la recherche.

- <https://github.com/addok/addok>

## Géocodeurs alternatifs

Même si nous avons abordé l'usage du géocodeur Addok, utilisé par adresse.data.gouv.fr, il existe d'autres possibilités pour géocoder. Leurs principaux intérêts sont de pouvoir chercher des POIs comme par exemple un centre commercial ou une enseigne ainsi que de marcher sur des données internationales, contrairement à [l'instance publique de Addok](https://adresse.data.gouv.fr/api-doc/adresse).

Vous pouvez ainsi installer des solutions OpenSource comme celles ci-dessous

- [Pelias](https://github.com/pelias/pelias)
- [Photon](https://github.com/komoot/photon)
- [Nominatim](https://github.com/osm-search/Nominatim)

Il est aussi possible de détourner Addok pour lui faire effectuer d'autres types de recherche, par exemple des POIs en utilisant le projet <https://github.com/osm-fr/osmpoi4addok> par exemple

En dernier lieu, vous pouvez aussi vous appuyez sur les services mis à disposition par l'IGN pour le géocodage <https://geoservices.ign.fr/services-web-experts-calcul> (voir les sections "Services de géocodage" et "Service de recherche Look4"). Vous pouvez aussi regardez [leur nouveau service de géocodage](https://geoservices.ign.fr/documentation/services/services-beta/nouveau-service-de-geocodage-demonstrateur)
