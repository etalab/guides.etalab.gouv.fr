# Tuiles vectorielles

## Introduction
:::tip Qu’est-ce que les tuiles vectorielles ? Pour comprendre ce que sont que les tuiles vectorielles et leurs usages rendez-vous sur la documentation de l’IGN.

:::

**Pourquoi utiliser les tuiles vectorielles ?**

Le service proposé par Etalab permet de

- mettre à disposition des tuiles avec un style pour avoir un fond de plan de tuiles vecteur. Ce style est publié en s’appuyant sur une version d’OpenMapTiles déployée par Etalab sur la France.
- servir les tuiles des limites administratives ainsi que celles du cadastre.

Ce service s'appuie sur les données du [projet OpenStreetMap](https://openstreetmap.org).

OpenStreetMap (ou "OSM") est une carte du monde entier librement modifiable, faite par des gens comme vous.
OpenStreetMap vous permet de voir, modifier et utiliser des données géographiques de n'importe quel endroit dans le monde.

Si vous trouvez des données manquantes sur la carte, vous pouvez contribuer sur <https://openstreetmap.org> et vous verrez les changements au plus tard une semaine après. En effet, les tuiles vecteur des fonds de plan sont mises à jour une fois par semaine.

Il faut aussi noter que vous devez obligatoirement [créditer OpenStreetMap et ses contributeurs](https://www.openstreetmap.org/copyright/fr) quand vous utilisez les fonds de plan.

**Qui utilise ce service ?**

Ce service est utilisé par plusieurs produits d’Etalab ainsi que par d’autres acteurs institutionnels en raison de la légèreté des tuiles vectorielles et des styles associés en comparaison à ceux mis à disposition actuellement par l’IGN.

Ces tuiles ont une structure standardisée par un schéma [https://openmaptiles.org/schema/](https://openmaptiles.org/schema/), ainsi que des styles par défaut associés à cette structure [https://openmaptiles.org/styles/](https://openmaptiles.org/styles/)

**Quelles sont les limites de ce service ?**

Bien que ce service réponde à de nombreux besoins, il a ses limitations.

Les cas où vous ne devriez pas utiliser OpenMapTiles:

- si votre besoin nécessite des tuiles dont les informations ne sont pas dans les couches OpenMapTiles, un grand nombre d’acteurs commerciaux [https://switch2osm.org/providers/#tile-hosting](https://switch2osm.org/providers/#tile-hosting) proposent de consommer des tuiles vectorielles en créant un compte, sans coût.
- Si vous avez besoin d’une qualité de service garantie, là encore, adressez-vous à ces mêmes acteurs commerciaux ou autohébergez-vous. Dans ce cas, pour des outils pour gérer vos propres tuiles vecteur en autohébergé, allez sur [https://github.com/mapbox/awesome-vector-tiles#servers](https://github.com/mapbox/awesome-vector-tiles#servers).
- Si vous souhaitez des données sur une autre couverture que la France.
- Si vous avez un besoin qui vous parait correspondre à celui des tuiles vectorielles et styles associés de l’IGN (voir des exemples en fin de guide). Ces tuiles sont un peu plus lourdes, mais elles sont par nature plus homogènes en termes de contenu, car elles utilisent les données de l’IGN. Celles du projet OpenMapTiles étant basées sur OpenStreetMap, il y a parfois quelques manques en zone rurale.

## Rappel sur les tuiles vecteur

### Les tuiles raster

Historiquement, pour faire du webmapping, on renvoyait des tuiles images qui étaient des images de cartes découpées en 256px ou 512px (si écran haute définition). Ce qu'on peut encore voir par exemple

Tuiles 256px

![](https://tile.openstreetmap.org/5/15/11.png)

Tuiles 512px

![](https://d.basemaps.cartocdn.com/light_all/7/63/44@2x.png)

Le découpage des tuiles est normalisé en s'appuyant sur "une grille" qui change avec les échelles et dont les conventions sont reprises par tous.

### Les « tuiles vectorielles »

Même si ces solutions raster sont toujours fonctionnelles, ils existent des cas qui nécessitent d’avoir plus de souplesse pour pouvoir styler des fonds de plan en particulier ou bien pour afficher une couche « par-dessus » les autres. Ils peuvent être adressés avec les tuiles vectorielles. On parle abusivement de tuiles vectorielles pour désigner généralement deux choses:
• les tuiles vectorielles à proprement parler
• les styles « Mapbox Vector Style »


#### Les tuiles vectorielles en elle-même

On peut les assimiler à des objects vectoriels, des points, des lignes, des polygones qui sont associés à des attributs par exemple un nom. On groupe ces objets par couche, généralement un objet métier, par exemple, les limites communales, les commerces,... On découpe ensuite ces vecteurs selon une emprise fixe qui reprend celle historiquement utilisées par les tuiles raster. On peut ainsi voir quelles couches contiennent une tuile. Il existe plusieurs standards pour ces tuiles mais celui le plus adopté est celui de la société Mapbox. On parle de "Mapbox Vector Tiles" ou MVT. Leur contenu est encapsulé dans un format binaire appelé Protocol Buffer, non spécifique à la cartographie, c'est pour cela que l'extension des tuiles est souvent `.pbf` même si c'était historiquement `.mvt`. Voici des exemples pour inspecter:

- les tuiles du cadastre <https://stevage.github.io/vector-inspector/#?url=https://openmaptiles.geo.data.gouv.fr/data/cadastre/15/16241/11497.pbf&loc=13.71/47.21687/-1.55235>
- le fond OpenMapTiles <https://stevage.github.io/vector-inspector/#?url=https://openmaptiles.geo.data.gouv.fr/data/cadastre/15/16241/11497.pbf&loc=13.71/47.21687/-1.55235>

Vous pouvez aussi allez sur <https://openmaptiles.geo.data.gouv.fr> puis dans le bloc "DATA", choisissez une couche et faire "Inspect".

Ici, nous avons choisi de nous concentrer sur la consommation des tuiles. Il existe de nombreux outils pour les générer. Nous vous renvoyons à nouveau à <https://github.com/mapbox/awesome-vector-tiles#servers> déjà mentionné.

#### Les styles 

Ils permettent d'indiquer pour quelles couches, pour quelles caractéristiques comme la population et quels zooms il faut appliquer un style. Ces styles sont par exemple, l'épaisseur du trait, sa couleur pour le contour communal. Ils s'appuient sur le standard ["Mapbox/Maplibre GL JS Style Specification"](https://maplibre.org/maplibre-gl-js-docs/style-spec/) qui indique quelles sont les ressources "tuiles" (l'URL) à consommer puis quelles couches de cette ressource doivent être utilisées puis comment les styles doivent être appliqués.

C'est avant tout la combinaison des tuiles vectorielles et des styles qui a permis à ce standard de s'imposer. 

Généralement, on consomme ces tuiles vectorielles via une bibliothèque cartographique JavaScript. Il faut également noter que selon les bibliothèques il est possible de profiter de la combinaison des deux mais que certains ne permettent pas de gérer les styles mais simplement de consommer les tuiles vectorielles, les `pbf` mais en devant styler selon la syntaxe propre à la bibliothèque. Cela joue fortement sur les choix techniques à adopter selon votre besoin. Seuls Maplibre et OpenLayers via une bibliothèque intermédiaire sont à même de correctement utiliser les deux.

## Comment utiliser les tuiles vectorielles d’Etalab ? 

Pour avoir un aperçu, vous pouvez vous rendre sur

- <https://openmaptiles.geo.data.gouv.fr>

Pour le moment les versions dites `latest` permettent d'assurer la transition entre deux versions des tuiles. Nous avions historiquement des tuiles datant de 2019 avec un schéma OpenMapTiles qui a un peu évolué entre temps. Ces URLs sont amenées à remplacer les tuilles actuellement en production. Les versions `latest` ont été mises à jour en janvier 2022.

### Consommer les styles
Nous abordons principalement l'usage avec MapLibre qui est capable de nativement gérer les tuiles et les styles associés. Nous aborderons pas Mapbox GL JS, la bibliothèque JavaScript de Mapbox car elle n'est maintenant plus OpenSource depuis la version 2.x et c'est MapLibre une version forkée de la dernière version de Mapbox GL JS avant son passage en version non libre qui a pris sa succession. 
Voici quelques scénarios:

**Avec le fond de plan et le cadastre**

- Avec MapLibre <https://bl.ocks.org/ThomasG77/2c0f884c209eebb2710648e316052382>

**Avec uniquement le fond de plan**

- Exemples pour MapLibre et OpenLayers <https://github.com/webgeodatavore/openmaptiles-geo-data-gouv-fr>

**Avec les limites administratives et le cadastre seulement**

- MapLibre <https://bl.ocks.org/ThomasG77/e9eacae4cd4c75e61327944997cb82d4>

### Consommer les tuiles vectorielles seules

- Maplibre <https://raw.githack.com/webgeodatavore/openmaptiles-geo-data-gouv-fr/master/maplibre-gl-js/maplibre-gl-js-openmaptiles-with-overlay.html>
- OpenLayers <https://raw.githack.com/webgeodatavore/openmaptiles-geo-data-gouv-fr/master/openlayers/openlayers-openmaptiles-with-overlay.html>
- Leaflet <https://raw.githack.com/webgeodatavore/openmaptiles-geo-data-gouv-fr/master/leaflet/leaflet-openmaptiles-with-overlay.html>

### Héberger les tuiles du cadastre ou faire une extrait sur votre zone

```bash
wget https://cadastre.data.gouv.fr/data/etalab-cadastre/2021-07-01/mbtiles/france/cadastre.mbtiles
npm install -g @mapbox/tilelive @mapbox/mbtiles

tilelive-copy \
    --minzoom=0 --maxzoom=24 \
    --bounds="-1.6029,47.18438,-1.501276,47.244547" \
    cadastre.mbtiles cadastre-extract-for-nantes-city.mbtiles

npm i -g ThomasG77/mbview#no-api-key
mbview cadastre-extract-for-nantes-city.mbtiles
```

Pour un aperçu, ouvrir <http://localhost:3000/#16.17/47.215211/-1.567287>

Si vous souhaitez héberger vous-même, nous vous recommandons de passer par [TileServer-Gl Light](https://www.npmjs.com/package/tileserver-gl-light) combiné avec NGinx.

## L'alternative des tuiles vecteur de l'IGN

Selon vos besoins, vous pouvez choisir d'utiliser l'API de tuiles vectorielles de l'IGN plutôt que celles que nous mettons à disposition. 
Voici deux exemples:

- OpenLayers <https://bl.ocks.org/ThomasG77/3047b6072f0411d11d23cfed1fdb2c5c>
- Maplibre <https://bl.ocks.org/ThomasG77/5a122812635a85af7f762858ecf052a3>

Ici, nous avons utilisé le plan standard dont l'URL est <https://wxs.ign.fr/static/vectorTiles/styles/PLAN.IGN/essentiels/standard.json>. Vous verrez qu'il est possible de choisir d'autres styles et même d'avoir des tuiles vectorielles pour d'autres éléments que les fonds de plan. Pour cela, consultez la documentation officielle côté IGN, <https://geoservices.ign.fr/documentation/services/api-et-services-ogc/vecteur-tuile-tmswmts>. Nous vous recommandons en complément de regarder <https://geoservices.ign.fr/services-web-essentiels> car la 1ère documentation à date mentionne encore une clé d'API alors que bien que présente, celle-ci est publique et s'appelle `essentiels`, ce que vous pouvez voir dans les démos mises à disposition.
