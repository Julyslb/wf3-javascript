Exercices, partie 2 :


1/ Écrivez un programme JavaScript qui affiche "Bonjour, monde !" dans la console.

console.log("Bonjour, monde !");

2/ Créez une fonction qui prend deux nombres en entrée et les additionne. Appelez cette fonction et affichez le résultat dans la console.

function add(a, b) {
  return a + b;
}
const resultat = add(5, 10); 
console.log(resultat);

3/ Écrivez un programme JavaScript qui vérifie si un nombre est pair ou impair et affiche le résultat dans la console.

function isEven(nombre) {
    return nombre % 2 === 0;
  }
  console.log(isEven(6));
true

  console.log(isEven(15));
false

4/ Créez un tableau contenant trois noms, puis bouclez sur le tableau pour afficher chaque nom dans la console.

// Crée un tableau contenant trois noms
const noms = ["Emilie", "Sarah", "Laurence"];

// Boucle sur le tableau et affiche chaque nom dans la console
for (let i = 0; i < noms.length; i++) {
  console.log(noms[i]);
}

5/ Écrivez un programme JavaScript qui demande à l'utilisateur son prénom, puis affiche "Bonjour, [prénom] !" dans une boîte de dialogue.

// Demande à l'utilisateur son prénom à l'aide d'une boîte de dialogue
const prenom = prompt("Quel est ton prénom ?");

// Crée le message de salutation en utilisant le prénom de l'utilisateur
const message = `Bonjour, ${prenom} !`;

// Affiche le message de salutation dans une boîte de dialogue
alert(message);

6/ Créez une fonction qui calcule l'aire d'un rectangle en prenant sa largeur et sa hauteur en entrée. Affichez le résultat dans la console.

function multiply(l, h) {
    return l * h;
  }
  const resultat = multiply(5, 4);
  console.log(resultat);

7/ Écrivez un programme JavaScript qui génère un nombre aléatoire entre 1 et 10, puis demande à l'utilisateur de deviner ce nombre. Donnez des indices pour aider l'utilisateur à deviner.

// Génère un nombre aléatoire entre 1 et 10
const nombreAleatoire = Math.floor(Math.random() * 10) + 1;

// Demande à l'utilisateur de deviner le nombre
const devinette = prompt("Devine le nombre entre 1 et 10 :");

if (devinette === null) {
  // Si l'utilisateur a cliqué sur "Annuler", on arrête le jeu
  alert("Jeu annulé.");
} else {
  const nombreSaisi = parseInt(devinette, 10);

  if (isNaN(nombreSaisi) || nombreSaisi < 1 || nombreSaisi > 10) {
    // Si la saisie n'est pas valide (pas un nombre ou hors de la plage)
    alert("Saisie invalide. Le nombre doit être entre 1 et 10.");
  } else if (nombreSaisi === nombreAleatoire) {
    // Si la devinette est correcte
    alert("Bravo ! Tu as deviné le nombre !");
  } else {
    // Si la devinette est incorrecte
    alert("Dommage, ce n'était pas le bon nombre. Le nombre était " + nombreAleatoire + ".");
  }
}

8/ Créez une fonction qui prend une chaîne de caractères en entrée et retourne sa longueur. Affichez la longueur d'une chaîne donnée dans la console.

function calculerLongueurChaine(chaine) {
    return chaine.length;
  }
  // Exemple d'utilisation de la fonction
  const chaine = "Bonjour, monde !";
  const longueur = calculerLongueurChaine(chaine);
  
  console.log(`La longueur de la chaîne "${chaine}" est de ${longueur} caractères.`);

9/ Écrivez un programme JavaScript qui calcule la somme des nombres de 1 à 100 et affiche le résultat dans la console.
// Initialise une variable pour stocker la somme
let somme = 0;
// Utilise une boucle pour additionner les nombres de 1 à 100
for (let i = 1; i <= 100; i++) {
  somme += i;
}
// Affiche la somme dans la console
console.log("La somme des nombres de 1 à 100 est : " + somme);

10/ Créez un tableau de nombres, puis utilisez une boucle pour trouver le plus grand nombre dans le tableau. Affichez ce nombre dans la console.

11/ Créez une fonction qui prend un tableau de nombres en entrée et renvoie la somme de tous les nombres pairs du tableau.

12/ Écrivez un programme JavaScript qui vérifie si une chaîne de caractères est un palindrome (elle se lit de la même manière de gauche à droite et de droite à gauche).

13/ Créez un objet représentant un livre avec des propriétés comme le titre, l'auteur et l'année de publication. Écrivez une fonction qui affiche ces propriétés dans la console.

14/ Écrivez un programme JavaScript qui utilise la récursivité pour calculer le factoriel d'un nombre donné.

15/ Créez une fonction qui prend une chaîne de caractères en entrée et renvoie cette chaîne inversée (par exemple, "Hello" devrait devenir "olleH").

16/ Écrivez un programme JavaScript qui trie un tableau de nombres dans l'ordre croissant en utilisant l'algorithme de tri à bulles.

17/ Créez un objet représentant un compte bancaire avec des propriétés pour le solde et un numéro de compte. Écrivez des méthodes pour effectuer des dépôts et des retraits, et affichez le solde dans la console.

18/ Écrivez un programme JavaScript qui génère un nombre aléatoire entre 1 et 1000, puis demande à l'utilisateur de deviner ce nombre en utilisant une boucle. Donnez des indications pour guider l'utilisateur.

19/ Créez une fonction qui prend un tableau de nombres en entrée et renvoie un nouveau tableau contenant les nombres uniques (supprimez les doublons).

20/ Écrivez un programme JavaScript qui crée une calculatrice simple avec des fonctions pour l'addition, la soustraction, la multiplication et la division. Demandez à l'utilisateur de saisir deux nombres et une opération, puis affichez le résultat dans la console.