const chaveDaApi= "97b899cf4d5b48068e0235436240804"

const botaoDeBusca= document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click",async() =>{
    const cidade =document.getElementById("input-busca").value;
if(!cidade) return;

    const dados= await buscarDadosDaCidade(cidade);

   if(dados) preencherDadosNaTela(dados, cidade);

    
  
});

 async function buscarDadosDaCidade(cidade) {
    const apiurl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

    
    const resposta= await fetch(apiurl);

if(resposta.status !== 200) return;


const dados= resposta.json();

return dados;

}
function preencherDadosNaTela(dados, cidade) {

const temperatura = dados.current.temp_c;
const condicao =  dados.current.condition.text;
const umidade = dados.current.humidity;
const velocidadeDoVento = dados.current.wind_kph;
const iconeCondicao= dados.current.condition.icon;


    document.getElementById("cidade").textContent= cidade;

document.getElementById("temperatura").textContent = `${temperatura} °C`;


document.getElementById("condicao").textContent = condicao;

document.getElementById("umidade").textContent = `${umidade}%`;

document.getElementById("velocidade-do-vento")

document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento}km/h`;

document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);

}

