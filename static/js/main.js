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