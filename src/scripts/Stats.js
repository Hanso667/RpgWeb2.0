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

