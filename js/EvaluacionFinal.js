

var estudiantes = [
                {
                    "codigo": "17117",
                    "nombre": "Yira Patricia Vázquez Gonzales",
                    "nota": 3.5
                }, {
                    "codigo": "36325",
                    "nombre": "Iris Marcela Muños Ramírez",
                    "nota": 3.4
                }, {
                    "codigo": "32975",
                    "nombre": "Valeria Viaña Padilla",
                    "nota": 2.5
                }, {
                    "codigo": "31966",
                    "nombre": "Jair Yesid Frías Crizon",
                    "nota": 4.5
                }, {
                    "codigo": "30560",
                    "nombre": "Meira Marcela Pérez de Ávila",
                    "nota": 3.2
                }, {
                    "codigo": "18532",
                    "nombre": "Kevin Meléndez",
                    "nota": 3.9
                }, {
                    "codigo": "37639",
                    "nombre": "Carlos Andres Novoa Dita",
                    "nota": 4.1
                }, {
                    "codigo": "36093",
                    "nombre": "Carmen Alicia Barbosa Rengifo",
                    "nota": 1.5
                }, {
                    "codigo": "38386",
                    "nombre": "Aura Alejandra Coba Herrera",
                    "nota": 1.8
                }, {
                    "codigo": "30682",
                    "nombre": "Luz Elena Soriano Osorio",
                    "nota": 4.8
                }, {
                    "codigo": "26968",
                    "nombre": "Julia Rosa Julio Escobar",
                    "nota": 2.9

                }

            ];



function leerJSON(json) {
            var out = "<table class = table ><thead><tr><th>CODIGO</th><th>Nombre </th><th>Nota</th></tr></thead><tbody>";
            var i;
            for (i = 0; i < json.length; i++) {
                
                out += "</tr><td>" + json[i].codigo + "</td>" + "<td>" + json[i].nombre + "</td>" + "<td>" + json[i].nota+ "</td></tr>";


            }
            var out1= out+"</tbody></table>";
            document.getElementById("estudiantes").innerHTML = out1;
        }

function calcularPromedioNotas(json) {

    
    var aux = 0.0;
    for (i = 0; i < json.length; i++) {
        aux += json[i].nota;
    }
    var promedioN=aux/10
    document.getElementById("promedioNotaModal").innerHTML = "<h1>"+promedioN.toFixed(2)+ "</h1>";
    document.getElementById("promedioNota").innerHTML = "<h4>"+promedioN.toFixed(2)+ "</h4>";
}




function mejorEstudiante(json) {

            var Mayor = json[0].nota; //Mayor se inicializa con el primer valor del arreglo
            var aux;
            for (i = 0; i < json.length; i++) {

                //comparamos si cada elemento del arreglo con Mayor
                if (json[i].nota > Mayor){
                    Mayor = json[i].nota; //eemplazamos Mayor por el elemento que acabamos de encontrar, si no, queda como está
                    aux = json[i].nombre+"<br>";//gurdamos el nombre en la variable aux
                }
                
            }
            console.log(aux);
            document.getElementById("mejorE").innerHTML = "<h4>" + aux + "</h4><h4>"+ Mayor+ "</h4>"
            ;
        }


function peorEstudiante(json) {

            var menor = json[0].nota;
            var pos = 0; // Posicion json
            var auxp = ""; //var auxiliar
            for (i = 0; i < json.length; i++) {
                if (json[i].nota < menor){
                    menor = json[i].nota;
                    auxp = json[i].nombre+"<br>";
                }
            }
            document.getElementById("peorE").innerHTML = "<h4>"+ auxp+ "</h4><h4>"+ menor+ "</h4>";
        }





function mostrarEstudiantes() {
            leerJSON(estudiantes);
        }

function mostrarPromedio() {
    calcularPromedioNotas(estudiantes);
}

function mostrarMEstudiante() {
    mejorEstudiante(estudiantes);
}

function mostrarPEstudiante() {
    peorEstudiante(estudiantes);
}