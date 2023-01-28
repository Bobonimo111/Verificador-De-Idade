function msg(msg = "funcionou"){
    window.alert(msg)
}

function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let nascimento_user = document.getElementById("nascimento");
    let idade =    ano - nascimento_user.value;
    let sexo = document.querySelectorAll('input[name=sexo]');
    let button = document.querySelector('button.verificar');
    let imagem =  document.querySelector("img.imagem");
    let paragrafo = document.querySelector(".resultado > p")
    


    // let imagem = document.createElement('img');
    // let paragrafo = document.createElement('p');

    if(nascimento_user.value == 0 || nascimento_user.value < 0){
        window.alert("Coloque um ano valido")
    }else{
        let caminho = "./src/images/"
        //masculino
        if(sexo[0].checked){
            let notificacao =  `você tem ${idade} anos, `
            if(idade <= 12){
                // paragrafo.innerHTML = `você tem ${idade} é uma criança`
                // imagem.src = "/src/imagens/"
                paragrafo.innerHTML = notificacao +"é uma criança!!";
                imagem.src = caminho+"Criança_masculino.png"   
            }
            else if(idade >= 13 && idade <= 18){
                paragrafo.innerHTML = notificacao+ "é um adolescente!!";
                imagem.src = caminho+ "adolescente_masculino.jpg"
            }
            else if(idade >= 19 && idade <= 60){
                paragrafo.innerHTML = notificacao+ "é um adulto!!";
                imagem.src = caminho+ "adulto_masculino.jpg"
            }
            else if(idade > 60){
                paragrafo.innerHTML = notificacao+ "é um idoso!!";
                imagem.src = caminho+ "idoso_masculino.jpg"

            }
        }


        //feminino
        if(sexo[1].checked){
            let notificacao =  `você tem ${idade} anos, `
            if(idade <= 12){
                // paragrafo.innerHTML = `você tem ${idade} é uma criança`
                // imagem.src = "/src/imagens/"
                paragrafo.innerHTML = notificacao +"é uma criança!!";
                imagem.src = caminho+"criança_feminino.png"   
            }
            else if(idade >= 13 && idade <= 18){
                paragrafo.innerHTML = notificacao+ "é uma adolescente!!";
                imagem.src = caminho+ "adolescente_feminino.jpg"
            }
            else if(idade >= 19 && idade <= 60){
                paragrafo.innerHTML = notificacao+ "é uma adulta!!";
                imagem.src = caminho+ "adulto_feminino.jpg"
            }
            else if(idade > 60){
                paragrafo.innerHTML = notificacao+ "é uma idosa!!";
                imagem.src = caminho+ "idoso_feminino.jpg"

            }
        }
    }


}

