

export async function fetchTo(ext, params = "") {
  console.log("fetchto");
  let urlApi = "https://api.open5e.com/" + ext + "/?" + params
  let resultado = [];
  await fetch(urlApi).then((response)=> response.json()).then((data) => resultado = data);
  return resultado
}