window.onload = function(){

//produtos --> caixa de texto

let produtos = [
    {descricao: 'Mamão Papaia', preco: 2.50},
    {descricao: 'Laranja', preco: 1.50},
    {descricao: 'Manga', preco: 2.00},
    {descricao: 'Melão', preco: 3.50},
    {descricao: 'Melancia', preco: 5.00}
]

const listaProdutos = document.querySelector("#listaProdutos");
const cestaDoCliente = document.querySelector("#cestaDoCliente");
const Total = document.querySelector('#mostraTotalCompra');


(()=>{
   
    for(let pro of produtos){
        const filhoLi = document.createElement('li');

        for( listaP in pro){
            if( listaP =='preco'){
                listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
            } else {
                listaProdutos.appendChild(filhoLi).textContent=`${pro[listaP]}`;

            }
        }           
    }
})()

  listaProdutos.addEventListener('click', function(){
    let totalzinho=0
      for (let pro of produtos){
           const filhoLi = document.createElement('li');

              for (listaP in pro){
                  if (listaP == 'preco'){
                      cestaDoCliente.appendChild(filhoLi).setAttribute('data-preco', pro[produtos]);
                      totalzinho += pro[listaP];
                  } else{
                      cestaDoCliente.appendChild(filhoLi).textContent= `${pro[listaP]}`;
                  }
              }
          }
          Total.value = totalzinho.toFixed(2);

     })
}      