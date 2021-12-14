// Type interfaces

interface TypeMatchup {
  attacker: string;
  defender: string;
  effectiveness: number;
}

interface PokeType {
  type1: string;
  type2?: string;
}

interface TypeStats {
  type: PokeType;
  totalScore: number;
  offensiveScore: number;
  defensiveScore: number;
  offense_quadrupleEffective: string[];
  offense_doubleEffective: string[];
  offense_neutralEffective: string[];
  offense_halfEffective: string[];
  offense_quatereffective: string[];
  offense_notEffective: string[];
  defense_quadrupleEffective: string[];
  defense_doubleEffective: string[];
  defense_neutralEffective: string[];
  defense_halfEffective: string[];
  defense_quaterEffective: string[];
  defense_notEffective: string[];
}

// List of 18 types

const types: string[] = [
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

const typeChart: TypeMatchup[][] = [
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

function CalculateTypeStats(
  compareFunction: (a: TypeStats, b: TypeStats) => number
): TypeStats[] {
  const typeCombinations: PokeType[] = generateTypeCombinations();
  let typeLeaderboard: TypeStats[] = [];

  typeCombinations.forEach((combination) => {
    // initialize stat values
    let offensiveScore = 0;
    let defensiveScore = 0;
    let offense_quadrupleEffective = [];
    let offense_doubleEffective = [];
    let offense_neutralEffective = [];
    let offense_halfEffective = [];
    let offense_quaterEffective = [];
    let offense_notEffective = [];
    let defense_quadrupleEffective = [];
    let defense_doubleEffective = [];
    let defense_neutralEffective = [];
    let defense_halfEffective = [];
    let defense_quaterEffective = [];
    let defense_notEffective = [];

    // Go thorugh every type combination because while attacks only have one type, they can be used on opponents with multiple types
    typeCombinations.forEach((typeCombo) => {
      const offensiveEffectiveness = calculateOptimalEffectiveness(
        combination,
        typeCombo
      );
      const defensiveEffectiveness = calculateOptimalEffectiveness(
        typeCombo,
        combination
      );

      switch (offensiveEffectiveness) {
        case 4:
          offense_quadrupleEffective.push(typeCombo);
          offensiveScore += 5;
          break;
        case 2:
          offense_doubleEffective.push(typeCombo);
          offensiveScore += 4;
          break;
        case 1:
          offense_neutralEffective.push(typeCombo);
          offensiveScore += 3;
          break;
        case 0.5:
          offense_halfEffective.push(typeCombo);
          offensiveScore += 2;
          break;
        case 0.25:
          offense_quaterEffective.push(typeCombo);
          offensiveScore += 1;
          break;
        case 0:
          offense_notEffective.push(typeCombo);
          offensiveScore += 0;
          break;
      }

      switch (defensiveEffectiveness) {
        case 4:
          defense_quadrupleEffective.push(typeCombo);
          defensiveScore += 0;
          break;
        case 2:
          defense_doubleEffective.push(typeCombo);
          defensiveScore += 1;
          break;
        case 1:
          defense_neutralEffective.push(typeCombo);
          defensiveScore += 2;
          break;
        case 0.5:
          defense_halfEffective.push(typeCombo);
          defensiveScore += 3;
          break;
        case 0.25:
          defense_quaterEffective.push(typeCombo);
          defensiveScore += 4;
          break;
        case 0:
          defense_notEffective.push(typeCombo);
          defensiveScore += 5;
          break;
      }
    });

    typeLeaderboard.push({
      type: { type1: combination.type1, type2: combination.type2 },
      totalScore: offensiveScore + defensiveScore,
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
      defense_notEffective: defense_notEffective,
    });
  });

  // Make scores relative
  const highestOffensiveScore = typeLeaderboard.sort(
    (a, b) => b.offensiveScore - a.offensiveScore
  )[0].offensiveScore;
  const highestDefensiveScore = typeLeaderboard.sort(
    (a, b) => b.defensiveScore - a.defensiveScore
  )[0].defensiveScore;
  typeLeaderboard.forEach((element) => {
    element.offensiveScore = Math.round(
      (element.offensiveScore * 100) / highestOffensiveScore
    );
    element.defensiveScore = Math.round(
      (element.defensiveScore * 100) / highestDefensiveScore
    );
    element.totalScore = element.offensiveScore + element.defensiveScore;
  });

  return typeLeaderboard.sort(compareFunction);
}

function getRelevantMatchups(
  attackerType: PokeType,
  defenderType: PokeType
): TypeMatchup[] {
  let relevantMatchups: TypeMatchup[] = [];

  typeChart.forEach((column) => {
    column.forEach((matchup) => {
      // Add to array if either one of the attackerTypes is found in the attacker and either one of the defenderTypes is found in the defender attribute
      if (
        (matchup.attacker === attackerType.type1 ||
          matchup.attacker === attackerType.type2) &&
        (matchup.defender === defenderType.type1 ||
          matchup.defender === defenderType.type2)
      ) {
        relevantMatchups.push(matchup);
      }
    });
  });

  return relevantMatchups;
}

function calculateOptimalEffectiveness(
  attackerType: PokeType,
  targetType: PokeType
): number {
  const relevantMatchups = getRelevantMatchups(attackerType, targetType);
  const firstTypeMatchups = relevantMatchups.filter(
    (el) => el.attacker === attackerType.type1
  );

  // There are either 1 or 2 entries in relevantMatchups, depending on whether there is a type combination or not
  const firstTypeDmg =
    firstTypeMatchups.length === 2
      ? firstTypeMatchups[0].effectiveness * firstTypeMatchups[1].effectiveness
      : firstTypeMatchups[0].effectiveness;

  if (attackerType.type2) {
    const secondTypeMatchups = relevantMatchups.filter(
      (el) => el.attacker === attackerType.type2
    );
    const secondTypeDmg =
      secondTypeMatchups.length === 2
        ? secondTypeMatchups[0].effectiveness *
          secondTypeMatchups[1].effectiveness
        : secondTypeMatchups[0].effectiveness;
    if (secondTypeDmg > firstTypeDmg) {
      return secondTypeDmg;
    }
  }

  return firstTypeDmg;
}

function generateTypeCombinations(): PokeType[] {
  let typeCombinations: PokeType[] = [];

  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < types.length; j++) {
      // Single Type
      if (i === j) {
        typeCombinations.push({ type1: types[i] });
      }
      // Type combination
      else if (
        !typeCombinations.some(
          (element) => element.type1 === types[i] && element.type2 === types[j]
        ) &&
        !typeCombinations.some(
          (element) => element.type1 === types[j] && element.type2 === types[i]
        )
      ) {
        typeCombinations.push({ type1: types[i], type2: types[j] });
      }
    }
  }

  return typeCombinations;
}

// Program

const compareFunction: (a: TypeStats, b: TypeStats) => number = (
  a: TypeStats,
  b: TypeStats
) => b.totalScore - a.totalScore;
const leaderboard = CalculateTypeStats(compareFunction);

console.log(
  "\nRank\tType\t\t\tTotal\t\tAttack Score\tDefense Score\t4x\t2x\t1x\t0.5x\t0.25x\t0x\t4x\t2x\t1x\t0.5x\t0.25x\t0x\n"
);

for (let i = 0; i < leaderboard.length; i++) {
  const stringTemplate: string = `\t${leaderboard[i].type.type1}${
    leaderboard[i].type.type2 ? " / " + leaderboard[i].type.type2 : ""
  }`;
  // fill empty space
  let fillerSpace: string = "";
  for (let j = stringTemplate.length; j <= 15; j++) {
    fillerSpace = fillerSpace.concat(" ");
  }
  console.log(
    i + 1,
    stringTemplate,
    fillerSpace,
    `\t${leaderboard[i].totalScore}\t\t${leaderboard[i].offensiveScore}\t\t${leaderboard[i].defensiveScore}\t\t${leaderboard[i].offense_quadrupleEffective.length}\t${leaderboard[i].offense_doubleEffective.length}\t${leaderboard[i].offense_neutralEffective.length}\t${leaderboard[i].offense_halfEffective.length}\t${leaderboard[i].offense_quatereffective.length}\t${leaderboard[i].offense_notEffective.length}\t${leaderboard[i].defense_quadrupleEffective.length}\t${leaderboard[i].defense_doubleEffective.length}\t${leaderboard[i].defense_neutralEffective.length}\t${leaderboard[i].defense_halfEffective.length}\t${leaderboard[i].defense_quaterEffective.length}\t${leaderboard[i].defense_notEffective.length}`
  );
}
