const ApplicationError = require("./ApplicationError");

class CarAlreadyRentedError extends ApplicationError {
  constructor(car) {
    super(`${car} is already rented!!`);
    this.car = car;
  }

  get details() {
    return { car:this.car}
  }
}

module.exports = CarAlreadyRentedError;
