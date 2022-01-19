# API découpage administratif

## Les usages

Il existe plusieurs usages lorsqu'on veut les données administratives françaises. On peut selon le cas, vouloir les infos
- à des échelles différentes (communes, départements, régions),
- des années différentes (notion de millésime)

La manière de consommer la donnée peut varier. On peut avoir besoin de plusieurs communes, de rechercher dans un formulaire. L'API Découpage Administratif est principalement destinée à un besoin de recherches pour des formulaires en partant du nom de la commune, du code postal ou bien du code INSEE. Les usages départements ou régions bien que pratiquent semblent moins intéressant car les données ne changent quasiment jamais dans le temps et le nombre limités d'éléments fait qu'il est possible de gérer ces informations côté client.

## Utilisation de l'API dans un site web

Faire de l'auto-complétion depuis l'API soit pour remplir un formulaire, soit pour zoomer sur la commune trouvée dans un contexte web

- <http://bl.ocks.org/ThomasG77/0b99013795f76699c5c9a0d7daf4411e>

La partie importante se base sur un simple [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)


Il est aussi possible de remplir les informations de coordonnées dans un tableur comme Libre Office <https://medium.com/@ThomasG77/api-et-g%C3%A9ocodage-dans-libre-office-calc-488ab78dc360>

## Rappels des exemples officiels

Pour des usages plus spécifiques, vous pouvez utiliser [les exemples de la documentation officielle](https://geo.api.gouv.fr/decoupage-administratif)

On peut reprendre les plus notables ici:

Par communes

- Recherche par code postal <https://geo.api.gouv.fr/communes?codePostal=78000>
- Recherche par code INSEE <https://geo.api.gouv.fr/communes?code=44109>
- Recherche par nom <https://geo.api.gouv.fr/communes?nom=Nantes&boost=population&limit=5> (on ajoute un boost par population pour que la plus grand commune soit privilégiée)
- Par coordonnées <https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568>
- Filtrer par département pour éviter les problèmes liés à l'homonymie de commune, par exemple la commune de Saint-Aubin existe dans les départements 10, 21, 36, 39, 40, 47, 59, 62, 91 et 02 <https://geo.api.gouv.fr/communes?nom=Saint-Aubin&codeDepartement=21>
- Obtenir toutes les communes d'un département <https://geo.api.gouv.fr/departements/44/communes>
- Obtenir toutes les communes d'une région <https://geo.api.gouv.fr/communes?codeRegion=84>

Tous les exemples ci-dessus ne filtrent pas les champs, ne permettent pas de choisir si on veut des géométries pour les communes: soit le centre, au sens mathématique, de la commune, soit son contour, ni ne permettent pas le choix de la sérialisation: pour la cartographie, généralement, on utilise un JSON spécifique dit GeoJSON pour cela. La meilleure manière de comprendre comment cela fonctionne est d'utiliser la démo recherche avancée de la documentation officielle https://geo.api.gouv.fr/decoupage-administratif/communes#advanced Elle permet en cochant de voir comment l'URL d'appel change en particulier l'option `fields` pour ne retourner que les colonnes/champs nécessaires.

Ce qu'il faut retenir pour les aspects géo,

- si on veut les GeoJSON avec le centre de la commune, rajouter aux urls de la première partie `&format=geojson&geometry=centre` si votre URL contient déjà un `?` sinon il faut ajouter plutôt `?format=geojson&geometry=centre`
- si on veut les GeoJSON avec le contour de la commune, rajouter aux urls de la première partie `&format=geojson&geometry=contour` si votre URL contient déjà un `?` sinon il faut ajouter plutôt `?format=geojson&geometry=contour`

Un exemple pour illustrer

<https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568>

devient soit

- centre <https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568&format=geojson&geometry=centre>
- contour <https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568&format=geojson&geometry=contour>
Il faut aussi penser à mettre en cache quand on a des appels lourds qui ne changent pas ou qu'on retourne des contours. Ainsi, on a :

Sans contour, la réponse fait 480Ko <https://geo.api.gouv.fr/communes?codeRegion=84>
Avec contour, la réponse fait 34Mo <https://geo.api.gouv.fr/communes?codeRegion=84&format=geojson&geometry=contour>

Vous pouvez très bien sauvegarder dans un fichier le résultat des URLs ci-dessus car le résultat ne va pas changer en permanence car ce n'est pas de l'autocomplétion.

Exemples régions et départements

Le principal intérêt est la correspondance entre un nom et un code. Si on veut le code d'un département ou d'une région, on prend:

- pour la région <https://geo.api.gouv.fr/regions?nom=Auvergne>
- pour le département <https://geo.api.gouv.fr/departements?nom=Loire%20Atl>


Nous ne détaillons pas plus les cas départements et régions car ils fonctionnent comme les communes mais surtout ils ne changent presque pas. Il est souvent envisageable d'avoir les fichiers globaux JSON plutôt que passer par des appels API. On a ainsi sous forme JSON (sans géométrie):

- les départements <https://unpkg.com/@etalab/decoupage-administratif/data/departements.json>
- les régions <https://unpkg.com/@etalab/decoupage-administratif/data/regions.json>


## Les sources alternatives pour les communes

### Look4 de l'IGN

Pour l'autocompletion, il est possible de passer par l'API de l'IGN dite Look4. Elle ne parait pas correspondre à un besoin communal générique car on peut filtrer les résultats de recherche par type mais une on ne peut pas cumuler les filtres. Il s'avère qu'une commune simple à une `nature` à `Commune` mais que pour une commune qui est une préfecture de région la `nature` est `Préfecture de région`. On a aussi `Préfecture`, `Sous-préfecture`, `Capitale d'état`.

**Exemples**

Recherche avec le texte commençant par `nan` (méthode `prefix`) et filtrage par `Commune`

<https://wxs.ign.fr/calcul/look4/user/search?indices=locating&method=prefix&types=address%2Cposition%2Ctoponyme%2Cw3w&nb=5&match%5Bfulltext%5D=nan&filter[fields][nature]=Commune>

Recherche avec le texte contenant `nan` (méthode `fuzzy`) et filtrage par `Commune`

<https://wxs.ign.fr/calcul/look4/user/search?indices=locating&method=fuzzy&types=address%2Cposition%2Ctoponyme%2Cw3w&nb=5&match%5Bfulltext%5D=nan&filter[fields][nature]=Commune>

Recherche avec le texte contenant `nan` (méthode `fuzzy`) et filtrage par `Préfecture de région`

<https://wxs.ign.fr/calcul/look4/user/search?indices=locating&method=fuzzy&types=address%2Cposition%2Ctoponyme%2Cw3w&nb=5&match%5Bfulltext%5D=nantes&filter[fields][nature]=Pr%C3%A9fecture%20de%20r%C3%A9gion>

Il est possible de se passer de l'option de filtre mais on sera alors sur une recherche se rapprochant de celle de la BAN: le résultat pourra être une commune, une adresse, un lieu-dit.

C'est ce que montre l'exemple ci-dessous

<https://wxs.ign.fr/calcul/look4/user/search?indices=locating&method=fuzzy&types=address%2Cposition%2Ctoponyme%2Cw3w&nb=5&match%5Bfulltext%5D=nan>


### Utiliser le WFS de l'IGN

Un WFS est un service web qui est basé sur une inspiration SOAP. Il est basé sur une approche en XML. Si vous avez besoin d'avoir toutes les communes, il est plutôt recommandé de récupérer les données brutes depuis Admin Express.

Même si le WFS peut retourner du GML généralement, du XML, il peut aussi retourner du JSON. Pour mieux comprendre les retours JSON, nous vous conseillons d'installer ce plugin https://jsonview.com/

#### Lister les couches d'un endpoint WFS

Dans le navigateur, peu lisible car XML avec un "GetCapabilities"

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=GetCapabilities&VERSION=2.0.0>

Avec GDAL

```
ogrinfo -so WFS:https://wxs.ign.fr/administratif/geoportail/wfs
```

Dans QGIS, allez dans le menu "Couches" puis "Ajouter une couche", choisir "Ajouter une couche WFS" puis faire "Nouveau" puis dans la nouvelle fenêtre renseignez le nom à `IGN Administratif` et l'URL à `https://wxs.ign.fr/administratif/geoportail/wfs` puis faire "OK". Ensuite, sélectionner le service "IGN Administratif" puis faire "Connexion" pour avoir la liste des couches. Il est possible de filtrer. Pour pouvez voir comment avec le GIF ci-dessous.

![](./images/ajout-wfs-ign-optimized.gif)

Ensuite, vous pouvez ajoutez la couche de manière optionnelle. Il est recommandé de bien zoomer avant d'ajouter la couche pour éviter de récupérer la couche sur l'ensemble de la France, QGIS récupérant les données sur l'étendue du canevas de carte. Dans le cas contraire, même avec une bonne connexion, vous risquez de devoir attendre plusieurs minutes.

#### Trouver la structure du WFS

Pourquoi c'est important? Parce que pour pouvoir filtrer, vous pouvez soit utiliser des filtres qui jouent sur les attributs soit sur des propriétés spatiales. Il faut donc connaître le nom des champs. Il faut aussi potentiellement connaitre le nom de la colonne contenant la géométrie pour pouvoir effectuer les requêtes spatiales.

On part dans cet exemple de la couche `ADMINEXPRESS-COG.LATEST:commune`

Dans le navigateur, copiez l'URL

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=DescribeFeatureType&VERSION=2.0.0&TYPENAMES=ADMINEXPRESS-COG.LATEST:commune&outputFormat=application/json>

Avec GDAL, en ligne de commande

```
ogrinfo -so -noextent WFS:https://wxs.ign.fr/administratif/geoportail/wfs "ADMINEXPRESS-COG.LATEST:commune"
```

Pour filtrer sur une commune par son code insee

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=ADMINEXPRESS-COG.LATEST:commune&TYPENAME=ADMINEXPRESS-COG.LATEST:commune&STARTINDEX=0&COUNT=100&SRSNAME=urn:ogc:def:crs:EPSG::4326&cql_filter=insee_com%3D%2744109%27>

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=ADMINEXPRESS-COG.LATEST:commune&TYPENAME=ADMINEXPRESS-COG.LATEST:commune&STARTINDEX=0&COUNT=100&SRSNAME=urn:ogc:def:crs:EPSG::4326&cql_filter=insee_com%3D%2744109%27&propertyname=id,nom,nom_m,insee_com,statut,population,insee_can,insee_arr,insee_dep,insee_reg,siren_epci,the_geom>

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=ADMINEXPRESS-COG.LATEST:commune&TYPENAME=ADMINEXPRESS-COG.LATEST:commune&STARTINDEX=0&COUNT=100&SRSNAME=urn:ogc:def:crs:EPSG::4326&cql_filter=insee_com%3D%2744109%27&propertyname=id,nom,nom_m,insee_com,statut,population,insee_can,insee_arr,insee_dep,insee_reg,siren_epci,the_geom&outputFormat=application/json>

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=ADMINEXPRESS-COG.LATEST:commune&TYPENAME=ADMINEXPRESS-COG.LATEST:commune&STARTINDEX=0&COUNT=100&SRSNAME=urn:ogc:def:crs:EPSG::4326&cql_filter=insee_com%3D%2744109%27&propertyname=id,nom,nom_m,insee_com,statut,population,insee_can,insee_arr,insee_dep,insee_reg,siren_epci&outputFormat=application/json>

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&request=DescribeFeatureType&TYPENAMES=ADMINEXPRESS-COG.LATEST:commune&outputFormat=application/json>

Pourquoi ne pas passer par le WFS pour de l'autocomplétion? Parce que cela demeure nettement plus lent qu'une API dédiée car il n'y a pas d'index spécifiques pour cet usage.

```bash
# Voir la performance
time ogrinfo -so WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql 'SELECT * FROM "ADMINEXPRESS-COG.LATEST:commune" LIMIT 1'

# Tester la requête pour avoir les communes par département
ogrinfo -so WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_dep = '44'"

# Obtenir les données France
# Lent, nécessite une pagination plus faible que celle par défaut, 1000, sinon timeout
ogr2ogr --debug on \
        -f FlatGeobuf \
        --config OGR_WFS_PAGING_ALLOWED ON \
        --config OGR_WFS_PAGE_SIZE 250 \
        communes.fgb \
        WFS:https://wxs.ign.fr/administratif/geoportail/wfs \
        "ADMINEXPRESS-COG.LATEST:commune"

# Filtrer les communes pour une région (Auvergne-Rhone-Alpes, code 84)
ogr2ogr -f GPKG mes_communes.gpkg WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_reg = '84'" -nln communes_84

# Filtrer les communes pour un département
ogr2ogr -f GeoJSON communes-44.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_dep = '44'" -lco RFC7946=YES

# Filtrer les communes pour plusieurs départements
ogr2ogr -f GeoJSON communes-44-35.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_dep IN ('44', '35')" -lco RFC7946=YES

# Obtenir la commune par code commune INSEE sous forme CSV
ogr2ogr -f CSV commune-44109.csv WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_com = '44109'"

# Obtenir les communes de France dont la population est supérieure à 100 000 habitants
ogr2ogr -f GeoJSON communes-population-100000.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE population >= 100000"

# Obtenir les 100 premières communes de France par population
<!-- ogr2ogr -f GeoJSON communes-100-plus-grandes.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs?VERSION2.0.0&MAXFEATURES=100&sortBy=population%20DESC -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE population >= 20000" -->
ogr2ogr --config OGR_WFS_PAGING_ALLOWED NO --debug on -f GeoJSON communes-100-plus-grandes.geojson WFS:"https://wxs.ign.fr/administratif/geoportail/wfs?VERSION=2.0.0&COUNT=100&sortBy=population%20DESC" -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\""

ogr2ogr --config OGR_WFS_PAGING_ALLOWED NO --debug on -f GeoJSON communes-100-plus-grandes.geojson WFS:"https://wxs.ign.fr/administratif/geoportail/wfs?VERSION=2.0.0&COUNT=100&sortBy=population%20DESC" -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE population >= 20000"

# Obtenir la commune par code commune INSEE sous forme GeoJSON
ogr2ogr -f GeoJSON commune-44109.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_com = '44109'" -lco RFC7946=YES

# Obtenir la commune qui contient le point de longitude -1.54241 et latitude 47.21791 sous forme GeoJSON
ogr2ogr -f GeoJSON commune-44109-from-geom.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE ST_Contains(ST_GeomFromText('POINT(-1.54241 47.21791)', 'EPSG:4326'), the_geom)"  -lco RFC7946=YES

# Obtenir l'EPCI qui contient le point de longitude -1.54241 et latitude 47.21791 sous forme CSV
ogr2ogr -f CSV epci-with-44109-from-geom.csv WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:epci\" WHERE ST_Contains(ST_GeomFromText('POINT(-1.54241 47.21791)', 'EPSG:4326'), the_geom)"

# Obtenir l'EPCI qui contient le point de longitude -1.54241 et latitude 47.21791 sous forme SHP
ogr2ogr -f GeoJSON epci-with-44109-from-geom.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:epci\" WHERE ST_Contains(ST_GeomFromText('POINT(-1.54241 47.21791)', 'EPSG:4326'), the_geom)" -lco RFC7946=YES

# Obtenir le code de l'EPCI depuis le CSV précédemment récupéré
cat epci-with-44109-from-geom.csv

# Obtenir les communes de l'EPCI grâce au code Siren de l'EPCI
ogr2ogr -f GeoJSON communes-epci-with-44109.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE siren_epci = '244400404'"

# Filtrer par étendue. Ici les communes du lac du Bourget en Savoie
# Facile avec https://boundingbox.klokantech.com/ puis choisir CSV (attention à enlever les virgules)
ogr2ogr -f GeoJSON communes-lac-du-bourget-bbox.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs "ADMINEXPRESS-COG.LATEST:commune" -spat 5.802869 45.62822 5.909985 45.813262

# Ensuite le lac lui-même
# Dessiner sur http://geojson.io/#map=11/45.7378/5.8228 puis faire "Save" > "WKT" et ouvrez le contenu
# Warning: selon les services, le nom de la colonne géométrie peut changer (ici on a `geometrie` alors que jusqu'à maintenant, c'était `the_geom`...)
ogrinfo -so -noextent WFS:https://wxs.ign.fr/topographie/geoportail/wfs "BDTOPO_V3:plan_d_eau"

ogr2ogr -f GeoJSON lac-du-bourget.geojson WFS:https://wxs.ign.fr/topographie/geoportail/wfs -sql "SELECT * FROM \"BDTOPO_V3:plan_d_eau\" WHERE ST_Within(ST_GeomFromText('POLYGON ((5.8536529541015625 45.80487122128867, 5.832366943359374 45.81252930977015, 5.8138275146484375 45.80917902561322, 5.810394287109375 45.79625461321962, 5.820693969726562 45.76800194433285, 5.84197998046875 45.73542178642972, 5.8495330810546875 45.69802700880466, 5.851593017578125 45.66780526567164, 5.855712890625 45.647168352432715, 5.8797454833984375 45.64332808758249, 5.8948516845703125 45.64908838613599, 5.901031494140625 45.6658858736546, 5.9003448486328125 45.68795490838444, 5.889358520507812 45.70042486059141, 5.896224975585937 45.71337148333104, 5.887298583984375 45.72823242650626, 5.9003448486328125 45.735901044186406, 5.8783721923828125 45.76129581948936, 5.8536529541015625 45.80487122128867))', 'EPSG:4326'), geometrie)"
```

### Passer par les fichiers Admin Express

Historiquement, il existait un produit nommé Geofla pour avoir les communes qui a été depuis remplacé par un nouveau jeu de données dit Admin-Express qui contient les données suivantes

- DEPARTEMENT (Polygon)
- COMMUNE_ASSOCIEE_OU_DELEGUEE (Polygon)
- COMMUNE (Polygon)
- COLLECTIVITE_TERRITORIALE (Polygon)
- ARRONDISSEMENT_MUNICIPAL (Polygon)
- EPCI (Polygon)
- REGION (Polygon)
- CANTON (Polygon)
- CHFLIEU_COMMUNE_ASSOCIEE_OU_DELEGUEE (Point)
- CHFLIEU_COMMUNE (Point)
- CHFLIEU_ARRONDISSEMENT_MUNICIPAL (Point)
- ARRONDISSEMENT (Polygon)

Il existe des différences entre les produits Admin-Express, nous vous invitons à consulter cet [article résumant ces différences](https://geoservices.ign.fr/admin-express-passe-la-grande-echelle)

L'autre piège lors de la récupération de ces données est de prendre les données dans les bonnes projections


- [Emplacement du jeu de données officiel](https://geoservices.ign.fr/adminexpress)

### API métadonnées et API INSEE RDF

## FAQ

De la longueur des noms de commune https://twitter.com/JulesGrandin/status/1448563444601532422

La normalisation des noms de communes
https://www.collectivites-locales.gouv.fr/sites/default/files/Accueil/Notes%20de%20la%20DGCL/2021/Instruction%20des%20demandes%20de%20changement%20de%20nom%20des%20communes.pdf
