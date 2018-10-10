// gameplayState constructor

let gameplayState = function(){
	// could do this in create() too but what the heck
	this.score = 0;
};

gameplayState.prototype.create = function(){
	// globally enable the arcade-style physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	ocean = game.add.tileSprite(0,0, 800, 600, "water");
	
	
	cursors = game.input.keyboard.createCursorKeys();
    /**/
};

gameplayState.prototype.update = function () {

    ocean.tilePosition.x += 10;

	
};

