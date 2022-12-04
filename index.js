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
  let tituloPrincipal = document.querySelector(".tituloPrincipal");
  tituloPrincipal.innerHTML = ``;
  dataFormatada = dados.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  let titulo = document.querySelector("#titulo1");
  titulo.innerHTML = `
  <div class="titulo">
  <h1 id="titulo">${data.title} - ${dataFormatada}</h1>
</div>`;

  let footer = document.querySelector("#footer");
  footer.innerHTML =
    "<footer> <div class='footer'><div><img src='./images/linkedin.png' class='foto'></div> <div class='info-footer'> <a>2022 -</a> <a href='https://www.linkedin.com/in/wanderson-santos-7717651ba/'>Wanderson Santos</a></div></div></footer>";
  console.log(dataFormatada);

  if (data.media_type === "image") {
    document.getElementsByTagName(
      "body"
    )[0].style = `background-image:url(${data.url});`;
  }

  if (data.media_type === "video") {
    let video = document.querySelector("#video");
    video.innerHTML = `<iframe width="853" height="480" src="${data.url}"></iframe>`;
    document.getElementsByTagName(
      "body"
    )[0].style = `background-image:url(./images/estrela.gif);`;
  }

  if (data.media_type === "image") {
    let vazio = document.querySelector("#video");
    vazio.innerHTML = ``;
  }

  if (data.date === undefined) {
    document.querySelector("#legenda").innerText =
      "você ainda não tem uma máquina do tempo 😄";
    document.getElementsByTagName(
      "body"
    )[0].style = `background-image:url(./images/astro.gif);`;

    let titulo = document.querySelector("#titulo1");
    titulo.innerHTML = ``;
    let vazio = document.querySelector("#video");
    vazio.innerHTML = ``;
  }
}
