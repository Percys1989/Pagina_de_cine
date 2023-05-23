let animado = document.querySelectorAll(".Animado");
console.log(animado);

function MostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);

    for(var i = 0; i < animado.length; i++){
        let AlturaAnimado = animado[i].offsetTop;
        console.log(AlturaAnimado);

        if(AlturaAnimado - 250 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("MostrarArriba");
        };
    };
};
addEventListener('scroll',MostrarScroll);
