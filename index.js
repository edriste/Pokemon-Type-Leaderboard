// Type interfaces
// List of 18 types
var types = [
    "Normal",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy",
];
// Multidimensional array of type-matchups
var typeChart = [
    [
        { attacker: "Normal", defender: "Normal", effectiveness: 1 },
        { attacker: "Normal", defender: "Fighting", effectiveness: 1 },
        { attacker: "Normal", defender: "Flying", effectiveness: 1 },
        { attacker: "Normal", defender: "Poison", effectiveness: 1 },
        { attacker: "Normal", defender: "Ground", effectiveness: 1 },
        { attacker: "Normal", defender: "Rock", effectiveness: 0.5 },
        { attacker: "Normal", defender: "Bug", effectiveness: 1 },
        { attacker: "Normal", defender: "Ghost", effectiveness: 0 },
        { attacker: "Normal", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Normal", defender: "Fire", effectiveness: 1 },
        { attacker: "Normal", defender: "Water", effectiveness: 1 },
        { attacker: "Normal", defender: "Grass", effectiveness: 1 },
        { attacker: "Normal", defender: "Electric", effectiveness: 1 },
        { attacker: "Normal", defender: "Psychic", effectiveness: 1 },
        { attacker: "Normal", defender: "Ice", effectiveness: 1 },
        { attacker: "Normal", defender: "Dragon", effectiveness: 1 },
        { attacker: "Normal", defender: "Dark", effectiveness: 1 },
        { attacker: "Normal", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Fighting", defender: "Normal", effectiveness: 2 },
        { attacker: "Fighting", defender: "Fighting", effectiveness: 1 },
        { attacker: "Fighting", defender: "Flying", effectiveness: 0.5 },
        { attacker: "Fighting", defender: "Poison", effectiveness: 0.5 },
        { attacker: "Fighting", defender: "Ground", effectiveness: 1 },
        { attacker: "Fighting", defender: "Rock", effectiveness: 2 },
        { attacker: "Fighting", defender: "Bug", effectiveness: 0.5 },
        { attacker: "Fighting", defender: "Ghost", effectiveness: 0 },
        { attacker: "Fighting", defender: "Steel", effectiveness: 2 },
        { attacker: "Fighting", defender: "Fire", effectiveness: 1 },
        { attacker: "Fighting", defender: "Water", effectiveness: 1 },
        { attacker: "Fighting", defender: "Grass", effectiveness: 1 },
        { attacker: "Fighting", defender: "Electric", effectiveness: 1 },
        { attacker: "Fighting", defender: "Psychic", effectiveness: 0.5 },
        { attacker: "Fighting", defender: "Ice", effectiveness: 2 },
        { attacker: "Fighting", defender: "Dragon", effectiveness: 1 },
        { attacker: "Fighting", defender: "Dark", effectiveness: 2 },
        { attacker: "Fighting", defender: "Fairy", effectiveness: 0.5 },
    ],
    [
        { attacker: "Flying", defender: "Normal", effectiveness: 1 },
        { attacker: "Flying", defender: "Fighting", effectiveness: 2 },
        { attacker: "Flying", defender: "Flying", effectiveness: 1 },
        { attacker: "Flying", defender: "Poison", effectiveness: 1 },
        { attacker: "Flying", defender: "Ground", effectiveness: 1 },
        { attacker: "Flying", defender: "Rock", effectiveness: 0.5 },
        { attacker: "Flying", defender: "Bug", effectiveness: 2 },
        { attacker: "Flying", defender: "Ghost", effectiveness: 1 },
        { attacker: "Flying", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Flying", defender: "Fire", effectiveness: 1 },
        { attacker: "Flying", defender: "Water", effectiveness: 1 },
        { attacker: "Flying", defender: "Grass", effectiveness: 2 },
        { attacker: "Flying", defender: "Electric", effectiveness: 0.5 },
        { attacker: "Flying", defender: "Psychic", effectiveness: 1 },
        { attacker: "Flying", defender: "Ice", effectiveness: 1 },
        { attacker: "Flying", defender: "Dragon", effectiveness: 1 },
        { attacker: "Flying", defender: "Dark", effectiveness: 1 },
        { attacker: "Flying", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Poison", defender: "Normal", effectiveness: 1 },
        { attacker: "Poison", defender: "Fighting", effectiveness: 1 },
        { attacker: "Poison", defender: "Flying", effectiveness: 1 },
        { attacker: "Poison", defender: "Ground", effectiveness: 0.5 },
        { attacker: "Poison", defender: "Poison", effectiveness: 0.5 },
        { attacker: "Poison", defender: "Rock", effectiveness: 0.5 },
        { attacker: "Poison", defender: "Bug", effectiveness: 1 },
        { attacker: "Poison", defender: "Ghost", effectiveness: 0.5 },
        { attacker: "Poison", defender: "Steel", effectiveness: 0 },
        { attacker: "Poison", defender: "Fire", effectiveness: 1 },
        { attacker: "Poison", defender: "Water", effectiveness: 1 },
        { attacker: "Poison", defender: "Grass", effectiveness: 2 },
        { attacker: "Poison", defender: "Electric", effectiveness: 1 },
        { attacker: "Poison", defender: "Psychic", effectiveness: 1 },
        { attacker: "Poison", defender: "Ice", effectiveness: 1 },
        { attacker: "Poison", defender: "Dragon", effectiveness: 1 },
        { attacker: "Poison", defender: "Dark", effectiveness: 1 },
        { attacker: "Poison", defender: "Fairy", effectiveness: 2 },
    ],
    [
        { attacker: "Ground", defender: "Normal", effectiveness: 1 },
        { attacker: "Ground", defender: "Fighting", effectiveness: 1 },
        { attacker: "Ground", defender: "Flying", effectiveness: 0 },
        { attacker: "Ground", defender: "Poison", effectiveness: 2 },
        { attacker: "Ground", defender: "Ground", effectiveness: 1 },
        { attacker: "Ground", defender: "Rock", effectiveness: 2 },
        { attacker: "Ground", defender: "Bug", effectiveness: 0.5 },
        { attacker: "Ground", defender: "Ghost", effectiveness: 1 },
        { attacker: "Ground", defender: "Steel", effectiveness: 2 },
        { attacker: "Ground", defender: "Fire", effectiveness: 2 },
        { attacker: "Ground", defender: "Water", effectiveness: 1 },
        { attacker: "Ground", defender: "Grass", effectiveness: 0.5 },
        { attacker: "Ground", defender: "Electric", effectiveness: 2 },
        { attacker: "Ground", defender: "Psychic", effectiveness: 1 },
        { attacker: "Ground", defender: "Ice", effectiveness: 1 },
        { attacker: "Ground", defender: "Dragon", effectiveness: 1 },
        { attacker: "Ground", defender: "Dark", effectiveness: 1 },
        { attacker: "Ground", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Rock", defender: "Normal", effectiveness: 1 },
        { attacker: "Rock", defender: "Fighting", effectiveness: 0.5 },
        { attacker: "Rock", defender: "Flying", effectiveness: 2 },
        { attacker: "Rock", defender: "Poison", effectiveness: 1 },
        { attacker: "Rock", defender: "Ground", effectiveness: 0.5 },
        { attacker: "Rock", defender: "Rock", effectiveness: 1 },
        { attacker: "Rock", defender: "Bug", effectiveness: 2 },
        { attacker: "Rock", defender: "Ghost", effectiveness: 1 },
        { attacker: "Rock", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Rock", defender: "Fire", effectiveness: 2 },
        { attacker: "Rock", defender: "Water", effectiveness: 1 },
        { attacker: "Rock", defender: "Grass", effectiveness: 1 },
        { attacker: "Rock", defender: "Electric", effectiveness: 1 },
        { attacker: "Rock", defender: "Psychic", effectiveness: 1 },
        { attacker: "Rock", defender: "Ice", effectiveness: 2 },
        { attacker: "Rock", defender: "Dragon", effectiveness: 1 },
        { attacker: "Rock", defender: "Dark", effectiveness: 1 },
        { attacker: "Rock", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Bug", defender: "Normal", effectiveness: 1 },
        { attacker: "Bug", defender: "Fighting", effectiveness: 0.5 },
        { attacker: "Bug", defender: "Flying", effectiveness: 0.5 },
        { attacker: "Bug", defender: "Poison", effectiveness: 0.5 },
        { attacker: "Bug", defender: "Ground", effectiveness: 1 },
        { attacker: "Bug", defender: "Rock", effectiveness: 1 },
        { attacker: "Bug", defender: "Bug", effectiveness: 1 },
        { attacker: "Bug", defender: "Ghost", effectiveness: 0.5 },
        { attacker: "Bug", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Bug", defender: "Fire", effectiveness: 0.5 },
        { attacker: "Bug", defender: "Water", effectiveness: 1 },
        { attacker: "Bug", defender: "Grass", effectiveness: 2 },
        { attacker: "Bug", defender: "Electric", effectiveness: 1 },
        { attacker: "Bug", defender: "Psychic", effectiveness: 2 },
        { attacker: "Bug", defender: "Ice", effectiveness: 1 },
        { attacker: "Bug", defender: "Dragon", effectiveness: 1 },
        { attacker: "Bug", defender: "Dark", effectiveness: 2 },
        { attacker: "Bug", defender: "Fairy", effectiveness: 0.5 },
    ],
    [
        { attacker: "Ghost", defender: "Normal", effectiveness: 0 },
        { attacker: "Ghost", defender: "Fighting", effectiveness: 1 },
        { attacker: "Ghost", defender: "Flying", effectiveness: 1 },
        { attacker: "Ghost", defender: "Poison", effectiveness: 1 },
        { attacker: "Ghost", defender: "Ground", effectiveness: 1 },
        { attacker: "Ghost", defender: "Rock", effectiveness: 1 },
        { attacker: "Ghost", defender: "Bug", effectiveness: 1 },
        { attacker: "Ghost", defender: "Ghost", effectiveness: 2 },
        { attacker: "Ghost", defender: "Steel", effectiveness: 1 },
        { attacker: "Ghost", defender: "Fire", effectiveness: 1 },
        { attacker: "Ghost", defender: "Water", effectiveness: 1 },
        { attacker: "Ghost", defender: "Grass", effectiveness: 1 },
        { attacker: "Ghost", defender: "Electric", effectiveness: 1 },
        { attacker: "Ghost", defender: "Psychic", effectiveness: 2 },
        { attacker: "Ghost", defender: "Ice", effectiveness: 1 },
        { attacker: "Ghost", defender: "Dragon", effectiveness: 1 },
        { attacker: "Ghost", defender: "Dark", effectiveness: 0.5 },
        { attacker: "Ghost", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Steel", defender: "Normal", effectiveness: 1 },
        { attacker: "Steel", defender: "Fighting", effectiveness: 1 },
        { attacker: "Steel", defender: "Flying", effectiveness: 1 },
        { attacker: "Steel", defender: "Poison", effectiveness: 1 },
        { attacker: "Steel", defender: "Ground", effectiveness: 1 },
        { attacker: "Steel", defender: "Rock", effectiveness: 2 },
        { attacker: "Steel", defender: "Bug", effectiveness: 1 },
        { attacker: "Steel", defender: "Ghost", effectiveness: 1 },
        { attacker: "Steel", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Steel", defender: "Fire", effectiveness: 0.5 },
        { attacker: "Steel", defender: "Water", effectiveness: 0.5 },
        { attacker: "Steel", defender: "Grass", effectiveness: 1 },
        { attacker: "Steel", defender: "Electric", effectiveness: 0.5 },
        { attacker: "Steel", defender: "Psychic", effectiveness: 1 },
        { attacker: "Steel", defender: "Ice", effectiveness: 2 },
        { attacker: "Steel", defender: "Dragon", effectiveness: 1 },
        { attacker: "Steel", defender: "Dark", effectiveness: 1 },
        { attacker: "Steel", defender: "Fairy", effectiveness: 2 },
    ],
    [
        { attacker: "Fire", defender: "Normal", effectiveness: 1 },
        { attacker: "Fire", defender: "Fighting", effectiveness: 1 },
        { attacker: "Fire", defender: "Flying", effectiveness: 1 },
        { attacker: "Fire", defender: "Poison", effectiveness: 1 },
        { attacker: "Fire", defender: "Ground", effectiveness: 1 },
        { attacker: "Fire", defender: "Rock", effectiveness: 0.5 },
        { attacker: "Fire", defender: "Bug", effectiveness: 2 },
        { attacker: "Fire", defender: "Ghost", effectiveness: 1 },
        { attacker: "Fire", defender: "Steel", effectiveness: 2 },
        { attacker: "Fire", defender: "Fire", effectiveness: 0.5 },
        { attacker: "Fire", defender: "Water", effectiveness: 0.5 },
        { attacker: "Fire", defender: "Grass", effectiveness: 2 },
        { attacker: "Fire", defender: "Electric", effectiveness: 1 },
        { attacker: "Fire", defender: "Psychic", effectiveness: 1 },
        { attacker: "Fire", defender: "Ice", effectiveness: 2 },
        { attacker: "Fire", defender: "Dragon", effectiveness: 0.5 },
        { attacker: "Fire", defender: "Dark", effectiveness: 1 },
        { attacker: "Fire", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Water", defender: "Normal", effectiveness: 1 },
        { attacker: "Water", defender: "Fighting", effectiveness: 1 },
        { attacker: "Water", defender: "Flying", effectiveness: 1 },
        { attacker: "Water", defender: "Poison", effectiveness: 1 },
        { attacker: "Water", defender: "Ground", effectiveness: 2 },
        { attacker: "Water", defender: "Rock", effectiveness: 2 },
        { attacker: "Water", defender: "Bug", effectiveness: 1 },
        { attacker: "Water", defender: "Ghost", effectiveness: 1 },
        { attacker: "Water", defender: "Steel", effectiveness: 1 },
        { attacker: "Water", defender: "Fire", effectiveness: 2 },
        { attacker: "Water", defender: "Water", effectiveness: 0.5 },
        { attacker: "Water", defender: "Grass", effectiveness: 0.5 },
        { attacker: "Water", defender: "Electric", effectiveness: 1 },
        { attacker: "Water", defender: "Psychic", effectiveness: 1 },
        { attacker: "Water", defender: "Ice", effectiveness: 1 },
        { attacker: "Water", defender: "Dragon", effectiveness: 0.5 },
        { attacker: "Water", defender: "Dark", effectiveness: 1 },
        { attacker: "Water", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Grass", defender: "Normal", effectiveness: 1 },
        { attacker: "Grass", defender: "Fighting", effectiveness: 1 },
        { attacker: "Grass", defender: "Flying", effectiveness: 0.5 },
        { attacker: "Grass", defender: "Poison", effectiveness: 0.5 },
        { attacker: "Grass", defender: "Ground", effectiveness: 2 },
        { attacker: "Grass", defender: "Rock", effectiveness: 2 },
        { attacker: "Grass", defender: "Bug", effectiveness: 0.5 },
        { attacker: "Grass", defender: "Ghost", effectiveness: 1 },
        { attacker: "Grass", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Grass", defender: "Fire", effectiveness: 0.5 },
        { attacker: "Grass", defender: "Water", effectiveness: 2 },
        { attacker: "Grass", defender: "Grass", effectiveness: 0.5 },
        { attacker: "Grass", defender: "Electric", effectiveness: 1 },
        { attacker: "Grass", defender: "Psychic", effectiveness: 1 },
        { attacker: "Grass", defender: "Ice", effectiveness: 1 },
        { attacker: "Grass", defender: "Dragon", effectiveness: 0.5 },
        { attacker: "Grass", defender: "Dark", effectiveness: 1 },
        { attacker: "Grass", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Electric", defender: "Normal", effectiveness: 1 },
        { attacker: "Electric", defender: "Fighting", effectiveness: 1 },
        { attacker: "Electric", defender: "Flying", effectiveness: 2 },
        { attacker: "Electric", defender: "Poison", effectiveness: 1 },
        { attacker: "Electric", defender: "Ground", effectiveness: 0 },
        { attacker: "Electric", defender: "Rock", effectiveness: 1 },
        { attacker: "Electric", defender: "Bug", effectiveness: 1 },
        { attacker: "Electric", defender: "Ghost", effectiveness: 1 },
        { attacker: "Electric", defender: "Steel", effectiveness: 1 },
        { attacker: "Electric", defender: "Fire", effectiveness: 1 },
        { attacker: "Electric", defender: "Water", effectiveness: 2 },
        { attacker: "Electric", defender: "Grass", effectiveness: 0.5 },
        { attacker: "Electric", defender: "Electric", effectiveness: 0.5 },
        { attacker: "Electric", defender: "Psychic", effectiveness: 1 },
        { attacker: "Electric", defender: "Ice", effectiveness: 1 },
        { attacker: "Electric", defender: "Dragon", effectiveness: 0.5 },
        { attacker: "Electric", defender: "Dark", effectiveness: 1 },
        { attacker: "Electric", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Psychic", defender: "Normal", effectiveness: 1 },
        { attacker: "Psychic", defender: "Fighting", effectiveness: 2 },
        { attacker: "Psychic", defender: "Flying", effectiveness: 1 },
        { attacker: "Psychic", defender: "Poison", effectiveness: 2 },
        { attacker: "Psychic", defender: "Ground", effectiveness: 1 },
        { attacker: "Psychic", defender: "Rock", effectiveness: 1 },
        { attacker: "Psychic", defender: "Bug", effectiveness: 1 },
        { attacker: "Psychic", defender: "Ghost", effectiveness: 1 },
        { attacker: "Psychic", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Psychic", defender: "Fire", effectiveness: 1 },
        { attacker: "Psychic", defender: "Water", effectiveness: 1 },
        { attacker: "Psychic", defender: "Grass", effectiveness: 1 },
        { attacker: "Psychic", defender: "Electric", effectiveness: 1 },
        { attacker: "Psychic", defender: "Psychic", effectiveness: 0.5 },
        { attacker: "Psychic", defender: "Ice", effectiveness: 1 },
        { attacker: "Psychic", defender: "Dragon", effectiveness: 1 },
        { attacker: "Psychic", defender: "Dark", effectiveness: 0 },
        { attacker: "Psychic", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Ice", defender: "Normal", effectiveness: 1 },
        { attacker: "Ice", defender: "Fighting", effectiveness: 1 },
        { attacker: "Ice", defender: "Flying", effectiveness: 2 },
        { attacker: "Ice", defender: "Poison", effectiveness: 1 },
        { attacker: "Ice", defender: "Ground", effectiveness: 2 },
        { attacker: "Ice", defender: "Rock", effectiveness: 1 },
        { attacker: "Ice", defender: "Bug", effectiveness: 1 },
        { attacker: "Ice", defender: "Ghost", effectiveness: 1 },
        { attacker: "Ice", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Ice", defender: "Fire", effectiveness: 0.5 },
        { attacker: "Ice", defender: "Water", effectiveness: 0.5 },
        { attacker: "Ice", defender: "Grass", effectiveness: 2 },
        { attacker: "Ice", defender: "Electric", effectiveness: 1 },
        { attacker: "Ice", defender: "Psychic", effectiveness: 1 },
        { attacker: "Ice", defender: "Ice", effectiveness: 0.5 },
        { attacker: "Ice", defender: "Dragon", effectiveness: 2 },
        { attacker: "Ice", defender: "Dark", effectiveness: 1 },
        { attacker: "Ice", defender: "Fairy", effectiveness: 1 },
    ],
    [
        { attacker: "Dragon", defender: "Normal", effectiveness: 1 },
        { attacker: "Dragon", defender: "Fighting", effectiveness: 1 },
        { attacker: "Dragon", defender: "Flying", effectiveness: 1 },
        { attacker: "Dragon", defender: "Poison", effectiveness: 1 },
        { attacker: "Dragon", defender: "Ground", effectiveness: 1 },
        { attacker: "Dragon", defender: "Rock", effectiveness: 1 },
        { attacker: "Dragon", defender: "Bug", effectiveness: 1 },
        { attacker: "Dragon", defender: "Ghost", effectiveness: 1 },
        { attacker: "Dragon", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Dragon", defender: "Fire", effectiveness: 1 },
        { attacker: "Dragon", defender: "Water", effectiveness: 1 },
        { attacker: "Dragon", defender: "Grass", effectiveness: 1 },
        { attacker: "Dragon", defender: "Electric", effectiveness: 1 },
        { attacker: "Dragon", defender: "Psychic", effectiveness: 1 },
        { attacker: "Dragon", defender: "Ice", effectiveness: 1 },
        { attacker: "Dragon", defender: "Dragon", effectiveness: 2 },
        { attacker: "Dragon", defender: "Dark", effectiveness: 1 },
        { attacker: "Dragon", defender: "Fairy", effectiveness: 0 },
    ],
    [
        { attacker: "Dark", defender: "Normal", effectiveness: 1 },
        { attacker: "Dark", defender: "Fighting", effectiveness: 0.5 },
        { attacker: "Dark", defender: "Flying", effectiveness: 1 },
        { attacker: "Dark", defender: "Poison", effectiveness: 1 },
        { attacker: "Dark", defender: "Ground", effectiveness: 1 },
        { attacker: "Dark", defender: "Rock", effectiveness: 1 },
        { attacker: "Dark", defender: "Bug", effectiveness: 1 },
        { attacker: "Dark", defender: "Ghost", effectiveness: 2 },
        { attacker: "Dark", defender: "Steel", effectiveness: 1 },
        { attacker: "Dark", defender: "Fire", effectiveness: 1 },
        { attacker: "Dark", defender: "Water", effectiveness: 1 },
        { attacker: "Dark", defender: "Grass", effectiveness: 1 },
        { attacker: "Dark", defender: "Electric", effectiveness: 1 },
        { attacker: "Dark", defender: "Psychic", effectiveness: 1 },
        { attacker: "Dark", defender: "Ice", effectiveness: 1 },
        { attacker: "Dark", defender: "Dragon", effectiveness: 1 },
        { attacker: "Dark", defender: "Dark", effectiveness: 0.5 },
        { attacker: "Dark", defender: "Fairy", effectiveness: 0.5 },
    ],
    [
        { attacker: "Fairy", defender: "Normal", effectiveness: 1 },
        { attacker: "Fairy", defender: "Fighting", effectiveness: 2 },
        { attacker: "Fairy", defender: "Flying", effectiveness: 1 },
        { attacker: "Fairy", defender: "Poison", effectiveness: 0.5 },
        { attacker: "Fairy", defender: "Ground", effectiveness: 1 },
        { attacker: "Fairy", defender: "Rock", effectiveness: 1 },
        { attacker: "Fairy", defender: "Bug", effectiveness: 1 },
        { attacker: "Fairy", defender: "Ghost", effectiveness: 1 },
        { attacker: "Fairy", defender: "Steel", effectiveness: 0.5 },
        { attacker: "Fairy", defender: "Fire", effectiveness: 0.5 },
        { attacker: "Fairy", defender: "Water", effectiveness: 1 },
        { attacker: "Fairy", defender: "Grass", effectiveness: 1 },
        { attacker: "Fairy", defender: "Electric", effectiveness: 1 },
        { attacker: "Fairy", defender: "Psychic", effectiveness: 1 },
        { attacker: "Fairy", defender: "Ice", effectiveness: 1 },
        { attacker: "Fairy", defender: "Dragon", effectiveness: 2 },
        { attacker: "Fairy", defender: "Dark", effectiveness: 2 },
        { attacker: "Fairy", defender: "Fairy", effectiveness: 1 },
    ],
];
function CalculateTypeStats() {
    var typeCombinations = generateTypeCombinations();
    var typeLeaderboard = [];
    typeCombinations.forEach(function (combination) {
        // initialize stat values
        var offensiveScore = 0;
        var defensiveScore = 0;
        var offense_quadrupleEffective = [];
        var offense_doubleEffective = [];
        var offense_neutralEffective = [];
        var offense_halfEffective = [];
        var offense_quaterEffective = [];
        var offense_notEffective = [];
        var defense_quadrupleEffective = [];
        var defense_doubleEffective = [];
        var defense_neutralEffective = [];
        var defense_halfEffective = [];
        var defense_quaterEffective = [];
        var defense_notEffective = [];
        // Go thorugh every type combination because while attacks only have one type, they can be used on opponents with multiple types
        typeCombinations.forEach(function (typeCombo) {
            var offensiveEffectiveness = calculateOptimalEffectiveness(combination, typeCombo);
            var defensiveEffectiveness = calculateOptimalEffectiveness(typeCombo, combination);
            switch (offensiveEffectiveness) {
                case 4:
                    offense_quadrupleEffective.push(typeCombo);
                    break;
                case 2:
                    offense_doubleEffective.push(typeCombo);
                    break;
                case 0.5:
                    offense_halfEffective.push(typeCombo);
                    break;
                case 0.25:
                    offense_quaterEffective.push(typeCombo);
                    break;
                case 0:
                    offense_notEffective.push(typeCombo);
                    break;
                default:
                    offense_neutralEffective.push(typeCombo);
            }
            switch (defensiveEffectiveness) {
                case 4:
                    defense_quadrupleEffective.push(typeCombo);
                    break;
                case 2:
                    defense_doubleEffective.push(typeCombo);
                    break;
                case 0.5:
                    defense_halfEffective.push(typeCombo);
                    break;
                case 0.25:
                    defense_quaterEffective.push(typeCombo);
                    break;
                case 0:
                    defense_notEffective.push(typeCombo);
                    break;
                default:
                    defense_neutralEffective.push(typeCombo);
            }
            offensiveScore += offensiveEffectiveness;
            defensiveScore +=
                defensiveEffectiveness !== 0 ? 1 / defensiveEffectiveness : 8;
        });
        typeLeaderboard.push({
            type: { type1: combination.type1, type2: combination.type2 },
            totalScore: offensiveScore + defensiveScore,
            // Points are set in relation to 342 because theres 171 typecombinations that can be hit suppereffectively (x2)
            offensiveScore: offensiveScore,
            defensiveScore: defensiveScore,
            offense_quadrupleEffective: offense_quadrupleEffective,
            offense_doubleEffective: offense_doubleEffective,
            offense_neutralEffective: offense_neutralEffective,
            offense_halfEffective: offense_halfEffective,
            offense_quatereffective: offense_quaterEffective,
            offense_notEffective: offense_notEffective,
            defense_quadrupleEffective: defense_quadrupleEffective,
            defense_doubleEffective: defense_doubleEffective,
            defense_neutralEffective: defense_neutralEffective,
            defense_halfEffective: defense_halfEffective,
            defense_quaterEffective: defense_quaterEffective,
            defense_notEffective: defense_notEffective
        });
    });
    return typeLeaderboard.sort(function (a, b) { return b.totalScore - a.totalScore; });
}
function getRelevantMatchups(attackerType, defenderType) {
    var relevantMatchups = [];
    typeChart.forEach(function (column) {
        column.forEach(function (matchup) {
            // Add to array if either one of the attackerTypes is found in the attacker and either one of the defenderTypes is found in the defender attribute
            if ((matchup.attacker === attackerType.type1 ||
                matchup.attacker === attackerType.type2) &&
                (matchup.defender === defenderType.type1 ||
                    matchup.defender === defenderType.type2)) {
                relevantMatchups.push(matchup);
            }
        });
    });
    return relevantMatchups;
}
function calculateOptimalEffectiveness(attackerType, targetType) {
    var relevantMatchups = getRelevantMatchups(attackerType, targetType);
    var firstTypeMatchups = relevantMatchups.filter(function (el) { return el.attacker === attackerType.type1; });
    // There are either 1 or 2 entries in relevantMatchups, depending on whether there is a type combination or not
    var firstTypeDmg = firstTypeMatchups.length === 2
        ? firstTypeMatchups[0].effectiveness * firstTypeMatchups[1].effectiveness
        : firstTypeMatchups[0].effectiveness;
    if (attackerType.type2) {
        var secondTypeMatchups = relevantMatchups.filter(function (el) { return el.attacker === attackerType.type2; });
        var secondTypeDmg = secondTypeMatchups.length === 2
            ? secondTypeMatchups[0].effectiveness *
                secondTypeMatchups[1].effectiveness
            : secondTypeMatchups[0].effectiveness;
        if (secondTypeDmg > firstTypeDmg) {
            return secondTypeDmg;
        }
    }
    return firstTypeDmg;
}
function generateTypeCombinations() {
    var typeCombinations = [];
    var _loop_1 = function (i) {
        var _loop_2 = function (j) {
            // Single Type
            if (i === j) {
                typeCombinations.push({ type1: types[i] });
            }
            // Type combination
            else if (!typeCombinations.some(function (element) { return element.type1 === types[i] && element.type2 === types[j]; }) &&
                !typeCombinations.some(function (element) { return element.type1 === types[j] && element.type2 === types[i]; })) {
                typeCombinations.push({ type1: types[i], type2: types[j] });
            }
        };
        for (var j = 0; j < types.length; j++) {
            _loop_2(j);
        }
    };
    for (var i = 0; i < types.length; i++) {
        _loop_1(i);
    }
    return typeCombinations;
}
// Program
var leaderboard = CalculateTypeStats();
console.log("\nRank\tType\t\t\tTotal\t\tAttack Score\tDefense Score\n");
for (var i = 0; i < leaderboard.length; i++) {
    var stringTemplate = "\t".concat(leaderboard[i].type.type1).concat(leaderboard[i].type.type2 ? " / " + leaderboard[i].type.type2 : "");
    // fill empty space
    var fillerSpace = "";
    for (var j = stringTemplate.length; j <= 15; j++) {
        fillerSpace = fillerSpace.concat(" ");
    }
    console.log(i + 1, stringTemplate, fillerSpace, "\t".concat(leaderboard[i].totalScore, "\t\t").concat(leaderboard[i].offensiveScore, "\t\t").concat(leaderboard[i].defensiveScore));
}
