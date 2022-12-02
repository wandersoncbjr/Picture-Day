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
  console.log(data);
  document.querySelector("#legenda").innerText = data.explanation;
  var dataInput = data.date;
  console.log(dataInput + "data");
  dados = new Date(dataInput);
  dataFormatada = dados.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  document.getElementById("data").innerHTML = dataFormatada;
  console.log(dataFormatada);

  if (data.media_type === "image") {
    document.getElementsByTagName(
      "body"
    )[0].style = `background-image:url(${data.url});`;
  }

  if (data.media_type === "video") {
    let video = document.querySelector("#img");
    video.innerHTML = `<iframe width="853" height="480" src="${data.url}"></iframe>`;
    document.getElementsByTagName(
      "body"
    )[0].style = `background-image:url(cat.gif);`;
  }

  if (data.media_type === "image") {
    let vazio = document.querySelector("#img");
    vazio.innerHTML = ` `;
  }

  if (data.date === undefined) {
    document.querySelector("#legenda").innerText =
      "você ainda não tem uma maquina do tempo pra viajar para o futuro";
    document.getElementsByTagName(
      "body"
    )[0].style = `background-image:url(caveira.gif);`;
  }
}
