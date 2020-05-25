'use strict';

/**
 * Práctica 09
 * Ayuda a Policía
 * Brian Passos
 */

var DNI_DB = []; // Variable que almacenará los números DNI generados


function DNI (número, letra) {
	this.número = número;
	this.letra = letra;
}

// Función para generar números de 8 cifras aleatorios para usarlos como número DNI
function generarNúmerosDNI () {
	return	Math.random() // Genera un número aleatorio
			.toString() // Convertimos el número generado a cadena
			.slice(2, 10); // Obtenemos los ocho números después del punto y devolvemos
}

// Función para obtener la letra correspondiente al número de DNI dado
function obtenerLetraDNI (númeroDNI) {
	const ordenLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]; // Letras posibles para DNI en orden especificado
	return ordenLetras[númeroDNI % (ordenLetras.length-1) /** Obviamos la última letra, la cual se repite */];	// Obtenemos de array 'ordenletras' la letra correspondiente
																												// según el resto de la operación módulo 23
																												// (cantidad de letras diferentes en array) del númeroDNI
}

// Función que genera 10 números de DNI aleatorios junto a su correspondiente letra y almacena en variable global DNI_DB
function generarDNI (cantidad) {
	let númerosAGenerar = cantidad || 10; // Cantidad de números de DNI con letra que queremos generar, por defecto 10

	console.info (`Generando ${númerosAGenerar} número(s) de DNI con su letra correspondiente...`)

	for (let número = 0; número < númerosAGenerar; número++) { // Iteramos la veces indicadas
		let númeroDNI = generarNúmerosDNI (), // Generamos un número de DNI aleatorio
			letraDNI = obtenerLetraDNI (númeroDNI); // Calculamos la letra del número generado

		DNI_DB[número] = new DNI (númeroDNI, letraDNI); // Almacenamos el resultados en variable global
	};

	return console.info ('Número(s) generado(s).');
}

// Función principal
function ayudaAPolicía () {
	generarDNI (); // Generamos 10 números con su respectiva letra
	console.info ('Mostrando número(s)...');

	DNI_DB.forEach (function (DNI){ // Iteramos entre los diferentes valores
		// Mostramos en consola los resultados
		console.info (`El número ${DNI.número} tiene como letra "${DNI.letra}". (${DNI.número}${DNI.letra})`);
	});

	return console.info ('Fin.');
}

ayudaAPolicía (); // Llamamos a la función principal con la intención de obtener 10 números de DNI con su letra

/** console.log (DNI_DB) */ // Muestra los datos de DNI generados y almacenados en variable global
