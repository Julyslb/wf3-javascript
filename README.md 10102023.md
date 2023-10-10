# wf3-javascript
Les exercices de la formation javascript (WebForce3).

Écrivez une fonction nommée add qui prend deux paramètres (a et b) et renvoie leur somme.

function add(a, b) {
  return a + b;
}
const resultat = add(5, 10); 
console.log(resultat);

Créez une fonction multiply qui prend deux paramètres (x et y) et renvoie leur produit par additions successives.

function multiply(x, y) {
  let produit = 0;
  for (let i = 0; i < y; i++) {
    produit = add(produit, x);
  }
  return produit;
}
function add(a, b) {
  return a + b;
}
const resultat = multiply(5, 4);
console.log(resultat);

Écrivez une fonction isEven qui prend un nombre en paramètre et renvoie true s'il est pair et false s'il est impair.
unction isEven(nombre) {
  return nombre % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(9));

Écrivez une fonction reverseString qui prend une chaîne de caractères en entrée et renvoie cette chaîne inversée.

function reverseString(chaine) {
return chaine.split('').reverse().join('');
}
const chaineInversee = reverseString("Bonjour");
console.log(chaineInversee);  // Cela affichera "ruojnoB" dans la console

Créez une fonction findMax qui prend un tableau de nombres en entrée et renvoie le nombre le plus élevé.

function findMax(tableau) {
  if (tableau.length === 0) {
    // Si le tableau est vide, il n'y a pas de maximum à trouver.
    return undefined;
  }

  let maximum = tableau[0]; // On suppose que le premier élément est le maximum initial.

  // Parcourir le tableau pour trouver le maximum.
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > maximum) {
      maximum = tableau[i];
    }
  }

  return maximum;
}

// Exemple d'utilisation :
const nombres = [3, 9, 1, 7, 5];
const maximum = findMax(nombres);
console.log(maximum); // Cela affichera 9 dans la console

Écrivez une fonction capitalizeWords qui prend une phrase en paramètre et renvoie la même phrase avec chaque mot en majuscules.

Écrivez une fonction filterEvenNumbers qui prend un tableau de nombres en entrée et renvoie un nouveau tableau contenant uniquement les nombres pairs.

Créez une fonction calculateFactorial qui prend un nombre entier positif en paramètre et renvoie sa factorielle.

Écrivez une fonction findLongestWord qui prend un tableau de mots en entrée et renvoie le mot le plus long.

Écrivez une fonction isPalindrome qui prend une chaîne de caractères en entrée et renvoie true si la chaîne est un palindrome (se lit de la même manière de gauche à droite et de droite à gauche), sinon renvoie false.

Quelle est la sortie de console.log(typeof "123") ?

a) "string" car il définie une chaine de caractère 
b) "number"
c) "undefined"
d) "boolean"

Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?

a) pop() retire le dernier élément du tableau 
b) shift() permet de retier le premier élément.
c) splice()
d) push()

Quel opérateur est utilisé pour vérifier l'égalité stricte, c'est-à-dire que les valeurs et les types doivent correspondre ?

a) ==
b) === égalité stricte 
c) !=
d) !==

Comment déclarez-vous une variable en JavaScript ?

a) variable x;
b) let x; on définit une variable avec let
c) var x;
d) const x;

Quelle boucle JavaScript est principalement utilisée pour parcourir les éléments d'un tableau ?

a) while
b) for la méthode la plus simple pour parcourir un tableau est d'utiliser la boucle for 
c) do...while
d) forEach

Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?

a) pop()
b) shift()
c) push() ajouter un élément 
d) unshift()

Quel opérateur est utilisé pour vérifier si une valeur est supérieure à une autre en JavaScript ?

a) > ok
b) <
c) ==
d) ===

Quelle méthode JavaScript est utilisée pour convertir une chaîne de caractères en minuscules ?

a) toLowerCase() ok
b) toUpperCase()
c) trim()
d) charAt()

Quelle fonction JavaScript est utilisée pour générer un nombre aléatoire entre 0 et 1 ?

a) random()
b) Math.random() ok
c) randomNumber()
d) Math.randomNumber()

Comment accédez-vous au premier élément d'un tableau appelé myArray en JavaScript ?

a) myArray[0]
b) myArray.first()
c) myArray[1]
d) myArray.first