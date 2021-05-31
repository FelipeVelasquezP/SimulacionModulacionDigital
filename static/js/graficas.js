
//Grafica de diagrama de pulzos de assci
function pintarGraficaAscci(cod,tb) {
    var save = datosGraficaAscci(cod,tb);
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
        xaxis: {
            title: 'Tiempo[s]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Amplitud[V]',
            titlefont: {
                color: 'black',
                size: 12
            }
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


function pintarGraficaSeñalModuladaASK(cod,Ap,fp,tb) {
    var save = traerdatosASK(cod,tb,Ap,fp)

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en ASK',
        xaxis: {
            title: 'Tiempo [s]',
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
    Plotly.newPlot('graficaModuladaASK', data, layout);
}

function pintarGraficaSeñalModuladaFSK(cod,tb,Ap,fp,desviacion) {
    var save = traerdatosFSK(cod,tb,Ap,fp,desviacion)
    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en FSK',
        xaxis: {
            title: 'Tiempo [s]',
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
    Plotly.newPlot('graficaModuladaFSK', data, layout);
}

function pintarGraficaSeñalModuladaBPSK(cod,tb,fp) {
    var save = traerdatosBPSK(cod,tb,fp)
    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en BPSK',
        xaxis: {
            title: 'Tiempo [s]',
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
    Plotly.newPlot('graficaModuladaBPSK', data, layout);
}

function pintarGraficaSeñalModuladaQPSK(cod,tb,fp,fb) {
    var save = traerdatosQPSK(cod,tb,fp,fb)
    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en BPSK',
        xaxis: {
            title: 'Tiempo [s]',
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
    Plotly.newPlot('graficaModuladaQPSK', data, layout);
}

function pintarDiagramaConstelacionBPSK() {
    
}

function pintarDiagramaConstelacionQPSK() {
    
}