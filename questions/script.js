$(document).ready(function() {

	var vraag = ["Ik maak me zorgen over dingen.", "Ik laat mijn kamer rommelig achter.",
	"Ik heb een levendige fantasie.", "Ik hou er niet van om de aandacht op me te richten.", "Ik maak tijd vrij voor anderen.", "Ik werk volgens een tijdschema.",
	"Ik raak zelden geïrriteerd.", "Ik denk eerst aan anderen.", "Ik heb moeite me dingen voor te stellen.", "Ik laat anderen het voortouw nemen.", "Ik ben altijd voorbereid.",
	"Ik breng een gesprek naar een hoger niveau.", "Ik ben meestal ontspannen.", "Ik laat mensen zich op hun gemak voelen.", "Ik mopper over dingen.", "Ik voel emoties van anderen aan.",
	"Ik verzaak mijn werkzaamheden.", "Ik vind het niet erg midden in de belangstelling te staan.", "Ik kan veel informatie tegelijkertijd verwerken."];

	var sounds = ["clickL.mp3", "clickR.mp3", "blop.mp3"];

	function play(x){
		var audio = new Audio("sound/"+sounds[x]);
		audio.play();
		console.log("play()");
	}

	var data = {};

	var i = -1;
	function next(){
		if(i <= 18){
			i++
			data['question_'+i] = {
				self:$('input:checked', '#self').val(),
				external:$('input:checked', '#external').val()
			}
			$('form :input').prop('checked', false);
			$(".question").children("h2").html(vraag[i]);
			$("#self").children("input").attr('name', 'question'+i);
			console.log(data);
		} else{
			//nothing
		}
	}

	$(".submit").on("click", function(e){
		e.preventDefault();

		next();
	})

	var self = 0;
	var external = 0;
	var loop = 0;

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

	document.addEventListener("keydown", keyDown, false);

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
			play(0);
	  }
		if(keyCode == 69) {
			//e
			$("#self .neutral").click();
			checkself();
			play(0);
	  }
		if(keyCode == 82) {
			//r
			$("#self .yes").click();
			checkself();
			play(0);
	  }
		if(keyCode == 84) {
			//t
			$("#self .alot").click();
			checkself();
			play(0);
	  }

		//   EXTERNAL

		if(keyCode == 65) {
			//a
			$("#external .not").click();
			checkexternal();
			play(1);
	  }
		if(keyCode == 83) {
			//s
			$("#external .little").click();
			checkexternal();
			play(1);
	  }
		if(keyCode == 68) {
			//d
			$("#external .neutral").click();
			checkexternal();
			play(1);
	  }
		if(keyCode == 70) {
			//f
			$("#external .yes").click();
			checkexternal();
			play(1);
	  }
		if(keyCode == 71) {
			//g
			$("#external .alot").click();
			checkexternal();
			play(1);
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


});
