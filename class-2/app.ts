function greetUser(name:string):string {
    return `hello, ${name}! Welcome to TypeScript`;
}

document.write(greetUser("John Doe"));



// adding two numbers

function addNumbers(num1:number, num2:number):number{
    return num1 + num2;
}

document.write("Sum: " + addNumbers(5, 10));

// Optional parameters (?) user may or may not provide a value
function studentInfo(name:string, age?:number):string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        return `Hello, ${name}!`;
    }
}

document.write(studentInfo("John Doe", 30));
document.write(studentInfo("Jane Doe"));