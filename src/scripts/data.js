const save = () => {
    const maxhp = document.getElementById("Health").max;
    const hp = document.getElementById("Health").value;
    const maxmana = document.getElementById("Mana").max;
    const mana = document.getElementById("Mana").value;
    const nome = document.getElementById("Nome").value
    const raca = document.getElementById("Raça").value
    const classe = document.getElementById("Classe").value
    const traits = document.getElementById("traits").value
    const vit = document.getElementById("Vit").value
    const str = document.getElementById("Str").value
    const mag = document.getElementById("Mag").value
    const spi = document.getElementById("Spi").value
    const ProImg = document.getElementById("persoFoto").src
    localStorage.setItem("maxhp", maxhp);
    localStorage.setItem("hp", hp);
    localStorage.setItem("maxmana", maxmana);
    localStorage.setItem("mana", mana);
    localStorage.setItem("nome", nome);
    localStorage.setItem("raca", raca);
    localStorage.setItem("classe", classe);
    localStorage.setItem("traits", traits);
    localStorage.setItem("vit", 0);
    localStorage.setItem("str", 0);
    localStorage.setItem("mag", 0);
    localStorage.setItem("spi", 0);
    localStorage.setItem("vit", vit);
    localStorage.setItem("str", str);
    localStorage.setItem("mag", mag);
    localStorage.setItem("spi", spi);
}


document.getElementById("Health").max = localStorage.getItem("maxhp");
document.getElementById("Health").value = localStorage.getItem("hp");
document.getElementById("display-health").textContent = "Health: "+localStorage.getItem("hp")+"/"+localStorage.getItem("maxhp")
document.getElementById("Mana").max = localStorage.getItem("maxmana");
document.getElementById("Mana").value = localStorage.getItem("mana");
document.getElementById("display-mana").textContent = "Mana: "+localStorage.getItem("mana")+"/"+localStorage.getItem("maxmana")
document.getElementById("Nome").value = localStorage.getItem("nome");
document.getElementById("Raça").value = localStorage.getItem("raca");
document.getElementById("Classe").value = localStorage.getItem("classe");
document.getElementById("traits").value = localStorage.getItem("traits");
document.getElementById("Vit").value = localStorage.getItem("vit");
document.getElementById("Str").value = localStorage.getItem("str");
document.getElementById("Mag").value = localStorage.getItem("mag");
document.getElementById("Spi").value = localStorage.getItem("spi");
setInterval(save,200);



function changeFoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = document.getElementById('persoFoto');
            imgElement.src = e.target.result;

            // Salvar a imagem no localStorage
            localStorage.setItem('persoFoto', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}
function restoreFoto() {
    const savedImage = localStorage.getItem('persoFoto');
    if (savedImage) {
        const imgElement = document.getElementById('persoFoto');
        imgElement.src = savedImage;
    }
}

// Restaurar a imagem ao carregar a página
document.addEventListener('DOMContentLoaded', restoreFoto);