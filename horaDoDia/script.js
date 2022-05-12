function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}hs` 
    if (hora >=0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
    }
    else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
    }
    else {
        //Boa noite!
        img.scr = 'fotonoite1.png'
    }
}

var intervald = window.setInterval(() => {carregar()},1000);