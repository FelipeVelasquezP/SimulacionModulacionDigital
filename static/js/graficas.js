
//Grafica de diagrama de pulzos de assci
function pintarGraficaAscci(cod) {
    var save = datosGraficaAscci(cod);
    var traceHVH = {
        x: save[1].ejeX,
        y: save[0].binario,
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
        title: 'Diagrama de Pulsos del codigo ASSCI',
        yaxis: {
            rangemode: 'tozero'
        }
    };

    Plotly.plot("graficaAssci", data, layout);

}

//Grafica de la portadora
function pintarGraficaPortadora(vp, fp) {
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



// Recibe el indice de m y la apmlitu de la portadora
function pintarEspectroFrecuencias(m, vp) {
    var datos=datosEspectroFrecuencias(m,vp);
    var trace1 = {
        type: 'bar',
        x: datos[0].datax,
        y: datos[1].datay,
        marker: {
            color: datos[2].coloresFm,
            line: {
                width: 2
            }
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Espectro de frecuencias de las bandas laterales',
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

