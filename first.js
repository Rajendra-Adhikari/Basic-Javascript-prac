//taking number as input from user and creating array from 1 to num
//use reduce method to calculate sum and product of all number:
let num =prompt("enter number");
let arr =[];
for(let i=1;i<=num;i++){
    arr[i-1]=i;
}
console.log(arr);
const output=arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(output);
const out=arr.reduce((pre,cur)=>{
    return pre*cur;
});
console.log(out);
