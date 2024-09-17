document.getElementById("rollButton").addEventListener("click", function() {
    let dado = document.getElementById("dado");
    let resultado = document.getElementById("resultado");

    // Animación de rotación
    dado.style.transform = "rotate(720deg)"; 

    setTimeout(function() {
        // Número aleatorio entre 1 y 6
        let numero = Math.floor(Math.random() * 6) + 1;

        // Mensajes según el número
        let mensaje = '';
        switch(numero) {
            case 1:
                mensaje = "Todos o Nadie";
                break;
            case 2:
                mensaje = "Obliga a un@ a tomar";
                break;
            case 3:
                mensaje = "Toma el / la de tu derecha";
                break;
            case 4:
                mensaje = "Toma el / la de tu izquierda";
                break;
            case 5:
                mensaje = "Toma Sol@";
                break;
            case 6:
                mensaje = "Toma por alguien";
                break;
        }

        // Mostrar el número y el mensaje
        
        resultado.innerHTML = "<br>Salió '  " + numero + "  '<br><br>" + mensaje;

        // Restablecer la animación
        dado.style.transform = "rotate(0deg)";
    }, 500); // Duración de la animación
});
