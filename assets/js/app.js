function creandoDiv(getURL){
  var contenedor = document.getElementById('contenedor');
  var div = document.createElement('div');
  var img = document.createElement('img');
  img.setAttribute('src',getURL);
  div.classList.add('contenedor-imagen');
  div.appendChild(img);
  contenedor.appendChild(div);
}


var inputURL = document.getElementById('url');
function getURL(e){
  if(e.keyCode ==13){
    if(!this.value.length==0){
      if (/.(gif|jpeg|jpg|png)$/i.test(this.value) == false)
      {
        alert('Ingrese correctamente la url con extension .gif, .jpeg, .jpg y .png');
        this.value =  "";
        this.focus();
        return false;
      }
      else{
        creandoDiv(this.value);
        this.value =  "";
      }
    }
    else{
      alert('El campo esta vacio');
    }
  }
}

inputURL.onkeydown = getURL;
