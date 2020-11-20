function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados informados e tente novamente!')
}
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute("src",'criancaM')
                    res.innerHTML = `Detectamos uma criança do genero ${genero} com idade de ${idade} anos`
                }
                else if ( idade < 21){
                    //jovem
                    img.setAttribute("src",'jovemM.png')
                    res.innerHTML = `Detectamos um Jovem do genero ${genero} com idade de ${idade} anos`
                }
                else if (idade < 50){
                    //adulto
                    img.setAttribute("src",'adultoM.jpg')
                    res.innerHTML = `Detectamos um Adulto do genero ${genero} com idade de ${idade} anos`
                }
                else {
                    //idoso
                    img.setAttribute("src",'idosoM')
                    res.innerHTML = `Detectamos um idoso do genero ${genero} com idade de ${idade} anos`
                }
            
        } else if(fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute("src", 'criancaF.jpg' )
                res.innerHTML = `Detectamos uma criança do genero ${genero} com idade de ${idade} anos`
                }
                else if ( idade < 21){
                    //jovem
                    img.setAttribute("src",'jovemF.jpg')
                    res.innerHTML = `Detectamos uma Jovem do genero ${genero} com idade de ${idade} anos`
                }
                else if (idade < 50){
                    //adulto
                    img.setAttribute("src",'adultoF.jpg')
                    res.innerHTML = `Detectamos um Jovem do genero ${genero} com idade de ${idade} anos`
                }
                else {
                    //idoso
                    img.setAttribute("src",'idosoF.jpg')
                    res.innerHTML = `Detectamos um idoso do genero ${genero} com idade de ${idade} anos`
                }
        }
        res.style.textAlign = 'center'
        //res.innerHTML = `Detectamos uma pessoa do genero ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }


}