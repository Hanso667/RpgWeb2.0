function Status() {
    document.getElementById("Status").style.display = "flex";
    document.getElementById("Personagem").style.display = "none";
    document.getElementById("Informacao").style.display = "none";
}

function Personagem() {
    document.getElementById("Personagem").style.display = "flex";
    document.getElementById("Status").style.display = "none";
    document.getElementById("Informacao").style.display = "none";
}

function informacao() {
    document.getElementById("Informacao").style.display = "flex";
    document.getElementById("Personagem").style.display = "none";
    document.getElementById("Status").style.display = "none";
}