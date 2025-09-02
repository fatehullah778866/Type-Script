class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

    greet():void{
        document.write("Hello, my name is ".concat(this.name, " and I am ", this.age.toString(), " years old."));
    }
}

let person1 = new Person("John Doe", 30);
person1.greet();












//inheritance

class Animal{
    name:string;
  

    constructor(name:string){
        this.name=name;
       
    }

    makeSound():void{
        document.write("The animal makes a sound.");
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }

    makeSound():void{
        document.write("The dog barks.");
    }
}

let myDog = new Dog("Buddy");
myDog.makeSound();




// implementation of interfaces in classes

interface Vehicle{
    brand:string;
    speed:number;
    drive():void;
}
class Car implements Vehicle{
    brand:string;
    speed:number;

    constructor(brand:string, speed:number){
        this.brand=brand;
        this.speed=speed;
    }

    drive():void{
        document.write("The ".concat(this.brand, " is driving at ", this.speed.toString(), " km/h."));
    }
}

let car1 = new Car("Toyota", 120);
car1.drive();