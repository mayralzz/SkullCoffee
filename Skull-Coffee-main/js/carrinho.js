

window.onload = function() {
  let cartBadge = document.getElementById("carrinho");
  if(localStorage.getItem("cart")) {
      // CARRINHO TEM ITEM
      console.log("The cart has items");
      countCartItems();
      loadItems();
  } else {
      // CARRINHO VAZIO
      console.log("Empty cart");
      cartBadge.innerText = "0"; 
  }
  
}

function verificaValoresIguais(array) {
    var valores = {};
    
    for (var i = 0; i < array.length; i++) {
      if (valores[array[i]] === undefined) {
        valores[array[i]] = 1;
      } else {
        valores[array[i]]++;
      }
    }
    
    return valores;
  }

function loadItems() {

    let values = JSON.parse(localStorage.getItem("cart"));
    let items = document.getElementById("items");

    let object = verificaValoresIguais(values);

    for (i in object) {
        items.innerHTML += `
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
                <img src="/src/${i}.png" class="img-fluid rounded-start img" alt="...">
            </div>
          <div class="col-md-8">
              <div class="card-body text-light">
                <h5 class="card-title">${reWriteName(i)}</h5>
                <p class="card-text">R$10,00</p>
                <div class="botoes">

                <div class="card mx-3 btn" id="botao-pedido">
                    <div>
                        
                        <button class="botao" onclick="removeItemFromCart('${i}', 1); refresh('${i}', -1)"><i class="bi bi-dash-lg"></i></button>
                        <input id="${i}" class="text-light botao-quantidade" type="number" value="${object[i]}">
                        <button class="botao" onclick="addItemToCart('${i}'); refresh('${i}', 1)"><i class="bi bi-plus-lg"></i></button>

                    </div>
                </div>
                <button id="${i}-ex" class="btn text-light" onclick="removeItemFromCart('${i}', 2)">EXCLUIR</button>
                
                </div>
              </div>
          </div>
      
          </div>
          </div>`
    }

}

function refresh(id, amount) {
  
  let total = parseInt(document.getElementById(id).value) + parseInt(amount);
  if (total > 0) {
    document.getElementById(id).value = total;
  } else {
    document.getElementById(id).value = 0;
  }
  
  
}

function reWriteName(nomeOriginal) {
  switch (nomeOriginal) {
    case 'cafeamericanoquente':
      return 'Americano Quente';
    case 'cafelattequente':
      return 'Latte Quente';
    case 'cafecomleitequente':
      return 'Café com Leite Quente';
    case 'cafeexpressoquente':
      return 'Expresso Quente';
    case 'cafemochaquente':
      return 'Mocha Quente';
    case 'cafeprensafrancesaquente':
      return 'Prensa Francesa Quente';
    case 'cafecappuccinoquente':
      return 'Cappuccino Quente';
    case 'cafedescafeinadoquente':
      return 'Descafeinado Quente';
    case 'cafementaquente':
      return 'Menta Quente';
    case 'cafeamericanogelado':
      return 'Americano Gelado';
    case 'cafelattegelado':
      return 'Latte Gelado';
    case 'cafecomleitegelado':
      return 'Café com Leite Gelado';
    case 'cafeprensafrancesagelado':
      return 'Prensa Francesa Gelado';
    case 'cafemochagelado':
      return 'Mocha Gelado';
    case 'cafeexpressogelado':
      return 'Expresso Gelado';
    case 'cafecappuccinogelado':
      return 'Cappuccino Gelado';
    case 'cafedescafeinadogelado':
      return 'Descafeinado Gelado';
    case 'cafementagelado':
      return 'Menta Gelado';
    default:
      return nomeOriginal;
  }
}
