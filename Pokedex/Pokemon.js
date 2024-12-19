class Pokemon {
    constructor() {
        this.name = ""; // Name of the Pokémon
        this.description = ""; // Description of the Pokémon
        this.characteristics = {
            height: "", // Pokémon's height
            weight: "", // Pokémon's weight
            category: "", // Category of the Pokémon
            abilities: [] // List of abilities
        };
        this.types = {
            type_1: "", // Primary type
            type_2: "" // Secondary type (optional)
        };
        this.weaknesses = []; // List of weaknesses
        this.stats = {
            hp: 0, // Hit Points
            attack: 0, // Attack stat
            special_attack: 0, // Special Attack stat
            special_defense: 0, // Special Defense stat
            speed: 0 // Speed stat
        };
        this.evolutions = {
            base: {
                name: "", // Base evolution name
                url: "" // URL to the base evolution's details
            },
            first: {
                name: "", // First evolution name
                url: "" // URL to the first evolution's details
            },
            second: {
                name: "", // Second evolution name
                url: "" // URL to the second evolution's details
            }
        };
    }
}
