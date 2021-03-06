'use strict';

exports.BattlePokedex = {
lycanroc: {
		inherit: true,
		types: ["Rock", "Normal"],
		baseStats: {hp: 75, atk: 120, def: 60, spa: 55, spd: 60, spe: 117},
	},
	emboar: {
		inherit: true,
		types: ["Rock", "Fire"],
		baseStats: {hp: 95, atk: 138, def: 65, spa: 110, spd: 65, spe: 97},
		abilities: {0: "Reckless", 1: "Dazzling", H: "Magic Guard"},
	},
	bastiodon: {
		inherit: true,
		types: ["Rock"],
		baseStats: {hp: 60, atk: 50, def: 120, spa: 135, spd: 100, spe: 105},
		abilities: {0: "Sand Force", 1: "Sand Rush", H: "Sand Stream"},
	},
	glaceon: {
		inherit: true, 
		types: ["Ice"],
		baseStats: {hp: 65, atk: 95, def: 65, spa: 110, spd: 60, spe: 130},
		abilities: {0: "Adatability", H: "Magic Guard"},
	},
	glalie: {
		inherit: true,
		types: ["Ice", "Rock"],
		baseStats: {hp: 60, atk: 160, def: 60, spa: 70, spd: 60, spe: 160},
		abilities: {0: "Sturdy", 1: "Adaptability", H: "Magic Guard"},
	},
	froslass: {
		inherit: true,
		types: ["Ice", "Poison"],
		baseStats: {hp: 66, atk: 71, def: 66, spa: 142, spd: 106, spe: 116},
		abilities: {0: "Corrosion", 1: "Snow Cloak", H: "Snow Warning"},
	},
	
	
	unfezant: {
		inherit: true,
		types: ["Flying"],
		baseStats: {hp: 80, atk: 115, def: 80, spa: 82, spd: 80, spe: 133},
		abilities: {0: "Big Pecks", 1: "Technician", H: "Aerilate"},
	},
	cryogonal: {
		inherit: true,
		types: ["Ice", "Flying"],
		baseStats: {hp: 80, atk: 60, def: 70, spa: 105, spd: 125, spe: 130},
		abilities: {0: "Aerialte", 1: "Intimidate", H: "Ice Body"},
	},
	farfetchd: {
		inherit: true,
		types: ["Flying", "Fighting"],
		baseStats: {hp: 52, atk: 100, def: 85, spa: 55, spd: 62, spe: 120},
		abilities: {0: "Sniper", 1: "Aerilate", H: "Defiant"},
	},
	hariyama: {
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 150, atk: 130, def: 100, spa: 20, spd: 100, spe: 70},
		abilities: {0: "Thick Fat", 1: "Guts", H: "Unaware"},
	},
	beartic: {
		inherit: true,
		types: ["Ice", "Fighting"],
		baseStats: {hp: 115, atk: 145, def: 80, spa: 55, spd: 80, spe: 95},
		abilities: {0: "No Guard", 1: "Refrigerate", H: "Swift Swim"},
	},
	primeape: {
		inherit: true,
		types: ["Fighting", "Electric"],
		baseStats: {hp: 90, atk: 135, def: 80, spa: 60, spd: 80, spe: 125},
		abilities: {0: "Reckless", 1: "Motor Drive", H: "Defiant"},
	},
	kriketurne: {
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 112, atk: 125, def: 99, spa: 55, spd: 99, spe: 80},
		abilities: {0: "Swarm", 1: "Technician", H: "Prankster"},
	},
	crustle: {
		inherit: true,
		types: ["Bug", "Ground"],
		baseStats: {hp: 70, atk: 120, def: 125, spa: 65, spd: 75, spe: 75},
		abilities: {0: "Sturdy", 1: "Sand Force", H: "Water Compaction"},
	},
	leafeon: {
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 95, atk: 130, def: 65, spa: 60, spd: 65, spe: 110},
		abilities: {0: "Chlorophyll", H: "Tough Claws"},
	},
	dedenne: {
		inherit: true,
		types: ["Grass", "Electric"],
		baseStats: {hp: 87, atk: 117, def: 77, spa: 81, spd: 87, spe: 121},
		abilities: {0: "Harvest", 1: "Cheek Pouch", H: "Sap Sipper"},
	},
	bellossom: {
		inherit: true,
		types: ["Grass", "Fire"],
		baseStats: {hp: 100, atk: 70, def: 110, spa: 130, spd: 110, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Drought", H: "Natural Care"},
	},
	electrode: {
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 70, atk: 50, def: 70, spa: 110, spd: 100, spe: 170},
		abilities: {0: "Aftermath", 1: "Soundproof", H: "No Guard"},
	},
	luxray: {
		inherit: true,
		types: ["Ice", "Electric"],
		baseStats: {hp: 70, atk: 120, def: 70, spa: 120, spd: 70, spe: 120},
		abilities: {0: "Slush Rush", 1: "Intimidate", H: "Guts"},
	},
	arbok: {
		inherit: true,
		types: ["Electric", "Poison"],
		baseStats: {hp: 80, atk: 125, def: 8, spa: 65, spd: 104, spe: 115},
		abilities: {0: "Intimidate", 1: "Shed Skin", H: "Strong Jaw"},
	},
	arcanine: {
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 100, atk: 120, def: 80, spa: 75, spd: 90, spe: 105},
		abilities: {0: "Fur Coat", 1: "Reckless", H: "Justified"},
	},
	magmortar: {
		inherit: true,
		types: ["Fire", "Dragon"],
		baseStats: {hp: 75, atk: 95, def: 67, spa: 125, spd: 95, spe: 93},
		abilities: {0: "Flame Body", H: "Mega Launcher"},
	},
	volcanion: {
		inherit: true,
		types: ["Fire", "Ice"],
		baseStats: {hp: 96, atk: 75, def: 108, spa: 135, spd: 72, spe: 84},
		abilities: {0: "No Guard"},
	},
	zoroark: {
		inherit: true,
		types: ["Dark"],
		baseStats: {hp: 70, atk: 105, def: 70, spa: 125, spd: 70, spe: 130},
		abilities: {0: "Illuison", 1: "Dazzling", H: "Prankster"},
	},
	incineroar: {
		inherit: true,
		types: ["Dark", "Fire"],
		baseStats: {hp: 115, atk: 135, def: 100, spa: 60, spd: 110, spe: 60},
		abilities: {0: "Blaze", H: "Intimidate"},
	},
	accelgor: {
		inherit: true,
		types: ["Dark", "Bug"],
		baseStats: {hp: 55, atk: 111, def: 50, spa: 133, spd: 50, spe: 166},
		abilities: {0: "Sheer Force", 1: "Technician", H: "Dazzling"},
	},
	kangaskhan: {
		inherit: true,
		types: ["Ground"],
		baseStats: {hp: 115, atk: 120, def: 95, spa: 40, spd: 95, spe: 105},
		abilities: {0: "Mold Breaker", 1: "Defiant", H: "Friend Guard"},
	},
	rampardos: {
		inherit: true,
		types: ["Ground", "Rock"],
		baseStats: {hp: 97, atk: 165, def: 60, spa: 64, spd: 60, spe: 109},
	},
	lycanrocmidnight: {
		inherit: true,
		types: ["Ground", "Fighting"],
		baseStats: {hp: 95, atk: 130, def: 75, spa: 85, spd: 80, spe: 105},
		abilities: {0: "Technician", 1: "Strong Jaw", H: "No Guard"},
	},
	
  };
