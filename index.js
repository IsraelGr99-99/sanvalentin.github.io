const saidYes = document.getElementById("saidYes");
const saidNo = document.getElementById("saidNo");
const img = document.getElementById("img");
var indice = 0;
frases = [
  "Estas segura?",
  "Muy segura?",
  "Demasiado segura?",
  "Vuelvelo a pensar",
  "Piensalo otra vez",
  "¿Segura al cien por ciento?",
  "¿Absolutamente convencida?",
];
gif = [
  "assets/sexto.gif",
  "assets/primero.gif",
  "assets/segundo.gif",
  "assets/septimo.gif",
  "assets/cuarto.gif",
  "assets/quinto.gif",
  "assets/tercero.gif",
];

const cambioImg = () => {
  img.setAttribute("src", gif[indice]);
};

const cambioFrase = () => {
  saidNo.innerText = frases[indice];
  indice = (indice + 1) % frases.length;
};

saidNo.addEventListener("click", () => {
  cambioFrase();
  cambioImg();
  saidYes.style.height = aumentarheight() + "px";
  saidYes.style.width = aumentarwidth() + "px";
});

const aumentarheight = () => {
  let num = parseFloat(
    window.getComputedStyle(saidYes).getPropertyValue("height")
  );
  num += 50;
  return num;
};
const aumentarwidth = () => {
  let num = parseFloat(
    window.getComputedStyle(saidYes).getPropertyValue("width")
  );
  num += 50;
  return num;
};
