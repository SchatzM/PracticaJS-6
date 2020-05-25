'use strict';

/**
 * Práctica 09
 * Ayuda a Policía
 * Brian Passos
 */

// Función para generar números de 8 cifras aleatorios para usarlos como número DNI
function generarNúmerosDNI () {
	return	Math.random() // Genera un número aleatorio
			.toString() // Convertimos a cadena
			.slice(2, 10); // Obtenemos los ocho números después del punto de la cadena y devolvemos
}

// Función para obtener la letra correspondiente al número de DNI dado
function obtenerLetra (númeroDNI) {
	const ordenLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]; // Letras posibles para DNI en orden especificado
	return ordenLetras[númeroDNI % (ordenLetras.length-1)]; // Obtenemos de array 'ordenletras' la letra correspondiente
															// según el resto de la operación módulo 23
															// (cantidad de letras diferentes en array) del númeroDNI
}

// Función principal la cual genera 10 números de DNI aleatorios junto a su correspondiente letra
function ayudaAPolicía (cantidad) {
	let numerosAGenerar = cantidad || 10;
	for (let numero = 0; numero < numerosAGenerar; numero++) { // Bucle
		let numeroDNI = generarNúmerosDNI (), // Generamos un número de DNI aleatorio
			letraDNI = obtenerLetra (numeroDNI); // Calculamos la letra del número generado

		// Mostramos en consola los resultados
		console.info (`El número ${numeroDNI} tiene como letra "${letraDNI}". (${numeroDNI}${letraDNI})`);
	}
}

ayudaAPolicía (); // LLamamos a la función principal
