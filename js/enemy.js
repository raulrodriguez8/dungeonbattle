let enemy; //global scope variable to identify the enemy AI
function Enemy (enemyType, health, mana, strength, agility, speed) {

        this.enemyType = enemyType;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }
