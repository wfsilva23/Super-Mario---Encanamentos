const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario")
const esconder = document.querySelector("orcamento")
const contato = document.querySelector(".faleconosco")

function mostrarForm(){
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible"
}

function esconderForm(){
    formulario.style.left = "-340px";
    formulario.style.transform = "none";
    mascara.style.visibility = "hidden"
}