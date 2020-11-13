function PisoButton(valor){

  let piso = document.getElementById("piso").value;
     if (piso.length <2){
        document.getElementById("piso").value = piso.toString() + valor.toString()
 }
}

function DptoButton(valor){

  let dpto = document.getElementById("dpto").value;   
    if(dpto.length <2){
      document.getElementById("dpto").value = dpto.toString() + valor.toString()
  } 
}


function llamar(){
  let piso = document.getElementById("piso").value;
  let dpto = document.getElementById("dpto").value;
  
  if(piso <=44 && dpto <=15){
        document.getElementById("mensaje").value = " llamando al piso "+ piso + " dpto " + dpto 
          console.log(mensaje);
  }else {
        document.getElementById("mensaje").value = " los datos ingresados no son validos"
          console.log(mensaje);
  }if(piso <=48 && dpto <=""){
        document.getElementById("mensaje").value = "Por favor indique el número de departamento"
          console.log(mensaje);
  }
}


function borrar() {
    document.getElementById("piso").value = "";
    document.getElementById("dpto").value = "";
}

