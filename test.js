var largura = 0
var altura = 0
var vidas = 1
var tempo = 20
function TamanhoTela(){
    largura = window.innerWidth
    altura = window.innerHeight
}
function TamanhoMosca(){
    var tm =  Math.floor(Math.random() * 5)
    switch(tm){
        case 0: return "mosca1"
        case 1: return "mosca2"
        case 2: return "mosca3"
        case 3: return "mosca4"
        case 4: return "mosca5"
    }
}
function lado(){
    var ld =  Math.floor(Math.random() * 2)
    switch(ld){
        case 0: return "ladoa"
        case 1: return "ladob"
    }
}
function aleatorio(){
    if(document.getElementById("mosca")){
        document.getElementById("mosca").remove()
        document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
        vidas++
        if(vidas >= 6){
            window.location.href = "over.html"
        }
    }
    var crono = setTimeout(function(){
        tempo -= 1
        document.getElementById("crono").innerHTML = tempo
    }, 1000);
    if(tempo <= 0){
        window.location.href = "winner.html"
    }
    largura = window.innerWidth
    altura = window.innerHeight
    var px = Math.floor(Math.random() * largura) - 60
    var py = Math.floor(Math.random() * altura) - 60
    px = px < 0 ? 0 : px
    py = py < 0 ? 0 : py
    var mosca = document.createElement("img")
    mosca.src = "imagens/mosca.png"
    mosca.className = TamanhoMosca() + " " + lado()
    mosca.style.left = px + "px"
    mosca.style.top = py + "px"
    mosca.style.position = "absolute"
    mosca.id = "mosca"
    mosca.onclick = function(){this.remove()}
    document.body.appendChild(mosca)
}