//let numeroSecreto = generarNumeroSecreto();
let numeroSecreto = 0;
//let intentos= 1; 
let intentos= 0; 
let listaNumerosSecretos=[];
let numeroMaximo=10;
console.log(numeroSecreto);

// let titulo=document.querySelector("h1");
// titulo.innerHTML="Juego del número secreto";

// let parrafo=document.querySelector("p");
// parrafo.innerHTML="Indica un numero del 1 al 10";
function AsignarTextoElementos(elemento,texto){
    let ElementoHTML=document.querySelector(elemento);
    ElementoHTML.innerHTML= texto;
    return;
}

function verificarIntento() {
   // alert("Click desde el boton");
   let numeroUsuario = parseInt (document.getElementById('valorUsuario').value);

   if(numeroUsuario===numeroSecreto){
    AsignarTextoElementos('p',`Acertaste el numero en: ${intentos} ${(intentos=== 1) ? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else
   if(numeroUsuario > numeroSecreto){
    AsignarTextoElementos('p','El numero secreto es menor');
   }else{
    AsignarTextoElementos('p','El numero secreto es mayor');
   }
   intentos++;
   limpiarcaja();
  // console.log(numeroUsuario);
   // console.log(typeof(numeroUsuario));
   //console.log(numeroSecreto);
   //console.log(typeof(numeroSecreto));
   //console.log(numeroSecreto==numeroUsuario);
    return;
}
//Limpiar la caja blanca del juego 
function limpiarcaja(){
    //let valorCaja=document.querySelector('#valorUsuario');
    //valorCaja.value= '';
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSecretos);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSecretos.length==numeroMaximo){
      AsignarTextoElementos('p','Ya se sortearon todos los numeros posibles')
    }else

    //Si el numero generado esta incluido en la lista 
    if(listaNumerosSecretos.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }
    else{
      listaNumerosSecretos.push(numeroGenerado);
      return numeroGenerado;
    }
}
function mensajesiniciales(){
    AsignarTextoElementos('h1','Juego del número Secreto!');
    AsignarTextoElementos('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;

}
function reiniciarJuego(){
    //limpiar juego
    limpiarcaja();
    //Indicar mensaje de intervalos de numeros
    //AsignarTextoElementos('h1','Juego del número Secreto!');
    //AsignarTextoElementos('p', 'Indica un numero del 1 al 10');
    //mensajesiniciales();
    //Generar el numero aleatorio
    //numeroSecreto=generarNumeroSecreto();
    //Inicializar el numero de intentos 
    //intentos=1;
    mensajesiniciales();
    //Desahibilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
mensajesiniciales();