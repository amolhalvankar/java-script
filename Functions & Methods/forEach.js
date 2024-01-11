// Example of forEach Method 

let arr = [1,2,3,4,5,6];


// arr.forEach(function printVal(val){
//     console.log(val);
// })

//using arrow function
arr.forEach((val) => {
    console.log(val);
});


// print square of array elements
 arr.forEach((num)=>{
    console.log( num * num ); // num**2 as well 
 })

// Another method for call back functon 
let calSquare = ((num)=>{
    console.log( num * num );
 })

 num.forEach(calSquare);










 


 