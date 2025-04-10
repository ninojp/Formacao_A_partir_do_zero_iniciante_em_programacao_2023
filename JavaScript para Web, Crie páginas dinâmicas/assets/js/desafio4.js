// const inputTel = document.querySelector('input[type=tel]');
// const listaTeclas = document.querySelectorAll('input[type=button]');
// for(i=0; i < listaTeclas.length; i++){
//     const tecla = listaTeclas[i];
//     tecla.onclick = function(){
//         const teclaPress = tecla.value;
//         // console.log(teclaPress);
//         inputTel.value = inputTel.value +teclaPress;
//     }
//     tecla.onkeydown = function(){
//         tecla.classList.add('ativa');
//     }
//     tecla.onkeyup = function(){
//         tecla.classList.remove('ativa');
//     }
//     // console.log(tecla);
// }

//CODIGO DO PROFESSOR
const listaDeTeclas = document.querySelectorAll('input[type=button]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}