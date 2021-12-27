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

Nous allons nous concentrer sur les cas liés aux géocodages sur des adresses, le géocodeur utilisé par adresse.data.gouv.fr étant ciblé spécifiquement pour ce besoin.

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

L'image ci-dessous résume la situation

![](./images/schema-donnees-ban.svg)

par SVG https://adresse.data.gouv.fr/_next/image?url=%2Fimages%2Fdonnees-nationales%2Fschema-donnees-ban.svg&w=2048&q=75 issue de https://adresse.data.gouv.fr/donnees-nationales


L'adresse n'est pas trouvée: comprendre ce qui peut l'expliquer

- vérifier en utilisant l'autocomplétion sur https://adresse.data.gouv.fr/base-adresse-nationale#4.4/46.9/1.7
  - tapez vote adresse. Par exemple, "20 Avenue de Ségur". Si dans les résultats vous voyez que le numéro est bien proposé et que la commune est la bonne, c'est la manière dont vous avez récupéré l'adresse qui est en cause.
  - imaginons que vous pensiez que le numéro existe mais ne le trouvez pas. Essayez alors de trouver la rue. Essayons "87 avenue de Ségur". On ne voit que des rues qui sont retournées suite à la recherche. Cliquez sur la rue qui semble correspondre à votre recherche. Cela va zoomer. Vous allez pouvoir voir s'il y a des adresses et lesquelles sont inventoriées.
- la donnée de référence n'est pas présente: c'est un oubli ou personne ne l'a encore produite
- adresse IGN vs adresse cadastre vs adresse BAL

- la donnée est présente mais les termes de recherche ne permettent pas de la trouver

Vous êtes un particulier, vous pouvez récupérez les coordonnées de votre commune pour lui faire part de vos retours en passant par https://adresse.data.gouv.fr/contribuer puis en cherchant votre commune.


## Usages

### Autocomplétion

Vous avez-besoin de faire de l'auto-complétion dans un outil web?

- <https://github.com/entrepreneur-interet-general/leaflet-geocoder-ban>
- <https://github.com/komoot/leaflet.photon>
- <https://github.com/webgeodatavore/ol3-photon>
- <https://viglino.github.io/ol-ext/examples/search/map.control.searchban.html>

### Utilisateurs du logiciel SIG QGIS

Vous faites du SIG, néophyte comme expert

- Recherchez des adresses <https://oslandia.gitlab.io/qgis/french_locator_filter/>
- Géocodez des tables depuis une table dans QGIS QBano <https://www.data.gouv.fr/en/reuses/plugin-experimental-qbano-pour-qgis/>
- TODO: adapter <https://gis.stackexchange.com/a/395415/638>

### Géocodage massif

Gros warning: le formatage du CSV

Avec Pandas (TODO: incomplet)

```
import pandas as pd
import numpy as np
import time

start = time.time()
#read data in chunks of 1 million rows at a time
chunks = pd.read_csv('huge_data.csv',chunksize=1000000)
end = time.time()
print("Read csv with chunks: ",(end-start),"sec")
for i, chunk in enumerate(chunks):
    print(f'{i}'.zfill(5))
    print(chunk)

#pd_df = pd.concat(chunks, ignore_index=True)

# Adapté de https://medium.com/analytics-vidhya/optimized-ways-to-read-large-csvs-in-python-ab2b36a7914e
```

Python seul

TODO avec <https://stackoverflow.com/questions/4956984/how-do-you-split-reading-a-large-csv-file-into-evenly-sized-chunks-in-python>

Soit
https://github.com/MTES-MCT/bulk-geocoding-python-client

Soit
https://addok.readthedocs.io/en/latest/examples/

Avec NodeJS, https://github.com/jdesboeufs/addok-geocode-stream

**Attention si vous consommez beaucoup de ressources**

Vous êtes un organisme public? Vous pouvez faire une demande pour augmenter les quotas par défaut sur l'API publique api-adresse.data.gouv.fr

Si ce n'est pas le cas, vous pouvez vous auto-héberger. Dans ce cas, le plus simple est de passer par l'utilisation de Docker

- <https://github.com/etalab/addok-docker#readme>

Il est possible aussi de regarder du côté de Addok, le logiciel open-source derrière l'API Adresse si vous avez des besoins plus spécifiques au niveau de votre installation ou de la personnalisation de la recherche.

- <https://github.com/addok/addok>


### Autres

- Vous faites du R? <https://cran.r-project.org/web/packages/banR/index.html>
- Vous souhaitez intégrer la recherche dans le CMS SPIP? <http://plugins.spip.net/gisban.html>

## Géocodeurs alternatifs à Addok, utilisé par adresse.data.gouv.fr

- [Pelias](https://github.com/pelias/pelias)
- [Photon](https://github.com/komoot/photon)
- [Nominatim](https://github.com/osm-search/Nominatim)

Il est aussi possible de détourner Addok pour lui faire effectuer d'autres types de recherche, par exemple des POIs en utilisant le projet https://github.com/osm-fr/osmpoi4addok

https://geoservices.ign.fr/services-web-experts-calcul (voir les sections "Services de géocodage" et "Service de recherche Look4")

https://geoservices.ign.fr/documentation/services/services-beta/nouveau-service-de-geocodage-demonstrateur


Usage des géocodeurs

Autocompletion
recherche automatique en batch
routing: recherche pour trouver les coordonnées pour ensuite trouver le point du graphe le plus proche de ces coordonnées
