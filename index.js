const btn = document.querySelector("#botao");
btn.addEventListener("click", botao);
function botao() {
    PegandoInformacao()
}

async function PegandoInformacao() {
    var input = document.querySelector("#Data").value;
    const apikey = "OAOAqeOd3ANt51hiWbk2eskSCl6X7B7ZKZaZfzAQ";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${input}`;
    console.log(input);
    const resposta = await fetch(url);
    const data = await resposta.json();
    console.log(data);
    console.log(data.explanation);
    document.getElementById("oi").innerHTML = data.explanation;
    document.getElementById("data").innerHTML = data.date;
    document.getElementsByTagName("body")[0].style = `background-image:url(${data.url});`;
}
