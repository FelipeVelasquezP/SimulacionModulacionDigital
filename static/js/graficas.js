
function pintarGraficaAscci(datay,datax) {
    var traceHVH = {
        x: datax,
        y: datay,
        type: 'scatter',
        name: 'HVH Shape',
        line: {
          shape: 'hvh',
          color: 'rgb(98, 157, 255)',
          width: 5,
        }
      };
      var data = [traceHVH];
      var layout = {
        title:'Diagrama de Pulsos del codigo ASSCI',
        yaxis: {
          rangemode: 'tozero'
        }
      };
      
      Plotly.plot( "graficaAssci", data, layout );
          
}


function pintarGraficaPortadora(vp,fp) {
        var save = traerValores(2, vp, fp, null, null);
    
        var datos = {
            x: save[0].x,
            y: save[1].y,
            mode: 'lines'
        };
        var data = [datos];
        var layout = {
            title: 'Señal Portadora',
            xaxis: {
                title: 'Tiempo [seg]',
                titlefont: {
                    color: 'black',
                    size: 12
                },
                rangemode: 'tozero'
            },
            yaxis: {
                title: 'Vc [V]',
                titlefont: {
                    color: 'black',
                    size: 12
                }
            }
        };
        Plotly.newPlot('graficaPortadora', data, layout);
}


function getRandomColor(coloresFm) {
    var colores = [];
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

// Recibe el indice de m y la apmlitu de la portadora
function pintarEspectroFrecuencias(m,vp) {
    var fLaterales = getBessel(m, vp);
    console.log(fLaterales)
    var datax = [];
    var datay = [];
    var auxdatax = []
    var auxdatay = []
    var auxCol = [];
    var coloresFm = [];

    for (let i = fLaterales.length - 1; i >= 0; i--) {
        datay.push(fLaterales[i])
        datax.push('f ' + i)
    }
    for (let i = 0; i < fLaterales.length; i++) {
        datax.push('f' + i);

    }
    for (let i = 0; i < datax.length; i++) {
        var indice = datax[i].charAt(datax[i].length - 1);
        var indice2 = datax[i].charAt(datax[i].length - 2);
        var sum = indice2 + indice;
        if (sum > 9) {
            auxdatax[i] = sum;
        } else {
            auxdatax[i] = indice;
        }
    }
    console.log(datax,datay)
    var q=0;
    for (let i = datay.length - 1; i >= 0; i--) {
        auxdatay[q]=datay[i];
        q++;
    }
    // datay[datay.length-1].splice();
    delete datay[datay.length-1];
    datay=datay.concat(auxdatay);
    console.log(datay)


    var trace1 = {
        type: 'bar',
        x: datax,
        y: datay,
        marker: {
            // color: coloresFm,
            line: {
                width: 2
            }
        }
    };



    var data = [trace1];

    var layout = {
        title: 'Espectro de frecuencias de las bandas laterales en FM',
        font: { size: 18 },
        xaxis: {
            title: 'Frecuencia [Hz]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Potencia [W]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };

    var config = { responsive: true }

    Plotly.newPlot('espectroFrecuencias', data, layout, config);

}

