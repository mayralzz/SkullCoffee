// PARA PEGAR OS DADOS USE JSON.parse(localStorage.getItem("cart"))
// PARA SETAR OS DADOS USE localStorage.setItem('cart', JSON.stringify(values))

window.onload = function() {
    let cartBadge = document.getElementById("carrinho");
    if(localStorage.getItem("cart")) {
        // CARRINHO TEM ITEM
        console.log("The cart has items");
        countCartItems();   
    } else {
        // CARRINHO VAZIO
        console.log("Empty cart");
        cartBadge.innerText = "0"; 
    }
}

function cart() {
    window.location.href = "carrinho.html";
}

function account() {
    window.location.href = "conta.html";
}

// CONTAR QUANTOS ITENS TEM NO CARRINHO
function countCartItems() {
    let count = JSON.parse(localStorage.getItem("cart"));
    let cartBadge = document.getElementById("carrinho");
    console.log();
    cartBadge.innerText = count.length; 
}

// ADICIONA ITEM NO CARRINHO
function addItemToCart (param) {
    if (!localStorage.getItem("cart")) {
        let temp = [];
        localStorage.setItem("cart", JSON.stringify(temp));
    }
    let values = JSON.parse(localStorage.getItem("cart"));
    values.push(param);
    localStorage.setItem('cart', JSON.stringify(values));
    countCartItems();
}

// REMOVE ITEM ESPECIFICO DO CARRINHO
function removeItemFromCart(param, amount) {
    let values = JSON.parse(localStorage.getItem("cart"));

    if (amount == 1) {
        for (i in values) {
            if (param == values[i]) {
                values.splice(i,1);
                break;
            }
        }
    } else {
        let object = verificaValoresIguais(values);
        let occurrences = object[param];
        for (let i = values.length - 1; i >= 0; i--) {
          if (param == values[i]) {
            values.splice(i, 1);
            occurrences--;
            if (occurrences == 0) {
              break;
            }
          }
        }
    }

    localStorage.setItem('cart', JSON.stringify(values));
    countCartItems();
}

// REMOVE ULTIMO ITEM DO CARRINHO
function removeLastItemFromCart() {
    let values = JSON.parse(localStorage.getItem("cart"));
    values.pop();
    localStorage.setItem('cart', JSON.stringify(values));
    countCartItems();
}