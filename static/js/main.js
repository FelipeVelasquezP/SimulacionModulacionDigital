// Captura de inputs
$("#btn-calcular").click(function() {
    window.location.href='#AA';
    const amplitud = parseFloat($("#amplitud").val())
    const frecuencia = parseFloat($("#fc").val())
    const ascii = ($("#asc").val())
    const bit = parseFloat($("#bit").val())
    const sensibilidad = parseFloat($("#sens").val())
    if (amplitud && frecuencia && ascii && bit && sensibilidad) {
        // Cálculos uniformes
        let desviacion=getDesviacion(sensibilidad, amplitud)
        //Sesinsibilidad es un input
        getfMarca(frecuencia, sensibilidad)
        getfEspacio(frecuencia, sensibilidad)
        let indice=getIndiceMod(getfMarca(frecuencia, sensibilidad),getfEspacio(frecuencia, sensibilidad),bit)
        let timepoBit=getTiempoBit(bit);
        // Gráficas
        console.log(timepoBit)
        pintarGraficaAscci(ascii,timepoBit)
        pintarGraficaPortadora(amplitud, frecuencia)
        pintarEspectroFrecuencias(indice, amplitud)
        pintarGraficaSeñalModuladaASK(ascii,amplitud,frecuencia,timepoBit)
        pintarGraficaSeñalModuladaFSK(ascii,timepoBit,amplitud,frecuencia,desviacion)
        pintarGraficaSeñalModuladaBPSK(ascii,timepoBit,frecuencia)
        pintarGraficaSeñalModuladaQPSK(ascii,frecuencia,bit)
        pintarDiagramaConstelacionBPSK(ascii,timepoBit)
        pintarDiagramaConstelacionQPSK(ascii,timepoBit)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Completa todos los campos',
          })
    }
})


