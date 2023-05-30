function myFunction () {
  const x = document.querySelector(".X");
  const menu = document.querySelector(".menu");
    
  x.classList.toggle("sanduiche");
  menu.classList.toggle("escondeMenu");
}

fetch('https://fakestoreapi.com/products')
    .then(resposta=>resposta.json())
    .then(dados => {
      let str = '';
      for (let i = 0; i < dados.length; i++) {
          str = str + `<div class="card-produtos">
                  <img src="${dados[i].image}" alt="">
                  <p class="nome">${dados[i].title}</p>
                  <p class="preco">R$ ${dados[i].price.toFixed(2)}</p>
                  <a href="#" class="detalhes">Detalhes</a>
                  <p class="avaliacao">Avaliação: ${dados[i].rating.rate} (<span style="color:#6f6f6f">${dados[i].rating.count}</span>)</p>
                  <label style="display:none">${dados[i].category}</label>
              </div>`;
      }

      document.querySelector('.produtos').innerHTML = str;
      
    });

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

