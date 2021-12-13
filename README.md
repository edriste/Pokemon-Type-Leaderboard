# Pokemon-Type-Leaderboard

This code generates a leaderboard of all Pokémon types and combinations **(171 in total)**.
To access it, simply clone the repo or copy the files and run ```node index.js``` in a console of your choosing.
Should you wish to display further information or change the order, you can change the code locally.

If you prefer working with TypeScript, you can adjust the code in the .ts-file. Remember to run ```tsc index.ts``` to compile it into a .js-file that you can run from your console.

## How it works

Each type / type combination is assigned a score which is split up into an 'Attack Score' and a 'Defense Score'.

The Attack Score is calculated as follows:

- Most efficient attack is uneffective: +0
- Most efficient attack does quarter damage: +0.25
- Most efficient attack does half damage: +0.5
- Most efficient attack is neutral: +1
- Most efficient attack does double damage: +2
- Most efficient attack does quadruple damage: +4

Each type is matched up against each of the 171 types and type combinations and the scores are added up.
The calculation of the Defense Score works similarly.

It is calculated as follows:

- Attacks from type are uneffective: +8
- Attacks from type do quarter damage: +4
- Attacks from type do half damage: +2
- Attacks from type are neutral: +1
- Attacks from type do double damage: +0.5
- Attacks from type do quadruple damage: +0.25

Although unecessary since attacks can only be of a single type, the defense of a type / type combination is still checked against all 171
