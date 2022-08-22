const qtde = prompt('quantas cartas ?');

let numeroCartas = Number(qtde);

 while( numeroCartas < 4 || numeroCartas > 14 || numeroCartas%2 !== 0){

   numeroCartas = prompt('quantas cartas ?');

   numeroCartas = Number(numeroCartas);


 }

 let listaCartas = []

 let listaGif = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot']

 const lista = document.querySelector("ul")
 
 contador = 0;

 while( numeroCartas/2 > contador){
    
    

    let card = `<li onclick = "virarCarta(this)" data=${listaGif[contador]}>
    
    <div class="face frente"><img src="./images/${listaGif[contador]}.gif"></div>
    
    <div class="face "> <img src="./images/front.png"> </div>
   
    </li>`
        listaCartas.push(card)
        listaCartas.push(card)
        

      contador++
    
 }

 listaCartas.sort(comparador); 

lista.innerHTML = lista.innerHTML + listaCartas

function comparador() { 
	return Math.random() - 0.5; 
}
 