interface Student{
    name:string;
    age:number;
    isEnrolled:boolean;
}
let student1:Student={
    name:"John Doe",
    age:20,
    isEnrolled:true
}


// methods in interfaces

interface Car{
    brand:string;
    speed:number;
    drive():void;
}

let myCar:Car={
    brand:"Toyota",
    speed:120,
    drive():void{
        document.write("Driving at ".concat(this.speed.toString(), " km/h"));
    }
};
myCar.drive();  