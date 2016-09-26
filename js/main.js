//NOMBRANDO VARIABLES GLOBALES

var conteneddorNina = document.getElementById("contenedorNina");
var noRepeat = contenedorNina.style.backgroundRepeat = "no-repeat";
var cover = contenedorNina.style.backgroundSize = "cover";
var nina = document.getElementById("nina");
var fondoCocina = document.getElementById("fondoCocina");
var fondoDoctor = document.getElementById("fondoDoctor");
var fondoCantante = document.getElementById("fondoCantante");
var fondoPintor = document.getElementById("fondoPintor");
var fondoAstronauta = document.getElementById("fondoAstronauta");
var jugar = document.getElementById("jugar");
var div = document.getElementById("myDIV");
var fondos = document.getElementsByClassName("fondos");
var contenedorJuego = document.getElementById("contenedorJuego");
var contenedorRopa = document.getElementById("contenedorRopa");
var ropaUno = document.querySelector(".ropaUno");
var ropaDos = document.querySelector(".ropaDos");
var ropaTres = document.querySelector(".ropaTres");
var ropaCuatro = document.querySelector(".ropaCuatro");
var ropaCinco = document.querySelector(".ropaCinco");
var ropaSeis = document.querySelector(".ropaSeis");

//FUNCION DE CAMBIAR FONDOS:

function jugarProfesiones(){
    contenedorJuego.style.display = "inline-block";
    fondoCocina.addEventListener("click", function(){
        contenedorNina.style.backgroundImage = "url(img/cocina.jpg)";
        noRepeat;
        cover;
    });
    fondoDoctor.addEventListener("click", function(){
        contenedorNina.style.backgroundImage = "url(img/doctor.jpg)";
        noRepeat;
        cover;
    });
    fondoCantante.addEventListener("click", function(){
        contenedorNina.style.backgroundImage = "url(img/escenario.jpg)";
        noRepeat;
        cover;
    });
    fondoPintor.addEventListener("click", function(){
        contenedorNina.style.backgroundImage = "url(img/pintor.jpg)";
        noRepeat;
        cover;
    });
    fondoAstronauta.addEventListener("click", function(){
        contenedorNina.style.backgroundImage = "url(img/space.jpg)";
        noRepeat;
        cover;
    });
};

//FUNCION PARA EL EVENTO TRANSITIONED

function myFunction() {
    div.style.display = "block"
    div.addEventListener("transitionend", function(){
        div.style.width = "100%";
        if (div.style.width == "100%") {
            jugarProfesiones();
            div.style.display ="none";
        };
    });
};

//FUNCION PARA EL EVENTO MOUSEOVER

function cambioFondos(){
    //DANDO LAS MEDIDAS QUE SE CAMBIARAN
    function agrandarFondo(fondos) {
        fondos.style.height = "200%";
        fondos.style.width = "200%";
    };
    function achicarFondo(fondos) {
        fondos.style.height = "125%";
        fondos.style.width = "125%";
    };
    
//mouseover and mouseout event
    for (var i = fondos.length - 1; i >= 0; i--) {
        fondos[i].addEventListener("mouseover", function(){
            agrandarFondo(this);
        });
        fondos[i].addEventListener("mouseout", function(){
            achicarFondo(this);
        }); 
    };
};


//drag and drop

    function dragStart(event){
        event.dataTransfer.setData("Text", event.target.id)
    };
    function allowDrop(event){
        event.preventDefault();
    };
    function drop(event){
        contenedorNina;
        event.preventDefault();                                                  
        var data = event.dataTransfer.getData("Text");
        var ropaArrastrada = document.getElementById(data);
        ropaArrastrada.classList.add("ropa");
        event.target.parentNode.appendChild(ropaArrastrada);
        var ropas = contenedorRopa.children;
        
        contenedorNina.style.height = "23em";
        contenedorNina.style.top = "4em";
    };

window.addEventListener("load", function(){
    jugar.addEventListener("click", myFunction);
    
//llamando a las funciones de los eventos mouseover y mouseout
    cambioFondos();

//drag and drop
    contenedorRopa.addEventListener("drop", function(){
        drop(event);
    });
    contenedorRopa.addEventListener("dragover", function(){
        allowDrop(event);
    });
    ropaUno.addEventListener("dragstart", function(){
        dragStart(event);
    });
    ropaDos.addEventListener("dragstart", function(){
        dragStart(event);
    });
    ropaTres.addEventListener("dragstart", function(){
        dragStart(event);
    });
    ropaCuatro.addEventListener("dragstart", function(){
        dragStart(event);
    });
    ropaCinco.addEventListener("dragstart", function(){
        dragStart(event);
    });
    ropaSeis.addEventListener("dragstart", function(){
        dragStart(event);
    });
    conteneddorNina.addEventListener("drop", function(){
        drop(event);
    });
    conteneddorNina.addEventListener("dragover", function(){
        allowDrop(event);
    });
    
});
