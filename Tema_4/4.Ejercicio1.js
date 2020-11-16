function main() {
    var min=document.getElementById("Minimal");
    min.addEventListener("click", magia);
    var  norm=document.getElementById("Normal");
    norm.addEventListener("click", normal);
}
function magia() {
    document.getElementById("p1").style.backgroundColor="yellow";
    document.getElementById("p2").style.border="1px solid blue";
    document.getElementById("p2").style.backgroundColor="yellow";
}
function normal(){
    document.getElementById("p1").style.backgroundColor="";
    document.getElementById("p2").style.border="";
    document.getElementById("p2").style.backgroundColor="";
}
main();