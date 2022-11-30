const btn = document.querySelector("#botao");
btn.addEventListener("click", botao);
function botao() {
  PegandoInformacao();
}

async function PegandoInformacao() {
  let input = document.querySelector("#inputData").value;
  const apikey = "OAOAqeOd3ANt51hiWbk2eskSCl6X7B7ZKZaZfzAQ";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${input}`;
  const resposta = await fetch(url);
  const data = await resposta.json();
  document.getElementById("data").innerHTML = data.date;
  document.querySelector("#legenda").innerText = data.explanation;
  document.getElementsByTagName(
    "body"
  )[0].style = `background-image:url(${data.url});`;
}
