var answers, count, stageSelf;

function init(){
  stageSelf = new createjs.Stage("self");
  answers = {};
  count = 1;

  document.addEventListener("click", function(){
    if (count < 21){
      answers["question_" + count] = {
        self: Math.floor(Math.random() * 5) + 1,
        friend: Math.floor(Math.random() * 5) + 1
      }
    }
    count++;
    draw();
  });
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
  }

  return coordinates;
}

function draw(){
  stageSelf.removeAllChildren();
  stageSelf.update();
  var selfpath = new createjs.Graphics();
  var friendpath = new createjs.Graphics();
  var itemcount = countProperties();
  if (itemcount == 20){
    var startcoordinatesself = getCoordinates(0, answers["question_1"].self);
    var startcoordinatesfriend = getCoordinates(0, answers["question_1"].friend);
    selfpath.mt(startcoordinatesfriend.x, startcoordinatesfriend.y).f("rgba(241,47,121,0.3)").ss(2, "round", "round").s("#F12F79");
    friendpath.mt(startcoordinatesself.x, startcoordinatesself.y).f("rgba(123,127,130,0.3)").ss(2, "round", "round").s("rgb(123,127,130)");
  } else {
    selfpath.f("rgba(241,47,121,0.3)").ss(2, "round", "round").s("#F12F79").mt(350, 350);
    friendpath.f("rgba(123,127,130,0.3)").ss(2, "round", "round").s("rgb(123,127,130)").mt(350, 350);
  }

  for(var answer in answers){
    var key = parseInt(answer.split('_').pop());
    var input = answers[answer].self;
    var input2 = answers[answer].friend;
    var coordinates = getCoordinates(key, input);
    var coordinates2 = getCoordinates(key, input2);

    selfpath.lt(coordinates.x, coordinates.y);
    friendpath.lt(coordinates2.x, coordinates2.y);
  }

  if (itemcount == 20){
    var startcoordinatesself = getCoordinates(1, answers["question_1"].self);
    var startcoordinatesfriend = getCoordinates(1, answers["question_1"].friend);
    selfpath.lt(startcoordinatesself.x, startcoordinatesself.y);
    friendpath.lt(startcoordinatesfriend.x, startcoordinatesfriend.y);
  }

  var friendShape = new createjs.Shape(friendpath);
  var selfShape = new createjs.Shape(selfpath);
  stageSelf.addChild(selfShape);
  stageSelf.addChild(friendShape);
  stageSelf.update();
}

function countProperties(){
  var count = 0;
  for(var prop in answers){
    count = count + 1;
  }
  return(count);
}
