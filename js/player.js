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
        //Who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        playerAttack = function () {
            let calcBaseDmg;
            if (player.mana) {
                calcBaseDmg = player.strength * player.mana / 1000;
            } else {
                calcBaseDmg = player.strength * player.agility / 1000;
            }
            let damageOffset = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDmg = calcBaseDmg + damageOffset;
            //Number of hits per turn
            let numberOfHits = Math.floor(Math.random() * Math.floor((player.agility /10)/2)) + 1;
            let attackValues = [calcOutputDmg,numberOfHits];
            return attackValues;
        },
    
        enemyAttack = function () {
            let calcBaseDmg;
            if (enemy.mana) {
                calcBaseDmg = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDmg = enemy.strength * enemy.agility / 1000;
            }
            let damageOffset = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDmg = calcBaseDmg + damageOffset;
            //Number of hits per turn
            let numberOfHits = Math.floor(Math.random() * Math.floor((enemy.agility /10)/2)) + 1;
            let attackValues = [calcOutputDmg,numberOfHits];
            return attackValues;
        },
    
        getPlayerHealth = document.querySelector(".player-health")
        getEnemyHealth = document.querySelector(".enemy-health")
    
        //initiate attack!
        if (getPlayerSpeed >= getEnemySpeed){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health -totalDamage;
            alert(`You hit for ${playerAttackValues[0]} damage, ${playerAttackValues[1]} times`)
            if (enemy.health <= 0) {
                alert ("You win! Refresh browser to play again")
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                //Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            enemy.health = player.health - totalDamage;
            alert(`You hit for ${enemyAttackValues[0]} damage, ${enemyAttackValues[1]} times`)
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
            alert(`Enemy hit for ${enemyAttackValues[0]} damage, ${enemyAttackValues[1]} times`)
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
            alert(`You hit for ${playerAttackValues[0]} damage, ${playerAttackValues[1]} times`)
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
