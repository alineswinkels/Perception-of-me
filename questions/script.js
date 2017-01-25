$(document).ready(function() {
	var data, count, gender, stageSelf, self, external, loop;
	var sounds = ["button.wav", "confirm.wav", "confirm2.wav", "sub_tone3.mp3", "tone5.wav"];
	var vraag = ["Ik maak me zorgen over dingen.", "Ik laat mijn kamer rommelig achter.",
		"Ik heb een levendige fantasie.", "Ik hou er niet van om de aandacht op me te richten.", "Ik maak tijd vrij voor anderen.", "Ik werk volgens een tijdschema.",
		"Ik raak zelden geïrriteerd.", "Ik denk eerst aan anderen.", "Ik heb moeite me dingen voor te stellen.", "Ik laat anderen het voortouw nemen.", "Ik ben altijd voorbereid.",
		"Ik breng een gesprek naar een hoger niveau.", "Ik ben meestal ontspannen.", "Ik laat mensen zich op hun gemak voelen.", "Ik mopper over dingen.", "Ik voel emoties van anderen aan.",
		"Ik raffel mijn werk af", "Ik vind het niet erg midden in de belangstelling te staan.", "Ik kan veel informatie tegelijkertijd verwerken."];
	var vraagMan = ["Hij maakt zich zorgen over dingen.", "Hij laat zijn kamer rommelig achter.",
		"Hij heeft een levendige fantasie.", "Hij houdt er niet van om de aandacht op zich te richten.", "Hij maakt tijd vrij voor anderen.", "Hij werkt volgens een tijdschema.",
		"Hij raakt zelden geïrriteerd.", "Hij denkt altijd eerst aan anderen.", "Hij heeft moeite zich dingen voor te stellen.", "Hij laat anderen het voortouw nemen.", "Hij is altijd voorbereid.",
		"Hij brengt een gesprek naar een hoger niveau.", "Hij is meestal ontspannen.", "Hij laat mensen zich op hun gemak voelen.", "Hij moppert over dingen.", "Hij voelt emoties van anderen aan.",
		"Hij raffelt zijn werk af.", "Hij vindt het niet erg midden in de belangstelling te staan.", "Hij kan veel informatie tegelijkertijd verwerken."];
	var vraagVrouw = ["Zij maakt zich zorgen over dingen.", "Zij laat haar kamer rommelig achter.",
		"Zij heeft een levendige fantasie.", "Zij houdt er niet van om de aandacht op zich te richten.", "Zij maakt tijd vrij voor anderen.", "Zij werkt volgens een tijdschema.",
		"Zij raakt zelden geïrriteerd.", "Zij denkt altijd eerst aan anderen.", "Zij heeft moeite zich dingen voor te stellen.", "Zij laat anderen het voortouw nemen.", "Zij is altijd voorbereid.",
		"Zij brengt een gesprek naar een hoger niveau.", "Zij is meestal ontspannen.", "Zij laat mensen zich op hun gemak voelen.", "Zij moppert over dingen.", "Zij voelt emoties van anderen aan.",
		"Zij raffelt haar werk af.", "Zij vindt het niet erg midden in de belangstelling te staan.", "Zij kan veel informatie tegelijkertijd verwerken."];
	init();

	function play(x){
		var audio = new Audio("sound/"+sounds[x]);
		audio.play();
	}

	var i = -1;
	function next(){
		if(i <= 18){
			i++;
			data['question_'+i] = {
				self: $('input:checked', '#self').val(),
				external: $('input:checked', '#external').val()
			};
			$('form :input').prop('checked', false);
			$(".question h2").html(vraag[i]);
			if(gender == "m"){
				$(".question_2 h2").html(vraagMan[i]);
				console.log(gender);
			} else {
				$(".question_2 h2").html(vraagVrouw[i]);
				console.log(gender);
			}
			$("#self").children("input").attr('name', 'question'+i);

			draw();
			console.log(data);
		}
	}

	function pickGender(e){
		var keyCode = e.keyCode;
		if(keyCode == "77"){
			gender = "m";
			$(".question_2 h2").html("Hij spreekt op feestjes veel verschillende mensen.");
			$("h2").animate({
				opacity: 1
			}, 1000);
			document.removeEventListener("keydown", pickGender, false);
			document.addEventListener("keydown", keyDown, false);
		}
		if(keyCode == "70"){
			gender = "f";
			$(".question_2 h2").html("Zij spreekt op feestjes veel verschillende mensen.");
			$("h2").animate({
				opacity: 1
			}, 1000);
			document.removeEventListener("keydown", pickGender, false);
			document.addEventListener("keydown", keyDown, false);
		}
	}

	self = 0;
	external = 0;
	loop = 0;

	function checkself(){
		self = 1;
		checkForms();
		return self;
	}

	function checkexternal(){
		external = 1;
		checkForms();
		return external;
	}

	function checkForms(){
		if(self == 1 && external == 1){
			self = 0;
			external = 0;
			next();
			return self;
			return external;
		}
	}

	$(".submit").on("click", function(e){
		e.preventDefault();
		next();
	});

	function keyDown(e) {
	  var keyCode = e.keyCode;

		//   SELF
	  if(keyCode == 81) {
			//q
			$("#self .not").click();
			checkself();
			play(0);
	  }
		if(keyCode == 87) {
			//w
			$("#self .little").click();
			checkself();
			play(1);
	  }
		if(keyCode == 69) {
			//e
			$("#self .neutral").click();
			checkself();
			play(2);
	  }
		if(keyCode == 82) {
			//r
			$("#self .yes").click();
			checkself();
			play(3);
	  }
		if(keyCode == 84) {
			//t
			$("#self .alot").click();
			checkself();
			play(4);
	  }

		//   EXTERNAL

		if(keyCode == 65) {
			//a
			$("#external .not").click();
			checkexternal();
	  }
		if(keyCode == 83) {
			//s
			$("#external .little").click();
			checkexternal();
	  }
		if(keyCode == 68) {
			//d
			$("#external .neutral").click();
			checkexternal();
	  }
		if(keyCode == 70) {
			//f
			$("#external .yes").click();
			checkexternal();
	  }
		if(keyCode == 71) {
			//g
			$("#external .alot").click();
			checkexternal();
	  }
	}

	$.fn.serializeObject = function()
	{
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	};

	function draw(){
		stageSelf.removeAllChildren();
		stageSelf.update();
		var selfpath = new createjs.Graphics();
		var friendpath = new createjs.Graphics();
		var startcoordinatesself, startcoordinatesfriend;
		var itemcount = countProperties();
		if (itemcount == 20){
			startcoordinatesself = getCoordinates(0, data["question_0"].self);
			startcoordinatesfriend = getCoordinates(0, data["question_0"].external);
			selfpath.mt(startcoordinatesfriend.x, startcoordinatesfriend.y).f("rgba(241,47,121,0.3)").ss(2, "round", "round").s("#F12F79");
			friendpath.mt(startcoordinatesself.x, startcoordinatesself.y).f("rgba(123,127,130,0.3)").ss(2, "round", "round").s("rgb(123,127,130)");
		} else {
			selfpath.f("rgba(241,47,121,0.3)").ss(2, "round", "round").s("#F12F79").mt(350, 350);
			friendpath.f("rgba(123,127,130,0.3)").ss(2, "round", "round").s("rgb(123,127,130)").mt(350, 350);
		}

		for(var answer in data){
			var key = parseInt(answer.split('_').pop());
			var input = data[answer].self;
			var input2 = data[answer].external;

			var coordinates = getCoordinates(key, input);
			var coordinates2 = getCoordinates(key, input2);

			selfpath.lt(coordinates.x, coordinates.y);
			friendpath.lt(coordinates2.x, coordinates2.y);
		}

		if (itemcount == 20){
			startcoordinatesself = getCoordinates(0, data["question_0"].self);
			startcoordinatesfriend = getCoordinates(0, data["question_0"].external);
			selfpath.lt(startcoordinatesself.x, startcoordinatesself.y);
			friendpath.lt(startcoordinatesfriend.x, startcoordinatesfriend.y);
		}

		var friendShape = new createjs.Shape(friendpath);
		var selfShape = new createjs.Shape(selfpath);
		stageSelf.addChild(selfShape);
		stageSelf.addChild(friendShape);
		stageSelf.update();
	}

	function init(){
		stageSelf = new createjs.Stage("selfcanvas");
		data = {};
		count = 1;
		document.addEventListener("keydown", pickGender, false);
	}

	function getCoordinates(key, score){
		var canvasWidth, nrOptions, nrQuestions, degrees, breaks, id, angle1, angle2, angle3, long, down, up, coordinates;
		canvasWidth = parseInt($("canvas").css('width'));
		nrOptions = 5;
		nrQuestions = 20;
		degrees = 360 / nrQuestions;
		breaks = nrOptions * 2;
		id = parseInt(key - 1);
		angle1 = id * degrees;
		angle2 = 90;
		angle3 = 180 - angle1 - angle2;
		long = score * (canvasWidth / breaks);
		down = (long * (Math.sin(angle3 * Math.PI / 180.0))) / (Math.sin(angle2 * Math.PI / 180.0));
		up = (long * (Math.sin(angle1 * Math.PI / 180.0))) / (Math.sin(angle2 * Math.PI / 180.0));

		coordinates = {
			x: (canvasWidth / 2) + down,
			y: (canvasWidth / 2) + up
		};

		return coordinates;
	}

	function countProperties(){
		var count = 0;
		for(var prop in data){
			count = count + 1;
		}
		return(count);
	}
});
