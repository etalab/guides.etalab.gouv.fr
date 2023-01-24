---
permalink: /producteurs-schemas/phase-promotion-maintien
---

# Phase de promotion et de maintien

::: lexique Phase de maitien et de promotion
La phase de maitien est la dernière phase du cycle de vie d'un schéma. Elle consiste à itérer sur la version actuelle en prenant en compte des évolutions du terrain et des retours des producteurs et des réutilisateurs pour peaufiner la structure du schéma. Elle est étroitement liée à la promotion du schéma qui permettra, grâce à son adoption par le plus de parties prenantes possibles, une montée en qualité et en quantité d'utilisations.
:::

Modifier ou commenter un schéma contribue à faire vivre l'écosystème open data et permettra de vous identifier comme contributeur.rice sur un schéma spécifique.


## Promouvoir votre schéma de données

Vous avez participé à la création d'un schéma de données, un compromis a été trouvé pour sa structure et son contenu, il a été publié et des jeux de données l'utilisant sont sortis. C'est une excellente chose et déjà une source de fierté. Pourquoi s'arrêter en si bon chemin ? Un schéma est l'amorce idéale pour que les données soient réutilisées au mieux. [Les équipes d’Etalab](https://www.etalab.gouv.fr/contact) ont mis au point des outils qui permettent d'agréger toutes les données publiées par type de schéma afin de créer des fichiers consolidés à l'échelle nationale (par exemple [pour les données IRVE](https://www.data.gouv.fr/fr/datasets/fichier-consolide-des-bornes-de-recharge-pour-vehicules-electriques/)) et ainsi permettre à des solutions à grande échelle d'émerger.

De nouveaux acteurs peuvent vouloir publier des données qui rentrent dans le cadre de votre schéma, mais peuvent ne pas en avoir connaissance, ou ne pas avoir les compétences techniques pour se l'approprier. Pour faciliter l'adoption, vous pouvez par exemple :
* utiliser votre réseau de connaissances pour inciter d'autres parties prenantes à publier leurs données, que ce soit sous votre schéma ou dans d'autres domaines, qui pourront donner lieu à d'autres schémas ;
* aider des acteurs souhaitant utiliser votre schéma, en leur faisant bénéficier de votre expérience, par exemple en leur répondant directement dans les commentaires sur [data.gouv.fr](https://www.data.gouv.fr) ;
* diffuser vos travaux à vos partenaires et au grand public, sur vos réseaux sociaux ou newsletters, pour mettre en valeur votre proactivité et susciter de l'intérêt ;
* interagir avec les réutilisateurs afin de mieux cerner leurs besoins, suggérer des améliorations ou des champs d'investigation.

Au-delà de la dimension légale, l'ouverture des données est une preuve de transparence et de bonne volonté.

## Maintenir votre schéma de données

Aussi exhaustive qu'ait été la phase de concertation, il est possible que des modifications soient nécessaires afin de rendre plus précis ou plus accessible par exemple. Clarifications de la documentation, corrections d’erreurs, évolutions du cadre réglementaire, etc. sont autant de raisons où il est indispensable de mettre en œuvre une nouvelle version.

schema.data.gouv.fr récupère le contenu de votre dépôt via des `releases` de celui-ci, c'est à dire des versions packagées de votre code (schéma + documentation). Avec ce système, il est alors possible pour schema.data.gouv.fr de suivre l'évolution formelle de votre schéma et de référencer les différentes versions au cours du temps. Cela permet également au concepteur de schémas de considérer les branches Git (`main` ou autre) comme un espace de développement qui est dissocié du référencement sur schema.data.gouv.fr

Une fois que l'état de votre branche principale, `main` par exemple, vous conviendra, vous pourrez sur Github ou Gitlab créé une release. Pour cela, il suffit d'ajouter un tag et une version correspondant à la version que vous souhaitez publier. Celle-ci sera par la suite automatiquement récupérée par schema.data.gouv.fr et affichée.

Si un schéma que vous maintenez doit être modifié, vous pouvez suivre les étapes suivantes :
1. faire une nouvelle [phase de concertation](2-phase-concertation.md) afin d'évoquer les problématiques qui imposent un changement et de trouver la solution la plus adaptée ; Si vous n'avez pas d'espace pour cela, nous vous conseillons de publier une [`issue` sur le dépôt Github de schema.data.gouv.fr](https://github.com/etalab/schema.data.gouv.fr/issues).

2. lorsqu'un accord est trouvé, mettre à jour techniquement le schéma lui-même (cf. le paragraphe ci-après);
3. mettre à jour la documentation du schéma ;
4. déployer les mises à jour sous un nouveau tag de version ;
5. communiquer sur cette mise à jour.

Lorsque les modifications à faire à un schéma font consensus, il est nécessaire de les implémenter et de déployer une nouvelle version. Pour ce faire, vous pouvez suivre les étapes suivantes :
1. répertorier toutes les changements à faire avant de les implémenter : anticiper l'impact sur les fichiers techniques et sur la documentation (notamment l'incrémentation de la version)
2. faire les modifications listées à l'étape précédente :
    - en local, puis pousser les changements avec les commandes git (add, commit et push)
    - ou directement sur Github
3. créer une release (nouvelle version) :
    - sur la page Github de votre schéma, cliquer sur "X tags" (à côté des branches) : ici sont listées toutes les versions du schéma
    - cliquer sur "Releases" puis "Draft a new release"
    - indiquer le nom de la nouvelle version dans "Choose a tag" : par exemple si la version actuelle est v1.0.1, la nouvelle sera v1.0.2 (dans certains cas, il sera opportun de passer en 1.1.1 ou en 2.0.1)
    - la branche cible ("target") est normalement la branche "main"
    - documenter la nouvelle version : ajouter un titre et une description exhaustive des changements
    - publier la release ("Publish release")


Que ce soit pour des considérations techniques ou "conceptuelles", [les équipes d’Etalab](https://www.etalab.gouv.fr/contact) sont disponibles pour vous accompagner dans le processus de mise à jour de votre schéma.


## Points de sortie
À l’issue de cette phase, vous devriez :

- Comprendre l'importance de la proactivité dans la promotion, la diffusion et le maintien d'un schéma ;
- Avoir des pistes d'actions concrètes pour porter un schéma auprès d'autres parties prenantes ;
- Savoir pourquoi, quand et comment mettre à jour un schéma de données.