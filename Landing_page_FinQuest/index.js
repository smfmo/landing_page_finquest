var elementosDuvida = document.querySelectorAll('.duvida');
//recebeu todos os elementos que tem na classe "duvida" e armazenou em uma variavel  

//para cada elemento duvida sera realizada a função duvida que tera outra função responsavel por add outra classe a classe duvida para que assim sera posivel fazer a animação ao clicar no botão 
elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    })
});