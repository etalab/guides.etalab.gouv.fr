---
permalink: /producteurs-schemas/phase-construction
---

# Phase de construction

::: lexique Phase de construction
La phase de construction consiste à implémenter le schéma de données obtenu après la phase de concertation : choisir un standard, renseigner les fichiers requis, les tester et les diffuser.
:::

Durant cette phase, vous devez mobiliser des personnes possédant des compétences techniques. Cette phase consiste à transcrire les décisions prises lors de la phase de concertation dans des schémas en suivant des standards techniques.

## Choisir un standard

Il existe plusieurs standards de schémas de données. Le standard est à choisir en fonction de la nature des données concernées et des habitudes de l’écosystème produisant ou réutilisant les données liées au schéma.

Les principaux standards sont les suivants :

- [Table Schema](https://frictionlessdata.io/specs/table-schema/), schéma au format JSON, permettant de décrire des données tabulaires (sous forme de tableurs ou de CSV) ;
- [JSON Schema](https://json-schema.org), schéma au format JSON, permettant de décrire des documents JSON ;
- [XML Schema Definition (XSD)](https://www.w3.org/TR/xmlschema11-1/), schéma au format XML, permettant de décrire des documents XML.

Notez que tous ces standards sont supportés par [schema.data.gouv.fr](https://schema.data.gouv.fr).

## Créer votre schéma

Une fois un standard choisi, il faudra créer les fichiers requis pour modéliser vos données. La documentation de chaque standard décrit le contenu des fichiers à renseigner. Reportez-vous aux documentations respectives pour tirer parti des fonctionnalités avancées offertes : types de données et contraintes sur les valeurs en particulier.

Il est souvent possible de vérifier qu’un fichier correspond à un standard à l’aide d’outils en ligne ou en ligne de commande. Utilisez ces outils pour vérifier que vos productions correspondent au standard.

::: tip Exemples à votre disposition
Vous pouvez parcourir des fichiers de schémas sur [schema.data.gouv.fr](https://schema.data.gouv.fr) pour faciliter votre travail. Consultez par exemple [le fichier TableSchema décrivant les lieux de stationnement](https://schema.data.gouv.fr/schemas/etalab/schema-stationnement/latest/schema.json).
:::

## Publier et diffuser votre schéma

Une fois votre schéma créé, il est nécessaire de le publier et de le diffuser pour que d’autres personnes puissent en bénéficier. Nous vous recommandons de publier vos schémas en tant que logiciels libres, sur votre forge de développement ou par le biais de [GitLab](https://about.gitlab.com) ou [GitHub](https://github.com).

Vous bénéficierez alors des avantages habituels des dépôts de code Git en ligne : historique des modifications, fonctionnalités de tickets ou de demandes de modifications.

::: tip Exemples à votre disposition
Vous trouverez plusieurs dépôts Git de schémas sur [schema.data.gouv.fr](https://schema.data.gouv.fr). Consultez par exemple [le dépôt TableSchema décrivant les lieux de stationnement](https://github.com/etalab/schema-stationnement) sur GitHub.
:::

## Référencer votre schéma sur schema.data.gouv.fr

Pour faciliter la découverte de votre schéma et des données sous-jacentes, nous vous recommandons de faire référencer votre schéma sur [schema.data.gouv.fr](https://schema.data.gouv.fr). Nous avons rédigé [une page dédiée](4-integration-schema-datagouv.md) à ce sujet décrivant les plus-values, prérequis et démarches à suivre.

## Faire évoluer votre schéma

Une fois votre schéma défini et implémenté, le travail ne s’arrête pas là. Au-delà du besoin de diffusion et de promotion, il est probable que vous deviez faire des modifications : clarifications de la documentation, corrections d’erreurs, évolutions du cadre réglementaire etc. Autant de raisons où il est nécessaire de mettre en œuvre une nouvelle version.

Posséder un dépôt Git pour votre schéma vous permettra d’avoir plusieurs versions et tags. Notez que [schema.data.gouv.fr](https://schema.data.gouv.fr) supporte plusieurs versions pour un schéma et affiche les modifications effectuées au fur et à mesure dès lors que ces modifications sont renseignées dans un fichier dédié.
