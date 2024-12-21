function setMaxHp() {
    var value = document.getElementById("MaxHp").value;
    document.getElementById("Health").max = Math.floor(value);
    document.getElementById("Health").value = Math.floor(value);
    var max = document.getElementById("Health").max;
    var current = document.getElementById("Health").value;
    document.getElementById("display-health").textContent = "Health " + current + "/" + max;
    document.getElementById("MaxHp").value = ""
}

function setMaxMp() {
    var value = document.getElementById("MaxMp").value;
    document.getElementById("Mana").max = Math.floor(value);
    document.getElementById("Mana").value = Math.floor(value);
    var max = document.getElementById("Mana").max;
    var current = document.getElementById("Mana").value;
    document.getElementById("display-mana").textContent = "Mana " + current + "/" + max;
    document.getElementById("MaxMp").value = ""
}
function damage() {
    var value = document.getElementById("Dano").value;
    var Health = document.getElementById("Health").value;
    var MaxHp = document.getElementById("Health").max;
    if (Health - value >= 0 && Health - value <= MaxHp) {
        Health -= value;
    }
    else if (Health - value >= 0 && Health - value > MaxHp) {
        Health = MaxHp;
    }
    else if (Health - value < 0 && Health - value <= MaxHp) {
        Health = 0;
    }
    document.getElementById("Health").value = Math.floor(Health);
    document.getElementById("display-health").textContent = "Health " + Health + "/" + MaxHp;
    document.getElementById("Dano").value = ""

}
function use() {
    var value = document.getElementById("Uso").value;
    var Mana = document.getElementById("Mana").value;
    var MaxMp = document.getElementById("Mana").max;
    if (Mana - value >= 0 && Mana - value <= MaxMp) {
        Mana -= value;
    }
    else if (Mana - value > 0 && Mana - value > MaxMp) {
        Mana = MaxMp;
    }
    else if (Mana - value < 0 && Mana - value <= MaxMp) {
        Mana = 0;
    }
    document.getElementById("Mana").value = Math.floor(Mana);
    document.getElementById("display-mana").textContent = "Mana " + Mana + "/" + MaxMp;
    document.getElementById("Uso").value = ""

}

const upVit = () => {
    const points = parseInt(document.getElementById("points").value);
    if (points > 0) {
        if (document.getElementById("Vit").textContent < 10) {
            const tempVar = parseInt(document.getElementById("Vit").textContent);
            document.getElementById("Vit").textContent = tempVar + 1;
            document.getElementById("points").value -= 1;
        }
    }
}
const upStr = () => {
    const points = parseInt(document.getElementById("points").value);
    if (points > 0) {
        if (document.getElementById("Str").textContent < 10) {
            const tempVar = parseInt(document.getElementById("Str").textContent);
            document.getElementById("Str").textContent = tempVar + 1;
            document.getElementById("points").value -= 1;
        }
    }
}
const upMag = () => {
    const points = parseInt(document.getElementById("points").value);
    if (points > 0) {
        if (document.getElementById("Mag").textContent < 10) {
            const tempVar = parseInt(document.getElementById("Mag").textContent);
            document.getElementById("Mag").textContent = tempVar + 1;
            document.getElementById("points").value -= 1;
        }
    }
}
const upSpi = () => {
    const points = parseInt(document.getElementById("points").value);
    if (points > 0) {
        if (document.getElementById("Spi").textContent < 10) {
            const tempVar = parseInt(document.getElementById("Spi").textContent);
            document.getElementById("Spi").textContent = tempVar + 1;
            document.getElementById("points").value -= 1;
        }
    }
}
const upPoints = () => {
    const tempVar = parseInt(document.getElementById("points").value);
    document.getElementById("points").value = tempVar + 1;
}
const downPoints = () => {
    document.getElementById("points").value -= 1;
}