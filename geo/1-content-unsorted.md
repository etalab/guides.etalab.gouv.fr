# Plan guide Données Géo

1. Rappels

1.1 Rappel - Les données OpenData

- Les portails locaux
- Les portails thématiques
- data.gouv.fr
- les portails européens ou mondiaux
- les données communautaires (OSM)

Quelques données de référence échelle européenne ou mondiale:

Natural Earth Data

1.2 Rappel - le moisonnage


2. Les données géographiques

    Les projections et systèmes de coordonnées:
    le minimum incontournable
    Convertir les formats et les projections des fichiers pour Github
    Github, quezako?

## Les données géo

But: identifier ou filtrer les résultats en fonction des données géographiques. Pour cela, il faut savoir comment on les identifie

### Deux grands types de données géographiques

    Raster
    Vecteur

### Raster


### Formats associés

Généralement, il s'agit de:

    TIF(F)(GeoTIFF) (extension tif)
    JPEG2000 (extension jp2)

Sinon, on accède à des services web comme le WMS ou le WMTS comme https://VueDuCiel.loire-atlantique.fr pour cela.

### Les formats de données principaux

    SHP (lié historiquement au logiciel ArcView), inadapté pour le web
    MIF/MID ou TAB (lié au logiciel MapInfo), idem à SHP
    GeoJSON/TopoJSON, bon pour le web, à utiliser par défaut, (code EPSG 4326 recommandé)
    KML, bon pour le web mais avant tout pour les produits Google

Elles peuvent prendre la forme de points, de lignes, de polygones

Voir MapSchool, section "Les formats vecteur"

### L'exception du format tabulaire:

CSV


Les données non géographiques rapportables à de l'information spatiale

Via l'adresse: géocodage
Via un identifiant ayant un caractère géographique


### Projections et systèmes de coordonnées

Pourquoi?

Parce que des exemples comme ci-dessous sont incompréhensibles pour un utilisateur final non spécialiste:

    L93 (Lambert 93),
    CC47 (Conique Conforme 47),
    WGS84 ou EPSG 4326
    EPSG:3857
    LAEA ETRS89

### La forme de la Terre

Il existe plusieurs formats.


### Principes des projections

Déformation quand on passe de 3 dimensions à 2 dimensions

### Types de projections:

    Conforme: conservation des angles (formes)
    mais pas des distances ou des surfaces
    Equivalent: conservation des surfaces

### Curiosités liées aux projections

- Nord pas forcément "en haut"
- Centre de la carte du monde différent (non centré sur l'Atlantique)

### Les projections, l'éternel débat

### Les codes EPSG

L'EPSG – European Petroleum Survey Group –, un groupe créé en 1985 par Jean-Patrick Girbig alors avec ELF, a défini une liste des systèmes de coordonnées géoréférencées et leur a associés des codes pour les identifier. (Wikipédia)

Il faut connaitre les codes EPSG pour pouvoir effectuer des conversions entre projections
Les projections les plus communes en France

    Projections Lambert
    Le RGF 93 et les coniques conformes
    Le WGS84
    Le Spherical Mercator

### Projections "Lambert zone"

Projection historique. Une "globale", le "Lambert Zone II / Lambert 2 étendu" (EPSG:27572). Sinon, 4 zones pour plus de précision

Voir cette application http://dogeo.fr/_apps/projection/ et les fiches du CERTU https://www.cerema.fr/fr/centre-ressources/boutique/georeferencement-rgf93

### Le RGF 93 et les coniques conformes

    RGF 93 pour couvrir la France métropolitaine (EPSG:2154)
    9 coniques conformes (voir page Wikipedia pour les codes EPSG)

### Le WGS84

    En simplifié, le système de votre GPS
    Il parle longitude/latitude

### Le Spherical Mercator

    Inventé par Google en assimilant la Terre
    à une sphère (EPSG:900913 ou EPSG:3857)
    Déformation importante

## Convertir les formats et les projections des fichiers

But: transformer les données que nous récupérons en GeoJSON pour les utiliser dans Github

### Quelques outils

    GDAL/OGR: outil pour changer formats et projections, en ligne de commande
    OGRE https://ogre.adc4gis.com/: OGR via le Net
    QGIS: outil bureautique assimilable à un "logiciel de traitement de texte" de la cartographie. Utilise aussi GDAL/OGR via une interface graphique
    MapShaper: outil pour simplifier les données (moins long à charger)


### Mise en pratique de QGIS avec un SHP

    Ouvrir un fichier shp
    Utiliser un fond de référence (GEOFLA)
    Activer la projection à la volée dans votre projet
    Ouvrir votre fichier à tester
    Vérifier la superposition
    Exporter en GeoJSON en WGS84 (EPSG:4326)

### Mise en pratique de QGIS avec un fichier tabulaire

    Ouvrir un fichier csv avec X/Y (RGC par exemple)
    Utiliser un fond de référence (GEOFLA)
    Activer la projection à la volée dans votre projet
    Ouvrir votre fichier à tester en "texte délimité"
    Choisir le système de projection
    Vérifier la superposition
    Exporter en GeoJSON en WGS84 (EPSG:4326)

### Mise en pratique de Mapshaper pour la simplification de fichiers

    Prendre le fichier GeoJSON créé précédemment
    Charger ce fichier dans l'interface de MapShaper
    Tester la simplification
    Convertir en TopoJSON

### Utiliser un fond de plan pour contextualiser vos données

Si QGIS

QGIS = ouvrez vos données
Fond de plan = contexte
Interrogation infos + sélection table
export données
Impression canevas de cartes

Les plus courants pour le web

### GeoJSON

Toilettes
https://www.data.gouv.fr/fr/datasets/toilettes-publiques-4/


Arrondissements
https://opendata.paris.fr/explore/dataset/arrondissements/download?format=geojson&timezone=Europe/Berlin&use_labels_for_header=false

Un GeoJSON suit un standard définit par https://geojson.org et plus particulèrement sur https://datatracker.ietf.org/doc/html/rfc7946

Pour valider un GeoJSON, allez sur https://geojsonlint.com

Une lecture complémentaire est https://macwright.com/2015/03/23/geojson-second-bite.html
https://github.com/tmcw/awesome-geojson

Exemples d'utilisation basiques

### CSV

Caractéristiques 2019
https://www.data.gouv.fr/fr/datasets/bases-de-donnees-annuelles-des-accidents-corporels-de-la-circulation-routiere-annees-de-2005-a-2019/


Annuaire des débits de tabac en France métropolitaine
https://www.data.gouv.fr/fr/datasets/adresses-des-debits-de-tabac/ puis https://www.douane.gouv.fr/la-douane/opendata?f%5B0%5D=categorie_opendata_facet%3A474&recherche_opendata=&op=&page=5
Lien direct https://www.douane.gouv.fr/sites/default/files/openData/files/annuaire-des-debits-de-tabac-2018.zip


Finess https://www.data.gouv.fr/fr/datasets/finess-extraction-du-fichier-des-etablissements/
A reformater https://github.com/koumoul-dev/finess.git


https://www.data.gouv.fr/fr/datasets/bornage-du-reseau-routier-national/


### KML

Vecteurs

Raster

### SHP

Le plus courant

### GPKG


## Outils

umap https://umap.openstreetmap.fr
Magrit https://github.com/riatelab/magrit
Khartis https://mate-shs.cnrs.fr/actions/tutomate/tuto22-mitrano-khartis/ avec code source https://github.com/AtelierCartographie/Khartis
Kepler.GL https://kepler.gl

Carto https://carto.com
Google My Maps https://www.google.com/intl/fr_fr/maps/about/mymaps/
Datawrapper https://www.datawrapper.de
Flourish https://flourish.studio
RawGraphs https://app.rawgraphs.io

mviewer https://mviewer.netlify.app

https://github.com/observablehq/plot
https://github.com/vega/lyra
https://vega.github.io/vega-lite/


ou

https://geodatamine.fr/data/shop_craft_office/-7444?format=geojson&aspoint=true&metadata=true
https://www.data.gouv.fr/fr/datasets/base-nationale-des-commerces-ouverte/

ou

https://opendata.paris.fr/explore/dataset/zones-touristiques-internationales/export/?disjunctive.name&location=12,48.84658,2.31468&basemap=jawg.streets

QPV
https://www.data.gouv.fr/fr/datasets/quartiers-prioritaires-de-la-politique-de-la-ville-qpv/


INSEE carroyées
https://www.insee.fr/fr/statistiques/4176290?sommaire=4176305#consulter


Contour Paris
https://www.openstreetmap.org/relation/7444#map=12/48.8589/2.3469


Node

operator 	RATP
railway 	station
station 	subway
type:RATP 	metro

Lignes

route=subway

relation["type:RATP"~"metro|rer|tram"]

Overpass Paris

/*
This is an example Overpass query.
Try it out by pressing the Run button above!
You can find more examples with the Load tool.
*/
relation(2333448);
(._;>>;);
out;


osmium tags-filter -o route_subway.osm.pbf ile-de-france-latest.osm.pbf /route=subway
osmium tags-filter -o network_rer.osm.pbf ile-de-france-latest.osm.pbf /network=RER

https://wiki.openstreetmap.org/wiki/France/Transilien#RER_et_trains_de_banlieue
https://wiki.openstreetmap.org/wiki/M%C3%A9tro_de_Paris
