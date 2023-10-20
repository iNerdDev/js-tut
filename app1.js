//1=>  Write a program that prompts the user to enter their age. Using an if-else statement, check if the age is greater than or equal to 18 and log "You are an adult" if true, otherwise log "You are a minor." Then, implement the same functionality using a ternary operator.

// using if else statement
// let age=prompt("Enter your age...")
// let result=document.getElementById("container")
// if(age>=18){
//     result.innerText="You are an adult"
// }else{
//     result.innerText="You are a minor"
// }

// using ternary operator
// let ans=(age>=18)?"You are an adult":"You are a minor"
// result.innerText=ans


//2=> Create a function that takes two numbers as arguments and returns true if the first number is greater than or equal to the second number. Use comparison operators (>=) and explain how they work in JavaScript.

// let ans=document.getElementById('result')
// function result(num1,num2){
//     if(num1>=num2){
//        ans.innerText="Number 1 is greater than number 2"
//     }else{
//        ans.innerText="Number 1 is smaller than number 2"
//     }
// }
// result(7,2)


// 3=> Write a function that takes a string as input and returns the first character and the last character of the string. Use string indexing to access these characters and return them. Provide examples to test your function.

//  let str=prompt("Enter string")
//  let ans=document.getElementById("container")
//  let result=document.getElementById('result')
//  ans.innerHTML=`<h3>Your input string is : ${str}</h3>`
// result.innerHTML=`The first character of your string is : ${str.charAt(0)} and last character of the string is : ${str.charAt(str.length-1)}`


// 4=> Create a program that demonstrates the difference between let and const in JavaScript. Declare a variable using let and assign a string to it, then reassign it to another value. Do the same with a variable declared using const. Explain the behavior of both variables.

// let a="a"
// // // let a=6
// a="b"
// console.log(a)

// const b= "10"
// // const b=5
// b="30"
// console.log(b)


// 5=> Write a program that declares a variable using the var keyword and assigns an integer value to it. Then, log the variable to the console. Explain the concept of variable declaration using var and its scope.
// var a=5
// console.log("outside the block : " +a)
// {
//     var a= 10
//     console.log("inside the block : " +a)

// }
// console.log("outside the block : " +a)
