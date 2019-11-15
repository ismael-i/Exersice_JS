let pyramide = "#";
let pyramides;
let space = " ";
let user = prompt("Bonjour, bienvenue sur mon super pyramide !Combien de pyramide veut-tu?");
for (let count = 1; count <= user; count++) {
    pyramides = space.repeat(user - count) + pyramide.repeat(count);
    console.log(pyramides + "\n");
}