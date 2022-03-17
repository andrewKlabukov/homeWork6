class Car {
  constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption, currentFuelVolume, isStarted, mileage) {
    this.brand = brand;
    this.model = model;
    this.yearOfManufacturing = yearOfManufacturing;
    this.maxSpeed = maxSpeed;
    this.maxFuelVolume = maxFuelVolume;
    this.fuelConsumption = fuelConsumption;
    this.currentFuelVolume = currentFuelVolume;
    this.isStarted = isStarted;
    this.mileage = mileage;
  }

  start() {
    if (this.isStarted) {
      
    }
  }

  shutDownEngine() {
    if (!this.isStarted) {
      
    }
  }

  fillUpGasTank() {

  }

  drive() {

  }
}
