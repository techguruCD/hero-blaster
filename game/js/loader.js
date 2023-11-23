////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
 function initPreload(){
	toggleLoader(true);
	
	checkMobileEvent();
	
	$(window).resize(function(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkMobileOrientation, 1000);
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/background_p.png', id:'backgroundP'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/logo_p.png', id:'logoP'},
			{src:'assets/button_start.png', id:'buttonStart'},
			{src:'assets/button_select.png', id:'buttonSelect'},
			{src:'assets/button_next.png', id:'buttonNext'},
			{src:'assets/item_tutorial.png', id:'itemTutorial'},
			{src:'assets/item_tutorial_01.png', id:'itemTutorial1'},
			{src:'assets/item_tutorial_02.png', id:'itemTutorial2'},
			{src:'assets/item_tutorial_03.png', id:'itemTutorial3'},

			{src:'assets/button_theme_left.png', id:'buttonArrowL'},
			{src:'assets/button_theme_right.png', id:'buttonArrowR'},
			{src:'assets/button_bomb.png', id:'buttonBomb'},
			{src:'assets/button_detanator.png', id:'buttonDetanator'},
			{src:'assets/button_touch.png', id:'buttonTouch'},
			{src:'assets/button_touch_move.png', id:'buttonTouchMove'},
			{src:'assets/button_touch_arrow.png', id:'buttonTouchArrow'},
			{src:'assets/button_touch_press.png', id:'buttonTouchPress'},
			{src:'assets/item_status.png', id:'itemStatus'},
		
			{src:'assets/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/button_continue.png', id:'buttonContinue'},
			{src:'assets/item_pop.png', id:'itemPop'},
			{src:'assets/item_pop_p.png', id:'itemPopP'},
			{src:'assets/button_confirm.png', id:'buttonConfirm'},
			{src:'assets/button_cancel.png', id:'buttonCancel'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_music_on.png', id:'buttonMusicOn'},
			{src:'assets/button_music_off.png', id:'buttonMusicOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/button_settings.png', id:'buttonSettings'}
	];

	for(var n=0; n<themesArr.length; n++){
		manifest.push({src:themesArr[n].design.src, id:'design'+n});
		manifest.push({src:themesArr[n].bomb.src, id:'bomb'+n});
		manifest.push({src:themesArr[n].explosion.src, id:'explosion'+n});
		manifest.push({src:themesArr[n].player.src, id:'player'+n});
		manifest.push({src:themesArr[n].enemies.src, id:'enemies'+n});
		manifest.push({src:themesArr[n].powers.src, id:'powers'+n});
	}
	
	if ( typeof addScoreboardAssets == 'function' ) { 
		addScoreboardAssets();
	}
	
	soundOn = true;
	if($.browser.mobile || isTablet){
		if(!enableMobileSound){
			soundOn=false;
		}
	}else{
		if(!enableDesktopSound){
			soundOn=false;
		}
	}
	
	if(soundOn){
		manifest.push({src:'assets/sounds/sound_click.ogg', id:'soundButton'});
		manifest.push({src:'assets/sounds/sound_fail.ogg', id:'soundFail'});
		manifest.push({src:'assets/sounds/sound_move.ogg', id:'soundMove'});
		manifest.push({src:'assets/sounds/sound_place.ogg', id:'soundPlace'});
		manifest.push({src:'assets/sounds/sound_powerup.ogg', id:'soundPowerUp'});
		manifest.push({src:'assets/sounds/sound_result.ogg', id:'soundResult'});
		manifest.push({src:'assets/sounds/sound_stage.ogg', id:'soundStage'});
		manifest.push({src:'assets/sounds/sound_win.ogg', id:'soundWin'});
		manifest.push({src:'assets/sounds/sound_explosion.ogg', id:'soundExplosion'});
		manifest.push({src:'assets/sounds/sound_alarm.ogg', id:'soundAlarm'});
		manifest.push({src:'assets/sounds/sound_alarm_final.ogg', id:'soundAlarmFinal'});
		manifest.push({src:'assets/sounds/sound_detonate.ogg', id:'soundDetonate'});
		manifest.push({src:'assets/sounds/sound_hit.ogg', id:'soundHit'});
		manifest.push({src:'assets/sounds/music_main.ogg', id:'musicMain'});
		manifest.push({src:'assets/sounds/music_game.ogg', id:'musicGame'});
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", evt.item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}