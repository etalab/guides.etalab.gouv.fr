---
permalink: /producteurs-schemas/phase-concertation
---

# Phase de concertation

::: lexique Phase de concertation
La phase de concertation est la phase où plusieurs parties prenantes se rassemblent pour définir un schéma de données.
:::

La phase de concertation est la phase centrale de la création d’un schéma. En rassemblant diverses partie prenantes (producteurs, réutilisateurs, experts métiers et techniques), par le biais de discussions, vous allez définir votre schéma de données :

- les champs ;
- les types associés de ces champs ;
- les contraintes de chaque champ (entier positif, texte dans une liste fermée etc.) ;
- la description de chaque champ ;
- une documentation associée au schéma décrivant le contexte, les acteurs, les cas d’usages.

## Procédure de collaboration

Nous conseillons de mener cette phase de concertation en travaillant sur un document partagé, accessible en ligne, tel qu’un [Framapad](https://framapad.org) ou Google Doc. L’important est que plusieurs contributeurs puissent contribuer (modifier ou mettre des commentaires) sans avoir besoin d’être présents physiquement ou de recevoir des e-mails avec des versions intermédiaires.

En complément de ce document partagé, nous vous conseillons d’organiser plusieurs réunions afin de débattre du modèle de données à produire. L’implication d’une multitude d’acteurs est clé : vous devez rassembler des producteurs, experts métiers, experts techniques et réutilisateurs. La richesse des profils et des enjeux permettra d’aboutir à une solution la plus adaptée.

::: tip Référencer votre schéma
Référencer votre schéma sur [schema.data.gouv.fr](https://schema.data.gouv.fr) vous permettra de bénéficier de conseils de la part d’Etalab et de ses partenaires institutionnels et associatifs. Découvrez comment [référencer votre schéma en cours de concertation](4-integration-schema-datagouv.md).
:::

## Grands principes
Nous avons listé ci-dessous plusieurs conseils qui vous permettront de construire un schéma de qualité.

- **Profiter de l’existant.** De nombreux standards existent déjà, qu’ils concernent des formats de données ou des formats de champs. Certains standards sont devenus incontournables aujourd’hui, comme [ISO-8601](https://fr.wikipedia.org/wiki/ISO_8601) pour les dates ou [WGS 84](https://fr.wikipedia.org/wiki/WGS_84) pour les coordonnées géographiques.
- **Identifier et associer l’écosystème.** Les personnes/organisations que vous associez sont la meilleure garantie d’un standard efficace et largement adopté. Les producteurs d’une part qui connaissent la réalité de leurs données, de la collecte, etc. et qui ont leurs propres usages. Et les usagers et leurs besoins d’autres part, qu’ils soient déjà connus, « sous le radar » ou en devenir.
- **Prendre le temps.** Un standard est susceptible de concerner beaucoup de producteurs et d’usagers et changer un standard peut avoir un impact important. Il est donc crucial de prendre le temps d’obtenir tous les retours avant de publier un standard utilisable par le plus grand nombre. Un standard devrait être publié quand il est prêt, non pas en fonction d’un impératif de délai.
- **Lever les implicites et les ambiguïtés.** Le diable est dans les détails… Toutes les spécifications d’un standard doivent être les plus claires possibles, y compris pour des cas/données qui n’existent pas encore mais pourraient apparaître à l’avenir.
- **Éviter la redondance mais sans l’exclure absolument.** 3 champs pour définir une latitude et une longitude (`latitude`, `longitude`, `lat-lon`) est inutilement redondant. Toutefois, préciser le nom d’une commune en plus de son code INSEE rend les données plus faciles à lire.
- **Utiliser des données pivot relevant d’un référentiel ouvert** pour relier les données à d’autres données, par exemple l’utilisation du numéro SIREN pour identifier des organisations. Ce principe permet aussi d’éviter l’abondance de détails et d’aller à l’essentiel : l’obtention d’informations complémentaires se fera par le biais d’un autre référentiel.

::: tip Exemples à votre disposition
Vous pouvez parcourir des fichiers de schémas sur [schema.data.gouv.fr](https://schema.data.gouv.fr) pour faciliter votre travail. Consultez par exemple [le schéma des lieux de stationnement](https://schema.data.gouv.fr/etalab/schema-stationnement/latest.html).

En complément, nous avons rédigé [un guide dédié à la préparation de jeux de données](../qualite/README.md) qui pourrait vous être utile pour définir votre schéma.
:::

## Points de sortie
À l’issue de cette phase, vous devriez :

- Avoir réuni divers partenaires afin de collaborer sur votre schéma ;
- Avoir décidé des différents champs de votre schéma, leurs types et définitions.