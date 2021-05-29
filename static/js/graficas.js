
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
      
      Plotly.plot( "myDiv", data, layout );
          
}


