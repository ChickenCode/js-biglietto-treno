let km = prompt("Quanti chilometri desideri percorrere?");

    if (parseInt(km).isNaN) {
        alert("Ho bisogno di un numero... ricarica la pagina e riprova")
    }

    else if (km == 0) {
        alert("allora sei già arrivato... si levi dalle scatole, per cortesia")
    }

let età = prompt("Quanti anni hai?")

     if (parseInt(km).isNaN) {
        alert("Ho bisogno di un numero... ricarica la pagina e riprova")
     }

     else if (età == 0) {
        alert("Torna quando sarai nato")
    }
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
