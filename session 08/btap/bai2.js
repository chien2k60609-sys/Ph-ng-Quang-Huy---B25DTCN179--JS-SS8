let players = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson"
];
function getUpperNames(playerNames) {
    let arr = playerNames.map(function (name) {
        return name.toUpperCase();
    });
    return arr;
}
let result = getUpperNames(players);
console.log(result);