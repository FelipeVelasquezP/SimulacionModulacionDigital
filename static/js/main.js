// Captura de inputs
$("#btn-calcular").click(function() {
    window.location.href='#AA';
    const amplitud = parseFloat($("#amplitud"))
    const frecuencia = parseFloat($("#fc"))
    const ascii = parseFloat($("#asc"))
    const bit = parseFloat($("#bit"))
    const sensibilidad = parseFloat($("#sens"))
    if (amplitud && frecuencia && ascii && bit && sensibilidad) {
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Completa todos los campos',
          })
    }
})

pintarGraficaAscci("e",0.0016)
pintarGraficaPortadora(25, 5)
pintarEspectroFrecuencias(8, 25)
pintarGraficaSeñalModuladaASK("e",25,5,0.0016)
pintarGraficaSeñalModuladaFSK("e",0.0016,25,5,3.5)
pintarGraficaSeñalModuladaBPSK("e",0.0016,5)
pintarGraficaSeñalModuladaQPSK("e",5,2)
