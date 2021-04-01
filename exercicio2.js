let nomes = document.querySelectorAll(".shelf__item-name") //pegando cada nome de produto, isso retornará um array

nomes.forEach((nome) => { //executando o forEach para cada posição dentro do array nomes
    separacao = nome.innerText.plit(" "); // o texto inserido será divido por espaço com o método split e cada palavra será adicionada a um array de nome separacao
    separacao.splice(separacao.indexOf("-"), 2); // apliquei um splice para remover os itens desejados(o " - " e o código), para remover corretamente, pesquiso em qual posição está o "-" e partir daí peço para remover ele e o elemento seguinte
    nome.innerText = separacao.join(' '); // aplico o método join para juntar os elementos em uma string, passo como separador o espaço. E após isso, passo o novo valor(já aplicado o join)no campo de nome do produto
})

