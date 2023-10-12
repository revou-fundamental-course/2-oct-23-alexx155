function konversi() {
    var inpC = parseFloat(document.getElementById("inpC").value);
    var outF = (inpC * 9/5) + 32;
    document.getElementById("hasil").innerHTML = + outF.toFixed(2) + " Fahrenheit"
    document.getElementById("penjelasan").innerHTML= "Penjelasan: " + inpC + " Celcius = (" + inpC + " x 9/5) + 32 = " + outF.toFixed(2) + " Fahrenheit";
}

function reset() {
    document.getElementById("inpC").value = "";
    document.getElementById("hasil").innerHTML = "Fahrenheit ";
    document.getElementById("penjelasan").innerHTML = "Penjelasan";
}

function reverse() {
    var inpC = parseFloat(document.getElementById("inpC").value);
    var outF = (inpC * 9/5) + 32;
    document.getElementById("inpC").value = outF.toFixed(2);
    document.getElementById("hasil").innerHTML = + inpC.toFixed(2) + " Celsius";
    document.getElementById("penjelasan").innerHTML = "Penjelasan: (" + inpC + " - 32) x 5/9 = " + outF.toFixed(2) + " Celsius";
}