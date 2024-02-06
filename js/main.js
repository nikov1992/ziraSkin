let menu = document.getElementById("menuAnimado");
let logo = document.getElementById("logo")

let dpMenuBtn = document.getElementById("dpMenuBtn")
let dpMenu = document.getElementById("dpMenu")

let dpPass = 0; //VALUE BANDERA OF DPMENU

function animarMenu(){
    window.addEventListener('scroll', function() {
        // Obtener la posición actual de desplazamiento vertical
        var scrollPos = window.scrollY;

        if (scrollPos === 0) {
            menu.classList.remove("animate")
            logo.classList.remove("logoAnimado")
        } else {
            menu.classList.add("animate")
            logo.classList.add("logoAnimado")
        }
    });
}


dpMenuBtn.addEventListener('click', function(){
    if(dpPass == 0){
        dpMenu.classList.add("dpMenuOn")
        dpPass++;
        console.log(dpPass)
        document.body.style.overflow = 'hidden'
    }else if (dpPass==1){
        dpMenu.classList.remove("dpMenuOn")
        dpPass--;
        console.log(dpPass)
        document.body.style.overflow = 'auto'
    }


})
window.addEventListener('scroll', animarMenu);