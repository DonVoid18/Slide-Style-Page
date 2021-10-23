// variables
const slide = document.querySelectorAll(".container-slide");
const container_pre = document.querySelector(".container-presentation");
const boton_arriba = document.querySelector("#button-arriba");
const boton_abajo = document.querySelector("#button-abajo");

let contador = 0;


boton_arriba.addEventListener("click",subir);
boton_abajo.addEventListener("click",bajar);

function subir(){
    if(contador>0){
        contador--;
        container_pre.style.transform = `translateY(-${100*contador}vh)`;
        console.log("subir: "+contador);
    }
}

function bajar(){
    if(contador<slide.length-1){
        contador++;
        container_pre.style.transform = `translateY(-${100*contador}vh)`;
        console.log("bajar: "+contador);
    }
}