function PushButton(valor){

    let piso = document.getElementById("piso").value;
    let dpto = document.getElementById("dpto").value;
    
    

    if (piso.length <2){
      document.getElementById("piso").value = piso.toString() + valor.toString()
    }else{
      if(dpto.length <1){
      document.getElementById("dpto").value = dpto.toString() + valor.toString()
       }
    }
}

function borrar() {
    document.getElementById("piso").value = "";
    document.getElementById("dpto").value = "";
}


