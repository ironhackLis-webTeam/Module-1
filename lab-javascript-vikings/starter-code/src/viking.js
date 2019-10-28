// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength);
    }

    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }


    vikingAttack() {     

        // Random Saxon index
        const randomSaxonIndex = Math.floor(this.saxonArmy.length*Math.random());
        // Rnadom Saxon that was selected
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const randomVikingIndex = Math.floor(this.vikingArmy.length*Math.random());
        const randomViking = this.vikingArmy[randomVikingIndex];

        
        const attack = randomSaxon.receiveDamage(randomViking.strength);

        // remove the selected saxon if it is dead
        if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1)};

        return attack;
    }

    saxonAttack() {
        const randomSaxonIndex = Math.floor(this.saxonArmy.length*Math.random());
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const randomVikingIndex = Math.floor(this.vikingArmy.length*Math.random());
        const randomViking = this.vikingArmy[randomVikingIndex];

        const attack = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1)};
        
        return attack
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}