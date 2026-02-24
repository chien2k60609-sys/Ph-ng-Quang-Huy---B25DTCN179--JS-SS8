let players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37",
];

function reportByPosition(playersArr) {
    let minGoals = 5;

    let groupedData = playersArr
        .map(function (item) {
            let parts = item.split(" - ");
            return {
                name: parts[0],
                position: parts[1],
                goals: parseInt(parts[2]),
                assists: parseInt(parts[3]),
                matches: parseInt(parts[4])
            };
        })
        .filter(function (player) {
            return player.goals >= minGoals;
        })
        .reduce(function (acc, player) {
            if (!acc[player.position]) {
                acc[player.position] = {
                    count: 0,
                    totalGoals: 0,
                    totalAssists: 0,
                    totalMatches: 0
                };
            }
            acc[player.position].count += 1;
            acc[player.position].totalGoals += player.goals;
            acc[player.position].totalAssists += player.assists;
            acc[player.position].totalMatches += player.matches;
            return acc;
        }, {});

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ");
    let teamTotalGoals = 0;

    Object.keys(groupedData).forEach(function (pos) {
        let group = groupedData[pos];
        let avgPerformance = ((group.totalGoals + group.totalAssists) / group.totalMatches).toFixed(2);

        console.log(pos + ":");
        console.log("- Số cầu thủ: " + group.count);
        console.log("- Tổng bàn thắng: " + group.totalGoals);
        console.log("- Tổng kiến tạo: " + group.totalAssists);
        console.log("- Tổng số trận: " + group.totalMatches);
        console.log("- Trung bình hiệu suất/trận: " + avgPerformance);
        console.log(" ");

        teamTotalGoals += group.totalGoals;
    });

    console.log("--------------------------");
    console.log("Tổng bàn thắng toàn đội : " + teamTotalGoals);
}

reportByPosition(players);