/*

TAGS HTML

<meta property="og:url" content="www.magazineluiza.com.br" />
<meta property="og:site_name" content="Magazine Luiza" />
<meta property="og:type" content="website" />
<meta property="og:title" content="THome | Magazine Luiza" />
<meta property="og:description" content="As melhores ofertas em móveis, eletrônicos, eletrodomésticos, informática e muito mais, você encontra no site do Magalu! Confira!"/>
<meta property="og:image" content="https://a-static.mlcdn.com.br/618x463/aparelho-de-jantar-cha-30-pecas-biona-ceramica-redondo-rosa-donna-ae30-5160/magazineluiza/143283500/e525b7dae5c0855eecb634c805eb221c.jpg
" />


*/

/* Adicionando pelo JavaScript */
var elemento1 = document.createElement("meta")
elemento1.setAttribute("name", "twitter:card")
elemento1.setAttribute("content", document.title)


var elemento2 = document.createElement("meta")
elemento2.setAttribute("name", "twitter:image")
elemento2.setAttribute("content", document.querySelector('.showcase-product__big-img.js-showcase-big-img.ls-is-cached.lazyloaded').src);


document.querySelector("head").appendChild(elemento1)
document.querySelector("head").appendChild(elemento2)