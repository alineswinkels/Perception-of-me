// var answers = {
//   question_1: {
//     self: 3,
//     friend: 4
//   },
//   question_2: {
//     self: 1,
//     friend: 4
//   },
//   question_3: {
//     self: 3,
//     friend: 3
//   },
//   question_4: {
//     self: 2,
//     friend: 2
//   },
//   question_5: {
//     self: 5,
//     friend: 4
//   },
//   question_6: {
//     self: 4,
//     friend: 1
//   },
//   question_7: {
//     self: 2,
//     friend: 3
//   },
//   question_8: {
//     self: 3,
//     friend: 2
//   },
//   question_9: {
//     self: 3,
//     friend: 4
//   },
//   question_10: {
//     self: 5,
//     friend: 1
//   },
//   question_11: {
//     self: 2,
//     friend: 3
//   },
//   question_12: {
//     self: 2,
//     friend: 2
//   },
//   question_13: {
//     self: 4,
//     friend: 4
//   },
//   question_14: {
//     self: 4,
//     friend: 1
//   },
//   question_15: {
//     self: 5,
//     friend: 3
//   },
//   question_16: {
//     self: 4,
//     friend: 2
//   },
//   question_17: {
//     self: 1,
//     friend: 4
//   },
//   question_18: {
//     self: 1,
//     friend: 1
//   },
//   question_19: {
//     self: 1,
//     friend: 3
//   },
//   question_20: {
//     self: 3,
//     friend: 2
//   }
// }

var answers = {};
var count = 1;
document.addEventListener("click", function(){
  if (count < 22){
    answers["question_" + count] = {
      self: 5,
      friend: Math.floor(Math.random() * 5) + 1
    }
  }
  console.log(answers);
  count++;


  draw();
  draw2();

});

function getCoordinates(key, score){
  var canvasWidth = parseInt($("canvas").css('width'));
  var nrOptions = 5;
  var nrQuestions = 20;
  var degrees = 360 / nrQuestions;
  var breaks = nrOptions * 2;
  var id = parseInt(key - 1);
  var angle1 = id * degrees;
  var angle2 = 90;
  var angle3 = 180 - angle1 - angle2;
  var long = score * (canvasWidth / breaks);
  var down = (long * (Math.sin(angle3 * Math.PI / 180.0))) / (Math.sin(angle2 * Math.PI / 180.0));
  var up = (long * (Math.sin(angle1 * Math.PI / 180.0))) / (Math.sin(angle2 * Math.PI / 180.0));

  var coordinateX = (canvasWidth / 2) + down;
  var coordinateY = (canvasWidth / 2) + up;

  var coordinates = {
    x: coordinateX,
    y: coordinateY
  }

  return coordinates;
}

function draw(){
  var canvasSelf = document.getElementById('self');
  if (canvasSelf.getContext){
    var ctx = canvasSelf.getContext('2d');
    var firstinput = answers.question_1.self;
    var firstcoordinates = getCoordinates(1, firstinput);
    console.log(firstcoordinates);
    ctx.moveTo(firstcoordinates.x, firstcoordinates.y);
    ctx.strokeStyle="#F12F79";
    ctx.fillStyle="rgba(241,47,121,0.1)";
    ctx.lineWidth=5;

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
    ctx.stroke();
    ctx.fill();
  }
}

function draw2(){
  var canvasFriend = document.getElementById('friend');
  if (canvasFriend.getContext){
    var ctx = canvasFriend.getContext('2d');
    var firstinput = answers.question_1.friend;
    var firstcoordinates = getCoordinates(1, firstinput);
    console.log(firstcoordinates);
    ctx.moveTo(firstcoordinates.x, firstcoordinates.y);
    ctx.strokeStyle="rgb(123,127,130)";
    ctx.fillStyle="rgba(123,127,130,0.1)";
    ctx.lineWidth=5;

    for (var answer in answers){
      var key = parseInt(answer.split('_').pop());
      var input = answers[answer].friend;
      var coordinates = getCoordinates(key, input);
      var coordinateX = coordinates.x;
      var coordinateY = coordinates.y;
      console.log("X: " + coordinateX + " Y: " + coordinateY);
      // var coordinateX = coordinates[answer][input].x;
      // var coordinateY = coordinates[answer][input].y;

      ctx.lineTo(coordinateX, coordinateY);
    }
    ctx.stroke();
    ctx.fill();
  }
}
