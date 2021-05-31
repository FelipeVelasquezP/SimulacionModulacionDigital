// Captura de inputs
$("#btn-calcular").click(function() {
    window.location.href='#AA';
    const amplitud = parseFloat($("#amplitud"))
    const frecuencia = parseFloat($("#fc"))
    const ascii = parseFloat($("#asc"))
    const bit = parseFloat($("#bit"))
    const sensibilidad = parseFloat($("#sens"))
    if (amplitud && frecuencia && ascii && bit && sensibilidad) {
        // Cálculos uniformes
        getDesviacion(sensibilidad, amplitud)
        //Sesinsibilidad es un input
        getfMarca(frecuencia, sensibilidad)
        getfEspacio(frecuencia, sensibilidad)
        getIndiceMod(getfMarca(frecuencia, sensibilidad),getfEspacio(frecuencia, sensibilidad),bit)
        // Gráficas
        pintarGraficaAscci(ascii,0.0016)
        pintarGraficaPortadora(25, 5)
        pintarEspectroFrecuencias(8, 25)
        pintarGraficaSeñalModuladaASK(ascii,25,5,0.0016)
        pintarGraficaSeñalModuladaFSK(ascii,0.0016,25,5,3.5)
        pintarGraficaSeñalModuladaBPSK(ascii,0.0016,5)
        pintarGraficaSeñalModuladaQPSK(ascii,5,2)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Completa todos los campos',
          })
    }
})


