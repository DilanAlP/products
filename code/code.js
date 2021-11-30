
'use strict'
(function(){
  //variables
  
<<<<<<< HEAD
  var btncal = document.getElementById('calcular'),
=======
  import jsPDF from 'jspdf';
  var name = document.getElementById('ingrediente'),
  btncal = document.getElementById('calcular'),
>>>>>>> d4ddde66875a8d5eadff708aca1a2d79ea6c2c0a
  btnadd = document.getElementById('add'),
  btnrem = document.getElementById('rest'),
  box = document.getElementById("box");

  //funciones
  var calcular = function(){
    var elem_unidades = document.getElementsByClassName('unidades')
    var elem_precio = document.getElementsByClassName('precio')
    var elem_resultado = document.getElementsByClassName('resultado')
<<<<<<< HEAD

    for (i=0;i<elem_precio.length;i++){
      const arr = [];
      let total = 0;
      div = elem_unidades[i].value /elem_precio[i].value;
      por = div * .5;
      suma = div + por; 
      elem_resultado[i].innerHTML = ("$"+ suma.toFixed(2));  
      arr.push(suma);
      console.log(arr);


    }
=======

    for (i=0;i<elem_precio.length;i++){
      elem_resultado[i].innerHTML = ("$"+ elem_unidades[i].value *elem_precio[i].value);
    }

    console.log(elem_precio)
    var doc = new jsPDF();
    doc.text(20, 20, 'Hola mundo!');
    doc.text(20, 30, 'Esto es un generador de PDF en Java Script.');  
    doc.addPage();
    doc.text(20, 20, '¿Cómo estas?');

    //var u = Number(document.getElementById('unidades').value),
    //pr = Number(document.getElementById('precio').value);

   // var opr = (u/pr);
   // var por = opr *.5;
   // var suma = opr + por;

   //document.getElementById('resultado').innerHTML = ("$"+suma);
>>>>>>> d4ddde66875a8d5eadff708aca1a2d79ea6c2c0a
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
    uni.setAttribute("class","unidades")
    uni.setAttribute("type","number");
    uni.setAttribute("name","unidades");
    uni.setAttribute("id","uunidades");
    uni.setAttribute("placeholder","CANTIDAD DE INGR");
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

  btnrem.addEventListener("click", remdiv )

}());

function getPDF() {
  var doc = new jsPDF();
 
  // We'll make our own renderer to skip this editor
  var specialElementHandlers = {
    '#getPDF': function(element, renderer){
      return true;
    },
    '.controls': function(element, renderer){
      return true;
    }
  };

  // All units are in the set measurement for the document
  // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
  doc.fromHTML($('.zima').get(0), 15, 15, {
    'width': 170, 
    'elementHandlers': specialElementHandlers
  });

  doc.save('Generated.pdf');
}