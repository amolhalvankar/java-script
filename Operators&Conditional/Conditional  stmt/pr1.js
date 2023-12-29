// Qs1. ->  Get user to input a number usuing promt("Enter a number :"). Ckeck if the number is a multiple of 8 or not.

let num = prompt("Enter a number");

if (num % 8 === 0){
    console.log(num, "is multiple of 8");
}else{
    console.log(num, "is not multiple of 8")
}