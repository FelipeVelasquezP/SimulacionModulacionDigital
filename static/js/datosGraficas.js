// Funcion que trae los valores a graficar en el diagrama de pulsos
function datosGraficaAscci(cod,tb) {
    let decimal = cod.charCodeAt(0);
    bin=decimal.toString(2);
    binario=[];
    ejeX=[];
    aux=0;
    for (let i = 0; i < bin.length; i++) {
        binario[i]=parseInt(bin[i]);
        ejeX[i]=aux;
        aux+=tb;
    }
    var dat=[{binario},{ejeX}]
    console.log(dat)
    return dat;
}

// Funcion que trae los valores a graficar
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

function datosASK(cod,tb) {
    var bin=[];
    var save=datosGraficaAscci(cod,tb)[0].binario;
    for (let i = 0; i < save.length; i++) {
       if (save[i]) {
           bin[i]=1
       } else {
         bin[i]=-1
       }
    }
    return bin;
}


function traerdatosASK(cod,tb,Ap,fp) {
    var save=datosASK(cod,tb);
    var x = [];
    var y = [];
    a = 0;
    b=0;
    len=7000;
    pru=len/save.length;
    auxpru=pru;
    console.log(save.length)
    for (let i = 0; i < len; i++) {
        if (i==pru) {
            pru+=auxpru;
            b++
        }
        c=(1+save[b])*((Ap/2)*Math.cos(2*Math.PI*fp*a));
        x.push(a)
        y.push(c)
        a += 0.001;
    }
    valores = [{ x }, { y }]
    return valores;
}

function traerdatosFSK(cod,tb,Ap,fp,desviacion) {
    console.log(cod,tb,Ap,fp,desviacion)
    var save=datosASK(cod,tb);
    var x = [];
    var y = [];
    a = 0;
    b=0;
    len=7000;
    pru=len/save.length;
    auxpru=pru;
    console.log(save.length)
    for (let i = 0; i < len; i++) {
        if (i==pru) {
            pru+=auxpru;
            b++
        }
        c=Ap*Math.cos(2*Math.PI*(fp+save[b]*desviacion)*a);
        x.push(a)
        y.push(c)
        a += 0.001;
    }
    valores = [{ x }, { y }]
    console.log(valores)
    return valores;
}

//Funcion que tae los datos a graficar en el espectro de frecuencias
function datosEspectroFrecuencias(m,vp) {
    
    var fLaterales = getBessel(m, vp);// se traen los valores de bessel ya multiplicados por vp
    //definicion de variables a utilizar
    var datax = [];
    var datay = [];
    var auxdatay = []
    var auxCol = [];
    var coloresFm = [];

    //Insercion de los valores del eje x
    for (let i = fLaterales.length - 1; i >= 0; i--) {
        datay.push(fLaterales[i])
        if (i != 0) {
            datax.push(i)
        }
    }
    for (let i = 0; i < fLaterales.length; i++) {
        datax.push(i);
    }
    //cambio de signo de la mitad del rreglo
    señal = false;
    for (let i = 0; i < datax.length; i++) {
        if (datax[i] == 0) {
            señal = true;
        }
        if (!señal) {
            datax[i] = -datax[i];
        }

    }
    //insercion de los colores aleatoris
    for (let i = 0; i < datax.length; i++) {
        if (datax[i] <= 0) {
            auxCol.push(getRandomColor(auxCol));
        }
    }
    //Arreglo de colores
    var q = 0;
    for (let i = datay.length - 1; i >= 0; i--) {
        auxdatay[q] = datay[i];
        coloresFm[q]=auxCol[i]
        q++;
    }
    //Operaciones para combinar arreglos
    datay.pop();
    datay = datay.concat(auxdatay);
    auxCol.pop();
    coloresFm=auxCol.concat(coloresFm);
    //Datos a retornan
    valores = [{ datax }, { datay },{ coloresFm }]
    return valores;
}

//LA funcion retorna un color diferente a los ya existentes
function getRandomColor(coloresFm) {
    var num = (Math.floor(Math.random() * 4) * 4).toString(16);
    var letters = ['0', 'F', num];
    var color = '#';

    for (var i = 0; i < 3; i++) {
        let pos = Math.floor(Math.random() * letters.length);
        color += letters[pos];
        letters.splice(pos, 1);

    }
    //para evitar que se repitan colores 
    if (coloresFm.includes(color)) {
        return getRandomColor(coloresFm);
    } else {
        return color;
    }

}

// funcion que retoena las f laterales multiplicadas por una amplitud
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

// funcion que retoena las f laterales multiplicadas 
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