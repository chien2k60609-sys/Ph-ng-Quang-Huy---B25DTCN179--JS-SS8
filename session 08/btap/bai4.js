let players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfilder - 8",
    "Kante - Midfilder - 2",
    "Van Dijk - Denfender - 5",
    "Alisson - Goalkeeper - 0",
];
function getReversedNames(playsArr) {
    var namesOnly = playsArr.map(function (item) {
        var parts = item.split(" - ");
        return parts[0];
    });
    return namesOnly.reverse();
}
var result = getReversedNames(players);
console.log(result);