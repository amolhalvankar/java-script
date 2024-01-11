// map method

let arr = [45, 56, 89];

let newArr = arr.map((val) => {
    return val ** 2 ;
    
});
console.log(newArr); 




//filter method

let num =[1,2,5,6,7,8,9,11,25] ;
let evenNum = num.filter( (val) =>{
    return val % 2 == 0 ;
});

console.log(evenNum);


//Reduce method 

let numbers =[5,6,7,8,2];

newNumbers = numbers.reduce((res,cur)=>{
    return res + cur ;
});

console.log(newNumbers);

























