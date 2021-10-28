# Tuiles vecteur

## Introduction

Cela permet de mettre à disposition des tuiles avec un style pour avoir un fond de plan de tuiles vecteur. Ce style est publié en s'appuyant sur une version d'OpenMapTiles déployée par Etalab sur la France.

Elle est consommée par plusieurs autres produits d'Etalab. Nous l'utilisons car les tuiles vectorielles et les styles associés sont à ce jour plus légers que ceux de l'IGN.

Nous ne garantissons pas sa mise à disposition dans le temps et pouvons potentiellement vous bannir en cas d'abus.

Si vous avez des doutes sur votre usage:

- si vous êtes un petit consommateur de tuiles, un grand nombre d'acteurs commerciaux <https://switch2osm.org/providers/#tile-hosting> proposent de consommer des tuiles vectorielles en créant un compte, sans coût

- Si vous avez besoin d'une qualité de service garantie, là encore, adressez-vous à ces mêmes acteurs commerciaux ou auto-hébergez vous. Dans ce cas, pour des outils pour gérer vos propres tuiles vecteur en autohébergé, allez sur <https://github.com/mapbox/awesome-vector-tiles#servers>

- Passez sur les tuiles vectorielles de l'IGN (voir des exemples en fin de guide)

## Points d'entrées

Pour avoir un aperçu, vous pouvez vous rendre sur

- <https://openmaptiles.geo.data.gouv.fr>

### Consommez les styles

Avec le fond de plan et le cadastre

- <https://gist.github.com/ThomasG77/2c0f884c209eebb2710648e316052382>

Avec uniquement le fond de plan

- <https://github.com/webgeodatavore/openmaptiles-geo-data-gouv-fr>

Avec les limites administratives et le cadastre seulement

- <https://bl.ocks.org/ThomasG77/e9eacae4cd4c75e61327944997cb82d4>

### Consommez les tuiles vectorielles seules

TODO

## Les bibliothèques pour consommer les tuiles vectorielles

- OpenLayers
- Mapbox GL JS
- Maplibre
- Leaflet
- Tangram

TODO (reprendre <https://github.com/webgeodatavore/openmaptiles-geo-data-gouv-fr>)

## L'alternative des tuiles vecteur de l'IGN

Vous pouvez choisir d'utilisez l'API de tuiles vecteur de l'IGN.

- OpenLayers <https://gist.github.com/ThomasG77/3047b6072f0411d11d23cfed1fdb2c5c>
- Maplibre <https://gist.github.com/ThomasG77/5a122812635a85af7f762858ecf052a3>

Pour la documentation officielle côté IGN, <https://geoservices.ign.fr/documentation/services/api-et-services-ogc/vecteur-tuile-tmswmts>
