
const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inpuTel = document.querySelector('input[type=tel]')
// console.log(listaTeclas);
console.log(inpuTel);
for(let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    tecla.onclick = function(){
        inpuTel.value = inpuTel.value + tecla.value;
    }
}

