let GameManager = {
     initializeGame: function(classType){
        this.resetPlayer(classType);
        this.buildFight();
     },

     resetPlayer: function(classType){
        switch (classType){
            case "Crusader":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Mage":
                player = new Player(classType, 100, 50, 80, 110, 75);
                break;
            case "Witch Doctor":
                player = new Player(classType, 120, 25, 100, 120, 100);
                break;    
        }
            //variable to select the interface class
            let getInterface = document.querySelector(".interface");
            //set the HTML of the interface equal to the Player's character image/title/stats to start loading the game
            getInterface.innerHTML = '<img src="img/' + classType.toLowerCase() + '.jpeg " class="img-avatar"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';

     },

     buildFight: function(){
        let getHeader = document.querySelector(".header");
        let getAttacks = document.querySelector(".attacks");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Find an enemy using the button below!</p>';
        getAttacks.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Begin Battle</a>';
        getArena.style.visibility = "visible";
     },

     setFight: function() {
        //grab the elements for The Enemy to manipulate the DOM
        let getHeader = document.querySelector(".header");
        let getAttacks = document.querySelector(".attacks");
        let getEnemy = document.querySelector(".enemy");

        //declare the enemy types 
        let enemy00 = new Enemy("Goblin", 100,0,50,100,100);
        let enemy01 = new Enemy("Troll", 150,0,75,75,75);
        let enemy02 = new Enemy("Orc",200,0,200,50,50);
        let enemy03 = new Enemy("Valkyrie",125,25,100,25,25);

        //Logic to randomly select an enemy to fight in this dungeon battle
        let randomEnemySelector = Math.floor(Math.random() * Math.floor(4));
        console.log(randomEnemySelector);//remove later

        switch(randomEnemySelector) {
            case "0": enemy = enemy00;
            break;
            case "1": enemy = enemy01;
            break;
            case "2": enemy = enemy02;
            break;
            case "3": enemy = enemy03;
            break;
        }
        //assign html statements for Enemy to the DOM
        getHeader.innerHTML  = '<p>Task: Choose Your Attack</p>';
        getAttacks.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Physical Attack!</a>';
        //build the enemy in the DOM starting with the enemy's image, the name of the enemy in a header, and then a status box of the enemy's vitals
        getEnemy.innerHTML   = '<img src="img/enemy-avatars/' + enemy.enemyType.toLowerCase() + '.jpeg" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
    } 