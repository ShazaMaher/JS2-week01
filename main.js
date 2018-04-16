function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}



function isBMWCar(car) {
	return car.make === 'BMW';
}

let speedCarInTheRange=false;
function insideRange(car){
    if(car.speed >=30 || car.speed <=60 ){
        speedCarInTheRange= true;
    }else{
        speedCarInTheRange=false;
    }
    return speedCarInTheRange;
}

function isYellowCar(car){
    return car.color === 'lightyellow';
}

function getSpeedOfCar(car) {
	return car.speed;
}

function getMakeOfCar(car) {
	return car.make;
}


function calculateSum(acc, current) {
	return acc + current;
}



const cars=generateCars(100);
const carsSpeed =[];
for(let i=0; i<cars.length;i++){
    carsSpeed=cars.map(cars.forEach(getSpeedOfCar(cars[i])));
}


console.log(cars.filter(insideRange(carsSpeed)));
