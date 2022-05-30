---
permalink: /anonymisation/mesurer/
---

# Mesure de confidentialité différentielle


### Notion de risque de réidentification
On peut caractériser la probabilité de retrouver un individu (de manière directe) par la donnée d'un n-uplet de caractéristiques : si 80% des hommes participant à une expérience sont bruns, alors savoir qu'un homme est blond augmente par 5 la probabilité de trouver qui il est.

### La confidentialité différentielle

Le processus de randomisation se produit a priori lorsqu'on fait une requête à la base de données.
Imaginons qu'un individu mal intentionné fasse deux requêtes successives qui ne varient que d'un individu. Il faut mettre suffisamment de bruit dans la randomisation pour qu'on ne puisse pas remonter trop sûrement aux caractéristiques du nouvel individu. 
La mesure de la privacy peut être faite avec la differential privacy :

Soit ε > 0 et A un algorithme de randomisation qui prend en entrée une base de données et génère une base de données anonymisée. Notons Image(A) l'ensemble des bases de données anonymisées qui pourraient être générées par A (et qui contient donc l'ensemble des bases de données anonymisées qu'on pourrait être amené à publier)

L'algorithme A est dit ε-différentiel si, pour toute base de données  D1 et D2 qui ne diffèrent que d'une seule personne, et pour toute base dérivée O dans Image(A) :

![encadrement de la probabilité de remonter à la base de données à partir de l'image](images/formule-confidentialité.png)

Autrement dit, on veut contrôler le "shift" provoqué par l'ajout d'un individu, même exceptionnel, à la base de données. Si ce shift est trop important, 

Parfois la caractérisation d'un seul individu, exceptionnel, peut affecter statistiquement l'ensemble de la transformation, si bien qu'on peut revenir à la caractéristique initiale de l'individu.
Ainsi, si on publie plusieurs bases anonymisées, le shift de la deuxième base permet de revenir aux caractéristiques du nouvel entrant.

Exemple d'une mesure de confidentialité différentielle d'un mécanisme souvent utilisée en sciences sociales : [lien wikipédia](https://fr.wikipedia.org/wiki/Confidentialit%C3%A9_diff%C3%A9rentielle#Illustration)