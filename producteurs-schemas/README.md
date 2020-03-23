---
permalink: /producteurs-schemas/
---

::: tip Version bêta
Ce guide a été publié initialement fin mars 2020. Il est amené à être ajusté suite aux retours de nos partenaires et lecteurs. Vous êtes invités à [entrer en contact avec nous](https://etalab.gouv.fr/contact).
:::

# Introduction

::: lexique Schémas de données
Les schémas de données permettent de décrire la structure d'un jeu de données. Ils indiquent clairement quels sont les différents champs, comment sont représentées les données, quelles sont les valeurs possibles etc.

Synonymes : *modèle de données*, *modèle logique de données*, *schéma*.
:::

La création d’un jeu de données en conformité avec un schéma de données existant apporte plusieurs bénéfices :
* Le jeu de données créé peut être facilement croisé avec d’autres jeux de données conformes au schéma de données utilisé ;
* L’interopérabilité des données et leur croisement est simplifié ;
* Si le jeu de données que vous créez est une agrégation de plusieurs fichiers produits par différents acteurs, la formalisation et le partage d’un schéma de données facilite le travail d’agrégation des données - ce schéma devient donc un standard pour votre communauté ;
* La formalisation d’un schéma de données assure une pérennité des fichiers dans le temps ;
* La documentation d’un schéma de données existant est déjà rédigée et accessible.

Il est également possible de vérifier la conformité d'un jeu de données vis-à-vis d'un schéma de données, ce qui permet de valider un premier niveau de qualité de votre jeu de données. Par ailleurs, il est aussi possible de générer des jeux de données d’exemple ou de proposer des formulaires de saisie standardisés.

::: tip schema.data.gouv.fr
Le site [schema.data.gouv.fr](https://schema.data.gouv.fr) est l’initiative de la plateforme [data.gouv.fr](https://data.gouv.fr). L’objectif de ce site est de référencer les schémas de données publiques existants en France.
:::

## À qui s’adresse ce guide ?

Ce guide s’adresse à **des personnes susceptibles de créer des schémas de données**. Vous pouvez vous trouver dans cette situation si vous envisagez de partager des données avec des partenaires ou à tout le monde en open data.

## À quoi sert-il ?

Ce guide propose de vous accompagner lors des phases nécessaires à la création d’un schéma de données et à son référencement sur [schema.data.gouv.fr](https://schema.data.gouv.fr) le cas échéant.

1. **Phase d’investigation** : envisager de créer un schéma de données ;
1. **Phase de concertation** : rassembler plusieurs parties prenantes pour créer un schéma de données ;
1. **Phase de construction** : implémenter le schéma de données obtenu après la phase de concertation.

Il propose un processus à suivre, des bonnes pratiques et des outils.

::: tip Conseil de lecture
Nous vous recommandons de lire une première fois ce guide **en intégralité** afin de prendre connaissance des différentes phases. Vous pourrez ensuite vous référer aux pages pertinentes au fur et à mesure de votre avancée.
:::
