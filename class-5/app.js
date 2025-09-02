// union type
var userId;
userId = "123"; // string is allowed
document.write("User ID: " + userId + "<br>");
userId = 123; // number is allowed
document.write("User ID: " + userId + "<br>");
var staffMember = {
    name: "Fateh ullah",
    employeeId: 12345
};
var rollNo;
rollNo = "A123"; // string is allowed
document.write("Roll No: " + rollNo + "<br>");
rollNo = 123; // number is allowed
document.write("Roll No: " + rollNo + "<br>");
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
document.write("Move direction: " + move + "<br>");
// Generic
function identity(value) {
    return value;
}
document.write("String Identity: " + identity("Hello") + "<br>"); //Hello
document.write("Number Identity: " + identity(123) + "<br>"); // 123
