function Verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var nasc = document.getElementById("textAno");
  var nascS = String(nasc.value).length
  var genero = document.getElementsByName("genero");
  var res = document.querySelector("div#res");
  var img = document.getElementById("img");
  var idade = ano - Number(nasc.value);
  
  if (nascS < 4 || Number(nasc.value) > ano) {
    alert("Preencha os dados corretamente");
  } else {
    if (genero[0].checked) {
      if (idade > 0 && idade < 13) {
        res.innerHTML = `Criança com ${idade} anos`;
        img.src = "imagens/C-M.png";
      } else if (idade > 12 && idade < 18) {
        res.innerHTML = `Adolescente com ${idade} anos`;
        img.src = "imagens/A-M.png";
      } else if (idade > 17 && idade < 50) {
        res.innerHTML = `Adulto com ${idade} anos`;
        img.src = "imagens/ADULTO-M.png";
      } else if(idade > 49){
        res.innerHTML = `Senhor com ${idade} anos`;
        img.src = "imagens/S-M.png";
      }
    }

    if (genero[1].checked) {
        if (idade > 0 && idade < 13) {
          res.innerHTML = `Criança com ${idade} anos`;
          img.src = "imagens/C-F.png";
        } else if (idade > 12 && idade < 18) {
          res.innerHTML = `Adolescente com ${idade} anos`;
          img.src = "imagens/A-F.png";
        } else if (idade > 17 && idade < 50) {
          res.innerHTML = `Adulto com ${idade} anos`;
          img.src = "imagens/ADULTO-F.png";
        } else if(idade > 49){
          res.innerHTML = `Senhora com ${idade} anos`;
          img.src = "imagens/S-F.png";
        }
      }
  }
}
