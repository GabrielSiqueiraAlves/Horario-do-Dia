function carregar() {
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `<strong>Agora são ${hora} horas e ${minuto} minutos</strong>`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'manha.png'
        document.body.style.backgroundImage = "url('fundomanha.jpg')"; 
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundImage = "url('fundotarde.jpg')"; 
    }
    else {
        img.src = 'noite.png'
        document.body.style.backgroundImage = "url('fundonoite.jpg')"; 
    }
}

