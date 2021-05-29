
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


function traerValores(aux, A, f, df, faux) {
    var x = [];
    var y = [];
    a = -3;
    for (let i = 0; i <= 7000; i++) {
        if (aux == 1) {
            c = A * Math.sin(2 * Math.PI * f * a)
        } else if (aux == 2) {
            c = A * Math.cos(2 * Math.PI * f * a)
        } else if (aux == 3) {
            c = A * Math.cos((2 * Math.PI * f) * a + df * Math.sin(2 * Math.PI * faux * a))
        } else {
            c = A * Math.cos((2 * Math.PI * f) * a + df * Math.cos(2 * Math.PI * faux * a))
        }
        x.push(a)
        y.push(c)
        a += 0.001;
    }
    valores = [{ x }, { y }]
    return valores;
}


function getBessel(m,vc) {
    var J = [];
    for (let i = 0; i < 14; i++) {
        var r = BESSEL.besselj(m, i)
        if (r > 0.01 || r < -0.01) {
            J.push(Math.abs(r*vc));
        }
    }
    return J;
}

function getBessel2(m) {
    var J = [];
    for (let i = 0; i < 14; i++) {
        var r = BESSEL.besselj(m, i)
        if (r > 0.01 || r < -0.01) {
            J.push(r);
        }
    }
    return J;
}