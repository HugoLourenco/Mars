var rover = {
  direction: "N",
  x: 0,
  y: 0,
};

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":{
      rover.direction = "W";
      console.log("turn left: " + rover.direction)
      break;
    }
    case "W":{
      rover.direction = "S";
      console.log("turn left: " + rover.direction)
      //console.log(`turn left: ${rover.direction}`)
      break;
    }
    case "S":{
      rover.direction = "E";
      console.log("turn left: " + rover.direction)
      break;
    }
    case "E":{
      rover.direction = "N";
      console.log("turn left: " + rover.direction)
      break;
    }
    }
  }


function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":{
      rover.direction = "E";
      console.log("turn right: " + rover.direction)
      break;
    }
    case "W":{
      rover.direction = "N";
      console.log("turn right: " + rover.direction)
      break;
    }
    case "S":{
      rover.direction = "W";
      console.log("turn right: " + rover.direction)
      break;
    }
    case "E":{
      rover.direction = "S";
      console.log("turn right: " + rover.direction)
      break;
    }
    }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction){
    case "N": {
      rover.y--;
      break;
    }
    case "S": {
      rover.y++;
      break;
    }
    case "W": {
      rover.x--;
      break;
    }
    case "E": {
      rover.x++;
    }
  }
  console.log(`x: ${rover.x}, y: ${rover.y}`)
}
console.log(`x: ${rover.x}, y: ${rover.y}`)

function commands(f,r,l){
  // for ?? (var i=1; i<10; i++);
    console.log(i);
  switch(i){
    case "f": {
      rover.moveForward
      break
      }
    case "r": {
      rover.turnRight
      break
    }
    case "l": {
      rover.turnLeft
      break
    }
  }
}
