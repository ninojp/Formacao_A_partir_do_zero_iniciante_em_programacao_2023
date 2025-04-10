function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    // console.log(elemento);
    // console.log(elemento.localName);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert("Elemento Inválido!");
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for( let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    // O Parametro(evento), neste caso serve como uma variável que armazema os valores do EVENTo ocorrido dentro da função
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    // console.log(tecla);
    // console.log(instrumento);
    // console.log(idAudio);
}
// let contador = 0;
// while(contador < listaDeTeclas.length){
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1] ;
//     const idAudio = `#som_${instrumento}`;// template String
//     tecla.onclick = function (){
//         tocaSom(idAudio);
//     };
//     contador = contador +1;
//     console.log(contador);
//     console.log(idAudio);
// }
