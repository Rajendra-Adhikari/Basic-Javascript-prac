//make toogle button that changes the screen to dark mode when clicked
//and light mode when clicked again
let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body")
let currentmode="light";//dark
modeBtn.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode="dark";
    body.classList.add("dark");
    body.classList.remove("light");//for applied second time
    
    }
    else{
        currentmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
    
    }
    console.log(currentmode);
});