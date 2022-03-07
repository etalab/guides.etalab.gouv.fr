# API découpage administratif

## Pourquoi utiliser l’API découpage administratif ?

L’API découpage administratif permet d’obtenir des données administratives française comme : 
- à des échelles différentes (communes, départements, régions),
- des années différentes (notion de millésime)

L'API Découpage Administratif est principalement destinée à un besoin de recherches pour des formulaires en partant du nom de la commune, du code postal ou bien du code INSEE. 

Les usages départements ou régions bien que pratiquent semblent moins intéressant car les données ne changent quasiment jamais dans le temps et le nombre limités d'éléments fait qu'il est possible de gérer ces informations côté client.

## Utilisation de l'API dans un site web

L’API est très utile pour permettre de faire **l'auto-complétion** qu’il s’agisse d’un formulaire ou pour permettre de zoomer sur une commune trouvée dans un contexte web

- [http://bl.ocks.org/ThomasG77/0b99013795f76699c5c9a0d7daf4411e](http://bl.ocks.org/ThomasG77/0b99013795f76699c5c9a0d7daf4411e)

La partie importante se base sur un simple [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

Il est aussi possible de [remplir les informations de coordonnées dans un tableur comme Libre Office](https://medium.com/@ThomasG77/api-et-g%C3%A9ocodage-dans-libre-office-calc-488ab78dc360)

## Rappels des exemples officiels
Nous présentons ici les exemples les plus courants. Pour des usages plus spécifiques, vous pouvez utiliser [les exemples de la documentation officielle](https://geo.api.gouv.fr/decoupage-administratif)

### Utilisation de l’API pour récupérer des communes
- Recherche par code postal <https://geo.api.gouv.fr/communes?codePostal=78000>
- Recherche par code INSEE <https://geo.api.gouv.fr/communes?code=44109>
- Recherche par nom <https://geo.api.gouv.fr/communes?nom=Nantes&boost=population&limit=5> (on ajoute un boost par population pour que la plus grand commune soit privilégiée)
- Par coordonnées <https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568>
- Filtrer par département pour éviter les problèmes liés à l'homonymie de commune, par exemple la commune de Saint-Aubin existe dans les départements 10, 21, 36, 39, 40, 47, 59, 62, 91 et 02 <https://geo.api.gouv.fr/communes?nom=Saint-Aubin&codeDepartement=21>
- Obtenir toutes les communes d'un département <https://geo.api.gouv.fr/departements/44/communes>
- Obtenir toutes les communes d'une région <https://geo.api.gouv.fr/communes?codeRegion=84>


Tous les exemples ci-dessus ne filtrent pas les champs, ne permettent pas de choisir si on veut des géométries pour les communes: soit le centre, au sens mathématique, de la commune, soit son contour, ni ne permettent pas le choix de la sérialisation: pour la cartographie, généralement, on utilise un JSON spécifique dit GeoJSON pour cela. 

La meilleure manière de comprendre comment cela fonctionne est d'utiliser [la démo recherche avancée de la documentation officielle](https://geo.api.gouv.fr/decoupage-administratif/communes#advanced).

Elle permet en cochant de voir comment l'URL d'appel change en particulier l'option `fields` pour ne retourner que les colonnes/champs nécessaires.

**Ce qu'il faut retenir pour les aspects géo,**

- si vous souhaitez les GeoJSON avec le centre de la commune, rajoutez aux urls de la première partie `&format=geojson&geometry=centre` si votre URL contient déjà un `?` sinon il faut ajouter plutôt `?format=geojson&geometry=centre`
- si vous souhaitez les GeoJSON avec le contour de la commune, rajoutez aux urls de la première partie `&format=geojson&geometry=contour` si votre URL contient déjà un `?` sinon il faut ajouter plutôt `?format=geojson&geometry=contour`

Un exemple pour illustrer

<https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568>

devient :

- Si l’on souhaite le centre de la commune : <https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568&format=geojson&geometry=centre>
- Si l’on souhaite le contour de la commune :  <https://geo.api.gouv.fr/communes?lat=47.0482944&lon=-1.1501568&format=geojson&geometry=contour>

Il faut également penser à mettre en cache quand on a des appels lourds qui ne changent pas ou qu'on retourne des contours. Ainsi :

- Sans contour, la réponse fait 480Ko <https://geo.api.gouv.fr/communes?codeRegion=84>
- Avec contour, la réponse fait 34Mo <https://geo.api.gouv.fr/communes?codeRegion=84&format=geojson&geometry=contour>

Vous pouvez très bien sauvegarder dans un fichier le résultat des URLs ci-dessus car le résultat ne va pas changer en permanence car ce n'est pas de l'autocomplétion.

### Utilisation de l’API pour récupérer des régions et des départements

Dans ce cas de figure, le principal intérêt est la correspondance entre un nom et un code. 

Si l’on souhaite le code d'un département ou d'une région, on prend :

- pour la région [https://geo.api.gouv.fr/regions?nom=Auvergne](https://geo.api.gouv.fr/regions?nom=Auvergne)
- pour le département [https://geo.api.gouv.fr/departements?nom=Loire Atl](https://geo.api.gouv.fr/departements?nom=Loire%20Atl)


Les cas départements et régions fonctionnent comme les communes et changent très rarement. Il est souvent envisageable d'avoir les fichiers globaux JSON plutôt que passer par des appels API. On a ainsi sous forme JSON (sans géométrie):

- [Les départements](https://unpkg.com/@etalab/decoupage-administratif/data/departements.json)
- [Les régions](https://unpkg.com/@etalab/decoupage-administratif/data/regions.json)

## Les sources alternatives pour les communes

### Utiliser le WFS de l'IGN

Un [WFS](https://fr.wikipedia.org/wiki/Web_Feature_Service) (Web Feature Service) est un service web d’inspiration [SOAP](https://fr.wikipedia.org/wiki/SOAP). Il est basé sur une approche en [XML](https://fr.wikipedia.org/wiki/Extensible_Markup_Language). 

Le WFS de l’IGN existe en version 1.0.0, 1.1.0 et 2.0.0. 
Cette dernière rajoute des facilités en particulier pour paginer les appels. Généralement, sauf si le serveur est très ancien, c'est la version 2.0.0 qu'il faut privilégier. 

Même s'il est possible de retrouver comment fonctionne le WFS en regardant le [standard WFS](https://www.ogc.org/standards/wfs), nous vous recommandons plutôt d'aller sur [la page WFS du site GeoRezo.net](https://georezo.net/wiki/main/standards/wfs). Ce n'est pas un prérequis ici mais pourra vous aider à approfondir le sujet si vous devez utiliser ce standard plus régulièrement.

Si vous avez besoin de récupérer toutes les communes, il est plutôt recommandé de récupérer les données brutes depuis [Admin Express](https://geoservices.ign.fr/adminexpress), documenté aussi sur cette page. Nous vous recommandons d'avoir installé [GDAL](https://gdal.org/), un utilitaire en ligne de commande.

Son principal intérêt est de pallier à certains scénarios que n'adresse pas pour le moment l'API Découpage Administratif. Il nécessite de comprendre quelques préalables.

#### Lister les couches d'un endpoint WFS

On doit pouvoir lister les couches du service fournissant les communes

*Dans le navigateur, peu lisible car XML avec un "GetCapabilities"*

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=GetCapabilities&VERSION=2.0.0>

*Avec GDAL*

```
ogrinfo -so WFS:https://wxs.ign.fr/administratif/geoportail/wfs
```

Astuce: recommencez avec l'option `--DEBUG ON` comme ci-dessous

```
ogrinfo --DEBUG ON -so WFS:https://wxs.ign.fr/administratif/geoportail/wfs
```

L'intérêt de la manoeuvre est de pouvoir comprendre les appels HTTP utilisés lors de l'usage du WFS plutôt que devoir apprendre la spécification WFS.

#### Trouver la structure du WFS

Trouver la structure du WFS est important car pour pouvoir filtrer, vous pouvez soit utiliser des filtres qui jouent sur les attributs soit sur des propriétés spatiales. Il s’agit donc de connaître le nom des champs. Il s’agit également potentiellement de connaitre le nom de la colonne contenant la géométrie pour pouvoir effectuer les requêtes spatiales.

On part dans cet exemple de la couche `ADMINEXPRESS-COG.LATEST:commune`

Dans le navigateur, copiez l'URL :

<https://wxs.ign.fr/administratif/geoportail/wfs/?SERVICE=WFS&REQUEST=DescribeFeatureType&VERSION=2.0.0&TYPENAMES=ADMINEXPRESS-COG.LATEST:commune&outputFormat=application/json>

Avec GDAL, en ligne de commande

```
ogrinfo -so -noextent WFS:https://wxs.ign.fr/administratif/geoportail/wfs "ADMINEXPRESS-COG.LATEST:commune"
```

Dans les 2 cas, on sait quelles sont les colonnes disponibles. On pourra réutiliser leur nom pour faire des filtres ou choisir les colonnes qui seront retournées.


#### Usages du WFS

Nous avons appris quelles couches contiennent un WFS, quelle est la structure d'une couche comme ses noms de champs. Maintenant on va pouvoir consommer la couche pour la filtrer.

Il est possible de le faire via un appel à une URL ou en passant pas des utilitaires associés à GDAL, utiles pour notre besoin:

- le premier `ogrinfo` permet d'inspecter le contenu d'une source de données, dans ce cas particulier, un WFS.
- le second `ogr2ogr` permet de consommer le WFS en utilisant si nécessaire la pagination et surtout de transformer le GML dans d'autres formats géographiques comme le SHP (Shapefile), le GPKG (Geopackage), le GeoJSON, le CSV parmi les formats géospatiaux les plus courants.

Parmi les cas régulièrement demandé, il nous est demandé de répondre à des besoins de multi-filtrage, par exemple si on veut les communes de plusieurs régions ou départements.

```bash
# Filtrer les communes pour plusieurs départements en retournant un GeoJSON
ogr2ogr -f GeoJSON communes-44-35.geojson \
        --config OGR_WFS_PAGING_ALLOWED ON \
        --config OGR_WFS_PAGE_SIZE 250 \
        WFS:https://wxs.ign.fr/administratif/geoportail/wfs \
        -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_dep IN ('44', '35')" \
        -lco RFC7946=YES
```

Nous vous proposons des recettes ci-dessous. La majorité n'utilise que les communes mais nous employons ponctuellement les EPCI, ayant parfois des demandes pour adresser comment les récupérer ou récupérer leurs communes

On peut dans une premier temps récupérer la commune qui a un code INSEE car elle contient aussi le SIRET de l'EPCI.

```bash
# Obtenir la commune par code commune INSEE sous forme CSV
ogr2ogr -f CSV commune-44109.csv WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE insee_com = '44109'"
```

En inspectant le fichier epci-with-44109-from-geom.csv, on voit que le code SIREN est `244400404`. On peut ainsi retourner les communes qui sont membres de l'EPCI.

```bash
# Obtenir les communes de l'EPCI grâce au code Siren de l'EPCI
ogr2ogr -f GeoJSON communes-epci-with-44109.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE siren_epci = '244400404'"
```

On pourrait aussi obtenir la commune qui contient le point de longitude -1.54241 et latitude 47.21791 sous forme CSV puis depuis le code SIREN, faire la même opération que ci-dessus.

```bash
ogr2ogr -f CSV commune-44109-from-geom.csv WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:commune\" WHERE ST_Contains(ST_GeomFromText('POINT(-1.54241 47.21791)', 'EPSG:4326'), the_geom)" -lco RFC7946=YES
```

Il est possible aussi d'obtenir l'EPCI lui-même:

depuis un code SIREN :

```bash
ogr2ogr -f GeoJSON epci-with-44109-from-siren.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:epci\" WHERE code_siren = '244400404'"
```

depuis un point qui est est contenu dans l'EPCI :

```bash
ogr2ogr -f GeoJSON epci-with-44109-from-geom.geojson WFS:https://wxs.ign.fr/administratif/geoportail/wfs -sql "SELECT * FROM \"ADMINEXPRESS-COG.LATEST:epci\" WHERE ST_Contains(ST_GeomFromText('POINT(-1.54241 47.21791)', 'EPSG:4326'), the_geom)"
```

**Faq WFS**

- Pourquoi ne pas passer par le WFS pour de l'autocomplétion? Parce que cela demeure nettement plus lent qu'une API dédiée car il n'y a pas d'index spécifiques pour cet usage.

### Passer par les fichiers Admin Express

Quand on a besoin de travailler avec les données France entière et qu'on a un back-end, c'est la solution à privilégier.

#### Contexte

Historiquement, il existait un produit nommé Geofla pour avoir les communes qui a été depuis remplacé par un nouveau jeu de données dit Admin Express qui contient les données suivantes :
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

Le jeu de données et la documentation officielle sont disponible [la page officielle Admin Express](https://geoservices.ign.fr/adminexpress). 

#### Différents produits Admin Express

Il existe des **différences entre les produits Admin Express**, nous vous invitons à consulter cet [article résumant ces différences](https://geoservices.ign.fr/admin-express-passe-la-grande-echelle)

Ce qu'il faut retenir pour choisir les produits:

- Si vous avez besoin de suivre l'évolution des communes par mois, prendre "Admin Express" simple.
- Si vous voulez faire des cartes thématiques qui utilisent les données INSEE, prenez les données "Admin Express COG Carto" qui sont généralisées c'est à dire avec moins de points pour les contours.
- Si vous avez besoin de compter par exemple les commerces qui sont dans une commune mais aussi de faire des cartes thématiques, prenez plutôt "Admin Express COG" car les coordonnées sont plus précises.

#### Le "piège" des projections

L'autre piège lors de la récupération de ces données est de prendre les données dans les "bonnes projections": il existe des jeux de données dont la description mentionne "par territoire" et "France entière". Pour comprendre, en empruntant des raccourcis, il faut savoir que la France utilise ce qu'on appelle des systèmes de projection officiels qui définissent comment "bien placer les coordonnées mesurées". Ces systèmes sont choisis pour pouvoir garder une grande précision de mesure qui permettent ensuite d'être sûr de l'emplacement de votre maison au centimètre près. L'inconvénient est qu'ils fonctionnent sur des étendues faibles: ils sont différents sur la métropole et sur les DOM. Si vous prenez les données "par territoire", vous récupérerez les données pour chaque territoire séparément avec chacun sa projection officielle. Si vous prenez France entière, vous aurez les données assemblées dans une projection mondiale indépendamment des territoires.

Conclusion à tirer sur les projections des données:

- si vous devez travailler sur France métropolitaine et DOM, vous pouvez prendre les données "France entière"
- Si vous travaillez uniquement sur un DOM ou uniquement la métropole, vous pourrez travailler tant avec les données "par territoire" que "France entière"


## FAQ

### Bon à savoir concernant les communes

- [La longueur des noms de commune peut être problématique](https://twitter.com/JulesGrandin/status/1448563444601532422).
- [Il existe une normalisation des noms de communes](https://www.collectivites-locales.gouv.fr/sites/default/files/Accueil/Notes).
- Il existe des communes homonymes, le nom n'est donc pas un identifiant fiable.
- Le code postal ne correspond pas à toujours à une seule commune.
- Certaines communes ont plusieurs codes postaux.
- Le code postal peut contenir le code d'un autre département que son département réel.


### Bonnes pratiques à adopter

Partout où vous le pouvez, utilisez le code INSEE du COG (Code Offficiel Géographique) plutôt qu'un code postal ou un nom. Celui-ci est le plus fiable dans le temps même si des cas particuliers emergent parfois suite aux évolutions des communes (fusions ou séparation).

Avec l'API Découpage Administratif, cette complexité du COG est cachée. Si vous avez des besoins avancés, vous pouvez utiliser soit [les fichiers du COG](https://www.insee.fr/fr/information/2560452) soit pour une recherche ponctuel, passer par [l'interface de recherche de commune](https://www.insee.fr/fr/recherche/recherche-geographique?debut=0).
