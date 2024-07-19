//? Object Oriented Programming (class, object , constructor , methods , property ) , (Public , Private , Protected(Encapsulation) ) => Properties & Methods

//TODO>> 1) class
class Car {
  //TODO>> 2) properties
  //! public property ~Hint => ((" to used public property in constructor you mustn't be initialize first "))
  //*   name;
  //! private property ~Hint => ((" to used private property in constructor you must be initialize first "))
  #topSpeed;
  numberOfWheels = 2;

  //TODO>> 3) constructor
  constructor(name /*ferrari*/, topSpeed) {
    //! ferrari.name = ferrari
    this.name = name;
    this.#topSpeed = topSpeed;
    this.currentSpeed = 0;
  }

  //TODO>> Methods
  drive(speed) {
    return (this.currentSpeed += speed);
  }

  //! protected property(Encapsulation)
  _color = "";
  get color() {
    return this._color;
  }
  set color(value) {
    if (value.length > 2) this._color = value;
    else console.log("Error! Enter you car's color");
  }
}

//TODO>> Create Object
const car1 = new Car("ferrari", "blue", 260);
console.log(car1.drive(70));
console.log(car1.currentSpeed);
car1.numberOfWheels = 4;
console.log(car1.numberOfWheels);

//! is private you can't direct access
// * console.log(car1.#topSpeed)

//! add new property to obj(car1)
car1.play = 'is play'
console.log(car1.ply)

//! Access to Protected property with some conditions
car1.color = "red";
console.log(car1.color);
