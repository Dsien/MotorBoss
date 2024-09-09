// TODO: The Motorbike class should extend the Vehicle class
class Motorbike {
    constructor(vin, color, make, model, year, weight, maxSpeed, wheels) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.wheels = wheels;
    }
    startEngine() {
        console.log(`${this.make} ${this.model} engine started.`);
    }
    stopEngine() {
        console.log(`${this.make} ${this.model} engine stopped.`);
    }
    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }
}
export default Motorbike;
