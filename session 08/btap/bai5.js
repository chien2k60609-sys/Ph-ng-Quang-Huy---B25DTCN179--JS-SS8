const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1",
];
function reportTopPerformers(minPerformance, players) {
    let filtered = players
        .map(p => {
            let parts = p.split(" - ");
            let performance = +parts[2] + +parts[3];
            return { name: parts[0], performance };
        })
        .filter(p => p.performance >= minPerformance);
    filtered.forEach(p => console.log(p.name + ": " + p.performance));
    let total = filtered.reduce((sum, p) => sum + p.performance, 0);
    console.log("Tổng hiệu suất: " + total);
    return total;
}