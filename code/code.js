(function(){
  //variables
  
  var btncal = document.getElementById('calcular'),
  btnadd = document.getElementById('add'),
  btnrem = document.getElementById('rest'),
  box = document.getElementById("box"),
  chkgr = document.getElementById("gr");


  //funciones

  
  var ocultar = function () {
    var elem_pztotales = document.getElementsByClassName('pzusar'),
    elem_pza = document.getElementsByClassName("pztotal"),
    chkgr = document.getElementsByClassName("gr");
  
    //lista de checkbox
/*
    for(i=0;i<chkgr.length;i++){
        //elem_pza.setAttribute("placeholder", "TOTAL DE GRAMOS");
        //elem_pztotales.style.display='none';
        //elem_pztotales.setAttribute("value","1");
          console.log("hola");

      }
*/

  };
  
  var calcular = function(){
    var elem_unidades = document.getElementsByClassName('pztotal'),
    elem_precio = document.getElementsByClassName('precio'),
    elem_resultado = document.getElementsByClassName('resultado'),
    elem_pztotales = document.getElementsByClassName('pzusar');
    let arr = [],
     total = 0;

    for (i=0;i<elem_precio.length;i++){    
      div = elem_precio[i].value /elem_unidades[i].value; 
      mul = div * elem_pztotales[i].value;
      elem_resultado[i].innerHTML = ("$"+ mul.toFixed(2));  
      arr.push(mul);
      console.log(arr);
    }
    

    for(i of arr){
      total+=i;
      document.getElementById('total').innerHTML = ("$"+ total.toFixed(2));
    }

    console.log(total);
  };



  var adddiv = function(){
    var datadiv = document.createElement("div"),
     chkgr = document.createElement("input"),
     ingre = document.createElement("input"),
     unius = document.createElement("input"),
     uni = document.createElement("input"),
     pre = document.createElement("input"),
     resultado = document.createElement("label");

    //Agrgar resultado a datadiv
    datadiv.appendChild(chkgr);
    datadiv.appendChild(ingre);
    datadiv.appendChild(pre);
    datadiv.appendChild(uni);
    datadiv.appendChild(unius);
    datadiv.appendChild(resultado);
    //Agragamos datadov a box
    box.appendChild(datadiv);
    //Agrgeamos atributos
    //data
    datadiv.setAttribute("class","data");
    datadiv.setAttribute("id","data");
    //checkbox
    chkgr.setAttribute("type","checkbox");
    chkgr.setAttribute("class","gr");
    chkgr.setAttribute("id","gr");
    //ingrediente
    ingre.setAttribute("type","text");
    ingre.setAttribute("name","ingrediente");
    ingre.setAttribute("id","ingrediente");
    ingre.setAttribute("placeholder","INGREDIENTE");
    //unidades totales
    uni.setAttribute("class","pztotal");
    uni.setAttribute("type","number");
    uni.setAttribute("name","pztotal");
    uni.setAttribute("id","pztotal");
    uni.setAttribute("placeholder","PIEZAS TOTALES");
    //unidates a usar
    unius.setAttribute("class","pzusar")
    unius.setAttribute("type","number");
    unius.setAttribute("name","pzusar");
    unius.setAttribute("id","pzusar");
    unius.setAttribute("placeholder","PIEZAS A USAR");
    //precio
    pre.setAttribute("class","precio")
    pre.setAttribute("type","number");
    pre.setAttribute("name","precio");
    pre.setAttribute("id","precio");
    pre.setAttribute("placeholder","COSTO DE INGR");
    //resultado
    resultado.setAttribute("class","resultado")
    resultado.setAttribute("for","precio");
    resultado.setAttribute("id","resultado");
    resultado.innerHTML = ("PRECIO");
  };


  var remdiv = function(){
    var divBox = document.getElementsByClassName("data");
    divBox[divBox.length-1].remove();

  };
//Eventos
  btncal.addEventListener("click", calcular);

  btnadd.addEventListener("click", adddiv);

  btnrem.addEventListener("click", remdiv );

  chkgr.addEventListener("click", ocultar);

}());
