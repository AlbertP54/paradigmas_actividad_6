const cambiarImagen = () => {
    let foco = document.getElementById("foco");
    if(foco.src.match('focoOff')) {
        foco.src = "images/focoOn.png";
    } else {
        foco.src = "images/focoOff.png";
    }
}