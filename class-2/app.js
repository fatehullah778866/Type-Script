function greetUser(name) {
    return "hello, ".concat(name, "! Welcome to TypeScript");
}
document.write(greetUser("John Doe"));
// adding two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}
document.write("Sum: " + addNumbers(5, 10));
// Optional parameters (?) user may or may not provide a value
function studentInfo(name, age) {
    if (age) {
        return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
document.write(studentInfo("John Doe", 30));
document.write(studentInfo("Jane Doe"));
