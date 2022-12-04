var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");

var resPedestrain = document.querySelector(".res-pedestrain");
var resBicycle = document.querySelector(".res-bicycle");
var resCar = document.querySelector(".res-car");
var resPlane = document.querySelector(".res-plane");

var pedestrainSpeed = 3.6; 
var bicycleSpeed = 20.1; 
var carSpeed = 70; 
var planeSpeed = 800; 

function pedestrain(distance, time) {
  time = distance / pedestrainSpeed;
  time = `${+time.toFixed(1)} soat ${(time / 60).toFixed(1)} minut ${(
    time / 3600
  ).toFixed(1)} sekund`;
  return time;
}
function bicycle(distance, time) {
  time = distance / bicycleSpeed;
  time = `${+time.toFixed(1)} soat ${(time / 60).toFixed(1)} minut ${(
    time / 3600
  ).toFixed(1)} sekund`;
  return time;
}
function car(distance, time) {
  time = distance / carSpeed;
  time = `${+time.toFixed(1)} soat ${(time / 60).toFixed(1)} minut ${(
    time / 3600
  ).toFixed(1)} sekund`;
  return time;
}
function plane(distance, time) {
  time = distance / planeSpeed;
  time = `${+time.toFixed(1)} soat ${(time / 60).toFixed(1)} minut ${(
    time / 3600
  ).toFixed(1)} sekund`;
  return time;
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log();
  var pedestrainTime = pedestrain(elInput.value);
  var bicycleTime = bicycle(elInput.value);
  var carTime = car(elInput.value);
  var planeTime = plane(elInput.value);
  resPedestrain.textContent = pedestrainTime;
  resBicycle.textContent = bicycleTime;
  resCar.textContent = carTime;
  resPlane.textContent = planeTime;
});