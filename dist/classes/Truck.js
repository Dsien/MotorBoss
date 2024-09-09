// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck {
    constructor(vin, color, make, model, year, weight, maxSpeed, wheels, towingCapacity) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
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
// Export the Truck class as the default export
export default Truck;
