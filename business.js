//Business name generator
//By combining adjectives and shop name and another word
//list of adjectives: crazy amazing fire
//shop name: engine foods garments 
//another word: bros limited hub


let random=Math.random()
let first,second ,third
//generating first word
if(random<0.33){
    first="crazy";
}
else if(random>0.33&&random<0.66){
    first="amazing";
}
else{
    first="fire";
}

random=Math.random()
//generating second word
if(random<0.33){
    second="engine";
}
else if(random>0.33&&random<0.66){
    second="food";
}
else{
    second="garment";
}

 random=Math.random()
//generating third word
if(random<0.33){
    third="bros";
}
else if(random>0.33&&random<0.66){
    third="limited";
}
else{
    third="hub";
}
console.log(`${first} ${second} ${third}`);
