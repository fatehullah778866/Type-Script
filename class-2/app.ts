function greetUser(name:string):string {
    return `hello, ${name}! Welcome to TypeScript`;
}

document.write(greetUser("John Doe"));



// adding two numbers

function addNumbers(num1:number, num2:number):number{
    return num1 + num2;
}

document.write("Sum: " + addNumbers(5, 10));