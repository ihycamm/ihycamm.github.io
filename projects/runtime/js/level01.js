var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "reward", "x": 500, "y": groundY},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        for (var i = 0; i < levelData.gameItems.length; i++) {
            if (levelData.gameItems[i].type === "enemy") {
                createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "reward") {
                createReward(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "sawblade") {
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "custom") {
                createMyObstacle(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }


        }
        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;

        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
      
        // function createKanye(x, y) {
        //    var hitZoneSiz = 100;
        //      var damageFromObstacl = 40;
        //     var kanyeHitZone = game.createObstacle(hitZoneSiz, damageFromObstacl);
        //     kanyeHitZone.x = x;
        //      kanyeHitZone.y = y;
        //      game.addGameItem(kanyeHitZone);
        //      var obstaclImage = draw.bitmap('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108b3722-09ff-4187-8a71-aab33b0eb774/dbav96i-b288ee93-4c23-428f-be77-8020c8325fb9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwOGIzNzIyLTA5ZmYtNDE4Ny04YTcxLWFhYjMzYjBlYjc3NFwvZGJhdjk2aS1iMjg4ZWU5My00YzIzLTQyOGYtYmU3Ny04MDIwYzgzMjVmYjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbPVjDluH0T7rrAWensk5KV3GAF3Q0TuT5S1LhLMH1A');
        //      kanyeHitZone.addChild(obstaclImage);
        // obstaclImage.x = -25;
        // obstaclImage.y = -25;
        //      obstaclImage.height = 10;
        //    obstaclImage.width = 10;

        //   };


        //  createKanye(200, 100)
      function createEnemy (x,y) {}  
            var enemy = game.createGameItem('enemy', 25);
            var redSquare = draw.rect(50, 50, 'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = 400;
            enemy.y = groundY - 50;

        
        game.addGameItem(enemy);

        enemy.velocityX = -1;
        enemy.rotationalVelocity = 10;
        enemy.onPlayerCollision = function() {
            console.log('The enemy has hit Halle');
            game.changeIntegrity(-10);
        }
        enemy.onProjectileCollision = function () {
            console.log('Halle has hit the enemy');
            game.increaseScore(0.0001);
            enemy.shrink();

        }
   
   
    // function reward(x, y) {
    //     var reward = game.createGameItem('reward', 25);
    //     var kanbae = draw.bitmap('img/kanbae.jpeg');
    //     kanbae.x = -25;
    //     kanbae.y = -25;
    //     reward.addChild(kanbae);
    //     reward.x = x;
    //     reward.y = y;
    //     reward.velocityX = -1;
    //     reward.rotationalVelocity = 10;
    //     game.addGameItem(reward);
    //     reward.onPlayerCollision = function () {
    //         console.log('got da reward');
    //         reward.shrink();
    //         game.changeIntegrity(0.5);
    //     };
    // }

    function createReward(x, y) {
        var reward = game.createGameItem('reward', 25);
        var blueSquare = draw.rect(20, 50, 'blue');
        blueSquare.x = -10;
        blueSquare.y = -25;
        reward.addChild(blueSquare);
        reward.x = x;
        reward.y = y;
        reward.velocityX = -1;
        reward.rotationalVelocity = 0;
        game.addGameItem(reward);
        reward.onPlayerCollision = function () {
            game.changeIntegrity(10);
            console.log('Halle was rewarded');
            reward.fadeOut();
        };

    }

  
        // DO NOT EDIT CODE BELOW HERE
    
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
