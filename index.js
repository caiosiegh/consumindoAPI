function fazerGet() {
    if (document.getElementById("name") == undefined) {
        document.getElementById("personagem").style.visibility = "hidden";
    }
    if (document.getElementById("name") != undefined) {
        var nomePersonagem = document.getElementById("name").value;
    }
    fetch("https://api.tibiadata.com/v3/character/" + nomePersonagem)
        .then(response => response.json())
        .then(function (dados) {
            let personagem = dados.characters.character
            let name = personagem.name
            let level = personagem.level
            let vocation = personagem.vocation
            let guild = personagem.guild.name
            let world = personagem.world
            document.getElementById("personagem").innerText = ("Nome: " + name + "\nLevel: " + level + "\nVocação: " + vocation + "\nGuild: " + guild + "\n Mundo: " + world)
        })
}
fazerGet()