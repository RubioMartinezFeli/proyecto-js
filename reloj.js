let fecha = new Date();

 let fecha1 = fecha.getDate()+"-"+ (fecha.getMonth()+1)+"-"+ fecha.getFullYear()


 function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora


    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible
    setTimeout("mueveReloj()",1000)//se llama a si misma con un retardo de 1 segundo
    // asi conseguimos el movimiento del reloj
    // añadimos onload="mueveReloj()" al body (al cargar la pagina se llama a esta función)
}



