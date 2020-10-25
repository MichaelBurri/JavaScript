var edad=parseInt(prompt("Intro tu edad"));
var cal=parseFloat(prompt("Calorías diarias?"));
function calculateSupply(age,amo){
    document.write("You will need "+ Math.round((100-age)*365*amo)+" Kcal to last you until the ripe old age of 100");
}
calculateSupply(edad,cal);
 