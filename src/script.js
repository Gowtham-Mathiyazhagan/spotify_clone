let arr=[10,5,2,7,1,9];
let k=15;

let newArr = arr.reduce((acc,val)=>{
let total = acc+=val;
return total<= k ? val :""
},0)
console.log(newArr)