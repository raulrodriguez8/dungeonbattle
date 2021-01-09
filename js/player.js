let player; //global scope variable to identify the player

function Player (classType, health, mana, strength, agility, speed) {
        this.classType = classType;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
}
let PlayerMoves = {
    calcAttack: function(){
        //local variables for attack function
        getPlayerSpeed = player.speed;
        getEnemySpeed  = enemy.speed;
        

        //player attacks enemy
        playerAttack = function () {
            let calcBaseDmg;
            if (player.mana > 0) {
                calcBaseDmg = player.strength * player.mana / 1000;
                console.log(`player mana value: ${calcBaseDmg}`)
            } else {
                calcBaseDmg = player.strength * player.agility / 1000;
                console.log(`player mana value: ${calcBaseDmg}`)
            }
            //damage Offset is sort of a basic attempt to calculate critical damage. Diablo 3 formula for DPS is Base Damage * Damage Offset (Crit) plus some other feature calcs i need to create
            let damageOffset = Math.floor(Math.random() * Math.floor(10));
            //damage = base damage plus random damage offset between 0 and 9
            let calcOutputDmg = calcBaseDmg + damageOffset;
            console.log(`damage: ${calcOutputDmg}`)
            //Number of hits per turn
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            console.log(`no. hits: ${numberOfHits}`)
            let attackValues = [calcOutputDmg,numberOfHits];
            return attackValues;
        },
        
        //enemy attacks player
        enemyAttack = function () {
            let calcBaseDmg;
            if (enemy.mana) {
                calcBaseDmg = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDmg = enemy.strength * enemy.agility / 1000;
            }
            //damage Offset is sort of a basic attempt to calculate defense/deflect on the target
            let damageOffset = Math.floor(Math.random() * Math.floor(10));
            //damage = base damage plus random damage offset between 0 and 9
            let calcOutputDmg = calcBaseDmg + damageOffset;
            //Number of hits per turn
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility /10) /2) + 1;
            let attackValues = [calcOutputDmg,numberOfHits];
            return attackValues;
        },

        getPlayerHealth = document.querySelector(".player-health")
        getEnemyHealth = document.querySelector(".enemy-health")
        
    
        //initiate attack calculation
        if (getPlayerSpeed >= getEnemySpeed){
            //if player and enemy have same speed, player attacks first
            playerAttackValues = playerAttack(); //call playerAttack function
            totalDamage = playerAttackValues[0] * playerAttackValues[1]; //store variable totalDamage which is array values zero and 1 from playerAttack funciton
            enemy.health -= totalDamage; //update enemy health to equal current value minus totalDamage calculated in PlayerAttack function
            alert(`You hit ${playerAttackValues[1]} times for ${playerAttackValues[0]} damage`) //output damage to user
            if (enemy.health <= 0) { //if enemy health is less or equal to zero, alert the user they won, then update the html values of player health and enemy health to reflect win condition
                alert ("You win! Refresh browser to play again")
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else { //otherwise update the enemy's health to its current value in the DOM
                getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                //NOW THE ENEMY ATTACKS!!!
                enemyAttackValues = enemyAttack(); //instantiate the enemy's attack on player
                totalDamage = enemyAttackValues[0] * enemyAttackValues[1]; //damage equals 
            enemy.health = player.health - totalDamage;
            alert(`You hit ${enemyAttackValues[1]} times for ${enemyAttackValues[0]} damage`)
            if (player.health <= 0) {
                alert ("You LOSE!!! Refresh Browser to Play again")
                getPlayerHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = `Health: ${enemy.health}`;
            } else {
                getPlayerHealth.innerHTML = `Health: ${player.health}` 
            }
        }
        } else if(getEnemySpeed >= getPlayerSpeed){
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert(`Enemy hit ${enemyAttackValues[1]} times for ${enemyAttackValues[0]} damage`)
            if (player.health <= 0) {
                alert ("You LOSE! Refresh browser to play again")
                getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
                //Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            player.health = player.health - totalDamage;
            alert(`You hit ${playerAttackValues[1]} times for ${playerAttackValues[0]} damage`)
            if (enemy.health <= 0) {
                alert ("You WIN!!! Refresh Browser to Play again")
                getEnemyHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
            } else {
                getEnemyHealth.innerHTML = `Health: ${enemy.health}` 
            }
        }
        }
    },
    
    
}
