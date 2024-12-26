function setNomePage() {
    document.getElementById("PageTitle").textContent = document.getElementById("Nome").value
}
const upVit = () => {
    const points = parseInt(document.getElementById("points").value);
    var vit = document.getElementById("Vit").value;
    if (points > 0) {
        if (document.getElementById("Vit").value < 10) {
            const tempVar = parseInt(document.getElementById("Vit").value);
            document.getElementById("Vit").value = tempVar + 1;
            document.getElementById("points").value -= 1;
            vit = document.getElementById("Vit").value * 50;
            document.getElementById("Health").max = vit;
            document.getElementById("Health").value = vit;
            document.getElementById("display-health").textContent = "Health: " + document.getElementById("Health").value + "/" + document.getElementById("Health").max;

        }
    }
}
const upStr = () => {
    const points = parseInt(document.getElementById("points").value);
    if (points > 0) {
        if (document.getElementById("Str").value < 10) {
            const tempVar = parseInt(document.getElementById("Str").value);
            document.getElementById("Str").value = tempVar + 1;
            document.getElementById("points").value -= 1;
        }
    }
}
const upMag = () => {
    const points = parseInt(document.getElementById("points").value);
    if (points > 0) {
        if (document.getElementById("Mag").value < 10) {
            const tempVar = parseInt(document.getElementById("Mag").value);
            document.getElementById("Mag").value = tempVar + 1;
            document.getElementById("points").value -= 1;
        }
    }
}
const upSpi = () => {
    const points = parseInt(document.getElementById("points").value);
    var spi = document.getElementById("Spi").value;
    if (points > 0) {
        if (document.getElementById("Spi").value < 10) {
            const tempVar = parseInt(document.getElementById("Spi").value);
            document.getElementById("Spi").value = tempVar + 1;
            document.getElementById("points").value -= 1;
            spi = document.getElementById("Spi").value * 50;
            document.getElementById("Mana").max = spi;
            document.getElementById("Mana").value = spi;
            document.getElementById("display-mana").textContent = "Mana: " + document.getElementById("Mana").value + "/" + document.getElementById("Mana").max;
        }
    }
}
const upPoints = () => {
    const tempVar = parseInt(document.getElementById("points").value);
    if (tempVar < 40) {
        document.getElementById("points").value = tempVar + 1;
    }
}
const downPoints = () => {
    const tempVar = parseInt(document.getElementById("points").value);
    if (tempVar >= 1) {
        document.getElementById("points").value -= 1;
    }
}

const reset = () => {
    document.getElementById("Vit").value = 0;
    document.getElementById("Str").value = 0;
    document.getElementById("Mag").value = 0;
    document.getElementById("Spi").value = 0;
    document.getElementById("Health").max = 0;
    document.getElementById("Health").value = 0;
    document.getElementById("display-health").textContent = "Health: " + 0 + "/" + 0;
    document.getElementById("Mana").max = 0;
    document.getElementById("Mana").value = 0;
    document.getElementById("display-mana").textContent = "Mana: " + 0 + "/" + 0;
}