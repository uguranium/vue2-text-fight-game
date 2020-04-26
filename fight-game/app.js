new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        max: 10,
        min: 3,
        specialValue: 15,
        turns: [],
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100; 
        },
        attack: function() {
            var damageMonster = this.randomInt(this.max,this.min);
            var damagePlayer = this.randomInt(this.max,this.min);
            this.monsterHealth -= damageMonster;
            this.playerHealth -= damagePlayer;
            this.turns.push("You hit monster: "+ damageMonster);
            this.turns.push("Monster hit you: "+ damagePlayer);
            this.checkHealth();
        },
        specialAttack: function() {
            var specialMax = this.max+this.specialValue;
            var specialMin = this.min+this.specialValue;
            var damageMonster = this.randomInt(specialMax,specialMin);
            var damagePlayer = this.randomInt(specialMax,specialMin);
            this.monsterHealth -= damageMonster;
            this.playerHealth -= damagePlayer;
            this.turns.push("You hit monster: "+ damageMonster);
            this.turns.push("Monster hit you: "+ damagePlayer);
            this.checkHealth();
        },
        heal: function() {
            var healMonster = this.randomInt(this.max,this.min);
            var healPlayer = this.randomInt(this.max,this.min);
            this.monsterHealth += healMonster;
            this.playerHealth += healPlayer;
            this.turns.push("Monster get heal: "+ healMonster);
            this.turns.push("You get heal: "+ healPlayer);
            if (this.monsterHealth > 100) {
                this.monsterHealth = 100;
            }
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
        },
        giveUp: function() {
            this.gameIsRunning = false;
            this.turns = [];
        },
        checkHealth: function() {
            if(this.playerHealth <= 0 && this.monsterHealth <= 0) {
                if(this.playerHealth <= this.monsterHealth) {
                    alert("You lost!");
                    return this.endOfGame();
                }
                alert("You Won!");
                return this.endOfGame();
            }
            if(this.playerHealth <= 0) {
                alert("You Lost!");
                return this.endOfGame();
            }
            if(this.monsterHealth <= 0) {
                alert("You Won!");
                return this.endOfGame();
            }
        },
        endOfGame: function() {
            this.playerHealth = 0;
            this.monsterHealth = 0;
            this.turns = [];
            return this.gameIsRunning = false;
        },
        randomInt: function(min,max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        }
    }
});