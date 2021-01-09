let GameManager = {
     initializeGame: function(classType){
        this.resetPlayer(classType);
        this.buildFight();
     },

     resetPlayer: function(classType){
        switch (classType){
            case "Crusader":
                player = new Player(classType, 20, 0, 200, 80, 50);
                break;
            case "Mage":
                player = new Player(classType, 10, 50, 80, 10, 75);
                break;
            case "Witchdoctor":
                player = new Player(classType, 12, 25, 100, 90, 60);
                break;    
        }
            //variable to select the interface class
            let getInterface = document.querySelector(".interface");
            //set the HTML of the interface equal to the Player's character image/title/stats to start loading the game
            getInterface.innerHTML = `<img src="img/${classType.toLowerCase()}.jpeg" class="img-avatar"><div><h3>${classType}</h3><p class="player-health">Health: ${player.health}</p><p>Mana: ${player.mana}</p><p>Strength: ${player.strength}</p><p>Agility: ${player.agility}</p><p>Speed: ${player.speed}</p></div>`;

     },

     buildFight: function(){
        let getHeader = document.querySelector(".header");
        let getAttacks = document.querySelector(".attacks");
        let getArena = document.querySelector(".arena");
        //append instructions to the DOM
        getHeader.innerHTML = '<p>Find an enemy using the BEGIN BATTLE button below!</p>';
        //build a button to start the battle in the DOM (aka move to set fight function)
        getAttacks.innerHTML = '<button class="btn btn-primary" type="button" onclick="GameManager.setFight()">Begin Battle</button>';
        //make the Arena element available in the DOM
        getArena.style.visibility = "visible";
     },

     setFight: function() {
        //grab the elements for Enemy to manipulate the DOM
        let getHeader = document.querySelector(".header");
        let getAttacks = document.querySelector(".attacks");
        let getEnemy = document.querySelector(".enemy");

        //declare the enemy types 
        const enemy00 = new Enemy("Goblin",10,0,50,100,45);
        const enemy01 = new Enemy("Fallen",15,0,75,75,60);
        const enemy02 = new Enemy("Boggit",20,0,200,50,50);
        const enemy03 = new Enemy("Wraith",12,25,100,25,35);

        //Logic to randomly select an enemy to fight in this dungeon battle
        let randomEnemySelector = Math.floor(Math.random() * 4);
        console.log(randomEnemySelector);//remove later

        switch(randomEnemySelector) {
            case 0: enemy = enemy00;
            break;
            case 1: enemy = enemy01;
            break;
            case 2: enemy = enemy02;
            break;
            case 3: enemy = enemy03;
            break;
        }
        console.log(enemy);
        //assign html statements for different attacks to the DOM
        getHeader.innerHTML  = '<p>STEP 2: Choose Your Attack</p>';
        getAttacks.innerHTML = '<button class="btn btn-primary" type="button" onclick="PlayerMoves.calcAttack()">Step 3: Attack!</button>';
        //build the enemy in the DOM starting with the enemy's image, the name of the enemy in a header, and then a status box of the enemy's vitals
        //getEnemy.innerHTML = '<img src="/img/enemy-avatars/' + enemy.classType.toLowerCase() + '.jpeg" alt="' + enemy.classType + '" class="img-avatar"><div><h3>' + enemy.classType + '</h3><p class="enemy-health">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
        getEnemy.innerHTML = `<img src="/img/enemyavatars/${enemy.enemyType}.jpeg" alt= ${enemy.enemyType} class="img-avatar"><div><h3>${enemy.enemyType}</h3><p class="enemy-health">Health: ${enemy.health}</p><p>Mana: ${enemy.mana}</p><p>Strength: ${enemy.strength}</p><p>Agility: ${enemy.agility}</p><p>Speed: ${enemy.speed}</p></div>`;
    }
    } 