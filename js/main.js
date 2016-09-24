window.addEventListener("load", function(){
	window.addEventListener("click", function(){
		jugarProfesiones();
	})
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
});