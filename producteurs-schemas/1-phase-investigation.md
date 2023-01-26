---
permalink: /producteurs-schemas/phase-investigation
---

# Phase d’investigation

::: lexique Phase d’investigation
La phase d’investigation est la première phase de la création d’un schéma de données. Cette phase a pour finalité de s’asssurer que la création d’un schéma est pertinente et vise à aboutir à la décision de continuer ou de choisir une autre alternative.
::: 

## Étapes à suivre
Afin de déterminer s’il est nécessaire de créer ou non un schéma de données, nous vous recommandons de suivre les étapes suivantes :

1. Lire attentivement les différentes sections de ce guide ;
1. Organiser une réunion réunissant des acteurs métiers, techniques et de potentiels réutilisateurs. Lors de cette réunion, vous débatterez de la pertinence de la création de votre schéma de données;
1. Entrer en contact avec [les équipes d’Etalab](https://www.etalab.gouv.fr/contact) et leurs partenaires en [référençant votre schéma](5-integration-schema-datagouv.md#qui-peut-référencer-des-schémas-), afin de bénéficier de conseils lors de la création de votre schéma de données, d’une visibilité accrue pour celui-ci et d’une assistance d’experts.

## Exemples

### Situations favorables à la création d’un schéma de données

Ces situations sont des exemples où il est pertinent de créer un schéma de données :

-
    > Le ministère chargé des transports souhaite consolider une base nationale des lieux pouvant servir de points de covoiturage. Les collectivités territoriales sont en charge de la création, recensement et aménagement de ces lieux.

    Il est pertinent de créer un schéma de données car un grand nombre de producteurs de données doivent produire le même jeu de données. Un schéma facilitera la diffusion des prérequis, permettra la validation des données et facilitera l’agrégation nationale.
-
    > L’INSEE souhaite diffuser le Code Officiel Géographique. Il rassemble des données sur des communes, des cantons, des arrondissements, des départements, des régions et des pays. Ce fichier est actualisé tous les ans.

    Il est pertinent de créer un schéma car ces données sont des données de référence. Un grand nombre de réutilisateurs est susceptible d’utiliser ces données. Il est primordial que ces réutilisateurs aient accès à une documentation de qualité, que la structure des fichiers des données reste stable dans le temps et que les données mises à disposition soient de bonne qualité.

### Situations où le référencement d’un schéma sur schema.data.gouv.fr ne semble pas nécessaire

Ces situations sont des exemples où il ne semble pas pertinent de créer ou diffuser un schéma :

-
    > Une administration centrale diffuse des statistiques d’activité d’un bureau, en open data, de manière annuelle.

    Avec ces seules informations, la création d’un schéma ne semble pas nécessaire. En effet, il n’y a qu’un seul producteur et le potentiel de réutilisation semble limité.

::: warning Bénéfices des schémas de données en interne
Bien qu’il ne paraisse pas nécessaire dans certaines situations de créer et diffuser un schéma, vous pouvez choisir de le faire. En effet, les schémas de données comportent de nombreux avantages (documentation, montée en qualité, réutilisations, etc.) qui sont bénéfiques, même lorsque les données sont utilisées uniquement en interne.
:::

## Points de sortie
À l’issue de cette phase, vous devriez :

- Connaître les schémas de données ;
- Être en mesure de décider si votre projet requiert la création d’un schéma de données ;
- Savoir si votre schéma de données devra être référencé à terme sur schema.data.gouv.fr.
