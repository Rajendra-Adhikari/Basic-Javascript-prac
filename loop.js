//using loop
//for in loop//used inobject (index or keys)
let data ={
    name:"rajendra",
    class: "2-ndyear",
    roll:"34",
}
for (const key in data) {
    console.log(key,data[key]);
    
}
//for of loop //it is used for arrray and strings print value
let num=[1,2,3,4,5];
for(const value of num ){
    console.log(value);
}


//for each loop// only works on array
//using anonymous func(many callback funct are anonymous)
let arr=[10,20,30];
arr.forEach(function(num,ind){
    console.log(ind,num);
}) ;//num and ind are variable name for each num and indexes
  

//using arrow function
let arry=[5,10,15,20];
arr.forEach((nu,i)=>{
    console.log(`Index ${i} value ${nu}`);

});

//using callback functon with namm
let element=["rajendr","2nd-year","32"];
function printelement(ele,index,arr){
    console.log(index,ele);
}
element.forEach(printelement);