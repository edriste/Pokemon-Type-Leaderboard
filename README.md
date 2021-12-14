# Pokemon-Type-Leaderboard

This code generates a leaderboard of all Pokémon types and combinations **(171 in total)**.
To access it, simply clone the repo or copy the files and run ```node index.js``` in a console of your choosing.
The leaderboard will be displayed within your console.
Should you wish to display further information or change the order, you can change the code locally.

If you prefer working with TypeScript, you can adjust the code in the .ts-file. Remember to run ```tsc index.ts``` to compile it into a .js-file that you can run from your console.

## How it works

Each type (-combination) is assigned a score which is split up into an 'Attack Score' and a 'Defense Score'.

The Attack Score is calculated as follows:

- Most efficient STAB-move is uneffective: -4
- Most efficient STAB-move does quarter damage: -2
- Most efficient STAB-move does half damage: -1
- Most efficient STAB-move is neutral: 0
- Most efficient STAB-move does double damage: +2
- Most efficient STAB-move does quadruple damage: +4

Each type is matched up against each of the 171 types and type combinations and the scores are added up. The total is then divided by the highest offensive Score on the leaderboard and rounded.

The calculation of the Defense Score works similarly, but the scores are reversed:

- STAB-moves from type are uneffective: +4
- STAB-moves from type do quarter damage: +2
- STAB-moves from type do half damage: +1
- STAB-moves from type are neutral: 0
- STAB-moves from type do double damage: -2
- STAB-moves from type do quadruple damage: -4

## Next steps

- Google spreadsheet / Datatables integration
