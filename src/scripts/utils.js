export async function fetchTo(ext, params = "") {
	let urlApi = "https://api.open5e.com/" + ext + "/?" + params;
	let resultado = [];
	await fetch(urlApi)
		.then((response) => response.json())
		.then((data) => (resultado = data));
	return resultado;
}

/**
 * Obtiene los datos de una clase de la api en formato string y lo transforma a un formato html
 * @param {string} desc String con la descripción
 * @returns string en formato html para uso en el template
 */
export function getClassDesc(desc) {
	let arrayDesc = desc.split("\n");
	let htmlResult = "";
	arrayDesc.forEach((element) => {
		if (element.substring(0, 3) == "###") {
			htmlResult = htmlResult + "<h2>" + element.slice(4) + "</h2>";
		} else if (element == " ") {
			htmlResult = htmlResult + "<br>";
		} else {
			htmlResult = htmlResult + "<p>" + element + "</p>";
		}
	});

	return htmlResult;
}

/**
 * Obtiene una descripcion de el apartado de razas de la api y lo convierte en formato html para su uso
 * @param {string} desc Descripcion de la api
 * @returns {string}
 */
export function getRaceDesc(desc) {
	let arrayDesc = desc.split("\n");
	let htmlResult = "";
	arrayDesc.forEach((element) => {
		if (element.substring(0, 2) == "##") {
			htmlResult = htmlResult + "<h2>" + element.slice(2) + "</h2>";
		} else if (element == " ") {
			htmlResult = htmlResult + "<br>";
		} else {
			htmlResult = htmlResult + "<p>" + element + "</p>";
		}
	});

	return htmlResult;
}

/**
 * Obtiene una tabla ofrecida por la api en su formato y lo devuelve en etiquetas html
 * @param {string} tableString Tabla en formato string
 * @returns {string}
 */
export function getTable(tableString) {
	let arrayRows = tableString.split("\n");
	arrayRows.pop();
	let htmlResult = "";
	arrayRows.map((row, rowIndex) => {
		let arrayCells = row.split("|");
		arrayCells.pop();
		arrayCells.shift();
		if (!arrayCells[0].startsWith("-")) {
			htmlResult = htmlResult + "<tr>";
			arrayCells.map((cell) => {
				if (rowIndex == 0) {
					htmlResult = htmlResult + "<th>" + cell + "</th>";
				} else {
					htmlResult = htmlResult + "<td>" + cell + "</td>";
				}
			});
			htmlResult = htmlResult + "</tr>";
		}
	});
	htmlResult = htmlResult + "";
	return htmlResult;
}

/**
 * Obtiene datos de la api y los modifica para ser utiles ya que vienen con titulos de esta manera: "**Titulo** Descripcion"
 * @param {string} atributeString Atributo con el formato de la api
 * @returns {string} Mismo string pero sin datos innecesarios de la api
 */
export function getAtribute(atributeString) {
	if (atributeString.split("**").length >= 2) {
		return atributeString.split("**")[2];
	} else {
		return atributeString;
	}
}

/**
 * Obtiene datos de la api y los modifica para ser utiles ya que vienen con titulos de esta manera: "**Titulo** Descripcion" pero añadiendo el titulo en el formato
 * @param {string} atributeString Atributo con el formato de la api
 * @returns {string} Mismo string pero sin datos innecesarios de la api
 */
export function getAtributeWithTitles(atributeString) {
	let htmlResult = "";
	let arraySplit = atributeString.split("**");
	if (arraySplit.length >= 2) {
		arraySplit.shift();
		for (let i = 0; i < arraySplit.length; i++) {
			if (arraySplit[i].startsWith("_")) {
				arraySplit[i] = arraySplit[i].slice(1, -2);
			}
			htmlResult = htmlResult + "<h3>" + arraySplit[i] + "</h3>";
			i++;
			console.log(arraySplit);
			htmlResult = htmlResult + "<p>" + arraySplit[i] + "</p>";
		}
		return htmlResult;
	} else {
		return atributeString;
	}
}
