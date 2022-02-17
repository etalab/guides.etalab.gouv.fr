# **Introduction**

Ce guide a pour objectif de compléter la documentation existante par des ressources pratiques pour vous apprendre à utiliser l’API adresse.

::: Familier des APIs ? Vous pouvez directement vous référer à :

➡️ Consultez la documentation générale autour de l’adresse

➡️ Consultez la documentation de l’API Adresse :::

# Les données d’adresses

### **Comment les données d’adresses sont-elles constituées ?**

La donnée adresse qui  compose la Base Adresse Nationale (BAN) est soit :

- issue de données provenant d’acteurs historiques de l’adresse (IGN, Cadastre, etc.) ;
- issue des BAL (Bases Adresses Locales) qui sont l’inventaire des adresses créé par les communes.

À terme, ces dernières devraient devenir la seule source. La commune doit certifier ces adresses, c’est-à-dire valider que les adresses saisies sont justes.

L’image ci-dessous résume la situation pour consolider les données adresses

### **Comment accéder aux données d’adresses ?**

Il existe plusieurs méthodes pour accéder aux données

- **Récupérer directement les données**. Cette méthode s’adresse à des utilisateurs avancés.
- **Utiliser l’API de recherche**. Cette API peut rechercher des adresses soit via un appel unique par adresse soit en mode "*batch*": on passe un fichier avec une liste d’adresse, une par ligne et on retourne la première adresse retournée pour chacun des lignes.

### **Quels sont les usages de l’API adresse ?**

Les usages de l’API adresse sont principalement de deux natures :

- trouver par un formulaire une adresse pour la corriger et/ou récupérer des coordonnées en ayant une liste de choix pour trouver le résultat: c’est l’autocomplétion ;
- fournir un fichier tabulaire pour obtenir en retour une version enrichie des coordonnées et d’autres informations.

# **Qu’est-ce que le géocodage ?**

::: lexique Géocodage Le géocodage consiste à affecter des coordonnées géographiques (longitude/latitude) à une adresse postale (Wikipédia).

Il permet ainsi de positionner des adresses sur une carte ou encore de trouver les points de départ et d’arrivée pour déterminer votre trajet lorsque vous voyagez par exemple. :::

Pour réaliser un géocodage, il est nécessaire de disposer :

- des **données de référence** contenant numéro, nom de rue, [code INSEE](https://www.data.gouv.fr/en/datasets/code-officiel-geographique-cog/), code postal, nom de commune ;
- des **coordonnées géographiques** x et y qui sont généralement la longitude(x) et la latitude(y) ;
- une entrée correspondant à l’adresse recherchée.

### **Comment fonctionne un géocodeur ?**

Un géocodeur transforme une donnée textuelle des données de référence en utilisant des algorithmes qui séparent l’adresse en syllabes, mots et groupes de mots.

Les différents éléments sont indexés puis en s’appuyant sur des algorithmes relatifs à du traitement textuel, le géocodeur compare la similarité entre les mots constituant l’adresse à rechercher et ceux qui sont indexés depuis les données de référence.

Un algorithme permet généralement d’ordonner les résultats. Il s’agit par exemple de faire apparaitre en premier les résultats ayant les coordonnées fixes les plus proches ou encore ceux dont la population est la plus forte.

Il est également possible de filtrer selon des critères comme le pays (si le géocodeur a une vocation internationale, comme [Nominatim](https://nominatim.openstreetmap.org/)) ou encore par type de résultat.

En pratique, un certain nombre de géocodeurs visent à réaliser des recherches de communes et de POIs (Points Of Interest ou points d’intérêts) et pas seulement des adresses.

Le **géocodage peut aussi se faire de façon inverse**, c’est-à-dire retourner une adresse en envoyant une coordonnée. Dans ce cas de figure, il s’agit de trouver la donnée de référence la plus proche des coordonnées envoyées.

### **Les limites du géocodage**

Nous nous concentrons ici sur les cas liés aux adresses, le géocodeur utilisé par [adresse.data.gouv.fr](http://adresse.data.gouv.fr/) étant spécifiquement conçu pour répondre à ce besoin.

**La qualité des données de références**

Les données textuelles de l’adresse de référence ne sont pas toujours uniformes. Par exemple, "rue" peut être représentée par les lettres "r" ou "R" ou "rue" ou "Rue".

Il s’agit donc en premier lieu d’uniformiser les différentes manières de décrire le type de voie.

Il s’agit également d’omettre les articles lors d’une comparaison. Chercher "rue métanies" au lieu de "rue des métanies" par exemple.

D’un autre côté, les coordonnées géographiques peuvent manquer de précision. Dans certains cas, il arrive de disposer uniquement du centroïde de la commune, de la voie ou du lieu dit (point d’une zone géographique choisi au voisinage de son centre de gravité et dont les coordonnées servent de localisant pour cette zone).

Dans d’autres cas, les coordonnées peuvent avoir été interpolées : les adresses ont été positionnées en fonction du nombre de numéros dans une voie et la longueur de celle-ci.

**Les principales problématiques liées aux adresses**

- **Plusieurs communes pour un code postal**.

Cette problématique se pose par exemple lorsqu’omet le nom de la commune dans une adresse. En effet, 68,9% des codes postaux sont associés à plus d’une commune et jusqu’à 46 communes sont rattachées à un même code postal.

- **Plusieurs codes postaux pour une commune**.

1.5% des communes ont plus d’un seul code postal sur leur territoire. On compte même jusqu’à 9 codes postaux pour une même commune pour le cas extrême !

- **Des communes ont des noms identiques**.

10.6% des communes ont une ou plusieurs communes homonymes.

- **Des codes postaux n’ont pas le même code que celui du département**.

Ces cas de figure sont très rares (quelques dizaines).

- **Plusieurs noms de voie avec un nom identique sont situés à différents endroits pour une même commune**.

Cette situation s’explique en particulier avec la création des communes nouvelles qui a encouragé le regroupement de communes. Ce problème peut être réglé en ajoutant le nom de la commune déléguée dans l’adresse postale, en renumérotant les rues ou en les renommant. Or les géocodeurs ne gèrent pas forcément bien voir pas du tout l’ajout d’adresse de la commune déléguée.

- **Plusieurs coordonnées pour une même adresse**
    - Il peut exister des différences liées à la vision sur la position du numéro de l’adresse (entrée principale, boîte aux lettres, bâtiment, cage d’escalier, logement, parcelle, position dérivée du segment de la voie de rattachement, point d’accès technique, etc.) ;
    - Des référentiels différents selon les acteurs même si la BAN (Base Adresse Nationale) et les BAL (Bases Adresses Locales) amènent à une amélioration et une uniformisation des référentiels: données héritées de la Poste, de l’IGN, du cadastre, d’OpenStreetMap, des opérateurs réseaux (fibre, etc.).

# Cas pratiques

## C**omment faire si une recherche d’adresse ne fonctionne pas  ?**

- Vérifier en utilisant l’[autocomplétion](https://adresse.data.gouv.fr/base-adresse-nationale#4.4/46.9/1.7) :
    - tapez vote adresse. Par exemple, "20 avenue de Ségur". Si le numéro est bien proposé et que la commune est la bonne pour le premier résultat, c’est la manière dont vous avez récupéré l’adresse qui est en cause. Si vous êtes en mode "batch", la première adresse retournée peut être mauvaise et c’est la 2ème ou 3ème adresse que vous attendiez.
    - imaginons que vous pensiez que le numéro existe, mais ne le trouvez pas dans votre résultat de géocodage. Essayez alors de trouver la rue. Essayons "87 avenue de Ségur". On ne voit que des rues qui sont retournées suite à la recherche. Cliquez sur la rue qui semble correspondre à votre recherche. Cela va zoomer. Vous allez pouvoir voir s’il y a des adresses et lesquelles sont inventoriées.
- La donnée de référence n’est pas présente: c’est un oubli ou personne ne l’a encore produite
- Le résultat est une adresse BAL. Votre commune est entrée dans une démarche de recensement et valorisation de ces adresses. Vous pouvez confirmer si l’adresse existe.
- Adresse IGN vs adresse cadastre vs adresse BAL
- La donnée est présente, mais les termes de recherche ne permettent pas de la trouver

Vous êtes un particulier, vous pouvez récupérer les coordonnées de votre commune pour lui faire part de vos retours en passant par [https://adresse.data.gouv.fr/contribuer](https://adresse.data.gouv.fr/contribuer) puis en cherchant votre commune.

## Comment faire de l’a**utocomplétion d’adresse ?**

Il existe plusieurs solutions pour faire de l’autocomplétion dans un outil web.

Vous pouvez vous appuyer sur de nombreuses bibliothèques, celles-ci étant généralement liées à des bibliothèques cartographiques.

**Solutions basées sur Leaflet**

- [https://github.com/entrepreneur-interet-general/leaflet-geocoder-ban](https://github.com/entrepreneur-interet-general/leaflet-geocoder-ban)
- [https://github.com/komoot/leaflet.photon](https://github.com/komoot/leaflet.photon)

**Exemples**:

- [https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo_control.html](https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo_control.html)
- [https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo_search_bar.html](https://entrepreneur-interet-general.github.io/leaflet-geocoder-ban/demo/demo_search_bar.html)
- [https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-leaflet-photon.html](https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-leaflet-photon.html)

**Solutions basées sur OpenLayers**

- [https://github.com/webgeodatavore/photon-geocoder-autocomplete](https://github.com/webgeodatavore/photon-geocoder-autocomplete)
- [https://viglino.github.io/ol-ext/examples/search/map.control.searchban.html](https://viglino.github.io/ol-ext/examples/search/map.control.searchban.html)

**Exemples**:

- [https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-ol.html](https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-ol.html)

**Solutions indépendantes de bibliothèques cartographiques**

- [https://github.com/webgeodatavore/photon-geocoder-autocomplete](https://github.com/webgeodatavore/photon-geocoder-autocomplete)

**Exemples**:

- [Exemple avec Maplibre, mais non lié à Maplibre](https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-maplibre.html)
- [Exemple avec OpenLayers, mais non lié à OpenLayers](https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-openlayers.html)
- [Formulaire exemple 1](https://raw.githack.com/webgeodatavore/photon-geocoder-autocomplete/master/demo/index-no-map.html)
- [Formulaire exemple 2](https://gist.githack.com/ThomasG77/0b99013795f76699c5c9a0d7daf4411e/raw/a6b65c033efa73cecb3ea8473ba83aabc973d373/demo-ban-form-only-alternate.html)

## Comment faire du g**éocodage par adresse unitaire ?**

En utilisant Python et par appel unitaire, vous pouvez faire :

```
import requests
ADDOK_URL = '<http://api-adresse.data.gouv.fr/search/>'
params = {
    'q': '24 Rue des Diables Bleus 73000 Chambéry',
    'limit': 5
}
response = requests.get(ADDOK_URL, params=params)
j = response.json()
if len(j.get('features')) > 0:
    first_result = j.get('features')[0]
    lon, lat = first_result.get('geometry').get('coordinates')
    first_result_all_infos = { **first_result.get('properties'), **{"lon": lon, "lat": lat}}
    print(first_result_all_infos)
else:
    print('No result')
```

En JavaScript, vous pouvez utiliser [ces exemples](https://addok.readthedocs.io/en/latest/examples/#using-javascript-client-side) que ce soit pour un usage côté navigateur ou côté serveur (Node.js/deno).

## **Géocodage massif**

Pour réaliser un géocodage massif, il faut généralement vérifier le formatage de votre CSV.

**Python seul**

- [https://github.com/MTES-MCT/bulk-geocoding-python-client](https://github.com/MTES-MCT/bulk-geocoding-python-client) (attention, la solution fait des appels unitaires plutôt que des appels CSV)

Soit en partant des exemples [https://addok.readthedocs.io/en/latest/examples/](https://addok.readthedocs.io/en/latest/examples/)

```
import os
import math
import shutil
import requests

# Use <http://localhost:7878> if you run a local instance.
ADDOK_URL = '<http://api-adresse.data.gouv.fr/search/csv/>'

def geocode(filepath_in, requests_options, filepath_out='geocoded.csv'):
    with open(filepath_in, 'rb') as f:
        filename, response = post_to_addok(filepath_in, f.read(), requests_options)
        write_response_to_disk(filepath_out, response)

def geocode_chunked(filepath_in, filename_pattern, chunk_by_approximate_lines, requests_options):
    b = os.path.getsize(filepath_in)
    output_files = []
    with open(filepath_in, 'r') as bigfile:
        row_count = sum(1 for row in bigfile)
    with open(filepath_in, 'r') as bigfile:
        headers = bigfile.readline()
        chunk_by = math.ceil(b / row_count * chunk_by_approximate_lines)
        current_lines = bigfile.readlines(chunk_by)
        i = 1
        # import ipdb;ipdb.set_trace()
        while current_lines:
            current_filename = filename_pattern.format(i)
            current_csv = ''.join([headers] + current_lines)
            # import ipdb;ipdb.set_trace()
            filename, response = post_to_addok(current_filename, current_csv, requests_options)
            write_response_to_disk(current_filename, response)
            current_lines = bigfile.readlines(chunk_by)
            i += 1
            output_files.append(current_filename)
    return output_files

def write_response_to_disk(filename, response, chunk_size=1024):
    with open(filename, 'wb') as fd:
        for chunk in response.iter_content(chunk_size=chunk_size):
            fd.write(chunk)

def post_to_addok(filename, filelike_object, requests_options):
    files = {'data': (filename, filelike_object)}
    response = requests.post(ADDOK_URL, files=files, data=requests_options)
    # You might want to use <https://github.com/g2p/rfc6266>
    content_disposition = response.headers['content-disposition']
    filename = content_disposition[len('attachment; filename="'):-len('"')]
    return filename, response

def consolidate_multiple_csv(files, output_name):
    with open(output_name, 'wb') as outfile:
        for i, fname in enumerate(files):
            with open(fname, 'rb') as infile:
                if i != 0:
                    infile.readline()  # Throw away header on all but first file
                # Block copy rest of file from input to output without parsing
                shutil.copyfileobj(infile, outfile)

# Geocode your file all at once if it is small.
geocode(
    'annuaire-des-debits-de-tabac-2018-utf8-20lines.csv',
    {"columns": ['ADRESSE','CODE POSTAL','COMMUNE']},
    'annuaire-des-debits-de-tabac-2018-utf8-20lines.geocoded.csv'
)
# => data.geocoded.csv

Alternatively, geocode it by chunks when it is big.
chunk_by = 1000  # approximative number of lines.
myfiles = geocode_chunked('annuaire-des-debits-de-tabac-2018-utf8.csv', 'result-{}.csv', chunk_by, {"columns": ['ADRESSE','CODE POSTAL','COMMUNE']})
# Merge files
consolidate_multiple_csv(myfiles, 'myresult.csv')
# Clean files
[os.remove(f) for f in myfiles if os.path.isfile(f)]

```

**JavaScript**

- Geocodage massif avec une solution en ligne de commande utilisant Node.js [https://github.com/jdesboeufs/addok-geocode-stream](https://github.com/jdesboeufs/addok-geocode-stream)

# **Autres outils utilisant la BAN**

Vous faites du SIG, néophyte comme expert et utilisez le logiciel SIG QGIS?

- Recherchez des adresses [https://oslandia.gitlab.io/qgis/french_locator_filter/](https://oslandia.gitlab.io/qgis/french_locator_filter/)
- Géocoder des tables depuis une table dans QGIS QBano [https://www.data.gouv.fr/en/reuses/plugin-experimental-qbano-pour-qgis/](https://www.data.gouv.fr/en/reuses/plugin-experimental-qbano-pour-qgis/). À ce jour, le plug-in est mal maintenu, il faut mieux récupérer [ce zip](https://labs.webgeodatavore.com/partage/QBano.zip) puis installer le plug-in depuis celui-ci.
- Avec PyQGIS, vous pouvez aussi géocoder en partant de [https://gis.stackexchange.com/a/395415/638](https://gis.stackexchange.com/a/395415/638)

Vous utilisez d’autres outils?

- Vous faites du R? [https://cran.r-project.org/web/packages/banR/index.html](https://cran.r-project.org/web/packages/banR/index.html)
- Vous souhaitez intégrer la recherche dans le CMS SPIP? [http://plugins.spip.net/gisban.html](http://plugins.spip.net/gisban.html)

# **Gros consommateurs de l’API [api-adresse.data.gouv.fr](http://api-adresse.data.gouv.fr/)?**

Si vous êtes un organisme public, vous pouvez faire une demande pour augmenter les quotas par défaut sur l’API publique [api-adresse.data.gouv.fr](http://api-adresse.data.gouv.fr/)

Si ce n’est pas le cas, vous pouvez vous autohéberger. Dans ce cas, le plus simple est de passer par l’utilisation de Docker.

- [https://github.com/etalab/addok-docker#readme](https://github.com/etalab/addok-docker#readme)

Il est possible aussi de regarder du côté de Addok, le logiciel open source derrière l’API Adresse si vous avez des besoins plus spécifiques au niveau de votre installation ou de la personnalisation de la recherche.

- [https://github.com/addok/addok](https://github.com/addok/addok)

# **Géocodeurs alternatifs**

Même si nous avons abordé l’usage du géocodeur Addok, utilisé par [adresse.data.gouv.fr](http://adresse.data.gouv.fr/), il existe d’autres possibilités. Vous pouvez ainsi installer des solutions OpenSource comme celles ci-dessous.

- [Pelias](https://github.com/pelias/pelias)
- [Photon](https://github.com/komoot/photon)
- [Nominatim](https://github.com/osm-search/Nominatim)

Il est aussi possible de détourner Addok pour lui faire effectuer d’autres types de recherche, par exemple des POIs en utilisant le projet [https://github.com/osm-fr/osmpoi4addok](https://github.com/osm-fr/osmpoi4addok) par exemple

En dernier lieu, vous pouvez aussi vous appuyer sur les services mis à disposition par l’IGN pour le géocodage [https://geoservices.ign.fr/services-web-experts-calcul](https://geoservices.ign.fr/services-web-experts-calcul) (voir les sections "Services de géocodage" et "Service de recherche Look4"). Vous pouvez aussi regarder [leur nouveau service de géocodage.](https://geoservices.ign.fr/documentation/services/services-beta/nouveau-service-de-geocodage-demonstrateur)
