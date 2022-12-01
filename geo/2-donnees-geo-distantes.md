# Consommer les ressources distantes géospatiales sur data.gouv.fr

Le portail data.gouv.fr référence de nombreuses données OpenData. Certaines sont directement mises à disposition sur le site, d'autres jeux de données référencent des pages tierces avec les jeux de données ou bien un jeu de donnée référence une URL distante.

Nous allons nous concentrer sur le dernier cas en nous concentrant sur une partie spécifique, la donnée géospatiale. Si vous êtes plutôt intéressés par les API, nous documentons déjà [l'API Adresse](/apis-geo/1-api-adresse.html), [l'API découpage administratif](/apis-geo/2-api-decoupage-administratif.html) et [les API d'accès aux tuiles vectorielles](/apis-geo/3-tuiles-vecteur.html)

## Pourquoi abordons nous spécifiquement ce cas?

Dans un passé pas si lointain, Etalab entretenait le site geo.data.gouv.fr mais la maintenance étant consommatrice de ressources, des choix pour le décommissionner ont été fait. Voir [l'article "Extinction de geo.data.gouv.fr" pour en savoir plus](https://www.data.gouv.fr/fr/posts/extinction-de-geo-data-gouv-fr/)

La problématique est que la plateforme permettait de mettre en cache des données géospatiales qui sont normalement mises à disposition sous forme de service web, difficilement accessibles pour les néophytes, en particulier pour les personnes qui ne sont pas spécialisés dans les données géographiques comme les professionnels qu'on désigne sous des termes peu connu comme géomaticiens (métier associé au mot géographie et informatique), spécialiste SIG (Système d'Information Géographique) ou SIGiste.

La plateforme data.gouv.fr avec l'extinction de geo.data.gouv consomme maintenant les données de catalogues contenant des données géospatiales, en particulier le geocatalogue. On parle de métadonnées. Ces dernières contiennent les descriptions des jeux de données et des listes de service.
Ces services peuvent prendre la forme:

- de service pour l'affichage sous forme d'image et l'interrogation ponctuelle (WMS),
- de service pour afficher des données vecteur et/ou télécharger la donnée sous forme de flux (WFS)
- de services pour consommer des fichiers directement téléchargeables (Atom)

Nous allons ainsi voir comment les consommer


Insister sur le pourquoi?


## Consommer le WMS

Utiliser un proxy comme https://data.europa.eu/deu-proxy?

Sans proxy (plante à cause de CORS)

https://dds2010.github.io/mviewer/?x=706890&y=6242153&z=7&config=demo/addlayers.xml&addLayer={\%22url\%22:\%22https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map%3D\/opt\/data\/carto\/geoide-catalogue\/1.4\/org_5443264\/ccf16ee8-5b97-4cf5-9257-c88102c106e2.internet.map\%22,\%22name\%22:\%22AGENDA21_S_R44\%22,\%22title\%22:\%22AGENDA21_S_R44\%22}#

Avec proxy

https://dds2010.github.io/mviewer/?x=706890&y=6242153&z=7&config=demo/addlayers.xml&addLayer={\%22url\%22:\%22https://data.europa.eu/deu-proxy?https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map%3D\/opt\/data\/carto\/geoide-catalogue\/1.4\/org_5443264\/ccf16ee8-5b97-4cf5-9257-c88102c106e2.internet.map\%22,\%22name\%22:\%22AGENDA21_S_R44\%22,\%22title\%22:\%22AGENDA21_S_R44\%22}#

ou avec un autre proxy

https://dds2010.github.io/mviewer/?x=706890&y=6242153&z=7&config=demo/addlayers.xml&addLayer={\%22url\%22:\%22https://corsproxy.io/?https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map%3D\/opt\/data\/carto\/geoide-catalogue\/1.4\/org_5443264\/ccf16ee8-5b97-4cf5-9257-c88102c106e2.internet.map\%22,\%22name\%22:\%22AGENDA21_S_R44\%22,\%22title\%22:\%22AGENDA21_S_R44\%22}#

Partage

https://dds2010.github.io/mviewer/?x=706890&y=6242153&z=7&l=epci%2CAGENDA21_S_R44*&lb=positron&config=demo/addlayers.xml&mode=d


https://dds2010.github.io/mviewer/?x=439666&y=6394416&z=7&config=demo/addlayers.xml&addLayer=%7B%5C%22url%5C%22:%5C%22https://www.geo2france.fr/geoserver/hdf_common/ows%5C%22,%5C%22name%5C%22:%5C%22Antennes__HdF_EnService_Agreg%5C%22,%5C%22title%5C%22:%5C%22Antennes_test%5C%22%7D

https://corsproxy.io/?https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map=/opt/data/carto/geoide-catalogue/1.4/org_5443264/ccf16ee8-5b97-4cf5-9257-c88102c106e2.internet.map&service=WMS&cersion=1.3.0&request=GetCapabilities

https://corsproxy.io/?https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map=/opt/data/carto/geoide-catalogue/1.4/org_5443264/ccf16ee8-5b97-4cf5-9257-c88102c106e2.internet.map



https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map=/opt/data/carto/geoide-catalogue/1.4/org_38066/9a623f0c-bd2e-498e-b67b-2b363a5d6e0d.internet.map&service=WFS&request=GetCapabilities

https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map=/opt/data/carto/geoide-catalogue/1.4/org_38066/025777cb-1837-4898-bafc-71d60c44d7eb.internet.map&service=WFS&typeNames=ms:N_INT1_GENERATEUR_SUP_S_062&request=DescribeFeatureType&version=2.0.0

https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map=/opt/data/carto/geoide-catalogue/1.4/org_38066/025777cb-1837-4898-bafc-71d60c44d7eb.internet.map&service=WFS&VERSION=2.0.0&typeNames=ms:N_INT1_GENERATEUR_SUP_S_062&MaxFeatures=1&request=getfeature

https://jsonformatter.org/xml-formatter/?url=https%3A%2F%2Fogc.geo-ide.developpement-durable.gouv.fr%2Fwxs%3Fmap%3D%2Fopt%2Fdata%2Fcarto%2Fgeoide-catalogue%2F1.4%2Forg_38066%2F9a623f0c-bd2e-498e-b67b-2b363a5d6e0d.internet.map%26service%3DWFS%26request%3DGetCapabilities

curl -X 'GET' \
  'https://demo.data.gouv.fr/api/1/datasets/service-de-visualisation-cartographique-wms-du-jeu-de-donnees-driaaf-idf-territoire-maet-en-ile-de-france/' \
  -H 'accept: application/json'


```javascript
var url_str = 'https://demo.data.gouv.fr/fr/datasets/service-de-visualisation-cartographique-wms-du-jeu-de-donnees-driaaf-idf-territoire-maet-en-ile-de-france/';

var url = new URL(url_str);
var baseUrl = url.origin;
var slug = url.pathname.split('/').filter(el => el != '').slice(-1)[0]
var api_url = `${baseUrl}/api/1/datasets/${slug}`
console.log(api_url)

fetch(api_url)
.then(resp => resp.json())
.then(json => {
  console.log(json);
  var wms = json.resources.filter(el => el.description.includes('WMS') || el.title.includes('WMS'))
  if (wms[0]) {
  	wms[0].url
  }
}).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
});
```


Pour utiliser les capabilities WMS,

JavaScript

- http://viglino.github.io/ol-ext/examples/layer/map.wmscapabilities.html?lon=2.344347&lat=48.855181&z=14.5

Python

```python
import json
import logging
from urllib.request import urlopen
from urllib.parse import urlparse
from owslib.wms import WebMapService

url_str = "https://demo.data.gouv.fr/fr/datasets/service-de-visualisation-cartographique-wms-du-jeu-de-donnees-driaaf-idf-territoire-maet-en-ile-de-france/"
url_parsed = urlparse(url_str)
slug = [i for i in url_parsed.path.split('/') if i != ''][-1]
base_url = f'{url_parsed.scheme}://{url_parsed.hostname}'
api_url = f'{base_url}/api/1/datasets/{slug}'

with urlopen(f'{api_url}/') as req:
    json_content = json.load(req)

wms_json = [i for i in json_content.get('resources') if 'WMS' in i.get('description') or 'WMS' in i.get('title')]
if len(wms_json) > 0:
    wms = WebMapService(wms_json[0].get('url'), version='1.3.0')
    print(wms.identification.type)
    print(wms.identification.title)
    print(wms.identification.abstract)
    print(wms.getOperationByName('GetMap').formatOptions)
    for name, layer in wms.items():
        # layer = wms.contents[name]
        print("Abstract: ", layer.abstract)
        print("BBox WGS84: ", layer.boundingBoxWGS84)
        print("BBox: ", layer.boundingBox)
        print("CRS: ", layer.crsOptions)
        print("Styles: ", layer.styles)
        print("Timestamps: ", layer.timepositions)
        print(layer.parent.abstract)
        sizex = 800
        # Ne fonctionne pas. Bug côté Geo-IDE sur le décodage de caractères
        # https://github.com/geopython/OWSLib/issues/846
        # Marche avec owslib 0.25.0 mais pas après
        response = wms.getmap(layers=[name,],
            bbox=layer.boundingBoxWGS84, # Left, bottom, right, top
            format=wms.getOperationByName('GetMap').formatOptions[0],
            size=(sizex,round(sizex * ((layer.boundingBoxWGS84[3] - layer.boundingBoxWGS84[1]) / (layer.boundingBoxWGS84[2] - layer.boundingBoxWGS84[0])))),
            srs='EPSG:4326',
        )
        with open(f"{name}.{wms.getOperationByName('GetMap').formatOptions[0].split('/')[-1]}", 'wb') as out:
            out.write(response.read())
else:
    print("Pas de WMS disponible")

```


URL obtenue via la bibliothèque Owslib qui encode les caractères `/`,`,` et `:` et c'est normal

http://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map=/opt/data/carto/geoide-catalogue/1.4/org_38178/908a2fc2-6752-4eae-952a-142393e657b7.internet.map&service=WMS&version=1.3.0&request=GetMap&layers=N_PERIM_MAET_ZINF_S_R11&styles=&width=800&height=648&crs=EPSG%3A4326&bbox=48.1107%2C1.44041%2C49.2484%2C3.56583&format=image%2Fpng&transparent=FALSE&bgcolor=0xFFFFFF&exceptions=XML

vs

Fonctionne

http://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map=/opt/data/carto/geoide-catalogue/1.4/org_38178/908a2fc2-6752-4eae-952a-142393e657b7.internet.map&service=WMS&version=1.3.0&request=GetMap&layers=N_PERIM_MAET_ZINF_S_R11&styles=&width=800&height=648&crs=EPSG:4326&bbox=48.1107,1.44041,49.2484,3.56583&format=image/png&transparent=FALSE&bgcolor=0xFFFFFF&exceptions=XML

Conclusion:
Sur le proxy côté GeoIDE, il faudrait décoder les paramètres. Cela ne semble pas être fait


from owslib.wms import WebMapService

wms = WebMapService('https://ogc.geo-ide.developpement-durable.gouv.fr/wxs?map=/opt/data/carto/geoide-catalogue/1.4/org_38178/908a2fc2-6752-4eae-952a-142393e657b7.internet.map', version='1.3.0')

response = wms.getmap(layers=['N_PERIM_MAET_ZINF_S_R11',],
    bbox=(1.44041, 48.1107, 3.56583, 49.2484),
    format='image/png',
    size=(800, 428),
    srs='EPSG:4326',
)
with open(f"N_PERIM_MAET_ZINF_S_R11.png", 'wb') as out:
    out.write(response.read())


## Prérequis:

Installation QGIS: trouver une doc claire d'installation pour pointer dessus

## WMS

Des exemples de

- GetCapabilities
- GetFeatureInfo

Versions 1.1.0 et 1.3.0

Doc https://georezo.net/wiki/main/standards/wms


ECOSYSTEME autour:

Ne pas trop rentrer dans le détail et donner des exemples de comment intégrer avec des librairies tierces côté client, côté SIG lourds (QGIS en particulier), bibliothèques liés à des languages de programmation

## WFS

- GetCapabilities
- GetFeature + aperçu avec limit 1
- DescribeFeatureType

Doc https://georezo.net/wiki/main/standards/wfs + https://docs.geoserver.org/stable/en/user/services/wfs/reference.html

Versions: 1.0.0, 1.1.1, 2.0

ECOSYSTEME autour:

Ne pas trop rentrer dans le détail et donner des exemples de comment intégrer avec des librairies tierces côté client, côté SIG lourds (QGIS en particulier), bibliothèques liés à des languages de programmation
GDAL (reprendre/bouger https://guides.etalab.gouv.fr/apis-geo/2-api-decoupage-administratif.html#les-sources-alternatives-pour-les-communes)

## ATOM = WFS sans la complication

Le plus simple: assimilable à des fichiers SIG + autres données (données attributaires + doc PDF +...)

## Investigation:

Voir ce qu'il est possible d'améliorer en ligne

Retours après relecture


Guide: consommer les données géographiques sous tous leurs formats

- WFS/WMS (palliatif disparition geo.data.gouv)
- les autres formats usuels et leur exploitation: reprise mais avec quelques cas sur des jeux de données hébergés

Logique de teaser: insister sur l'intérêt avant d'insister sur le comment
