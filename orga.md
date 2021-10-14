# Algorithmique en javascript/node.js

- [Guide MDN Javascript complet ](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide)

- [w3school: training](https://www.w3schools.com/)

## Jour 1:

**Logique d'un programme, syntaxe et grammaire d'un language de programmation**

- client/serveur
- variables
- classe, fonction [doc classes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
- Manipulation du Dom [doc dom](https://www.w3schools.com/whatis/whatis_htmldom.asp)
- événementiel


## Jour 2:

**Structures de données**

[MDN object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures)

- Typage des variables [TYpeOF](https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/)
- constante
- Object notion: clé-valeurs (Propriété,accesseur,)
- les tableaux: (typer)
- programmation Orientée object
- structures natives: JSON

## Jour 3:

**Structures de contrôle**
[MDN Controle Structures](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference#contr%C3%B4le_du_flux)
[MDN learning](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

- instruction
- break & continue
- opérateur
- incrément / décrément
- try catch
- boucle et conditions
- switch & type conditions


## Jour 4:

**Functions, paramètres et résultats**

[MDN fonction](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function)

- définition, appel
- paramètre
- réponse & retour


## Jour 5:

**TP: déscription d'algorithmes et implémentation**


# Ressources:

**PSEUDO-code explicatif (non-fonctionnel en javascript) algo des pates**
    
    ```javascript
        // on definit ce que l'on a besoins dans des variables
        var pate = "pate"
        var eau = "eau"
        var feux = "feux"
        var casserole= "casserole"
        // condition qui vérifie que l'on a tout ce qu'il nous faut 
        if casserole & eau & pate {

            if feux { // condition qui verifie que le feux est allumer
                put eau + casserole // si le feux n'est pas null alors on y ajoute l'eau dans la casserole sur le feux 
            }
            if eau + casserole + feux = True { // condition qui vérifie que toute les conditions sont reunis
                wait 5 min // on lance l'attente pendant la cuisson si tout est bon jusque la 
            }
            if(5 min = true){ // condition qui vérifie que l'on ai bien attendu
                return patte mangeable // si condition est vérifier alors on retourne le résultat: des pattes qui se mange
            }
        }
    ```
