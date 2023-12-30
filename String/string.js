// String in js

let str = "Amol Halvankar";

// string length
let size = str.length;
console.log(size);

//string indices
console.log(str[0],str[1]);

// ************ Templates Literals **************
let str1 = `This is addition of a and b ${ 2 + 3 }`;
console.log(str1);


// string Methods

let string = "  javadeveloper  ";

let Lower = string.toLocaleLowerCase(); // convert into lower case
console.log(Lower);

let Upper = string.toUpperCase(); // Convert into Upper case
console.log(Upper);


let slice = string.slice(2 , 5); // return part of string
console.log(slice);

let con = string.concat(str); // join string with str
console.log(con);

let at = string.charAt(5); 
console.log(at);

let trim = string.trim(); //Remove whitespaces at start and end 
console.log(trim);











