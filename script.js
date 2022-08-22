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



 

let primeiraCarta = ""

let segundaCarta = ""

contadorJogadas=0
contadorJogo = 0

const fim = []


function virarCarta(virar){


    if(virar.children[1].classList.contains('costas')){
        return 
    }
    if(primeiraCarta == ""){
        virar.children[0].classList.toggle('frente')

    virar.children[1].classList.toggle('costas')

    primeiraCarta = virar
    
    } else if (segundaCarta == "") {

        virar.children[0].classList.toggle('frente')

    virar.children[1].classList.toggle('costas')

    segundaCarta = virar

    checkCartas()

    contadorJogadas++
    
    }

    setTimeout( () =>{
        const fim = document.querySelectorAll('.costas')
     console.log(fim)

    if( fim.length == numeroCartas){
        alert("voce terminou com "+contadorJogadas+" jogadas")
    }
  }

    , 500)

   

}



    


function checkCartas()
    {
        const primeiroAtributo = primeiraCarta.getAttribute('data')
        const segundoAtributo = segundaCarta.getAttribute('data')
        
        if(primeiroAtributo == segundoAtributo) {
            primeiraCarta =""
            segundaCarta =""



        } else{

            setTimeout( () =>
            {
                primeiraCarta.children[1].classList.remove('costas')
            segundaCarta.children[1].classList.remove('costas')
            primeiraCarta.children[0].classList.add('frente')
            segundaCarta.children[0].classList.add('frente')
            

            primeiraCarta = ""
            segundaCarta = ""




            }, 500)
            

             
        }
    }

    function comparador() { 
        return Math.random() - 0.5; 
    }