let GameManager = {
     initializeGame: function(classType){
        this.resetPlayer(classType);
        this.setupFight();
     },

     resetPlayer: function(classType){
        switch (classType){
            case "Crusader":
                player = new playerOne(classType, 200, 0, 200, 100, 50);
                break;
            case "Mage":
                player = new playerOne(classType, 100, 50, 80, 110, 75);
                break;
            case "Witchdoctor":
                player = new playerOne(classType, 120, 25, 100, 120, 100);
                break;    
        }
        let getInterface = document.querySelector(".interface");
            getInterface.innerHTML = '<img src="img/' + classType.toLowerCase() + '.jpeg " class="img-avatar"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';

     },

     setupFight: function(){
        let getHeader = document.querySelector(".header");
        let getAttacks = document.querySelector(".attacks");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getAttacks.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for monster!</a>';
        getArena.style.visibility = "visible";
     },

     setFight: function() {
        let getHeader = document.querySelector(".header");
        let getAttacks = document.querySelector(".attacks");
        let getEnemy = document.querySelector(".enemy");
        
        let enemy00 = new theEnemy("Goblin", 100,0,50,100,100);
        let enemy01 = new theEnemy("Troll", 150,0,75,75,75);
        let enemy02 = new theEnemy("Orc",200,0,200,50,50);
        let enemy03 = new theEnemy("Valkyrie",125,25,100,25,25);

        let randomEnemySelector = Math.floor(Math.random() * Math.floor(4));
        console.log(randomEnemySelector);

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
        getHeader.innerHTML = '<p>Task: Choose Your Move</p>';
    }
    } 