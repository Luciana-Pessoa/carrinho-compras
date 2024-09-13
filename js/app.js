function adicionar(){
//recuperar valores nome do produto, quantidade e valor
let Produto = document.getElementById('produto').value;
let nomeProduto = Produto.split('-')[0];
let valorUnitario = Produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

//calcular o preço, o nosso subtotal
let preco = quantidade * valorUnitario;


//adicionar o produto no carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML +`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;




//atualizar o valor total da compra


}

function limpar (){


}