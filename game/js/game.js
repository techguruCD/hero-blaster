////////////////////////////////////////////////////////////
// GAME v1.3
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

//themes array
var themesArr = [
	{
		design:{src:"assets/theme_design_01.png", extraHeight:0},
		bomb:{src:"assets/theme_bomb_01.png", extraHeight:0},
		explosion:{src:"assets/theme_explosion_01.png", extraHeight:0},
		player:{src:"assets/theme_character_01.png", extraHeight:0},
		enemies:{src:"assets/theme_enemy_01.png", extraHeight:0},
		powers:{src:"assets/theme_powers_01.png", extraHeight:0}
	},
	{
		design:{src:"assets/theme_design_02.png", extraHeight:0},
		bomb:{src:"assets/theme_bomb_01.png", extraHeight:0},
		explosion:{src:"assets/theme_explosion_01.png", extraHeight:0},
		player:{src:"assets/theme_character_01.png", extraHeight:0},
		enemies:{src:"assets/theme_enemy_01.png", extraHeight:0},
		powers:{src:"assets/theme_powers_01.png", extraHeight:0}
	},
	{
		design:{src:"assets/theme_design_03.png", extraHeight:0},
		bomb:{src:"assets/theme_bomb_01.png", extraHeight:0},
		explosion:{src:"assets/theme_explosion_01.png", extraHeight:0},
		player:{src:"assets/theme_character_02.png", extraHeight:0},
		enemies:{src:"assets/theme_enemy_01.png", extraHeight:0},
		powers:{src:"assets/theme_powers_01.png", extraHeight:0}
	},
	{
		design:{src:"assets/theme_design_04.png", extraHeight:0},
		bomb:{src:"assets/theme_bomb_01.png", extraHeight:0},
		explosion:{src:"assets/theme_explosion_01.png", extraHeight:0},
		player:{src:"assets/theme_character_03.png", extraHeight:0},
		enemies:{src:"assets/theme_enemy_01.png", extraHeight:0},
		powers:{src:"assets/theme_powers_01.png", extraHeight:0}
	},
	{
		design:{src:"assets/theme_design_05.png", extraHeight:20},
		bomb:{src:"assets/theme_bomb_01.png", extraHeight:0},
		explosion:{src:"assets/theme_explosion_01.png", extraHeight:0},
		player:{src:"assets/theme_character_04.png", extraHeight:20},
		enemies:{src:"assets/theme_enemy_02.png", extraHeight:20},
		powers:{src:"assets/theme_powers_01.png", extraHeight:0}
	},
	{
		design:{src:"assets/theme_design_06.png", extraHeight:20},
		bomb:{src:"assets/theme_bomb_01.png", extraHeight:0},
		explosion:{src:"assets/theme_explosion_01.png", extraHeight:0},
		player:{src:"assets/theme_character_05.png", extraHeight:20},
		enemies:{src:"assets/theme_enemy_02.png", extraHeight:20},
		powers:{src:"assets/theme_powers_01.png", extraHeight:0}
	},
	{
		design:{src:"assets/theme_design_07.png", extraHeight:20},
		bomb:{src:"assets/theme_bomb_01.png", extraHeight:0},
		explosion:{src:"assets/theme_explosion_01.png", extraHeight:0},
		player:{src:"assets/theme_character_06.png", extraHeight:20},
		enemies:{src:"assets/theme_enemy_02.png", extraHeight:20},
		powers:{src:"assets/theme_powers_01.png", extraHeight:0}
	}
]

//enemies
var enemiesArr = [
	{speed:1, walkThroughBrick:false, score:100},
	{speed:2, walkThroughBrick:false, score:120},
	{speed:2, walkThroughBrick:true, score:150}
];

//power ups
var powersArr = [
	{speed:0, bombRange:0, bomb:1, bombThroughBrick:false, walkThroughBrick:false, detonator:false, fireShield:false, bombShield:false, desc:"+BOMB"},
	{speed:0, bombRange:1, bomb:0, bombThroughBrick:false, walkThroughBrick:false, detonator:false, fireShield:false, bombShield:false, desc:"+BOMB RANGE"},
	{speed:0, bombRange:0, bomb:0, bombThroughBrick:false, walkThroughBrick:true, detonator:false, fireShield:false, bombShield:false, desc:"WALK\nTHROUGH BRICK"},
	{speed:1, bombRange:0, bomb:0, bombThroughBrick:false, walkThroughBrick:false, detonator:false, fireShield:false, bombShield:false, desc:"+SPEED"},
	{speed:0, bombRange:0, bomb:0, bombThroughBrick:false, walkThroughBrick:false, detonator:false, fireShield:false, bombShield:false, desc:"FIRE\nTHOUGH BRICK"},
	{speed:0, bombRange:0, bomb:0, bombThroughBrick:false, walkThroughBrick:false, detonator:true, fireShield:false, bombShield:false, desc:"DETONATOR"},
	{speed:0, bombRange:0, bomb:0, bombThroughBrick:false, walkThroughBrick:false, detonator:false, fireShield:true, bombShield:false, desc:"FIRE SHIELD"},
	{speed:0, bombRange:0, bomb:0, bombThroughBrick:false, walkThroughBrick:false, detonator:false, fireShield:false, bombShield:true, desc:"BOMB SHIELD"},
];

//stage settings
var stageArr = [
	{
		column:11,
		row:9,
		countdown:60000,
		bricks:20,
		bomb:1,
		bombRange:1,
		enemies:[0,0,0,0],
		powers:[0,0,1,1,2,3],
	},
	{
		column:11,
		row:9,
		countdown:60000,
		bricks:20,
		bomb:2,
		bombRange:1,
		enemies:[0,0,0,0,0,0],
		powers:[0,0,1,1,2,3],
	},
	{
		column:13,
		row:9,
		countdown:60000,
		bricks:20,
		bomb:2,
		bombRange:1,
		enemies:[0,0,0,0,1,1],
		powers:[0,0,0,1,1,1,2,3,4],
	},
	{
		column:13,
		row:9,
		countdown:60000,
		bricks:20,
		bomb:3,
		bombRange:1,
		enemies:[0,0,0,0,1,1,1,1],
		powers:[0,0,0,1,1,1,2,3,4],
	},
	{
		column:15,
		row:9,
		countdown:60000,
		bricks:25,
		bomb:3,
		bombRange:1,
		enemies:[0,0,0,1,1,2],
		powers:[0,0,0,1,1,1,2,3,4,5],
	},
	{
		column:15,
		row:9,
		countdown:60000,
		bricks:30,
		bomb:3,
		bombRange:1,
		enemies:[0,0,0,1,1,2,2],
		powers:[0,0,0,1,1,1,2,3,4,5],
	},
	{
		column:17,
		row:9,
		countdown:60000,
		bricks:30,
		bomb:3,
		bombRange:1,
		enemies:[0,0,1,1,2,2,2],
		powers:[0,0,0,1,1,1,1,2,3,4,5,6,7],
	},
	{
		column:17,
		row:9,
		countdown:60000,
		bricks:30,
		bomb:4,
		bombRange:1,
		enemies:[0,1,1,2,2,2,2],
		powers:[0,0,0,1,1,1,1,2,3,4,5,6,7],
	},
	{
		column:19,
		row:11,
		countdown:120000,
		bricks:40,
		bomb:5,
		bombRange:1,
		enemies:[0,0,1,1,1,2,2,2,2],
		powers:[0,0,0,1,1,1,1,2,3,4,5,6,7],
	},
	{
		column:19,
		row:11,
		countdown:120000,
		bricks:40,
		bomb:5,
		bombRange:1,
		enemies:[2,2,2,2,2,2,2,2,2,2,2,2],
		powers:[0,0,0,1,1,1,1,2,3,4,5,6,7],
	}
];

//game settings
var gameSettings = {
	gridSize:50,
	playerSpeed:3,
	moveRange:15,
	showScreenControl:true, // true always show control, false for auto detect for touch devices
	screenControlSide:true, //true for right, false for left
	screenControlAlpha:.6,
	keyboard:{ //keyboard keycode
		up:[87,38],
		left:[65,37],
		right:[68,39],
		down:[83,40],
		bomb:[90],
		detonator:[88],
	},
	brickScore:10
};

//game text display
var textDisplay = {
	theme:'CHOOSE THEME',
	stage:'STAGE [NUMBER]',
	point:'[NUMBER]PTS',
	bomb:'x [NUMBER]',
	enemies:'LEFT : [NUMBER]',
	timer:'TIME : [NUMBER]',
	timesup:'TIME\'S UP',
	gameover:'GAME OVER',
	complete:'STAGE CLEAR',
	exitTitle:'EXIT GAME',
	exitMessage:'Are you sure you want\nto quit game?',
	share:'Share your score:',
	resultTitle:'GAME OVER',
	resultDesc:'[NUMBER]PTS',
}

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareTitle = 'Highscore on Hero Blaster is [SCORE]';//social share score title
var shareMessage = '[SCORE] is mine new highscore on Hero Blaster! Try it now!'; //social share score message

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
var playerData = {speed:0, score:0, level:0, bomb:1, bombRange:1, bombThroughBrick:false, detonator:false};
var gameData = {paused:true, themeNum:0, control:false, settings:{}, map:[], dir:"", bomb:false, bomb:[], enemies:[], complete:false, tutorial:1};
var tweenData = {score:0, tweenScore:0};
var timeData = {enable:false, startDate:null, nowDate:null, timer:0, oldTimer:0, countdown:0};

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	$(window).focus(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(false);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(false);
			}
		}
	});
	
	$(window).blur(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(true);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(true);
			}
		}
	});
	if($.browser.mobile || isTablet){
		
	}else{
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if(isInIframe){
			this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
		
			$(window).blur(function() {
				appendFocusFrame();
			});
			appendFocusFrame();
        }else{
            this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
        }
	}

	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage("theme");
	});

	buttonArrowL.cursor = "pointer";
	buttonArrowL.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleTheme(false);
	});

	buttonArrowR.cursor = "pointer";
	buttonArrowR.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleTheme(true);
	});

	buttonSelect.cursor = "pointer";
	buttonSelect.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage("tutorial");
	});

	buttonTutorialL.cursor = "pointer";
	buttonTutorialL.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleTutorial(false);
	});

	buttonTutorialR.cursor = "pointer";
	buttonTutorialR.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleTutorial(true);
	});

	buttonNext.cursor = "pointer";
	buttonNext.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage("game");
	});
	
	itemExit.addEventListener("click", function(evt) {
	});
	
	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('main');
	});
	
	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonWhatsapp.cursor = "pointer";
	buttonWhatsapp.addEventListener("click", function(evt) {
		share('whatsapp');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleSoundMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleSoundMute(false);
	});

	if (typeof buttonMusicOff != "undefined") {
		buttonMusicOff.cursor = "pointer";
		buttonMusicOff.addEventListener("click", function(evt) {
			toggleMusicMute(true);
		});
	}
	
	if (typeof buttonMusicOn != "undefined") {
		buttonMusicOn.cursor = "pointer";
		buttonMusicOn.addEventListener("click", function(evt) {
			toggleMusicMute(false);
		});
	}
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		togglePop(true);
		toggleOption();
	});
	
	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOption();
	});
	
	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		playSound('soundButton');
		togglePop(false);
		
		stopAudio();
		stopGame();
		goPage('main');
	});
	
	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		playSound('soundButton');
		togglePop(false);
	});
	
	buttonBomb.cursor = "pointer";
	buttonBomb.addEventListener("mousedown", function(evt) {
		gameData.moveControl.bomb = true;
	});
	
	buttonBomb.addEventListener("pressup", function(evt) {
		gameData.moveControl.bomb = false;
	});

	buttonDetanator.cursor = "pointer";
	buttonDetanator.addEventListener("mousedown", function(evt) {
		gameData.moveControl.detonator = true;
	});
	
	buttonDetanator.addEventListener("pressup", function(evt) {
		gameData.moveControl.detonator = false;
	});

	setupTouchControl();
	gameData.themeNum = Math.floor(Math.random() * themesArr.length);
	toggleTutorial(false);
	toggleTutorial(true);
	preventScrolling();
}

function preventScrolling(){
	var keys = [32,38,37,40,39];
    $(window).on( "keydown", function(event) {
      if(keys.indexOf(event.keyCode) != -1){
        event.preventDefault();
      }
    });
}

function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});	
}

function toggleTutorial(con){
	if(con){
		gameData.tutorial++;
		gameData.tutorial = gameData.tutorial > 3 ? 1 : gameData.tutorial;
	}else{
		gameData.tutorial--;
		gameData.tutorial = gameData.tutorial < 1 ? 3 : gameData.tutorial;
	}

	itemTutorial1.visible = false;
	itemTutorial2.visible = false;
	itemTutorial3.visible = false;

	if(gameData.tutorial == 1){
		itemTutorial1.visible = true;
	}else if(gameData.tutorial == 2){
		itemTutorial2.visible = true;
	}else{
		itemTutorial3.visible = true;
	}
}


/*!
 * 
 * KEYBOARD EVENTS - This is the function that runs for keyboard events
 * 
 */
function keydown(event) {
	if(gameSettings.keyboard.left.indexOf(event.keyCode) != -1){
		gameData.moveControl.left = true;
	}else if(gameSettings.keyboard.right.indexOf(event.keyCode) != -1){
		gameData.moveControl.right = true;
	}else if(gameSettings.keyboard.up.indexOf(event.keyCode) != -1){
		gameData.moveControl.up = true;
	}else if(gameSettings.keyboard.down.indexOf(event.keyCode) != -1){
		gameData.moveControl.down = true;
	}
	
	if(gameSettings.keyboard.bomb.indexOf(event.keyCode) != -1){
		gameData.moveControl.bomb = true;
	}

	if(gameSettings.keyboard.detonator.indexOf(event.keyCode) != -1){
		gameData.moveControl.detonator = true;
	}
}

function keyup(event) {
	if(gameSettings.keyboard.bomb.indexOf(event.keyCode) != -1){
		gameData.moveControl.bomb = false;
	}

	if(gameSettings.keyboard.detonator.indexOf(event.keyCode) != -1){
		gameData.moveControl.detonator = false;
	}

	if(gameSettings.keyboard.left.indexOf(event.keyCode) != -1){
		gameData.moveControl.left = false;
	}else if(gameSettings.keyboard.right.indexOf(event.keyCode) != -1){
		gameData.moveControl.right = false;
	}else if(gameSettings.keyboard.up.indexOf(event.keyCode) != -1){
		gameData.moveControl.up = false;
	}else if(gameSettings.keyboard.down.indexOf(event.keyCode) != -1){
		gameData.moveControl.down = false;
	}
}

/*!
 * 
 * TOGGLE GAME TYPE - This is the function that runs to toggle game type
 * 
 */
function toggleTheme(con){
	if(con){
		gameData.themeNum++;
		gameData.themeNum = gameData.themeNum > themesArr.length-1 ? 0 : gameData.themeNum;
	}else{
		gameData.themeNum--;
		gameData.themeNum = gameData.themeNum < 0 ? themesArr.length-1 : gameData.themeNum;
	}

	buildMap();
}

/*!
 * 
 * TOGGLE POP - This is the function that runs to toggle popup overlay
 * 
 */
function togglePop(con){
	confirmContainer.visible = con;
}


/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	mainContainer.visible = false;
	themeContainer.visible = false;
	tutorialContainer.visible = false;
	mapContainer.visible = mapBorder.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	stopGame();
	
	var targetContainer = null;
	switch(page){
		case 'main':
			targetContainer = mainContainer;
			playMusicLoop("musicMain");
			stopMusicLoop("musicGame");
		break;

		case 'theme':
			targetContainer = themeContainer;
			mapContainer.visible = mapBorder.visible = true;

			gameData.settings = {
				column:9,
				row:7,
				enemies:[0,1,2],
				powers:[],
				bricks:10
			};

			buildMap();
		break;

		case 'tutorial':
			targetContainer = tutorialContainer;
		break;
		
		case 'game':
			targetContainer = gameContainer;
			mapContainer.visible = mapBorder.visible = true;
			playMusicLoop("musicGame");
			stopMusicLoop("musicMain");
			startGame();
		break;
		
		case 'result':
			targetContainer = resultContainer;
			stopGame();
			togglePop(false);
			
			playSound('soundResult');
			tweenData.tweenScore = 0;
			TweenMax.to(tweenData, .5, {tweenScore:playerData.score, overwrite:true, onUpdate:function(){
				resultDescTxt.text = resultShadowDescTxt.text = textDisplay.resultDesc.replace('[NUMBER]', addCommas(Math.floor(tweenData.tweenScore)));
			}});

			saveGame(playerData.score);
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

/*!
 * 
 * START GAME - This is the function that runs to start game
 * 
 */
function startGame(){
	playerData.score = 0;
	playerData.level = 0;
	updateGameScore();
	setupMapLevel();
	buildMap();

	//playerData.detonator = true;
	//buttonDetanator.visible = playerData.detonator;
	//playerData.bombRange = 10;

	touchContainer.visible = false;
	if(gameSettings.showScreenControl){
		touchContainer.visible = true;
		touchContainer.alpha = gameSettings.screenControlAlpha;
	}else{
		if($.browser.mobile || isTablet){
			touchContainer.visible = true;
			touchContainer.alpha = gameSettings.screenControlAlpha;
		}
	}
}

function setupMapLevel(){
	var currentLevel = playerData.level > stageArr.length-1 ? stageArr.length-1 : playerData.level;
	gameData.settings = {
		row:stageArr[currentLevel].row,
		column:stageArr[currentLevel].column,
		enemies:stageArr[currentLevel].enemies.slice(),
		powers:stageArr[currentLevel].powers.slice(),
		bricks:stageArr[currentLevel].bricks
	};

	tweenData.tweenScore = 0;
	playerData.speed = gameSettings.playerSpeed;
	playerData.bomb = stageArr[currentLevel].bomb;
	playerData.bombRange = stageArr[currentLevel].bombRange;
	playerData.bombThroughBrick = false;
	playerData.detonator = false;
	playerData.detonatoring = false;
	timeData.countdown = stageArr[currentLevel].countdown;

	buttonDetanator.visible = playerData.detonator;
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
 function stopGame(){
	gameData.paused = true;
	gameData.control = false;
	stopSoundLoop('soundMove');
	TweenMax.killAll(false, true, false);
}

function saveGame(score){
	if ( typeof toggleScoreboardSave == 'function' ) { 
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;	
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}


/*!
 * 
 * BUILD MAP - This is the function that runs to build map
 * 
 */
function buildMap(){
	gameData.complete = false;

	floorContainer.removeAllChildren();
	objectsContainer.removeAllChildren();
	bombContainer.removeAllChildren();
	explosionContainer.removeAllChildren();
	powerContainer.removeAllChildren();
	mapStatusContainer.removeAllChildren();

	gameData.map = [];
	gameData.empty = [];
	gameData.bricks = [];
	gameData.powers = [];

	var positionData = {x:0, y:0};
	var gridSize = gameSettings.gridSize;
	var rowWall = true;
	var columnWall = false;
	for(var r=0; r<gameData.settings.row; r++){
		gameData.map.push([]);
		for(var c=0; c<gameData.settings.column; c++){
			var isWall = false;
			if(r == 0 || r == gameData.settings.row-1){
				isWall = true;
			}
			if(c == 0 || c == gameData.settings.column-1){
				isWall = true;
			}
			if(!isWall){
				columnWall = columnWall == true ? false : true;
				if(rowWall && columnWall){
					isWall = true;
				}
			}
			if(isWall){
				var newWall = getSpriteSheet("design");
				if(c == 0 || c == gameData.settings.column-1){
					newWall.gotoAndStop("wallLR");
					if(r == gameData.settings.row-1){
						newWall.gotoAndStop("wallTB");
					}
				}else if(r == 0 || r == gameData.settings.row-1){
					newWall.gotoAndStop("wallTB");
				}else{
					newWall.gotoAndStop("wall");
				}
				newWall.x = positionData.x;
				newWall.y = positionData.y;
				objectsContainer.addChild(newWall);
			}

			var newFloor = getSpriteSheet("design");
			if(isEven(r)){
				if(isEven(c)){
					newFloor.gotoAndStop("floor");
				}else{
					newFloor.gotoAndStop("floorDark");
				}
			}else{
				if(isEven(c)){
					newFloor.gotoAndStop("floorDark");
				}else{
					newFloor.gotoAndStop("floor");
				}
			}
			newFloor.x = positionData.x;
			newFloor.y = positionData.y;
			floorContainer.addChild(newFloor);
			
			positionData.x += gridSize;
			gameData.map[r][c] = isWall == true ? 0 : 1;
			if(!isWall){
				gameData.empty.push({r:r,c:c});
			}
		}

		rowWall = rowWall == true ? false : true;

		positionData.x = 0;
		positionData.y += gridSize;
	}

	// 0 = wall
	// 1 = empty
	// 2 = brick
	// 3 = path
	// 5 = bomb

	mapContainer.mask = mapMask;
	mapMoveContainer.x = gridSize/2;
	mapMoveContainer.y = gridSize/2;
	gameData.settings.width = (gameData.settings.column * gridSize);
	gameData.settings.height = (gameData.settings.row * gridSize);

	gameData.dir = "";
	gameData.bomb = [];
	gameData.moveControl = {
		left:false,
		right:false,
		up:false,
		down:false,
		bomb:false,
		detonator:false
	}

	updateBombIcon();
	updateGameStats();

	statusContainer.alpha = 0;
	timerRedTxt.alpha = 0;
	timerTxt.text = timerRedTxt.text = textDisplay.timer.replace('[NUMBER]', millisecondsToTimeGame(timeData.countdown));

	createPlayer();
	createEnemies();
	createBricks();
	updateChildrenIndex();
	resizeMap();
	moveCamera();

	if(curPage == "game"){
		showGameStatus("stage");
		playSound("soundStage");
		TweenMax.to(mapContainer, 2, {overwrite:true, onComplete:function(){
			statusContainer.alpha = 0;

			gameData.paused = false;
			gameData.control = true;
			toggleGameTimer(true);
		}});
	}
}

function resizeMap(){
	var maskSettings  = {w:800, h:450};
	if(!viewport.isLandscape){
		maskSettings.w = 600;
		maskSettings.h = 750;
	}
	gameData.maskW = gameData.settings.width > maskSettings.w ? maskSettings.w : gameData.settings.width;
	gameData.maskH = gameData.settings.height > maskSettings.h ? maskSettings.h : gameData.settings.height;
	mapMask.graphics.clear().beginFill('red').drawRect(0, 0, gameData.maskW, gameData.maskH);
	mapBorder.graphics.clear().setStrokeStyle(12).beginStroke('#3D435B').drawRect(0, 0, gameData.maskW, gameData.maskH);

	mapContainer.x = mapMask.x = mapBorder.x = canvasW/2 - (gameData.maskW/2);
	mapContainer.y = mapMask.y = mapBorder.y = canvasH/2 - (gameData.maskH/2);
	mapStatusContainer.x = mapContainer.x + mapMoveContainer.x;
	mapStatusContainer.y = mapContainer.y + mapMoveContainer.y;

	timerStatusContainer.x = mapContainer.x;
	timerStatusContainer.y = mapContainer.y - 10;

	enemyStatusContainer.x = mapContainer.x + gameData.maskW;
	enemyStatusContainer.y = mapContainer.y - 10;

	bombStatusContainer.x = enemyStatusContainer.x - 260;
	bombStatusContainer.y = mapContainer.y - 10;

	scoreStatusContainer.x = canvasW/2;
	scoreStatusContainer.y = (mapContainer.y + gameData.maskH) + 40;
}

/*!
 * 
 * SPRITE SHEET - This is the function that runs to get sprite sheet
 * 
 */
function getSpriteSheet(type){
	var _speed = .5;
	var _frameW = gameSettings.gridSize;
	var _frameH = gameSettings.gridSize;
	var _extraH = 0;
	var _count = 4;
	var _animations = {
		idle:{frames: [0], speed:_speed},
		tongue:{frames: [1], speed:_speed},
		eat:{frames: [2], speed:_speed},
		body:{frames: [3], speed:_speed},
		bodybend:{frames: [4], speed:_speed},
		tail:{frames: [5], speed:_speed}
	};
	var _source = "";
	var _frame = "";

	if(type == "design"){
		_extraH = themesArr[gameData.themeNum].design.extraHeight;
		_count = 6;
		_animations = {
			floor:{frames: [0], speed:_speed},
			floorDark:{frames: [1], speed:_speed},
			wallLR:{frames: [2], speed:_speed},
			wallTB:{frames: [3], speed:_speed},
			wall:{frames: [4], speed:_speed},
			brick:{frames: [5], speed:_speed}
		};
		_source = 'design'+gameData.themeNum;
		_frame = "floor";
	}else if(type == "bomb"){
		_extraH = themesArr[gameData.themeNum].bomb.extraHeight;
		_count = 3;
		_animations = {
			bomb:{frames: [0,1,1,2,2,1,1,0], speed:_speed}
		};
		_source = 'bomb'+gameData.themeNum;
		_frame = "bomb";
	}else if(type == "player"){
		_extraH = themesArr[gameData.themeNum].player.extraHeight;
		_count = 16;
		_animations = {
			leftstill:{frames: [1], speed:_speed},
			rightstill:{frames: [0], speed:_speed},
			upstill:{frames: [6], speed:_speed},
			downstill:{frames: [3], speed:_speed},
			down:{frames: [2,3,4,3], speed:_speed},
			up:{frames: [5,6,7,6], speed:_speed},
			side:{frames: [8,9,10,9], speed:_speed},
			dead:{frames: [11,12,13,14,15], speed:_speed, next:"deadstill"},
			deadstill:{frames: [15], speed:_speed},
		};
		_source = 'player'+gameData.themeNum;
		_frame = "leftiddle";
	}else if(type == "enemy"){
		_extraH = themesArr[gameData.themeNum].enemies.extraHeight;
		_count = enemiesArr.length * 8;
		_animations = {};
		for(var n=0; n<enemiesArr.length; n++){
			var count = n * 8;
			var deadCount = count + 3;
			_animations["enemy"+n] = {frames: [count,count+1,count+2,count+1], speed:_speed};
			_animations["enemydead"+n] = {frames: [deadCount,deadCount+1,deadCount+2,deadCount+3,deadCount+4], speed:_speed, next:"enemydeadstill"+n};
			_animations["enemydeadstill"+n] = {frames: [deadCount+4], speed:_speed};
		}
		_source = 'enemies'+gameData.themeNum;
		_frame = "enemy0";
	}else if(type == "powers"){
		_extraH = themesArr[gameData.themeNum].powers.extraHeight;
		_count = powersArr.length * 8;
		_animations = {};
		for(var n=0; n<powersArr.length; n++){
			_animations["power"+n] = {frames: [n], speed:_speed};
		}
		_source = 'powers'+gameData.themeNum;
		_frame = "power0";
	}else if(type == "explosion"){
		_extraH = themesArr[gameData.themeNum].explosion.extraHeight;
		_count = 28;
		_animations = {
			center:{frames: [0,1,2,3,4,5,6], speed:_speed},
			side:{frames: [7,8,9,10,11,12,13], speed:_speed},
			corner:{frames: [14,15,16,17,18,19,20], speed:_speed},
			brick:{frames: [21,22,23,24,25,26,27], speed:_speed},
		};
		_source = 'explosion'+gameData.themeNum;
		_frame = "center";
	}

	var _frame = {"regX": _frameW/2, "regY": _frameH/2 + _extraH, "height": _frameH + _extraH, "width": _frameW, "count": _count};				
	var spriteData = new createjs.SpriteSheet({
		"images": [loader.getResult(_source)],
		"frames": _frame,
		"animations": _animations
	});

	var newSpriteSheet = new createjs.Sprite(spriteData, _frame);
	newSpriteSheet.framerate = 20;
	return newSpriteSheet;
}

/*!
 * 
 * CREATE BRICKS - This is the function that runs to create bricks
 * 
 */
function createBricks(){
	gameData.empty = [];
	for(var r=0; r<gameData.settings.row; r++){
		for(var c=0; c<gameData.settings.column; c++){
			if(gameData.map[r][c] == 1){
				gameData.empty.push({r:r,c:c});
			}
			if(gameData.map[r][c] == 3){
				gameData.map[r][c] = 1;
			}
		}
	}

	shuffle(gameData.empty);
	shuffle(gameData.settings.powers);
	var gridSize = gameSettings.gridSize;
	var powerIndex = 0;
	for(var n=0; n<gameData.settings.bricks; n++){
		var newBrick = getSpriteSheet("design");
		newBrick.gotoAndStop("brick");
		newBrick.x = gameData.empty[n].c * gridSize;
		newBrick.y = gameData.empty[n].r * gridSize;
		newBrick.y -= 1;
		newBrick.column = gameData.empty[n].c;
		newBrick.row = gameData.empty[n].r;
		newBrick.powerIndex = -1;

		if(powerIndex < gameData.settings.powers.length){
			newBrick.powerIndex = gameData.settings.powers[powerIndex];
			powerIndex++;
		}

		gameData.map[gameData.empty[n].r][gameData.empty[n].c] = 2;
		gameData.bricks.push(newBrick);
		objectsContainer.addChild(newBrick);
	}
}

/*!
 * 
 * CREATE PLAYER - This is the function that runs to create player
 * 
 */
function createPlayer(){
	shuffle(gameData.empty);
	var gridSize = gameSettings.gridSize;
	gameData.player = getSpriteSheet("player");
	gameData.player.gotoAndPlay("leftstill");
	gameData.player.lastFrame = "";
	gameData.player.x = gridSize * gameData.empty[0].c;
	gameData.player.y = gridSize * gameData.empty[0].r;
	gameData.player.walkThroughBrick = false;
	gameData.player.bombShield = false;
	gameData.player.fireShield = false;
	objectsContainer.addChild(gameData.player);

	setMapPath(gameData.empty[0].c, gameData.empty[0].r);
}

/*!
 * 
 * CREATE ENEMIES - This is the function that runs to create enemies
 * 
 */
function createEnemies(){
	gameData.enemies = [];

	shuffle(gameData.empty);
	shuffle(gameData.settings.enemies);
	var gridSize = gameSettings.gridSize;
	var totalEnemyCount = 0;
	for(var n=0; n<gameData.empty.length; n++){
		var currentX = gridSize * gameData.empty[n].c;
		var currentY = gridSize * gameData.empty[n].r;
		var currentDistance = getDistance(gameData.player.x, gameData.player.y, currentX, currentY);

		if(currentDistance > 200){
			var enemyIndex = gameData.settings.enemies[totalEnemyCount];
			var newEnemy = getSpriteSheet("enemy");
			newEnemy.gotoAndPlay("enemy" + enemyIndex);
			newEnemy.active = true;
			newEnemy.enemyIndex = enemyIndex;
			newEnemy.walkThroughBrick = enemiesArr[enemyIndex].walkThroughBrick;
			newEnemy.bombShield = false;
			newEnemy.fireShield = false;
			newEnemy.x = gridSize * gameData.empty[n].c;
			newEnemy.y = gridSize * gameData.empty[n].r;
			newEnemy.lastX = newEnemy.x;
			newEnemy.lastY = newEnemy.y;
			newEnemy.dir = "";
			newEnemy.loop = 0;
			objectsContainer.addChild(newEnemy);

			gameData.enemies.push(newEnemy);
			getEnemyPath(newEnemy);

			setMapPath(gameData.empty[n].c, gameData.empty[n].r);
			totalEnemyCount++;
		}

		if(totalEnemyCount >= gameData.settings.enemies.length){
			n = gameData.empty.length;
		}
	}
}

/*!
 * 
 * MISC FUNCTION - This is the function that runs for misc functions
 * 
 */
function setMapPath(c, r){
	gameData.map[r][c] = 3;
	for(var n=0; n<4; n++){
		var pathArray = getPossiblePath(c,r);
		if(pathArray.length > 0){
			shuffle(pathArray);
			gameData.map[pathArray[0].r][pathArray[0].c] = 3;
		}
	}
}

function getPossiblePath(c,r){
	var possiblePath = [];
	if(gameData.map[r-1][c] == 1 || gameData.map[r-1][c] == 3){
		//top
		possiblePath.push({r:r-1, c:c});
	}
	
	if(gameData.map[r+1][c] == 1 || gameData.map[r+1][c] == 3){
		//bottom
		possiblePath.push({r:r+1, c:c});
	}
	
	if(gameData.map[r][c-1] == 1 || gameData.map[r][c-1] == 3){
		//left
		possiblePath.push({r:r, c:c-1});
	}
	
	if(gameData.map[r][c+1] == 1 || gameData.map[r][c+1] == 3){
		//right
		possiblePath.push({r:r, c:c+1});
	}
	return possiblePath;
}

function pointToCoord(x) {
	return Math.round(x / gameSettings.gridSize);
};

function nextSquare(x, dir) {
	var rem = x % gameSettings.gridSize;
	if (rem === 0) {
		return x;
	} else if (dir === "right" || dir === "down") {
		return x + (gameSettings.gridSize - rem);
	} else {
		return x - rem;
	}
};

/*!
 * 
 * MOVE PLAYER - This is the function that runs to move player
 * 
 */
function movePlayer(){
	//frame
	updatePlayerFrame();

	if(gameData.dir != ""){
		playSoundLoop('soundMove');
	}else{
		stopSoundLoop('soundMove');
	}

	if(gameData.dir == ""){
		return;
	}

	var playerSpeed = playerData.speed;
	var newPos = checkNexttDir(gameData.player.x, gameData.player.y, playerSpeed, gameData.dir, gameData.player.walkThroughBrick, gameData.player.fireShield, gameData.player.bombShield);
	gameData.player.x = newPos.x;
	gameData.player.y = newPos.y;
}

function updatePlayerFrame(){
	if(gameData.dir != gameData.player.lastFrame){
		var frameDir = gameData.dir;
		gameData.player.scaleX = frameDir == "right" ? -1 : 1;
		if(frameDir == ""){
			frameDir = gameData.player.lastFrame + "still";
		}else if(frameDir == "left" || frameDir == "right"){
			frameDir = "side";
		}
		gameData.player.lastFrame = gameData.dir;
		gameData.player.gotoAndPlay(frameDir);
	}
}

function checkNexttDir(x, y, speed, nextDir, walkThroughBrick, fireShield, bombShield){
	var rangeX = x % gameSettings.gridSize;
	var rangeY = y % gameSettings.gridSize;
	var moveRange = gameSettings.moveRange;
	var moveX = false;
	var moveY = false;
	var c = pointToCoord(nextSquare(x + (gameSettings.gridSize/2), ""));
	var r = pointToCoord(nextSquare(y + (gameSettings.gridSize/2), ""));
	var nextC = c;
	var nextR = r;

	if(nextDir == "left"){
		nextC--;
	}else if(nextDir == "right"){
		nextC++;
	}else if(nextDir == "up"){
		nextR--;
	}else if(nextDir == "down"){
		nextR++;
	}

	if(rangeX >= (gameSettings.gridSize - moveRange)){
		moveY = true;
	}
	if(rangeX <= moveRange){
		moveY = true;
	}
	if(rangeY >= (gameSettings.gridSize - moveRange)){
		moveX = true;
	}
	if(rangeY <= moveRange){
		moveX = true;
	}

	var newPos = {x:x, y:y};
	if(nextDir == "left"){
		newPos.x -= speed;
	}else if(nextDir == "right"){
		newPos.x += speed;
	}else if(nextDir == "up"){
		newPos.y -= speed;
	}else if(nextDir == "down"){
		newPos.y += speed;
	}
	
	var resetPos = false;
	var currentX = c * gameSettings.gridSize;
	var currentY = r * gameSettings.gridSize;
	var distanceX = currentX - newPos.x;
	var distanceY = currentY - newPos.y;

	//recenter
	if(nextDir == "left" || nextDir == "right"){
		newPos.y = currentY;
	}else{
		newPos.x = currentX;
	}

	if(nextDir == "left"){
		if(distanceX > 0 && !isMovable(gameData.map[nextR][nextC], walkThroughBrick,fireShield, bombShield)){
			resetPos = true;
		}else if(!moveX){
			resetPos = true;
		}
	}

	if(nextDir == "right"){
		if(distanceX < 0 && !isMovable(gameData.map[nextR][nextC], walkThroughBrick,fireShield, bombShield)){
			resetPos = true;
		}else if(!moveX){
			resetPos = true;
		}
	}

	if(nextDir == "up"){
		if(distanceY > 0 && !isMovable(gameData.map[nextR][nextC], walkThroughBrick,fireShield, bombShield)){
			resetPos = true;
		}else if(!moveY){
			resetPos = true;
		}
	}

	if(nextDir == "down"){
		if(distanceY < 0 && !isMovable(gameData.map[nextR][nextC], walkThroughBrick,fireShield, bombShield)){
			resetPos = true;
		}else if(!moveY){
			resetPos = true;
		}
	}

	if(resetPos){
		newPos.x = x;
		newPos.y = y;
	}

	return newPos;
}

/*!
 * 
 * MOVE ENEMIES - This is the function that runs to move enemies
 * 
 */
function moveEnemies(){
	for(var n=0; n<gameData.enemies.length; n++){
		var thisEnemy = gameData.enemies[n];
		moveEnemy(thisEnemy);
	}
}

function moveEnemy(thisEnemy){
	if(!thisEnemy.active){
		return;
	}

	if(thisEnemy.dir == ""){
		return;
	}

	thisEnemy.lastX = thisEnemy.x;
	thisEnemy.lastY = thisEnemy.y;

	var enemySpeed = enemiesArr[thisEnemy.enemyIndex].speed;
	var newPos = checkNexttDir(thisEnemy.x, thisEnemy.y, enemySpeed, thisEnemy.dir, thisEnemy.walkThroughBrick, thisEnemy.fireShield, thisEnemy.bombShield);

	thisEnemy.x = newPos.x;
	thisEnemy.y = newPos.y;
	thisEnemy.scaleX = 1;
	if(thisEnemy.dir == "right"){
		thisEnemy.scaleX = -1;
	}

	if(thisEnemy.lastX == thisEnemy.x && thisEnemy.lastY == thisEnemy.y){
		getEnemyPath(thisEnemy);
	}else{
		thisEnemy.loop -= enemySpeed;
		if(thisEnemy.loop < 0){
			getEnemyPath(thisEnemy);
		}
	}
}

function getEnemyPath(newEnemy){
	var randomLength = randomIntFromInterval(1,3);
	newEnemy.loop = randomLength * gameSettings.gridSize;

	var c = pointToCoord(nextSquare(newEnemy.x + (gameSettings.gridSize/2), ""));
	var r = pointToCoord(nextSquare(newEnemy.y + (gameSettings.gridSize/2), ""));
	var pathArray = getPossiblePath(c,r);
	if(pathArray.length > 0){
		shuffle(pathArray);
		newEnemy.dir = getPathDirection(c,r,pathArray[0].c, pathArray[0].r);
	}
}

function getPathDirection(c,r,nextC,nextR){
	if(nextC > c){
		return "right";
	}else if(nextC < c){
		return "left";
	}else if(nextR > r){
		return "down";
	}else if(nextR < r){
		return "up";
	}
}

/*!
 * 
 * RELEASE BOMB - This is the function that runs to release bomb
 * 
 */
function releaseBomb(){
	toggleTouchAlpha(buttonBomb, gameData.moveControl.bomb);

	if(gameData.moveControl.bomb){
		var c = pointToCoord(nextSquare(gameData.player.x + (gameSettings.gridSize/2), ""));
		var r = pointToCoord(nextSquare(gameData.player.y + (gameSettings.gridSize/2), ""));
		if(isMovable(gameData.map[r][c], false, false, false) && gameData.bomb.length < playerData.bomb){
			insertBomb(r,c);
		}
	}
}

function detonateBomb(){
	toggleTouchAlpha(buttonDetanator, gameData.moveControl.detonator);

	if(gameData.moveControl.detonator){
		if(!playerData.detonatoring){
			playSound("soundDetonate");
			playerData.detonatoring = true;
			var delayNum = 0;
			for(var n=0; n<gameData.bomb.length; n++){
				var thisBomb = gameData.bomb[n];
				TweenMax.killTweensOf(thisBomb);
				delayNum += .2;
				TweenMax.to(thisBomb, 0, {delay:delayNum, overwrite:true, onComplete:bombExploded, onCompleteParams:[thisBomb,thisBomb.row,thisBomb.column]});
			}
		}
	}
}

function insertBomb(r,c){
	playSound("soundPlace");

	var gridSize = gameSettings.gridSize;
	var newBomb = getSpriteSheet("bomb");
	newBomb.x = gridSize * c;
	newBomb.y = gridSize * r;
	newBomb.column = c;
	newBomb.row = r;
	gameData.map[r][c] = 5;
	bombContainer.addChild(newBomb);
	gameData.bomb.push(newBomb);

	if(!playerData.detonator){
		TweenMax.to(newBomb, 2, {overwrite:true, onComplete:bombExploded, onCompleteParams:[newBomb,r,c]});
	}
}

/*!
 * 
 * BOMB EXPLOSION - This is the function that runs for bomb explosion
 * 
 */
function bombExploded(newBomb,r,c){
	if(gameData.complete){
		return;
	}

	playSound("soundExplosion");
	var bombIndex = gameData.bomb.indexOf(newBomb);
	gameData.bomb.splice(bombIndex,1);

	gameData.map[r][c] = 1;
	TweenMax.killTweensOf(newBomb);
	bombContainer.removeChild(newBomb);
	insertExplosion("center",r,c);

	if(playerData.detonator){
		playerData.detonatoring = false;
	}

	//insert fire
	var range = playerData.bombRange;
	for(var n=0; n<4; n++){
		for(var s = 1; s<=range; s++){
			if(n == 0){
				//left
				nextR = r;
				nextC = c-s;
				type = "left";
			}else if(n == 1){
				//right
				nextR = r;
				nextC = c+s;
				type = "right";
			}else if(n == 2){
				//top
				nextR = r-s;
				nextC = c;
				type = "up";
			}else if(n == 3){
				//bottom
				nextR = r+s;
				nextC = c;
				type = "down";
			}

			if(gameData.map[nextR][nextC] == 5){
				//bomb
				findBombToExploded(nextR,nextC);
				s = range;
			}else if(gameData.map[nextR][nextC] == 2){
				//brick
				findBrickToExploded(nextR,nextC);
				if(!playerData.bombThroughBrick){
					s = range;
				}
			}else if(gameData.map[nextR][nextC] == 0){
				//wall
				s = range;
			}else{
				if(s == range){
					type = "corner"+type;
				}
				insertExplosion(type,nextR,nextC);
			}
		}
	}
}

function findBombToExploded(r,c){
	for(var n=0; n<gameData.bomb.length; n++){
		var thisBomb = gameData.bomb[n];
		if(thisBomb.column == c && thisBomb.row == r){
			bombExploded(thisBomb,r,c);
		}
	}
}

function findBrickToExploded(r,c){
	for(var n=0; n<gameData.bricks.length; n++){
		var thisBrick = gameData.bricks[n];
		if(thisBrick.column == c && thisBrick.row == r){
			gameData.bricks.splice(n,1);

			if(thisBrick.powerIndex != -1){
				var newPower = getSpriteSheet("powers");
				newPower.gotoAndStop("power" + thisBrick.powerIndex);
				newPower.x = thisBrick.x;
				newPower.y = thisBrick.y;
				newPower.powerIndex = thisBrick.powerIndex;
				gameData.powers.push(newPower);
				powerContainer.addChild(newPower);
			}

			TweenMax.to(thisBrick, .5, {alpha:0, overwrite:true, onComplete:removeBrick, onCompleteParams:[thisBrick]});
			insertExplosion("brick",r,c);

			animateMapStats(thisBrick.x, thisBrick.y, "+"+gameSettings.brickScore, 25);
			playerData.score += gameSettings.brickScore;
			updateGameScore();
		}
	}
}

function insertExplosion(type,r,c){
	var gridSize = gameSettings.gridSize;
	var newExplosion = getSpriteSheet("explosion");
	if(type == "center"){
		newExplosion.gotoAndPlay("center");
	}else if(type == "brick"){
		newExplosion.gotoAndPlay("brick");
	}else if(type == "left" || type == "right"){
		newExplosion.gotoAndPlay("side");
	}else if(type == "up" || type == "down"){
		newExplosion.gotoAndPlay("side");
		newExplosion.rotation = 90;
	}else if(type == "cornerleft" || type == "cornerright"){
		newExplosion.gotoAndPlay("corner");
		if(type == "cornerleft"){
			newExplosion.scaleX = -1;
		}
	}else if(type == "cornerup" || type == "cornerdown"){
		newExplosion.gotoAndPlay("corner");
		newExplosion.rotation = 90;
		if(type == "cornerup"){
			newExplosion.scaleX = -1;
		}
	}
	newExplosion.x = gridSize * c;
	newExplosion.y = gridSize * r;
	explosionContainer.addChild(newExplosion);

	TweenMax.to(newExplosion, .5, {overwrite:true, onUpdate:checkAroundExploded, onUpdateParams:[newExplosion], onComplete:completeExploded, onCompleteParams:[newExplosion]});
}

function checkAroundExploded(newExplosion){
	for(var n=0; n<gameData.enemies.length; n++){
		var thisEnemy = gameData.enemies[n];
		var thisDistance = getDistance(newExplosion.x, newExplosion.y, thisEnemy.x, thisEnemy.y);
		if(thisDistance < gameSettings.gridSize * .8 && thisEnemy.active){
			//remove enemy
			playSound("soundHit");
			thisEnemy.active = false;
			thisEnemy.gotoAndPlay("enemydead"+thisEnemy.enemyIndex);
			animateMapStats(thisEnemy.x, thisEnemy.y, "+"+enemiesArr[thisEnemy.enemyIndex].score, 25);
			TweenMax.to(thisEnemy, .5, {overwrite:true, onComplete:removeEnemy, onCompleteParams:[thisEnemy]});
		}
	}

	var thisDistance = getDistance(newExplosion.x, newExplosion.y, gameData.player.x, gameData.player.y);
	if(thisDistance < (gameSettings.gridSize * .8) && !gameData.complete){
		if(gameData.player.fireShield){
			
		}else if(gameData.player.bombShield){

		}else{
			//remove player
			playSound("soundFail");
			gameData.player.gotoAndPlay("dead");
			showGameStatus('gameover');
			endGame();
		}
	}
}

function completeExploded(newExplosion){
	explosionContainer.removeChild(newExplosion);
}

/*!
 * 
 * REMOVE OBJECTS - This is the function that runs to remove objects
 * 
 */
function removeBrick(thisBrick){
	gameData.map[thisBrick.row][thisBrick.column] = 1;
	objectsContainer.removeChild(thisBrick);
}

function removeEnemy(thisEnemy){
	playerData.score += enemiesArr[thisEnemy.enemyIndex].score;
	updateGameScore();

	var enemyIndex = gameData.enemies.indexOf(thisEnemy);
	gameData.enemies.splice(enemyIndex,1);
	objectsContainer.removeChild(thisEnemy);
}

/*!
 * 
 * CHECK COLLISION - This is the function that runs to check collison
 * 
 */
function checkCollision(){
	for(var n=0; n<gameData.enemies.length; n++){
		var thisEnemy = gameData.enemies[n];
		var thisDistance = getDistance(gameData.player.x, gameData.player.y, thisEnemy.x, thisEnemy.y);
		if(thisDistance < gameSettings.gridSize * .8 && !gameData.complete){
			playSound("soundFail");
			gameData.player.gotoAndPlay("dead");
			showGameStatus('gameover');
			endGame();
		}
	}

	for(var n=0; n<gameData.powers.length; n++){
		var thisPower = gameData.powers[n];
		var thisDistance = getDistance(gameData.player.x, gameData.player.y, thisPower.x, thisPower.y);
		if(thisDistance < gameSettings.gridSize * .8){
			playSound("soundPowerUp");
			playerData.speed += powersArr[thisPower.powerIndex].speed;
			playerData.bombRange += powersArr[thisPower.powerIndex].bombRange;
			playerData.bomb += powersArr[thisPower.powerIndex].bomb;

			if(gameData.player.walkThroughBrick == false){
				gameData.player.walkThroughBrick = powersArr[thisPower.powerIndex].walkThroughBrick;
			}
			if(playerData.bombThroughBrick == false){
				playerData.bombThroughBrick = powersArr[thisPower.powerIndex].bombThroughBrick;
			}
			if(playerData.detonator == false){
				playerData.detonator = powersArr[thisPower.powerIndex].detonator;
				buttonDetanator.visible = playerData.detonator;
			}
			if(gameData.player.fireShield == false){
				gameData.player.fireShield = powersArr[thisPower.powerIndex].fireShield;
			}
			if(gameData.player.bombShield == false){
				gameData.player.bombShield = powersArr[thisPower.powerIndex].bombShield;
			}

			animateMapStats(thisPower.x, thisPower.y, powersArr[thisPower.powerIndex].desc, 25);

			var powerIndex = gameData.powers.indexOf(thisPower);
			gameData.powers.splice(powerIndex,1);
			powerContainer.removeChild(thisPower);
		}
	}
}

function isMovable(type, walkThroughBrick, fireShield, bombShield){
	if(type == 1){
		return true;
	}else if(type == 2 && walkThroughBrick){
		return true;
	}else if(type == 5 && bombShield){
		return true;
	}else{
		return false;
	}
}

/*!
 * 
 * MOVE CAMERA - This is the function that runs to move camera
 * 
 */
function moveCamera(){
	var gridSize = gameSettings.gridSize;
	var startX = (gameData.maskW/2);
	var endX = gameData.settings.width - startX;

	if(gameData.player.x >= startX && gameData.player.x <= endX){
		mapMoveContainer.x = startX - (gameData.player.x - (gridSize/2));
	}else if(gameData.player.x > endX){
		mapMoveContainer.x = startX - (endX - (gridSize/2));
	}

	var startY = (gameData.maskH/2);
	var endY = gameData.settings.height - startY;
	if(gameData.player.y >= startY && gameData.player.y <= endY){
		mapMoveContainer.y = startY - (gameData.player.y - (gridSize/2));
	}else if(gameData.player.y > endY){
		mapMoveContainer.y = startY - (endY - (gridSize/2));
	}
}

/*!
 * 
 * ANIAMTE SCORE - This is the function that runs to animate score
 * 
 */
function animateScore(obj){
	var tweenSpeed = .3;
	TweenMax.to(obj, tweenSpeed, {scaleX:.7, scaleY:.7, overwrite:true, onComplete:function(){
		TweenMax.to(obj, tweenSpeed, {scaleX:1, scaleY:1, overwrite:true, onComplete:animateScore, onCompleteParams:[obj]});
	}});
}

 /*!
 * 
 * GAME CONTROL - This is the function that runs control snake
 * 
 */
function checkControl(){
	var dir = "";

	toggleTouchArrow("up", false);
	toggleTouchArrow("down", false);
	toggleTouchArrow("left", false);
	toggleTouchArrow("right", false);

	if(gameData.moveControl.left){
		dir = "left";
	}

	if(gameData.moveControl.right){
		dir = "right";
	}

	if(gameData.moveControl.up){
		dir = "up";
	}

	if(gameData.moveControl.down){
		dir = "down";
	}

	toggleTouchArrow(dir, true);

	gameData.dir = dir;
}

/*!
 * 
 * GAME SCORE STATUS - This is the function that runs to show and update game score status
 * 
 */
function updateBombIcon(){
	bombIconContainer.removeAllChildren();

	var newBombIcon = getSpriteSheet("bomb");
	newBombIcon.gotoAndStop(1);
	newBombIcon.scaleX = newBombIcon.scaleY = .8;
	newBombIcon.y = -15;
	bombTxt.x = 30;

	bombIconContainer.addChild(newBombIcon);
}

function updateGameScore(){
	TweenMax.to(tweenData, .5, {tweenScore:playerData.score, overwrite:true, onUpdate:function(){
		pointTxt.text = textDisplay.point.replace('[NUMBER]', addCommas(Math.floor(tweenData.tweenScore)));
	}});
}

function updateGameStats(){
	timerTxt.text = timerRedTxt.text = textDisplay.timer.replace('[NUMBER]', millisecondsToTimeGame(timeData.timer));
	enemyTxt.text = textDisplay.enemies.replace('[NUMBER]', gameData.enemies.length);
	bombTxt.text = textDisplay.bomb.replace('[NUMBER]', playerData.bomb-gameData.bomb.length);

	if(gameData.enemies.length <= 0 && !gameData.paused){
		completeGame();
	}
}

function completeGame(){
	if(!gameData.complete){
		playSound("soundWin");
		gameData.complete = true;
		gameData.paused = true;
		gameData.control = false;
		toggleGameTimer(false);
		showGameStatus('complete');

		TweenMax.to(gameContainer, 2, {overwrite:true, onComplete:function(){
			playerData.level++;
			setupMapLevel();
			buildMap();
		}});
	}
}

function animateMapStats(x,y,text,size){
	var mapStatContainer = new createjs.Container();
	var newMapStatTxt = new createjs.Text();
	newMapStatTxt.font = size + "px upheaval_tt_brkregular";
	newMapStatTxt.color = '#fff';
	newMapStatTxt.textAlign = "center";
	newMapStatTxt.textBaseline='alphabetic';
	newMapStatTxt.text = text;

	var newMapStatShadowTxt = new createjs.Text();
	newMapStatShadowTxt.font = size + "px upheaval_tt_brkregular";
	newMapStatShadowTxt.color = '#333';
	newMapStatShadowTxt.textAlign = "center";
	newMapStatShadowTxt.textBaseline='alphabetic';
	newMapStatShadowTxt.text = text;
	newMapStatShadowTxt.y = 3;

	mapStatContainer.x = x;
	mapStatContainer.y = y + 20;
	mapStatContainer.alpha = 0;
	mapStatContainer.addChild(newMapStatShadowTxt, newMapStatTxt);
	mapStatusContainer.addChild(mapStatContainer);

	TweenMax.to(mapStatContainer, .5, {alpha:1, y:y, overwrite:true, onComplete:function(){
		TweenMax.to(mapStatContainer, .5, {delay:.5, alpha:0, overwrite:true});
	}});
}

/*!
 * 
 * GAME STATUS - This is the function that runs to show game status
 * 
 */
function showGameStatus(con){
	if(con == 'stage'){
		statusTxt.text = textDisplay.stage.replace("[NUMBER]", playerData.level+1);
	}else if(con == 'timesup'){
		statusTxt.text = textDisplay.timesup;
	}else if(con == 'gameover'){
		statusTxt.text = textDisplay.gameover;
	}else if(con == 'complete'){
		statusTxt.text = textDisplay.complete;
	}
	statusContainer.alpha = 0;
	TweenMax.to(statusContainer, .5, {alpha:1, overwrite:true});
}

/*!
 * 
 * ANIMATE TIMER - This is the function that runs to animate countdown
 * 
 */
function animateTimer(){
	timerRedTxt.alpha = 0;
	TweenMax.to(timerRedTxt, .5, {alpha:1, overwrite:true});
}

/*!
 * 
 * GAME TIMER - This is the function that runs for game timer
 * 
 */
function toggleGameTimer(con){
	if(con){
		timeData.startDate = new Date();
		timeData.oldTimer = -1;
	}else{
		timeData.timer = 0;
	}
	timeData.enable = con;
}

/*!
 * 
 * UPDATE GAME - This is the function that runs to loop game update
 * 
 */
function updateGame(){
	if(!gameData.paused){
		if(timeData.enable){
			timeData.nowDate = new Date();
			timeData.elapsedTime = Math.floor((timeData.nowDate.getTime() - timeData.startDate.getTime()));
			timeData.timer = Math.floor(timeData.countdown - timeData.elapsedTime);

			if(timeData.oldTimer == -1){
				timeData.oldTimer = timeData.timer;
			}
	
			if(timeData.timer <= 0){
				//stop
				playSound("soundFail");
				showGameStatus('timesup');
				endGame();
			}else{
				if((timeData.oldTimer - timeData.timer) > 1000){
					if(timeData.timer < 1000){
						animateTimer()
						playSound('soundAlarmFinal');
					}else if(timeData.timer < 6000){
						animateTimer()
						playSound('soundAlarm');
					}
					timeData.oldTimer = timeData.timer;
				}
				
				timerTxt.text = timerRedTxt.text = textDisplay.timer.replace('[NUMBER]', millisecondsToTimeGame(timeData.timer));
			}
		}

		checkControl();
		movePlayer();
		moveCamera();
		releaseBomb();
		detonateBomb()
		moveEnemies();
		checkCollision();
		updateGameStats();
		updateChildrenIndex();
	}
}

function updateChildrenIndex(){
	objectsContainer.sortChildren(sortFunction);
}

var sortFunction = function(obj1, obj2, options) {
	if (obj1.y > obj2.y) { return 1; }
	if (obj1.y < obj2.y) { return -1; }
	return 0;
}

/*!
 * 
 * GAME CONTROL - This is the function that runs for game control
 * 
 */
function toggleTouchAlpha(obj, con){
	if(con){
		obj.alpha = .6;
	}else{
		obj.alpha = 1;
	}
}

function setupTouchControl(){
	var buttonArr = ["Up","Right","Down","Left"];
	for(var n=0; n<buttonArr.length; n++){
		$.touch["arrow"+buttonArr[n]].id = buttonArr[n].toLowerCase();
		$.touch["arrow"+buttonArr[n]].addEventListener("mousedown", function(evt) {
			toggleTouchArrow(evt.target.id, true);
			gameData.moveControl[evt.target.id] = true;
		});
		
		$.touch["arrow"+buttonArr[n]].addEventListener("pressup", function(evt) {
			toggleTouchArrow(evt.target.id, false);
			gameData.moveControl[evt.target.id] = false;
		});
	}

	buttonTouchMove.cursor = "pointer";
	buttonTouchMove.addEventListener("mousedown", function(evt) {
		toggleMoveEvent(evt, 'drag');
	});
	buttonTouchMove.addEventListener("pressmove", function(evt) {
		toggleMoveEvent(evt, 'move')
	});
	buttonTouchMove.addEventListener("pressup", function(evt) {
		toggleMoveEvent(evt, 'drop')
	});
}

function toggleMoveEvent(obj, con){
	switch(con){
		case 'drag':
			var global = touchMoveContainer.localToGlobal(obj.currentTarget.x, obj.currentTarget.y);
			obj.currentTarget.offset = {x:global.x-(obj.stageX), y:global.y-(obj.stageY)};
		break;
		
		case 'move':
			var local = touchMoveContainer.globalToLocal(obj.stageX, obj.stageY);
			var moveX = ((local.x) + obj.currentTarget.offset.x);
			var moveY = ((local.y) + obj.currentTarget.offset.y);

			var posData = dragLimit(moveX, moveY);
			obj.currentTarget.x = posData.x;
			obj.currentTarget.y = posData.y;

			var range = 10;
			gameData.moveControl.up = false;
			gameData.moveControl.left = false;
			gameData.moveControl.right = false;
			gameData.moveControl.down = false;

			toggleTouchArrow("left", false);
			toggleTouchArrow("right", false);
			toggleTouchArrow("up", false);
			toggleTouchArrow("down", false);

			if(obj.currentTarget.x <= -range){
				gameData.moveControl.left = true;
				toggleTouchArrow("left", true);
			}

			if(obj.currentTarget.x >= range){
				gameData.moveControl.right = true;
				toggleTouchArrow("right", true);
			}

			if(obj.currentTarget.y <= -range){
				gameData.moveControl.up = true;
				toggleTouchArrow("up", true);
			}

			if(obj.currentTarget.y >= range){
				gameData.moveControl.down = true;
				toggleTouchArrow("down", true);
			}
		break;
		
		case 'drop':
			gameData.moveControl.up = false;
			gameData.moveControl.left = false;
			gameData.moveControl.right = false;
			gameData.moveControl.down = false;
			resetControlUI();
		break;
	}
}

function dragLimit(x, y) {
	var radius = 20;
    var dist = dragDistance([x, y], [0,0]);
    if (dist <= radius) {
        return {x: x, y: y};
    }else {
		x = x - 0;
		y = y - 0;
		var radians = Math.atan2(y, x)
		return {
			x: Math.cos(radians) * radius + 0,
			y: Math.sin(radians) * radius + 0
		}
	} 
}

function dragDistance(dot1, dot2) {
    var x1 = dot1[0],
        y1 = dot1[1],
        x2 = dot2[0],
        y2 = dot2[1];
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function resetControlUI(){
	toggleTouchArrow("up", false);
	toggleTouchArrow("down", false);
	toggleTouchArrow("left", false);
	toggleTouchArrow("right", false);

	buttonTouchMove.x = buttonTouchMove.y = 0;
}

function toggleTouchArrow(dir, con){
	dir = capitalizeFirstLetter(dir);
	if(dir){
		if(!con){
			$.touch[dir].visible = false;
			$.touch["arrow"+dir].visible = true;
		}else{
			$.touch[dir].visible = true;
			$.touch["arrow"+dir].visible = false;
		}
	}
}

function capitalizeFirstLetter(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/*!
 * 
 * END GAME - This is the function that runs for game end
 * 
 */
function endGame(){
	gameData.paused = true;
	gameData.control = false;
	gameData.complete = true;

	stopSoundLoop('soundMove');
	resetControlUI();
	toggleGameTimer(false);
	TweenMax.to(gameContainer, 3, {overwrite:true, onComplete:function(){
		goPage('result')
	}});
}

/*!
 * 
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 * 
 */
function millisecondsToTimeGame(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	
	if(seconds<10){
		seconds = '0'+seconds;  
	}
	
	if(minutes<10){
		minutes = '0'+minutes;  
	}
	
	return minutes+':'+seconds;
}

/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOption(){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
}


/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleSoundMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleSoundInMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleMusicMute(con){
	buttonMusicOff.visible = false;
	buttonMusicOn.visible = false;
	toggleMusicInMute(con);
	if(con){
		buttonMusicOn.visible = true;
	}else{
		buttonMusicOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
	gtag('event','click',{'event_category':'share','event_label':action});
	
	var loc = location.href
	loc = loc.substring(0, loc.lastIndexOf("/") + 1);
	
	var title = '';
	var text = '';
	
	title = shareTitle.replace("[SCORE]", playerData.score);
	text = shareMessage.replace("[SCORE]", playerData.score);
	
	var shareurl = '';
	
	if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'google' ){
		shareurl = 'https://plus.google.com/share?url='+loc;
	}else if( action == 'whatsapp' ){
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}
	
	window.open(shareurl);
}