// gameplayState constructor

let gameplayState = function(){
	// could do this in create() too but what the heck
	this.score = 0;
};

gameplayState.prototype.create = function(){
	// globally enable the arcade-style physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	ocean = game.add.tileSprite(0,0, "water");
	
	/*/ groups work differently. You enable physics on the whole group, and
	// add sprites to them using the group's own create function
	this.platforms = game.add.group();
	this.platforms.enableBody = true;
	
	let ground = this.platforms.create(0, game.world.height - 64, "platform");
	ground.scale.set(2,2);
	ground.body.immovable = true;
	
	
	this.player = game.add.sprite(32, game.world.height - 150, "murph");
	game.physics.arcade.enable(this.player);
	
	this.player.body.bounce.y = 0.2;
	this.player.body.gravity.y = 300;
	this.player.body.collideWorldBounds = true;
	
	// name, array of frame indices, fps, loop?
	this.player.animations.add("left", [0, 1, 2, 3], 10, true);
	this.player.animations.add("right", [5, 6, 7, 8], 10, true);
	
	// group of collectibles
	this.stars = game.add.group();
	this.stars.enableBody = true;
	
	// add 12 stars to the group, spaced evenly apart and with slightly randomized bounciness
	for (let i=0; i< 12; i++)
	{
		let star = this.stars.create(i*70, 0, "star");
		star.body.gravity.y = 300;
		star.body.bounce.y = 0.5 + Math.random() * 0.2;
	}
	
	// can supply style argument to text() directly as an object literal
	this.scoreText = game.add.text(16, 16, "Score: 0", {fontSize: '32px', fill: '#000'});
	
	// a simple input system: this function returns a small object that says whether
	// the individual arrow keys are currently in their down state
	this.cursors = game.input.keyboard.createCursorKeys();
    /**/
};

gameplayState.prototype.update = function () {

    space


	/*/ every frame, auto-separate player and starts from platform group
	game.physics.arcade.collide(this.player, this.platforms);
	game.physics.arcade.collide(this.stars, this.platforms);
	
	// two objects/groups in question, callback function, optional function to call for
	// further collision processing (e.g. two circles), and the context to use for
	// the callback function. If you want the callback function to access gameplayState
	// variables, you need to pass the current object to the context.
	game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);
	
	//reset x velocity
	this.player.body.velocity.x = 0;
	
	if (this.cursors.left.isDown){
		this.player.body.velocity.x = -150;
		this.player.animations.play("left");
	}
	else if (this.cursors.right.isDown){
		this.player.body.velocity.x = 150;
		this.player.animations.play("right");
	}
	else {
		//stand still
		this.player.animations.stop();
		this.player.frame = 4;
	}
	
	if (this.cursors.up.isDown && this.player.body.touching.down){
		this.player.body.velocity.y = -350;
	}
    */
	
};

gameplayState.prototype.collectStar = function(player, star){
	// Remove the star that you overlapped as unecessarily violently as you can
	star.kill();
	
	this.score += 10;
	this.scoreText.text = "Score: " + this.score;
};