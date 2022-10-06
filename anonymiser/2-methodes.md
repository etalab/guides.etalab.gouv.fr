---
permalink: /anonymisation/methodes/
---

# Familles de méthodes

De nombreuses méthodes proposent des solutions approchées d'anonymisation. Ces méthodes répondent à des objectifs légèrement différents.

## Occulter et agréger

Une première famille de méthodes viser à occulter la base de données initiale sans la traverstir totalement : à des fins d'anonymisation, des champs devront être entièrement retirés de la base de données, des valeurs précises devront être remplacés par des tranches plus larges (par exemple, un âge peut être remplacé par une tranche d'âge), et des entrées de la base de données trop faciles à isoler (car trop exceptionnel) devront être retirés de la base de données publiées.

Les méthodes répondant à cet objectif sont adaptées à une démarche d'*open data*, mais ne garantissent pas nécessairement le respect des trois critères d'anonymisation présentés [précédemment](/anonymiser/1-principe.md#les-critères-danonymisation)), d'où la nécessité de tester rétrospectivement que la base n'est pas ré-identifiable par croisement avec des sources tierces accessibles.

Pour en savoir plus sur ces méthodes : [cliquer ici](/anonymiser/2a-methodes-agregation.md)).

## Synthétiser

Une autre approche consiste à générer des données artificielles ressemblant assez à la base de données initiale pour que l'analyse soit pertinente. Dans la mesure où les données publiées sont artificielles, elles ne contiennent pas directement les données réelles. Cependant cette stratégie n'est pas directement adaptée à une politique d'*open data* (parce que la donnée publiée est artificielle), et la manière de générer ces données de synthèses dépend de l'usage ultérieur que l'on souhaite en faire. De la même manière que les approches d'occultation de données personnelles, l'approche de données de synthèse nécessite aussi une vérification a posteriori que des secrets protégés n'ont pas "fuité" dans la base synthétique.  

Cette approche est adaptée pour des traitements statistiques ou des algorithmes de machine learning qui viseraient à apprendre des invariants sur les données initiales sans éventer les secrets protégés qu'elles contenaient.

Pour en savoir plus sur cette approche : [cliquer ici](/anonymiser/2b-methodes-synthese.md)).

## Garantir la confidentialité individuelle

L'approche de la confidentialité différentielle suit un tout autre paradigme : il s'agit de fournir à la demande des statistiques calculées sur des agrégats (et non les échantillons en eux-mêmes). Les statistiques fournies sont délibérement bruitées pour empêcher la réidentification indirecte d'une ligne de la base de données. La confidentialité différentielle s'appuie sur la notion de *privacy budget* : chaque statistique fournie par le système de confidentialité différentielle des fragments d'information qui, mis bout à bout permettraient potentiellement de remonter à des données confidentielles ; pour empêcher cette levée progressive de confidentialité, le système impose donc une limite haute au nombre et à la qualité des requêtes que l'on peut effectuer. Quand cette limite est atteinte, il n'est plus possible d'adresser de nouvelles demandes au système.

Cette approche garantit empiriquement un niveau de confidentialité élevé, où les secrets sont bruités et occultés, mais son cadre d'application peut être plus limité que les approches décrites précédemment, dans la mesure où l'on a pas éternellement accès aux données initiales.

Cette approche reste néanmoins adaptée pour des traitements statistiques et des algorithmes de machine learning qui viseraient à apprendre des invariants sur les données.

Pour en savoir plus sur cette approche : [cliquer ici](/anonymiser/2c-methodes-differentielle.md)).
