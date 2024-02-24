

export async function fetchTo(ext, params = "") {
  let urlApi = "https://api.open5e.com/" + ext + "/?" + params
  let resultado = [];
  await fetch(urlApi).then((response)=> response.json()).then((data) => resultado = data);
  return resultado
}

export function getDesc(desc) {
  let arrayDesc = desc.split("\n");
  let htmlResult = ""
  arrayDesc.forEach(element => {
    if(element.substring(0, 3) == "###") {
      htmlResult = htmlResult + "<h2>" + element.slice(4) + "</h2>"
    }else if (element == ' ') {
      htmlResult = htmlResult + "<br>"
    }
    
    else {
      htmlResult = htmlResult + "<p>" + element + "</p>"
    }
  });

  return htmlResult;
}


export function getTable(tableString) {
  let arrayRows = tableString.split("\n");
  arrayRows.pop();
  let htmlResult = "" ;
  arrayRows.map((row, rowIndex) => {
    let arrayCells = row.split("|");
    arrayCells.pop();
    arrayCells.shift();
    if(!arrayCells[0].startsWith("-")){
      htmlResult = htmlResult + "<tr>"
    arrayCells.map((cell) => {
      if(rowIndex == 0) {
        htmlResult = htmlResult + "<th>" + cell + "</th>"
      }else {
        htmlResult = htmlResult + "<td>" + cell + "</td>"
      }
      
    });
    htmlResult = htmlResult + "</tr>"
    }
    
  })
  htmlResult = htmlResult + "";
  return htmlResult
}