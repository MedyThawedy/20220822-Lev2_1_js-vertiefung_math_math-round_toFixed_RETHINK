
/*

Erstell eine Funktion roundTo(Zahl, Genauigkeit){...}, die eine Zahl auf genaue Dezimalstellen rundet.

Die folgenden Methoden könnten für Dich nützlich sein:
toFixed()
oder Pow(), für alle, die sich für Mathematik interessieren.

Um es zu testen, schreibe:
console.log(roundTo(3.1415926535, 5)); // 3.14159

*/

let roundTo = (zahl, genauigkeit) => {

    if (genauigkeit > 0) {
        neueZahl = Number(zahl).toFixed(genauigkeit);
    } else {
        neueZahl = Math.round(Number(zahl));
    }


    console.log(zahl + ' = ' + neueZahl);
    document.getElementById('idOutput').innerHTML = zahl + ' = ' + neueZahl;
    document.getElementById('idNr').value = '';
    document.getElementById('idGenauigkeit').value = '';
}