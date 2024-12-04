function Status() {
    document.getElementById("Status").style.display = "flex";
    document.getElementById("Personagem").style.display = "none";
    document.getElementById("Informacao").style.display = "none";
    document.getElementById("Roleta").style.display = "none";
}

function Personagem() {
    document.getElementById("Personagem").style.display = "flex";
    document.getElementById("Status").style.display = "none";
    document.getElementById("Informacao").style.display = "none";
    document.getElementById("Roleta").style.display = "none";
}

function informacao() {
    document.getElementById("Informacao").style.display = "flex";
    document.getElementById("Personagem").style.display = "none";
    document.getElementById("Status").style.display = "none";
    document.getElementById("Roleta").style.display = "none";
}
function Roleta() {
    document.getElementById("trait01").className = "trait"
    document.getElementById("trait01").textContent = ""
    document.getElementById("trait02").className = "trait"
    document.getElementById("trait02").textContent = ""
    document.getElementById("trait03").className = "trait"
    document.getElementById("trait03").textContent = ""
    document.getElementById("Roleta").style.display = "flex";
    document.getElementById("Personagem").style.display = "none";
    document.getElementById("Status").style.display = "none";
    document.getElementById("Informacao").style.display = "none";
    
}