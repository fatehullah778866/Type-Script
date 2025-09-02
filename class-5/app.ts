// union type
let userId:string | number;
userId = "123";  // string is allowed
document.write("User ID: " + userId + "<br>");
userId = 123;  // number is allowed

document.write("User ID: " + userId + "<br>");



// intersectiont type


interface Person{
    name:string;
}

interface Employee{
    employeeId:number;
}

type Staff = Person & Employee;

let staffMember: Staff = {
    name: "Fateh ullah",
    employeeId: 12345
};




// Type aliases


type StringOrNumber = string | number;

let rollNo: StringOrNumber;
rollNo = "A123";  // string is allowed
document.write("Roll No: " + rollNo + "<br>");
rollNo = 123;  // number is allowed
document.write("Roll No: " + rollNo + "<br>");


// Enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
document.write("Move direction: " + move + "<br>");



// Generic
function identity<T>(value: T): T {
    return value;
}

document.write("String Identity: " + identity<string>("Hello") + "<br>");//Hello
document.write("Number Identity: " + identity<number>(123) + "<br>");// 123

