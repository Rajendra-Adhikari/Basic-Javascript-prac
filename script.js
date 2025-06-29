//make toogle button that changes the screen to dark mode when clicked
//and light mode when clicked again

let modeBtn=document.querySelector("#mode");
let currentmode="light";//darl
modeBtn.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode="dark";
    document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currentmode="light";
    document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentmode);
});