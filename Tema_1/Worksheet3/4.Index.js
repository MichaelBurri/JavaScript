var radius=parseInt(prompt("RADIUS PLOX: "));
function calcCircumfrence(r) {
    document.write("The circumference is: "+(2*Math.PI*r));
}
function calcArea(r) {
    document.write("<br>The area is: "+(Math.pow(r,2)*Math.PI));
}

calcCircumfrence(radius);
calcArea(radius);


/* ### 4. The Geometrizer

Create 2 functions that calculate properties of a circle.

Create a function called `calcCircumfrence`:

- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called `calcArea`:

- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN". */