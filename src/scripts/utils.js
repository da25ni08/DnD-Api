

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