<<<<<<< HEAD
  document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    var date = Date();
    date = date.toString();
    date = date.split(" ");
    momnth = date[1];
    day = date[2];
    year = date[3];
    const $boton = document.querySelector("#getPDF");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.getElementById("box");; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 1,
                filename:  day + '_' + momnth + '_' + year + '_reporte_precio.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
  });
=======
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
>>>>>>> d4ddde66875a8d5eadff708aca1a2d79ea6c2c0a
