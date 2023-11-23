////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);
}

var guide = false;
var canvasContainer, mainContainer, gameContainer, instructionContainer, resultContainer, moveContainer, confirmContainer;
var guideline, bg, logo, buttonOk, result, shadowResult, buttonReplay, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff;

$.touch = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	themeContainer = new createjs.Container();
	tutorialContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	statusContainer = new createjs.Container();
	mapContainer = new createjs.Container();
	mapMoveContainer = new createjs.Container();
	floorContainer = new createjs.Container();
	powerContainer = new createjs.Container();
	objectsContainer = new createjs.Container();
	bombContainer = new createjs.Container();
	explosionContainer = new createjs.Container();
	bombStatusContainer = new createjs.Container();
	bombIconContainer = new createjs.Container();
	mapStatusContainer = new createjs.Container();
	enemyStatusContainer = new createjs.Container();
	scoreStatusContainer = new createjs.Container();
	timerStatusContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	touchContainer = new createjs.Container();
	touchMoveContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	
	
	bg = new createjs.Bitmap(loader.getResult('background'));
	bgP = new createjs.Bitmap(loader.getResult('backgroundP'));
	
	logo = new createjs.Bitmap(loader.getResult('logo'));
	logoP = new createjs.Bitmap(loader.getResult('logoP'));

	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);

	//theme
	buttonArrowL = new createjs.Bitmap(loader.getResult('buttonArrowL'));
	centerReg(buttonArrowL);

	buttonArrowR = new createjs.Bitmap(loader.getResult('buttonArrowR'));
	centerReg(buttonArrowR);

	buttonSelect = new createjs.Bitmap(loader.getResult('buttonSelect'));
	centerReg(buttonSelect);

	themeTxt = new createjs.Text();
	themeTxt.font = "75px upheaval_tt_brkregular";
	themeTxt.color = '#fff';
	themeTxt.textAlign = "center";
	themeTxt.textBaseline='alphabetic';
	themeTxt.text = textDisplay.theme;

	themeContainer.addChild(themeTxt, buttonArrowL, buttonArrowR, buttonSelect);

	//tutorial
	itemTutorial = new createjs.Bitmap(loader.getResult('itemTutorial'));
	centerReg(itemTutorial);
	itemTutorial1 = new createjs.Bitmap(loader.getResult('itemTutorial1'));
	centerReg(itemTutorial1);
	itemTutorial2 = new createjs.Bitmap(loader.getResult('itemTutorial2'));
	centerReg(itemTutorial2);
	itemTutorial3 = new createjs.Bitmap(loader.getResult('itemTutorial3'));
	centerReg(itemTutorial3);

	buttonTutorialL = new createjs.Bitmap(loader.getResult('buttonArrowL'));
	centerReg(buttonTutorialL);

	buttonTutorialR = new createjs.Bitmap(loader.getResult('buttonArrowR'));
	centerReg(buttonTutorialR);

	buttonNext = new createjs.Bitmap(loader.getResult('buttonNext'));
	centerReg(buttonNext);

	buttonTutorialL.x = -340
	buttonTutorialR.x = 340
	buttonNext.y = 230;

	tutorialContainer.addChild(itemTutorial, itemTutorial1, itemTutorial2, itemTutorial3, buttonTutorialL, buttonTutorialR, buttonNext);
	
	//game	
	timerTxt = new createjs.Text();
	timerTxt.font = "35px upheaval_tt_brkregular";
	timerTxt.color = '#fff';
	timerTxt.textAlign = "left";
	timerTxt.textBaseline='alphabetic';

	timerRedTxt = new createjs.Text();
	timerRedTxt.font = "35px upheaval_tt_brkregular";
	timerRedTxt.color = '#FE4D00';
	timerRedTxt.textAlign = "left";
	timerRedTxt.textBaseline='alphabetic';
	timerStatusContainer.addChild(timerTxt, timerRedTxt);

	enemyTxt = new createjs.Text();
	enemyTxt.font = "35px upheaval_tt_brkregular";
	enemyTxt.color = '#fff';
	enemyTxt.textAlign = "right";
	enemyTxt.textBaseline='alphabetic';
	enemyStatusContainer.addChild(enemyTxt);

	pointTxt = new createjs.Text();
	pointTxt.font = "35px upheaval_tt_brkregular";
	pointTxt.color = '#fff';
	pointTxt.textAlign = "center";
	pointTxt.textBaseline='alphabetic';
	scoreStatusContainer.addChild(pointTxt);
	
	bombTxt = new createjs.Text();
	bombTxt.font = "35px upheaval_tt_brkregular";
	bombTxt.color = '#fff';
	bombTxt.textAlign = "left";
	bombTxt.textBaseline='alphabetic';

	bombStatusContainer.addChild(bombIconContainer, bombTxt);

	itemStatus = new createjs.Bitmap(loader.getResult('itemStatus'));
	centerReg(itemStatus);

	statusTxt = new createjs.Text();
	statusTxt.font = "35px upheaval_tt_brkregular";
	statusTxt.color = '#fff';
	statusTxt.textAlign = "center";
	statusTxt.textBaseline='alphabetic';
	statusTxt.y = 8;
	statusContainer.addChild(itemStatus, statusTxt);

	buttonBomb = new createjs.Bitmap(loader.getResult('buttonBomb'));
	centerReg(buttonBomb);
	buttonDetanator = new createjs.Bitmap(loader.getResult('buttonDetanator'));
	centerReg(buttonDetanator);
	buttonTouch = new createjs.Bitmap(loader.getResult('buttonTouch'));
	centerReg(buttonTouch);
	buttonTouchMove = new createjs.Bitmap(loader.getResult('buttonTouchMove'));
	centerReg(buttonTouchMove);

	var buttonArr = ["Up","Right","Down","Left"];
	var rotation = [0,90,180,270];
	touchMoveContainer.addChild(buttonTouch);

	for(var n=0; n<buttonArr.length; n++){
		$.touch[buttonArr[n]] = new createjs.Bitmap(loader.getResult('buttonTouchPress'));
		centerReg($.touch[buttonArr[n]]);
		$.touch[buttonArr[n]].visible = false;

		$.touch["arrow"+buttonArr[n]] = new createjs.Bitmap(loader.getResult('buttonTouchArrow'));
		centerReg($.touch["arrow"+buttonArr[n]]);

		$.touch[buttonArr[n]].regY = $.touch["arrow"+buttonArr[n]].regY = $.touch[buttonArr[n]].image.naturalHeight;
		$.touch["arrow"+buttonArr[n]].rotation = $.touch[buttonArr[n]].rotation = rotation[n];
		
		createHitarea($.touch["arrow"+buttonArr[n]]);
		touchMoveContainer.addChild($.touch[buttonArr[n]], $.touch["arrow"+buttonArr[n]]);
	}

	touchMoveContainer.addChild(buttonTouchMove);
	touchContainer.addChild(buttonBomb,buttonDetanator,touchMoveContainer);

	mapMask = new createjs.Shape();
	mapBorder = new createjs.Shape();
	
	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemPop'));
	itemResultP = new createjs.Bitmap(loader.getResult('itemPopP'));
	
	buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonContinue);
	
	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "35px upheaval_tt_brkregular";
	resultShareTxt.color = '#fff';
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = textDisplay.share;
	
	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "75px upheaval_tt_brkregular";
	resultTitleTxt.color = '#fff';
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = textDisplay.resultTitle;

	resultDescTxt = new createjs.Text();
	resultDescTxt.font = "95px upheaval_tt_brkregular";
	resultDescTxt.color = '#FFBF00';
	resultDescTxt.textAlign = "center";
	resultDescTxt.textBaseline='alphabetic';
	resultDescTxt.text = '';

	resultShadowDescTxt = new createjs.Text();
	resultShadowDescTxt.font = "95px upheaval_tt_brkregular";
	resultShadowDescTxt.color = '#D50200';
	resultShadowDescTxt.textAlign = "center";
	resultShadowDescTxt.textBaseline='alphabetic';
	resultShadowDescTxt.text = '';
	
	
	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonWhatsapp = new createjs.Bitmap(loader.getResult('buttonWhatsapp'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonWhatsapp);
	createHitarea(buttonWhatsapp);
	
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonMusicOn = new createjs.Bitmap(loader.getResult('buttonMusicOn'));
	centerReg(buttonMusicOn);
	buttonMusicOff = new createjs.Bitmap(loader.getResult('buttonMusicOff'));
	centerReg(buttonMusicOff);
	buttonMusicOn.visible = false;
	
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonMusicOn);
	createHitarea(buttonMusicOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	optionsContainer = new createjs.Container();
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit);
	optionsContainer.visible = false;
	
	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemPop'));
	itemExitP = new createjs.Bitmap(loader.getResult('itemPopP'));
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	
	popTitleTxt = new createjs.Text();
	popTitleTxt.font = "75px upheaval_tt_brkregular";
	popTitleTxt.color = "#fff";
	popTitleTxt.textAlign = "center";
	popTitleTxt.textBaseline='alphabetic';
	popTitleTxt.text = textDisplay.exitTitle;
	
	popDescTxt = new createjs.Text();
	popDescTxt.font = "35px upheaval_tt_brkregular";
	popDescTxt.lineHeight = 40;
	popDescTxt.color = "#fff";
	popDescTxt.textAlign = "center";
	popDescTxt.textBaseline='alphabetic';
	popDescTxt.text = textDisplay.exitMessage;
	
	confirmContainer.addChild(itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel);
	confirmContainer.visible = false;
	
	if(guide){
		guideline = new createjs.Shape();	
		guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
	}
	
	mainContainer.addChild(logo, logoP, buttonStart);
	mapMoveContainer.addChild(floorContainer, powerContainer, bombContainer, objectsContainer, explosionContainer);
	mapContainer.addChild(mapMoveContainer);
	gameContainer.addChild(mapStatusContainer, timerStatusContainer, bombStatusContainer, enemyStatusContainer, scoreStatusContainer, statusContainer, touchContainer);

	resultContainer.addChild(itemResult, itemResultP, buttonContinue, resultTitleTxt, resultShadowDescTxt, resultDescTxt);
	
	if(shareEnable){
		resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonWhatsapp);
	}
	
	canvasContainer.addChild(bg, bgP, mainContainer, mapBorder, mapContainer, themeContainer, tutorialContainer, gameContainer, resultContainer, confirmContainer, optionsContainer, buttonSettings, guideline);
	stage.addChild(canvasContainer);
	
	changeViewport(viewport.isLandscape);
	resizeGameFunc();
}

function changeViewport(isLandscape){
	if(isLandscape){
		//landscape
		stageW=landscapeSize.w;
		stageH=landscapeSize.h;
		contentW = landscapeSize.cW;
		contentH = landscapeSize.cH;
	}else{
		//portrait
		stageW=portraitSize.w;
		stageH=portraitSize.h;
		contentW = portraitSize.cW;
		contentH = portraitSize.cH;
	}
	
	gameCanvas.width = stageW;
	gameCanvas.height = stageH;
	
	canvasW=stageW;
	canvasH=stageH;
	
	changeCanvasViewport();
}

function changeCanvasViewport(){
	if(canvasContainer!=undefined){
		if(viewport.isLandscape){
			bg.visible = true;
			bgP.visible = false;

			logo.visible = true;
			logoP.visible = false;
			
			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 75;

			//theme
			themeTxt.x = canvasW/2;
			themeTxt.y = canvasH/100 * 23;

			buttonArrowL.x = canvasW/2 - 400;
			buttonArrowL.y = canvasH/2;

			buttonArrowR.x = canvasW/2 + 400;
			buttonArrowR.y = canvasH/2;

			buttonSelect.x = canvasW/2;
			buttonSelect.y = canvasH/100 * 80;

			//tutorial
			tutorialContainer.x = canvasW/2;
			tutorialContainer.y = canvasH/2;

			//game
			statusContainer.x = canvasW/2;
			statusContainer.y = canvasH/2;
			
			//result
			itemResult.visible = true;
			itemResultP.visible = false;
			
			buttonFacebook.x = canvasW/100*43;
			buttonFacebook.y = canvasH/100*55;
			buttonTwitter.x = canvasW/2;
			buttonTwitter.y = canvasH/100*55;
			buttonWhatsapp.x = canvasW/100*57;
			buttonWhatsapp.y = canvasH/100*55;
			
			buttonContinue.x = canvasW/2;
			buttonContinue.y = canvasH/100 * 68;
	
			resultShareTxt.x = canvasW/2;
			resultShareTxt.y = canvasH/100 * 48;
	
			resultTitleTxt.x = canvasW/2;
			resultTitleTxt.y = canvasH/100 * 32;
	
			resultDescTxt.x = canvasW/2;
			resultDescTxt.y = canvasH/100 * 42;

			resultShadowDescTxt.x = resultDescTxt.x;
			resultShadowDescTxt.y = resultDescTxt.y + 8;
			
			//exit
			itemExit.visible = true;
			itemExitP.visible = false;

			buttonConfirm.x = (canvasW/2);
			buttonConfirm.y = (canvasH/100 * 56);
			
			buttonCancel.x = (canvasW/2);
			buttonCancel.y = (canvasH/100 * 68);

			popTitleTxt.x = canvasW/2;
			popTitleTxt.y = canvasH/100 * 32;
			
			popDescTxt.x = canvasW/2;
			popDescTxt.y = canvasH/100 * 41;
		}else{
			bg.visible = false;
			bgP.visible = true;

			logo.visible = false;
			logoP.visible = true;
			
			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 75;

			//theme
			themeTxt.x = canvasW/2;
			themeTxt.y = canvasH/100 * 25;

			buttonArrowL.x = canvasW/2 - 250;
			buttonArrowL.y = canvasH/2;

			buttonArrowR.x = canvasW/2 + 250;
			buttonArrowR.y = canvasH/2;

			buttonSelect.x = canvasW/2;
			buttonSelect.y = canvasH/100 * 85;

			//tutorial
			tutorialContainer.x = canvasW/2;
			tutorialContainer.y = canvasH/2;

			//game
			statusContainer.x = canvasW/2;
			statusContainer.y = canvasH/2;
			
			//result
			itemResult.visible = false;
			itemResultP.visible = true;
			
			buttonFacebook.x = canvasW/100*39;
			buttonFacebook.y = canvasH/100*54;
			buttonTwitter.x = canvasW/2;
			buttonTwitter.y = canvasH/100*54;
			buttonWhatsapp.x = canvasW/100*61;
			buttonWhatsapp.y = canvasH/100*54;
			
			buttonContinue.x = canvasW/2;
			buttonContinue.y = canvasH/100 * 64;
	
			resultShareTxt.x = canvasW/2;
			resultShareTxt.y = canvasH/100 * 49;
	
			resultTitleTxt.x = canvasW/2;
			resultTitleTxt.y = canvasH/100 * 38;
	
			resultDescTxt.x = canvasW/2;
			resultDescTxt.y = canvasH/100 * 45;

			resultShadowDescTxt.x = resultDescTxt.x;
			resultShadowDescTxt.y = resultDescTxt.y + 8;
			
			//exit
			itemExit.visible = false;
			itemExitP.visible = true;

			buttonConfirm.x = (canvasW/2);
			buttonConfirm.y = (canvasH/100 * 55);
			
			buttonCancel.x = (canvasW/2);
			buttonCancel.y = (canvasH/100 * 64);

			popTitleTxt.x = canvasW/2;
			popTitleTxt.y = canvasH/100 * 38;
			
			popDescTxt.x = canvasW/2;
			popDescTxt.y = canvasH/100 * 43;
		}
	}
}



/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		
		buttonSettings.x = (canvasW - offset.x) - 50;
		buttonSettings.y = offset.y + 45;
		
		var distanceNum = 60;
		var nextCount = 0;
		if(curPage != 'game'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;

			if (typeof buttonMusicOn != "undefined") {
				buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				buttonMusicOn.x = buttonMusicOff.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				nextCount = 2;
			}else{
				nextCount = 1;
			}
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));
		}else{
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;

			if (typeof buttonMusicOn != "undefined") {
				buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				buttonMusicOn.x = buttonMusicOff.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				nextCount = 2;
			}else{
				nextCount = 1;
			}
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));
			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*(nextCount+2));
		}

		if(gameSettings.screenControlSide){
			buttonBomb.x = offset.x + 100;
			buttonBomb.y = (canvasH - offset.y) - 130;
			buttonDetanator.x = buttonBomb.x + 110;
			buttonDetanator.y = buttonBomb.y;

			touchMoveContainer.x = (canvasW - offset.x) - 130;
			touchMoveContainer.y = (canvasH - offset.y) - 130;
		}else{
			buttonBomb.x = (canvasW + offset.x) - 100;
			buttonBomb.y = (canvasH - offset.y) - 130;
			buttonDetanator.x = buttonBomb.x + 110;
			buttonDetanator.y = buttonBomb.y;

			touchMoveContainer.x = (offset.x) + 130;
			touchMoveContainer.y = (canvasH - offset.y) - 130;
		}

		resizeMap();
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame();
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));
}