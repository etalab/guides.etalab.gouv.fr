---
permalink: /anonymisation/outils/
---

# Quelques outils pour faciliter l'anonymisation

Ci-dessous quelques outils qui peuvent aider à anonymiser des bases de données. Cette liste n'est évidemment pas exhaustive, et tout retour d'expérience que vous [souhaiteriez nous apporter](mailto:lab-ia@data.gouv.fr)) permettra d'étayer cette page.

:warning: Attention, l'utilisation de ces outils n'est pas nécessairement suffisante pour valider les trois critères de l'anonymisation [lorsqu'il n'est plus possible d'indivualider, de corréler, et d'inférer d'informations sur les individus](/anonymiser/1-principe.md). Une analyse approfondie des risques de ré-identification est nécessaire si l'on décide de s'appuyer sur une solution sur étagère.

### ARX Deidentifier

ARX Deidentifier est un logiciel qui propose des solutions d'anonymisation approximative et une solution d'analyse de risque.

##### Modèles utilisés

Description des modèles proposés par le logiciel : 
https://arx.deidentifier.org/overview/privacy-criteria/
https://arx.deidentifier.org/publications/

##### Installation
https://arx.deidentifier.org/downloads/

##### Utilisation
Une fois nos données chargées dans ARX Deidentifier, et une fois variables sélectionnés, l'on peut appliquer des algorithmes de K-anonymisation et de L-diversité notamment. Au préalable, il faut choisir un ordre de variables. En général, on place les variables les moins importantes en premières et les variables dont le coût de modification est le plus grand en dernière position.

Dans cet algorithme sont implémentées plusieurs types de méthodes, qui remplacent, suppriment ou regroupent les valeurs sensibles :

    méthode "into_unknown" : lorsque l'algorithme repère une ligne non k-anonymisée, il remplace la modalité par une modalité définie au préalable (non renseigné par exemple). Si cette opération ne permet pas de construire un groupe de "non renseigné" suffisamment conséquent, l'algorithme renvoie une base remplie de valeurs "unknown".
    méthode "remove" : lorsque l'algorithme repère une ligne non k-anonymisée, il supprime cette ligne.
    méthode "regroup[...]"
        méthode "regroup_with_smallest" : regroupe avec la modalité dont l'effectif est minimal.
        méthode "regroup_with_biggest" : regroupe avec la modalité dont l'effectif est maximal.
    méthode "with closest" : lorsque l'algorithme repère une ligne non k-anonymisée, il remplace la modalité donnée sous forme de nombre par "nombre1 ou nombre2", en rapprochant les nombres les plus proches (convient pour les années, par exemple).
    
### Anonymisation dans PostgreSQL Anonymizer

##### Modèles utilisés
Cette extension de PostgreSQL ropose toute une batterie de [mécanismes d'occultation](https://postgresql-anonymizer.readthedocs.io/en/latest/masking_functions/)

##### Installation
[Guide d'installation de cette extension](https://www.postgresql.org/about/news/postgresql-anonymizer-10-privacy-by-design-for-postgres-2452/)