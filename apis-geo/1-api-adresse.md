# Adresse

## Introduction

Il existe une doc officielle qui répond déjà en grande partie si vous êtes familier avec les APIs

- La documentation générale autour de l'adresse <https://doc.adresse.data.gouv.fr>
- La documentation de l'API <https://adresse.data.gouv.fr/api-doc/adresse>

Le but ici est de compléter cette documentation par un peu plus de pratique que faire un appel simple vers l'API. Nous allons d'abord faire un petit rappel

## Principes du géocodage

- Rappels (TODO)
- Limites du géocodage (TODO)
- Debugger pour savoir à qui s'adresser quand une recherche d'adresse ne fonctionne pas (TODO)

## Usages

### Autocomplétion

Vous avez-besoin de faire de l'auto-complétion dans un outil web?

- <https://github.com/entrepreneur-interet-general/leaflet-geocoder-ban>
- <https://github.com/webgeodatavore/ol3-photon>

### Utilisateurs du logiciel SIG QGIS

Vous faites du SIG, néophyte comme expert

- Recherchez des adresses <https://oslandia.gitlab.io/qgis/french_locator_filter/>
- Géocodez des tables depuis une table dans QGIS QBano <https://www.data.gouv.fr/en/reuses/plugin-experimental-qbano-pour-qgis/>
- TODO: adapter <https://gis.stackexchange.com/a/395415/638>

### Géocodage massif

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

**Attention si vous consommez beaucoup de ressources**

Vous êtes un organisme public? Vous pouvez faire une demande pour augmenter les quotas par défaut sur l'API publique api-adresse.data.gouv.fr

Si ce n'est pas le cas, vous pouvez vous auto-héberger. Dans ce cas, le plus simple est de passer par l'utilisation de Docker

- <https://github.com/etalab/addok-docker#readme>

Il est possible aussi de regarder du côté de Addok, le logiciel open-source derrière l'API Adresse si vous avez des besoins plus spécifiques au niveau de votre installation ou de la personnalisation de la recherche

- <https://github.com/addok/addok>


### Autres

- Vous faites du R? <https://cran.r-project.org/web/packages/banR/index.html>
- Vous souhaitez intégrer la recherche dans le CMS SPIP? <http://plugins.spip.net/gisban.html>
