/*

TAGS HTML

<meta property="og:url" content="www.magazineluiza.com.br" />
<meta property="og:site_name" content="Magazine Luiza" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Home | Magazine Luiza" />
<meta property="og:description" content="As melhores ofertas em móveis, eletrônicos, eletrodomésticos, informática e muito mais, você encontra no site do Magalu! Confira!"/>
<meta property="og:image" content="https://a-static.mlcdn.com.br/618x463/aparelho-de-jantar-cha-30-pecas-biona-ceramica-redondo-rosa-donna-ae30-5160/magazineluiza/143283500/e525b7dae5c0855eecb634c805eb221c.jpg
" />


*/

/* Adicionando pelo JavaScript */
let elemento = document.createElement("meta")
adicionaAtributo(elemento, "twitter:card", "summary_large_image")

let elemento1 = document.createElement("meta")
adicionaAtributo(elemento1, "twitter:title", document.title)


let elemento2 = document.createElement("meta")
adicionaAtributo(elemento2, "twitter:description", `${document.querySelector(".header-product__title").innerText} com as melhores condições você encontra no site do Magalu. Confira!`)


let elemento3 = document.createElement("meta")
adicionaAtributo(elemento3, "twitter:image", document.querySelector('.showcase-product__big-img.js-showcase-big-img.ls-is-cached.lazyloaded').src);


//otimizando 
function adicionaAtributo(elementoDono, nome, conteudo){
    elementoDono.setAttribute("name", nome)
    elementoDono.setAttribute("content", conteudo)

    //inserindo dentro do head
    document.querySelector("head").appendChild(elementoDono)
}


