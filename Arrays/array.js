// Arrays in js 

let cricketer = ["Virat" , "Rohit" , "Rahul" , "Sachin" , "Mahi"];

let marks = [ 25 , 56 , 88 , 20 , 65 , 23 , 26];

console.log(cricketer[1]);
console.log(marks[0]);


// array indices using for loop ;

for(let i = 0 ; i<=cricketer.length ; i++){
    
    console.log(cricketer[i]);
}


// array indices using for of loop ;

for(let numbers of marks){
    console.log(numbers) ;  // we can use string method also 
    
}


// array methods 


cricketer.push("Amol"); // push - add elemet at end
console.log(cricketer);

cricketer.pop(cricketer); // pop- remove elemet from end
console.log(cricketer);

marks.toString(); // its convert array into string 
console.log(marks);


marks.splice( 3 , 2 , 95 , 98 );  // (add,index , delete )
console.log(marks);





















