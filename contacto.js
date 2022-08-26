let span = document.createElement("span")
let form = document.querySelector(".contacto")
form.appendChild(span)
const obtenerContacto = (event) => {
    event.preventDefault();

    let nombre = event.target.nombre.value
    let apellidos = event.target.apellidos.value
    let email = event.target.email.value
    let motivo = event.target.motivo.value

    
    
    if(nombre === "" || apellidos === "" || email === "" || motivo === ""){
        span.innerText = "Faltan campos por rellenar"
    }else{
        let contacto = {
            nombre,
            apellidos,
            email,
            motivo
        } 
    
        event.target.nombre.value = "";
        event.target.apellidos.value = "";
        event.target.email.value = "";
        event.target.motivo.value = "";
    
        console.log(contacto)
        span.innerText = ""
    } 

    
}