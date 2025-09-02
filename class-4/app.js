var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        document.write("Hello, my name is ".concat(this.name, " and I am ", this.age.toString(), " years old."));
    };
    return Person;
}());
var person1 = new Person("John Doe", 30);
person1.greet();
//inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        document.write("The animal makes a sound.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        document.write("The dog barks.");
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy");
myDog.makeSound();
var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Car.prototype.drive = function () {
        document.write("The ".concat(this.brand, " is driving at ", this.speed.toString(), " km/h."));
    };
    return Car;
}());
var car1 = new Car("Toyota", 120);
car1.drive();
