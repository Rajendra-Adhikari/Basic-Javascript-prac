let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");//accessing msg idc
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const gencompchoice=()=>{
    //choose randomly by comp
    const options =["rock","paper","scissors"];//use index for math random array was make
    //to make random use random method in js
  const randIdx = Math.floor(Math.random()*3);
 return options[randIdx];
}
const drawgame= ()=>{
    msg.innerText="Game was draw.play again!"
    msg.style.backgroundColor="#081b31";
}
const showwinner =(userwin,userchoice,compchoice)=>{
if(userwin){
    userscore++
    userScorepara.innerText=userscore;
    
    msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";

}else{
    compscore++;
    compScorepara.innerText=compscore;
    
     msg.innerText=`you Lose ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
}
}
const playgame =(userchoice)=>{
console.log("userchoice=",userchoice);
//Generate computer choice
const compchoice=gencompchoice();
console.log("comp choice=",compchoice);
if(userchoice===compchoice){
    drawgame();
}else{
    let userwin= true;
    if(userchoice==="rock"){
        // comp choice=scissors paper
        userwin =compchoice==="paper"?false :true;
    }else if(userchoice==="paper"){
      //  rock scissors
     userwin  = compchoice==="scissors"?false :true;
    }else{
        //rock paper
      userwin=  compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}

};

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
   const userchoice=choice.getAttribute("id")
    console.log("choice was clicked",userchoice);
   playgame(userchoice);
   });
});