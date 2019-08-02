const process = require('process');

let houses = ["mansion", "apartment", "shack", "house", "cave"]
let cars = ["Lambo", "Porsche", "Audi", "Honda", "Ferrari", "Toyota"]
let career = ["doctor", "mechanic", "software engineer", "teacher", "CEO", "taxi driver"]
let spouse = ["Ann", "Elizabeth", "Grace", "Mariam", "Jan"]

mash = () => {
  console.log("You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids! You'll drive a " + getCar() + ". You will work as a " + getCareer() + " and youre wife's name will be " + getSpouse() + ". You will make $" + getSalary() + ",000")
}

function getHome() {
  let chooseHome = Math.floor(Math.random() * 4);
  return houses[chooseHome]
}

function getChildrenCount() {
  let randoNum = Math.floor(Math.random() * 25)
  return randoNum
}

function getCar(){
  let chooseCar = Math.floor(Math.random() * 5);
  return cars[chooseCar]
}

function getCareer() {
  let chooseCareer = Math.floor(Math.random() * 5);
  return career[chooseCareer]
}

function getSpouse() {
  let chooseSpouse = Math.floor(Math.random() * 4);
  return spouse[chooseSpouse]
}

function getSalary() {
  let randoSal = Math.floor(Math.random() * 10);
  let ones = Math.floor(Math.random() * 10)
  let tens = Math.floor(Math.random() * 100)
  let hunnits = Math.floor(Math.random() * 1000)
  if (randoSal >= .8){
    return ones + tens + hunnits
  } else if ((randoSal <= 0.8) && (randoSal >= 0.5)) {
    return ones + tens
  } else {
    return ones
  }
}

mash();
