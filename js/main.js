window.addEventListener("load", function(){
	var jugar = document.getElementById("jugar");
	jugar.addEventListener("click", function(){
		var div = document.getElementById("myDIV");
		div.addEventListener("transitionend", myFunction);
		div.style.display = "block"
		function myFunction() {
		    this.style.backgroundColor = "green";
		    div.style.width = "1300px";
		    if (div.style.width == "1300px") {
		    	jugarProfesiones();
		    }
		}
	})

    var conteneddorNina = document.getElementById("contenedorNina");
		var nina = document.getElementById("nina");
		var fondoCocina = document.getElementById("fondoCocina");
		var fondoDoctor = document.getElementById("fondoDoctor");
		var fondoCantante = document.getElementById("fondoCantante");
		var fondoPintor = document.getElementById("fondoPintor");
		var fondoAstronauta = document.getElementById("fondoAstronauta");

	function jugarProfesiones(){
			document.getElementById("contenedorJuego").style.display = "inline-block";
			fondoCocina.addEventListener("click", function(){
			contenedorNina.style.backgroundImage = "url(img/cocina.jpg)";
			contenedorNina.style.backgroundRepeat = "no-repeat";
			contenedorNina.style.backgroundSize = "cover";
		});
		fondoDoctor.addEventListener("click", function(){
			contenedorNina.style.backgroundImage = "url(img/doctor.jpg)";
			contenedorNina.style.backgroundRepeat = "no-repeat";
			contenedorNina.style.backgroundSize = "cover";
		});
		fondoCantante.addEventListener("click", function(){
			contenedorNina.style.backgroundImage = "url(img/escenario.jpg)";
			contenedorNina.style.backgroundRepeat = "no-repeat";
			contenedorNina.style.backgroundSize = "cover";
		});
		fondoPintor.addEventListener("click", function(){
			contenedorNina.style.backgroundImage = "url(img/pintor.jpg)";
			contenedorNina.style.backgroundRepeat = "no-repeat";
			contenedorNina.style.backgroundSize = "cover";
		});
		fondoAstronauta.addEventListener("click", function(){
			contenedorNina.style.backgroundImage = "url(img/space.jpg)";
			contenedorNina.style.backgroundRepeat = "no-repeat";
			contenedorNina.style.backgroundSize = "cover";
		});
	};
});
function dragStart(event){
  event.dataTransfer.setData("Text", event.target.id)
}
function dragging(event){
  document.getElementById("demo").innerText = "The p element is being dragged";
}
function allowDrop(event){
  event.preventDefault();
}
function drop(event){
	var contenedorNina = document.getElementById("contenedorNina")
  event.preventDefault();                                                  
  var data = event.dataTransfer.getData("Text");
  var ropaArrastrada = document.getElementById(data);
  ropaArrastrada.classList.add("ropa");
  event.target.parentNode.appendChild(ropaArrastrada);
  var ropas = document.getElementById("contenedorRopa").children;
  // for (var i = ropas.length - 1; i >= 0; i--) {
  // 	ropas[i].classList.add("ropa");
  // }
  // ropas.classList.add("ropa");
  document.getElementById("demo").innerText = "the p element was dropped";
  contenedorNina.style.height = "23em";
  contenedorNina.style.top = "4em";
}

// Standard syntax
// document.getElementById("myDIV").addEventListener("transitionend", myFunction);

// function myFunction() {
//     this.style.backgroundColor = "green";
// }