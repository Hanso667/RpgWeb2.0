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

function infopage(pagina) {
    if (pagina == "npcs") {
        document.getElementById("info-container2").style.display = "none";
        document.getElementById("Npcs").style.display = "grid";
        document.getElementById("Locais").style.display = "none";
        document.getElementById("Materiais").style.display = "none";
        document.getElementById("Mobs").style.display = "none";
    } else if (pagina == "locais") {
        document.getElementById("info-container2").style.display = "none";
        document.getElementById("Npcs").style.display = "none";
        document.getElementById("Locais").style.display = "grid";
        document.getElementById("Materiais").style.display = "none";
        document.getElementById("Mobs").style.display = "none";
    } else if (pagina == "materiais") {
        document.getElementById("info-container2").style.display = "none";
        document.getElementById("Npcs").style.display = "none";
        document.getElementById("Locais").style.display = "none";
        document.getElementById("Materiais").style.display = "grid";
        document.getElementById("Mobs").style.display = "none";
    } else if (pagina == "mobs") {
        document.getElementById("info-container2").style.display = "none";
        document.getElementById("Npcs").style.display = "none";
        document.getElementById("Locais").style.display = "none";
        document.getElementById("Materiais").style.display = "none";
        document.getElementById("Mobs").style.display = "grid";
    } else if (pagina == "return") {
        document.getElementById("info-container2").style.display = "grid";
        document.getElementById("Npcs").style.display = "none";
        document.getElementById("Locais").style.display = "none";
        document.getElementById("Materiais").style.display = "none";
        document.getElementById("Mobs").style.display = "none";
    } else if (pagina == "return-mobs") {
        document.getElementById("Mobs-grid").style.display = "grid";
        document.getElementById("Deathclaw").style.display = "none";
        document.getElementById("AsaMorta").style.display = "none";
        document.getElementById("Medusa").style.display = "none";
        document.getElementById("MAequor").style.display = "none";
        document.getElementById("MTempestas").style.display = "none";
        document.getElementById("MOssa").style.display = "none";
        document.getElementById("info-container").scrollTo(0,0);
    } else if (pagina == 'return-npcs') {
        document.getElementById("Npcs-grid").style.display = "grid";
        document.getElementById("Deathclaw").style.display = "none";
        document.getElementById("AsaMorta").style.display = "none";
        document.getElementById("Medusa").style.display = "none";
        document.getElementById("MAequor").style.display = "none";
        document.getElementById("MTempestas").style.display = "none";
        document.getElementById("MOssa").style.display = "none";
        document.getElementById("info-container").scrollTo(0,0);
    } else if (pagina == 'return-materiais') {
        document.getElementById("Materiais-grid").style.display = "grid";
        document.getElementById("Deathclaw").style.display = "none";
        document.getElementById("AsaMorta").style.display = "none";
        document.getElementById("Medusa").style.display = "none";
        document.getElementById("MAequor").style.display = "none";
        document.getElementById("MTempestas").style.display = "none";
        document.getElementById("MOssa").style.display = "none";
        document.getElementById("info-container").scrollTo(0,0);
    } else if (pagina == 'return-locais') {
        document.getElementById("Locais-grid").style.display = "grid";
        document.getElementById("Deathclaw").style.display = "none";
        document.getElementById("AsaMorta").style.display = "none";
        document.getElementById("Medusa").style.display = "none";
        document.getElementById("MAequor").style.display = "none";
        document.getElementById("MTempestas").style.display = "none";
        document.getElementById("MOssa").style.display = "none";
        document.getElementById("info-container").scrollTo(0,0);
    } else if (pagina == "deathclaw") {
        document.getElementById("Mobs-grid").style.display = "none";
        document.getElementById("Deathclaw").style.display = "flex";
    } else if (pagina == "asamorta") {
        document.getElementById("Mobs-grid").style.display = "none";
        document.getElementById("AsaMorta").style.display = "flex";
    } else if (pagina == "medusa") {
        document.getElementById("Mobs-grid").style.display = "none";
        document.getElementById("Medusa").style.display = "flex";
    } else if (pagina == "maequor") {
        document.getElementById("Mobs-grid").style.display = "none";
        document.getElementById("MAequor").style.display = "flex";
    } else if (pagina == "mtempestas") {
        document.getElementById("Mobs-grid").style.display = "none";
        document.getElementById("MTempestas").style.display = "flex";
    } else if (pagina == "mossa") {
        document.getElementById("Mobs-grid").style.display = "none";
        document.getElementById("MOssa").style.display = "flex";
    }

}