let player; //global scope variable to identify the player

class Player {
    constructor(classType, health, mana, strength, agility, speed) {
        this.classType = classType;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }
}

let PlayerMoves = {
    calcAttack: function(){
        //Who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    }

    //Player attack logic
    let playerAttack = function() {
       let calcBaseDamage;

       if (player.mana > 0){
        calcBaseDamage = player.strength * player.mana / 1000;
       } else {
        calcBaseDamage = player.strength * player.agility / 1000;
       }
       let damageOffset = Math.floor(Math.random()* Math.floor(10));
       let calcOutputDamage = calcBaseDamage + damageOffset;

       let numberOfHits = Math.floor(Math.random() * Math.floor((player.agility / 10)/2)+1);
       let attackValues = [calcOutputDamage, numberOfHits];
       return attackValues;

    }

    //Enemy attack logic
    let enemyAttack = function() {
        let calcBaseDamage;
 
        if (enemy.mana > 0){
         calcBaseDamage = enemy.strength * enemy.mana / 1000;
        } else {
         calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }
        let damageOffset = Math.floor(Math.random()* Math.floor(10));
        let calcOutputDamage = calcBaseDamage + damageOffset;
 
        let numberOfHits = Math.floor(Math.random() * Math.floor((enemy.agility / 10)/2)+1);
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
 
     }

}