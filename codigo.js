const articulos = [
    {
        titulo:"Como desarrollar una web",
        descripción: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        parrafo: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación "
     },
     {
        titulo:"Como maquetar una web",
        descripción: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        parrafo: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación "
     },
     {
        titulo:"Java Script",
        descripción: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        parrafo: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación "
     },
     {
        titulo:"CSS",
        descripción: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        parrafo: "Lorem Ipsum es simplemente el Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación "
     }
];

const obternerForm = event => {
    event.preventDefault()
    let nombre = event.target.nombre.value;
    let apellidos = event.target.apellidos.value;
    if(nombre != "" && apellidos != ""){
        event.target.nombre.value = ""
        event.target.apellidos.value = ""
        let user = (nombre + " " + apellidos);

       
        if(document.body.contains(document.getElementsByTagName("span")[0])){
            let form = document.querySelector(".formulario")
            let span = document.getElementsByTagName("span")[0]
            form.removeChild(span)
        }
        mostrarUser(user);
    }else{
        let form = document.querySelector(".formulario")
        let span = document.createElement("span")
        span.textContent = "Faltan campos por llenar"
        if(!document.body.contains(document.getElementsByTagName("span")[0])){
            form.appendChild(span);
        }
    }
    
}

   const mostrarUser = (user) => {
    if(document.body.contains(document.getElementsByTagName("li")[4])){
        let form = document.querySelector(".formulario")
        let span = document.createElement("span")
        span.textContent = "Cierre sesion para cambiar de usuario"
        if(document.body.contains(document.getElementsByTagName("span")[0])){
            let span = document.getElementsByTagName("span")[0]
            span.innerText = "Cierre sesion para cambiar de usuario"
        }else{
            let span = document.createElement("span")
            span.textContent = "Cierre sesion para cambiar de usuario"
            form.appendChild(span);
        }
        

        console.log("Ya esta loggeado")
    }else{
        let elementos = JSON.parse(localStorage.getItem("users"))
        if(Array.isArray(elementos) && !elementos.includes(user)){
            elementos.push(user);  
        }else if(!Array.isArray(elementos)){
            elementos = [user]
        }
        localStorage.setItem("users", JSON.stringify(elementos));
        let lista = document.querySelector("#lista")
        let li =  document.createElement("li")
        li.className = "item-user"
        li.textContent = user;
        lista.appendChild(li)
        localStorage.setItem("sesion", JSON.stringify(user))
        let sesion =  document.createElement("li")
        sesion.className = "item-user"
        sesion.textContent = "CERRAR SESION";
        lista.appendChild(sesion)
        const cerrarSesion = () => {
            lista.removeChild(li)
            lista.removeChild(sesion)
            console.log("clicked");
            localStorage.removeItem("sesion")
           };
           
           sesion.addEventListener("click", cerrarSesion);
           
    }
}

const cargarArticulos = () => {
    for(let i = 0; i < articulos.length; i++){
        let main = document.querySelector(".main")
        let article = document.createElement("article")
        article.className = "articulo"
        main.appendChild(article)
        let h2 = document.createElement("h2")
        h2.className = "titulo"
        h2.textContent = articulos[i].titulo
        let pdesc= document.createElement("p")
        pdesc.className = "descripcion"
        pdesc.textContent = articulos[i].descripción
        let pparr = document.createElement("p")
        pparr.className = "parrafo"
        pparr.textContent = articulos[i].parrafo
        let boton = document.createElement("button")
        boton.textContent = "Leer más"
        boton.name = "boton"
        boton.className = "mas"
        article.appendChild(h2);
        article.appendChild(pdesc);
        article.appendChild(pparr);
        article.appendChild(boton);
    }
    let main = document.querySelector(".main")
    let scroll = document.createElement("div")
    scroll.innerHTML = "<p>^</p>"
    scroll.className = "boton-scroll"
    
    main.appendChild(scroll);
    const scrollAutomatico = () => {
        $('body, html').animate({
            scrollTop:'0px'
        }, 300)
       };
       
       scroll.addEventListener("click", scrollAutomatico);
}

if(document.body.contains(document.querySelector(".main"))){
    cargarArticulos();
}


const cambiarColor = event => {
    let color = event.target.id;
    if(color == "verde"){
        let logo = document.querySelector('#logo');
        logo.className = 'logo'
        if(document.body.contains(document.getElementsByName('enviar')[0])){
            let enviar = document.getElementsByName('enviar');
            enviar[0].className = 'enviar'
        }
        if(document.body.contains(document.getElementsByName('enviarContacto')[0])){
            let enviarContacto = document.getElementsByName('enviarContacto');
            enviarContacto[0].className = 'enviarContacto'
        }
        let boton = document.getElementsByName("boton");
        for(let i=0; i<boton.length; i++){
            boton[i].className = "mas"
        }
        let event =  {
            target:{
                id:"boton1"
            }
        }
        cambiarImagen(event);
        
    }
    if(color == "azul"){
        let logo = document.querySelector('#logo');
        logo.className = 'logoA'
        if(document.body.contains(document.getElementsByName('enviar')[0])){
            let enviar = document.getElementsByName('enviar');
            enviar[0].className = 'enviarA'
        }
        if(document.body.contains(document.getElementsByName('enviarContacto')[0])){
            let enviarContacto = document.getElementsByName('enviarContacto');
            enviarContacto[0].className = 'enviarContactoA'
        }
        let boton = document.getElementsByName("boton");
        for(let i=0; i<boton.length; i++){
            boton[i].className = "masA"
        }
        let event =  {
            target:{
                id:"boton3"
            }
        }
        cambiarImagen(event);
    }
    if(color == "rojo"){
        let logo = document.querySelector('#logo');
        logo.className = 'logoR'
        if(document.body.contains(document.getElementsByName('enviar')[0])){
            let enviar = document.getElementsByName('enviar');
            enviar[0].className = 'enviarR'
        }
        if(document.body.contains(document.getElementsByName('enviarContacto')[0])){
            let enviarContacto = document.getElementsByName('enviarContacto');
            enviarContacto[0].className = 'enviarContactoR'
        }
        let boton = document.getElementsByName("boton");
        for(let i=0; i<boton.length; i++){
            boton[i].className = "masR"
        }
        let event =  {
            target:{
                id:"boton2"
            }
        }
        cambiarImagen(event);
    }
}

function cambiarImagen(event) {
    let idSelect = event.target.id;

    if (idSelect == "boton1") {
        let id2 = "boton2";
        let id3 = "boton3";
        let boton = document.querySelector('#' + idSelect);
        let boton2 = document.querySelector('#' + id2);
        let boton3 = document.querySelector('#' + id3);
        boton.className = "seleccionado";
        boton2.className = "boton";
        boton3.className = "boton";
        let imagen = document.querySelector('#imagen');
        imagen.className = "imagen-cabezera";
        document.body.className = "body1";
    } else if (idSelect == "boton2") {
        let id2 = "boton1";
        let id3 = "boton3";
        let boton = document.querySelector('#' + idSelect);
        let boton2 = document.querySelector('#' + id2);
        let boton3 = document.querySelector('#' + id3);
        boton.className = "seleccionado";
        boton2.className = "boton";
        boton3.className = "boton";
        let imagen = document.querySelector('#imagen');
        imagen.className = "imagen-cabezera2";
        document.body.className = "body2";
    } else if (idSelect == "boton3") {
        let id2 = "boton1";
        let id3 = "boton2";
        let boton = document.querySelector('#' + idSelect);
        let boton2 = document.querySelector('#' + id2);
        let boton3 = document.querySelector('#' + id3);
        boton.className = "seleccionado";
        boton2.className = "boton";
        boton3.className = "boton";
        let imagen = document.querySelector('#imagen');
        imagen.className = "imagen-cabezera3";
        document.body.className = "body3";
    }
}

const siguienteImagen = () => {
    let imagen = document.querySelector('#imagen');
    if(imagen.className === "imagen-cabezera"){
        imagen.className = "imagen-cabezera2"
        document.body.className = "body2";
        let boton = document.querySelector('#boton1');
        let boton2 = document.querySelector('#boton2');
        let boton3 = document.querySelector('#boton3');
        boton.className = "boton";
        boton2.className = "seleccionado";
        boton3.className = "boton";
    } else  if(imagen.className === "imagen-cabezera2"){
        imagen.className = "imagen-cabezera3"
        document.body.className = "body3";
        let boton = document.querySelector('#boton1');
        let boton2 = document.querySelector('#boton2');
        let boton3 = document.querySelector('#boton3');
        boton.className = "boton";
        boton2.className = "boton";
        boton3.className = "seleccionado";
    }else  if(imagen.className === "imagen-cabezera3"){
        imagen.className = "imagen-cabezera"
        document.body.className = "body1";
        let boton = document.querySelector('#boton1');
        let boton2 = document.querySelector('#boton2');
        let boton3 = document.querySelector('#boton3');
        boton.className = "seleccionado";
        boton2.className = "boton";
        boton3.className = "boton";
    }
} 

const anteriorImagen = () => {
    let imagen = document.querySelector('#imagen');
    if(imagen.className === "imagen-cabezera"){
        imagen.className = "imagen-cabezera3"
        document.body.className = "body3";
        let boton = document.querySelector('#boton1');
        let boton2 = document.querySelector('#boton2');
        let boton3 = document.querySelector('#boton3');
        boton.className = "boton";
        boton2.className = "boton";
        boton3.className = "seleccionado";
    } else  if(imagen.className === "imagen-cabezera2"){
        imagen.className = "imagen-cabezera"
        document.body.className = "body1";
        let boton = document.querySelector('#boton1');
        let boton2 = document.querySelector('#boton2');
        let boton3 = document.querySelector('#boton3');
        boton.className = "seleccionado";
        boton2.className = "boton";
        boton3.className = "boton";
    }else  if(imagen.className === "imagen-cabezera3"){
        imagen.className = "imagen-cabezera2"
        document.body.className = "body2";
        let boton = document.querySelector('#boton1');
        let boton2 = document.querySelector('#boton2');
        let boton3 = document.querySelector('#boton3');
        boton.className = "boton";
        boton2.className = "seleccionado";
        boton3.className = "boton";
    }
} 