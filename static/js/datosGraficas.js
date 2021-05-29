
function setGraficaAscci(cod) {
    let decimal = cod.charCodeAt(0);
    bin=decimal.toString(2);
    binario=[];
    ejeX=[];
    aux=1;
    for (let i = 0; i < bin.length; i++) {
        binario[i]=parseInt(bin[i]);
        ejeX[i]=i+(i+1)
    }
    console.log(binario,ejeX)
    pintarGraficaAscci(binario,ejeX)
}