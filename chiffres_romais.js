/* conversion de chiffres arbes en chiffres romain*/
var numRu=["", "I","II","III","IV","V","VI","VII","VIII","IX"];
var numPrompt=prompt("Rentrez un chiffre (de 0 à 9)");

if (numRu[numPrompt] === "") {
  console.log("Merdum cacatum, il n'y a pas de zero en chiffre romain.")
} else {
console.log(numRu[numPrompt]);
}