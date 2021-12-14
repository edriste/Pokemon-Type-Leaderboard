# Pokemon-Type-Leaderboard

This code generates a leaderboard of all Pokémon types and combinations **(171 in total)**.
To access it, simply clone the repo or copy the files and run ```node index.js``` in a console of your choosing.
The leaderboard will be displayed within your console.
Should you wish to display further information or change the order, you can change the code locally.

If you prefer working with TypeScript, you can adjust the code in the .ts-file. Remember to run ```tsc index.ts``` to compile it into a .js-file that you can run from your console.

## How it works

Each type (-combination) is assigned a score which is split up into an 'Attack Score' and a 'Defense Score'.

The Attack Score is calculated as follows:

- Most efficient STAB-move is uneffective: +0
- Most efficient STAB-move does quarter damage: +0.25
- Most efficient STAB-move does half damage: +0.5
- Most efficient STAB-move is neutral: +1
- Most efficient STAB-move does double damage: +2
- Most efficient STAB-move does quadruple damage: +4

Each type is matched up against each of the 171 types and type combinations and the scores are added up.
The calculation of the Defense Score works similarly.

It is calculated as follows:

- STAB-moves from type are uneffective: +8
- STAB-moves from type do quarter damage: +4
- STAB-moves from type do half damage: +2
- STAB-moves from type are neutral: +1
- STAB-moves from type do double damage: +0.5
- STAB-moves from type do quadruple damage: +0.25

Although unecessary since attacks can only be of a single type, the defense of a type (-combination) is still checked against all 171

## Next steps

- Google spreadsheet / Datatables integration
