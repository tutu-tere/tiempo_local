/**
 * 🌦️ Al cargar la página esta debe mostrar una alerta con la leyenda “Cargando Reporte del Clima”.
 * ✔️ En la parte inferior el banner de cookies debe desaparecer al darle clic en aceptar.
 * 🌡️ Al seleccionar una ciudad la temperatura cambia.
 */

const climas = [
  {
    img: '<ion-icon name="rainy"></ion-icon>',
    temperatura: "3°C - 14°C",
    estado: "Tormentas",
  },
  {
    img: '<ion-icon name="cloudy"></ion-icon>',
    temperatura: "5°C - 12°C",
    estado: "Nublado",
  },
  {
    img: '<ion-icon name="partly-sunny"></ion-icon>',
    temperatura: "9°C - 18°C",
    estado: "Parcialmente Nublado",
  },
  {
    img: '<ion-icon name="sunny"></ion-icon>',
    temperatura: "15°C - 23°C",
    estado: "Soleado",
  },
];

//Funcionalidad 1: Alert cuando  se cargue la pagina.
alert("Cargando Reporte del clima.")

//Funcionalidad 2: Desaparecer las cookies

const btnAceptar = document.getElementById("btnAcepto");

btnAceptar.addEventListener("click", ()=>{
  document.querySelector(".cookies").style.display = "none";
})

//si necesitaramos escribir una propiedad de dos palabras no podemos usar guion, sino camelcase, por ejemplo con box-shadow seria boxShadow

//Funcionalidad 3: cambiar el titulo- cambiar las cards desde hacer el click de una ciudad

document.querySelectorAll(".ciudades").forEach((ciudad)=>{
  ciudad.onclick = (e)=>{   //o podemos usar el addEventListener("click", ()=>{})
    document.querySelector("#ciudad").innerText = event.target.innerText
  
    let cards =  document.querySelectorAll(".card");
  
    for(let card of cards){
    let numeroRandom =  Math.floor(Math.random()*4);
    let clima = climas[numeroRandom]
    
    card.children[0].innerHTML = clima.img;
    card.children[2].innerText = clima.estado;
    card.children[3].innerText = clima.temperatura;
    }

    document.querySelector("#container_cards").style.display = "flex";
  }
}) 

