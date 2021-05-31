//El calculo de la frecuencia de bit no se realizao porque se pide en la vista

//Frecuencia de Marca
function getfMarca(frecuencia, sensibilidad) {
    return frecuencia-sensibilidad
}
//Frecuencia de Espacio
function getfEspacio(frecuencia, sensibilidad) {
    return frecuencia+sensibilidad
}
//Funcion que retorna tb
function getTiempoBit(Fb) {
    operacion=1/Fb;
    return operacion;
}

//Funcion que retorna el ancho de manda minimo para ASK y BPSK
function getAnchoBandaMinimoASK_BPSK(Fb) {
    return Fb;
}

//Funcion que retorna el ancho de manda minimo para FSK
function getAnchoBandaMinimoFSK(Fb,Fm,Fs) {
    B=2*Fb*((Fm-Fs)/2)
    return B;
}

//Funcion que retorna el ancho de manda minimo para QPSK
function getAnchoBandaMinimoASK_BPSK(Fb) {
    B=Fb/2
    return B;
}

// ==== Cálculos uniformes, los siguientes cálculos semntienen para los 4 tipos de modulación ====

// Desviación máxima de frecuencia
function getDesviacion(sensibilidad, amplitud) {
    return sensibilidad*amplitud
}
function getIndiceMod(fMarca, fEspacio, bit) {
    return Math.abs((fMarca - fEspacio)/bit)
}

