function myFunction () {
  const x = document.querySelector(".X");
  const menu = document.querySelector(".menu");
    
  x.classList.toggle("sanduiche");
  menu.classList.toggle("escondeMenu");
}

let str = '';
for(j = 1; j <= 112; j++) {
fetch(`https://diwserver.vps.webdock.cloud/products/category/Footwear - Shoes/?page=${j}`)
    .then(resposta=>resposta.json())
    .then(dados => {
      for (let i = 0; i < dados.products.length; i++) {
          str = str + `<div class="card-produtos">
                  <img src="${dados.products[i].image}" alt="">
                  <p class="nome">${dados.products[i].title}</p>
                  <p class="preco">R$ ${dados.products[i].price.toFixed(2)}</p>
                  <a href="detalhes.html?id=${dados.products[i].id}" class="detalhes">Detalhes</a>
                  <p class="avaliacao">Avaliação: ${dados.products[i].rating.rate} (<span style="color:#6f6f6f">${dados.products[i].rating.count}</span>)</p>
                  <label style="display:none">${dados.products[i].gender}</label>
              </div>`;
      }
      document.querySelector('.produtos').innerHTML = str;
    });
  }


const select = document.querySelector("#filtro");

select.addEventListener('change', FiltraProduto);

function FiltraProduto () {
  var categorias = document.querySelectorAll('.produtos .card-produtos');
  MostraTudo(categorias);
  var valorSelecionado = select.value;
 
  for(let card of categorias) {
    let categoria = card.querySelector('label').innerHTML;

    if(valorSelecionado == "all") {
      MostraTudo(categorias);
      break;
    }

    if (categoria != valorSelecionado) {
      card.style.display = "none";
    }
  }
}

function MostraTudo (categorias) {
  for(i = 0; i < categorias.length; i++) {
    if (categorias[i].style.display == "none") {
      categorias[i].style.display = "block";
    }
  }
}

