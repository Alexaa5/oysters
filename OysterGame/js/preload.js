// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
    game.load.image("water", "assets/water.png");
	game.load.image("sand", "assets/sand.png");
	game.load.image("star", "assets/star.png");
	game.load.spritesheet("murph", "assets/character.png", 32, 48);
};

preloadState.prototype.create = function(){
	game.state.start("Game"); 
	ocean = game.add.tileSprite(0, 0, 800, 600, "water");

	this.platforms = game.add.group();
	this.platforms.enableBody = true;

	let ground = this.platforms.create(0, game.world.height - 64, "sand");
	ground.scale.set(2, 2);
	ground.body.immovable = true;

};

preloadState.prototype.update = function(){
    ocean.tilePosition.x -= 1;
    //ground.tilePosition.x -=1
};