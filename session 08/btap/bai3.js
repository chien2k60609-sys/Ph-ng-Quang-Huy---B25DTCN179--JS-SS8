let players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];
function filterPlayersByPosition(position, playerslist) {
    return playerslist.filter(function(player) {
        return player.toLowerCase().endsWith(position.toLowerCase());
    });
}
console.log(filterPlayersByPosition("Midfielder", players));
console.log(filterPlayersByPosition("Forward", players));