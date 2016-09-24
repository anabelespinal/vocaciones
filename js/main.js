window.addEventListener("load", function(){
	var fondos = document.getElementsByClassName("fondos");
	window.addEventListener("click", function(){
		jugarProfesiones();
	});

//mouseover and mouseout event
	var fondos = document.getElementsByClassName("fondos");
	for (var i = fondos.length - 1; i >= 0; i--) {
		fondos[i].addEventListener("mouseover", function(){
			agrandarFondo(this);
		});
		fondos[i].addEventListener("mouseout", function(){
			achicarFondo(this);
		});
	}

//evento click
	function jugarProfesiones(){
        var conteneddorNina = document.getElementById("contenedorNina");
		var nina = document.getElementById("nina");
		var fondoCocina = document.getElementById("fondoCocina");
		var fondoDoctor = document.getElementById("fondoDoctor");
		var fondoCantante = document.getElementById("fondoCantante");
		var fondoPintor = document.getElementById("fondoPintor");
		var fondoAstronauta = document.getElementById("fondoAstronauta");
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

//llamando a las funciones de los eventos mouseover y mouseout

	function agrandarFondo(fondos) {
		fondos.style.height = "200%";
    	fondos.style.width = "200%";
	}

	function achicarFondo(fondos) {
		fondos.style.height = "125%";
    	fondos.style.width = "125%";
	}
});