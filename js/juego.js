/* estas son las variables
let ganoComputadora = 0;
let ganoUsuario = 0;
let opcion = 0;
let numeroElejidoPorLaPc = 0;

numeroElejidoPorLaPc = Math.random() * 10+1;

document.writeln("Elige una opcion:");
document.writeln("1- Piedra");
document.writeln("2- Papel");
document.writeln("3- Tijeras");

function mostrar_inputs(){
opcion = document.getElementById("id3");
document.write(opcion);
} */
const piedra = 0;
const papel = 1;
const tijeras = 2;

const empate = 0;
const ganaste = 1;
const perdiste = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras");

piedraBtn.addEventListener("click", () => {
  play(piedra);
});
papelBtn.addEventListener("click", () => {
  play(papel);
});
tijerasBtn.addEventListener("click", () => {
  play(tijeras);
});

function play(userOpcion) {
  const machineOpcion = Math.floor(Math.random() * 3);

  const resultado = calResultado(userOpcion, machineOpcion);

  switch (resultado) {
    case empate:
      alert("empate");
      break;
    case ganaste:
      alert("ganaste");
      break;
    case perdiste:
      alert("perdiste");
      break;
  }
}

function calResultado(userOpcion, machineOpcion) {
  if (userOpcion === machineOpcion) {
    return empate;
  } else if (userOpcion === piedra) {
    if (machineOpcion === papel) return perdiste;
    if (machineOpcion === tijeras) return ganaste;
  } else if (userOpcion === papel) {
    if (machineOpcion === tijeras) return perdiste;
    if (machineOpcion === piedra) return ganaste;
  } else if (userOpcion === tijeras) {
    if (machineOpcion === piedra) return perdiste;
    if (machineOpcion === papel) return ganaste;
  }
}