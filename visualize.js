var answers = {
  question_1: {
    self: 3,
    friend: 4
  },
  question_2: {
    self: 1,
    friend: 4
  },
  question_3: {
    self: 3,
    friend: 3
  },
  question_4: {
    self: 2,
    friend: 2
  },
  question_5: {
    self: 5,
    friend: 4
  },
  question_6: {
    self: 4,
    friend: 1
  },
  question_7: {
    self: 2,
    friend: 3
  },
  question_8: {
    self: 3,
    friend: 2
  },
  question_9: {
    self: 3,
    friend: 4
  },
  question_10: {
    self: 5,
    friend: 1
  },
  question_11: {
    self: 2,
    friend: 3
  },
  question_12: {
    self: 2,
    friend: 2
  },
  question_13: {
    self: 4,
    friend: 4
  },
  question_14: {
    self: 4,
    friend: 1
  },
  question_15: {
    self: 5,
    friend: 3
  },
  question_16: {
    self: 4,
    friend: 2
  },
  question_17: {
    self: 1,
    friend: 4
  },
  question_18: {
    self: 1,
    friend: 1
  },
  question_19: {
    self: 1,
    friend: 3
  },
  question_20: {
    self: 3,
    friend: 2
  }
}

function getCoordinates(key, score){
  var radius = 700;
  var id = parseInt(key - 1);
  var angle1 = id * 18;
  var angle2 = 90;
  var angle3 = 180 - angle1 - angle2;
  var long = score * (radius / 10);
  var down = (long * (Math.sin(angle3 * Math.PI / 180.0))) / (Math.sin(angle2 * Math.PI / 180.0));
  var up = (long * (Math.sin(angle1 * Math.PI / 180.0))) / (Math.sin(angle2 * Math.PI / 180.0));

  var coordinateX = (radius / 2) + down;
  var coordinateY = (radius / 2) + up;

  var coordinates = {
    x: coordinateX,
    y: coordinateY
  }

  return coordinates;
}

function draw(){
  var canvas = document.getElementById('datacanvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var firstinput = answers.question_1.self;
    var firstcoordinates = getCoordinates(1, firstinput);
    console.log(firstcoordinates);
    ctx.moveTo(firstcoordinates.x, firstcoordinates.y);

    for (var answer in answers){
      var key = parseInt(answer.split('_').pop());
      var input = answers[answer].self;
      var coordinates = getCoordinates(key, input);
      var coordinateX = coordinates.x;
      var coordinateY = coordinates.y;
      console.log("X: " + coordinateX + " Y: " + coordinateY);
      // var coordinateX = coordinates[answer][input].x;
      // var coordinateY = coordinates[answer][input].y;

      ctx.lineTo(coordinateX, coordinateY);
    }
    ctx.fill();
  }
}

draw();
