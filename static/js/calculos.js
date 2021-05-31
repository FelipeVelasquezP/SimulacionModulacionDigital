//El calculo de la frecuencia de bit no se realizao porque se pide en la vista

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