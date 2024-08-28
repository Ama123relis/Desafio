let titulo="Listado de Compras";
document.querySelector('h1').innerHTML=titulo;

function Comenzar (){
    let area = prompt('Escrive Front-End escribe o Back-End')
    let subarea="";
    if (area=="Front-End"){
        subarea = prompt('Quieres aprender React o Vue')
    } else if (area=="Back-End") {
        subarea = prompt('Quieres aprender C# o Java')
    } else{
        alert('Area no valida');
    }
  
    let especial = prompt(`Quieres seguir especializándote en ${subarea} o desarrollarte para convertirte en Fullstack`);
    // alert(especial);
    let ntecnologia = prompt('En qué tecnologías te gustaría especializarte o conocer, una por vez');
    let sino='ok';
    while (sino =='ok'){
        sino= prompt('¿Hay alguna otra tecnología que te gustaría aprender, escribe "ok" en caso positivo?');
       if (sino=='ok'){
        let ntecnologia= prompt('Cual?');
        alert(`Me parece que ${ntecnologia} es unaa excelente tecnologia que te ayudara mucho`);
       }
    } 
    alert('Gracias por tu informacion')
}

let frutas=[];
let lacteos=[];
let congelados=[];
let =verduras=[];
function compras(){

    let agregar='si';
    let alimento='';
    let categoria='';
    let eliminar='';
    
    while (agregar=='si'){
        agregar=prompt('deseas agregar un alimentos a tu lista de compras?');
        if (agregar=='si'){
            alimento=prompt('qué alimento deseas agregar?');
            
            categoria=prompt('en qué categoría se encaja ese alimento? frutas, lacteos, congelados o verduras');
            if (categoria =='f'){
                frutas.push(alimento);
            } else if (categoria =='v'){
                verduras.push(alimento);
            } else if (categoria =='l'){
                lacteos.push(alimento);
            }else if (categoria =='c'){
                congelados.push(alimento);
            }else{
                alert('Esa categoria no existe');
            }
        } else if (agregar=='no'){
            alert(`Lista de compras: \n Frutas: ${frutas} \n Verduras: ${verduras}`);
            eliminar=prompt('Deseas eliminar algun alimento de la lista?, contesta si o no');
            if(eliminar=='si'){
                alimento=prompt('Escribe el alimento a eliminar');
                let resultado=eliminarAlimneto(alimento);
                if (resultado==-1) {
                    alert('Alimento no existe en la lista de compras')
                }else{
                    alert(`Nueva Lista de compras: \n Frutas: ${frutas} \n Verduras: ${verduras}`);
                    agregar='si';    
                }
            }
        }else{
            alert('seleccion no valida');
            agregar='si';
        }
        }
    }

 function eliminarAlimneto(ali) {
    let indice=-1;
    eliminada=[];
    indice =frutas.indexOf(ali);
    if (indice>-1){
        eliminada=frutas.splice(indice,1);
        alert(frutas);        
    }else {
        indice =verduras.indexOf(ali);
        if (indice>-1){
            eliminada=verduras.splice(indice,1);
            alert(verduras);        
        }else {
            indice =lacteos.indexOf(ali);    
            if (indice>-1){
                eliminada=lacteos.splice(indice,1);
                alert(lacteos);        
                }else {
                indice =congelados.indexOf(ali);
                if (indice>-1){
                    eliminada=congelados.splice(indice,1);
                    alert(congelados);                
                }
            }       
        }
    }
    return indice;
 } 

