(function(){
  //variables
  var name = document.getElementById('ingrediente'),
  btncal = document.getElementById('calcular'),
  btnadd = document.getElementById('add'),
  btnrem = document.getElementById('rest'),
  box = document.getElementById("box");

  //funciones
  var calcular = function(){
    var u = Number(document.getElementById('unidades').value),
    pr = Number(document.getElementById('precio').value);

    var opr = (u/pr);
    var por = opr *.5;
    var suma = opr + por;

   document.getElementById('resultado').innerHTML = ("$"+suma);
  };


  var adddiv = function(){
    var datadiv = document.createElement("div"),
     ingre = document.createElement("input"),
     uni = document.createElement("input"),
     pre = document.createElement("input"),
     resultado = document.createElement("label");

    //Agrgar resultado a datadiv
    datadiv.appendChild(ingre);
    datadiv.appendChild(uni);
    datadiv.appendChild(pre);
    datadiv.appendChild(resultado);
    //Agragamos datadov a box
    box.appendChild(datadiv);
    //Agrgeamos atributos
    //data
    datadiv.setAttribute("class","data","id","data");
    datadiv.setAttribute("id","data");
    //ingrediente
    ingre.setAttribute("type","text");
    ingre.setAttribute("name","ingrediente");
    ingre.setAttribute("id","ingrediente");
    ingre.setAttribute("placeholder","INGREDIENTE");
    //unidades
    uni.setAttribute("type","number");
    uni.setAttribute("name","unidades");
    uni.setAttribute("id","uunidades");
    uni.setAttribute("placeholder","CANTIDAD DE INGR");
    //precio
    pre.setAttribute("type","number");
    pre.setAttribute("name","precio");
    pre.setAttribute("id","precio");
    pre.setAttribute("placeholder","COSTO DE INGR");
    //resultado
    resultado.setAttribute("for","precio");
    resultado.setAttribute("id","resultado");
    resultado.innerHTML = ("PRECIO");
  };


  var remdiv = function(){
    var box = document.getElementById("box");
    var datadiv = document.getElementById("data");
    var remove = box.removeChild(datadiv);

  };
//Eventos
  btncal.addEventListener("click", calcular);

  btnadd.addEventListener("click", adddiv);

  btnrem.addEventListener("click", remdiv )

}());
