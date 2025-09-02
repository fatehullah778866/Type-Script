var student1 = {
    name: "John Doe",
    age: 20,
    isEnrolled: true
};
var myCar = {
    brand: "Toyota",
    speed: 120,
    drive: function () {
        document.write("Driving at ".concat(this.speed.toString(), " km/h"));
    }
};
myCar.drive();
