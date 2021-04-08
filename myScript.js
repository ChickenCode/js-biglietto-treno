let km = prompt("Quanti chilometri desideri percorrere?");
let età = prompt("Quanti anni hai?");
let prezzoBiglietto = km*0.21

if (età < 18) {
    console.log("Sono " + (prezzoBiglietto * 0.8).toFixed(2) + " €")
}

else if (età > 65) {
    console.log("Sono " + (prezzoBiglietto * 0.6).toFixed(2) + " €")
}

else {
    console.log("Sono " + prezzoBiglietto.toFixed(2) + " €")
}
