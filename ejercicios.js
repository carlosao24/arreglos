let notas = []

// Agregar Elementos
function agregarElementos(){
    notas.push(3)
    notas.push(8)
    console.log(notas.length)
}

function recorrerArreglo(){
    let notaR;
    for(let i = 0; i < notas.length; i++){
        notaR = notas[i]
        console.log(notaR)
    }
}

function probarAgregar(){
    let notaRecuperada = recuperarInt("txtnotas")
    agregarNota(notaRecuperada)
}

function agregarNota(nota){
    notas.push(nota)
    mostrarNotas()
}

function calcularPromedio(){
    let sumaNotas = 0;
    let promedio = 0;
    for(let i = 0; i < notas.length; i++){
        sumaNotas += notas[i]
    }
    promedio = sumaNotas/notas.length
    console.log("Promedio = "+promedio.toFixed(2))
}

function generarTabla(){
    let contenido = ""
    let tabla = document.getElementById("divTabla")
    contenido += `<table>
                <tr><td>Uno</td></tr>
                <tr><td>Dos</td></tr>
            </table>`
    tabla.innerHTML = contenido
}

function mostrarNotas(){
    let tabla = document.getElementById("divTabla")
    let contenido = "<table><tr><td>NOTA</td></tr>"
    let valor
    for(let i = 0; i <notas.length;i++){
        valor = notas[i]
        contenido += "<tr><td>"
        contenido += valor
        contenido += "</td></tr>"
    }
    contenido += "</table>"
    tabla.innerHTML = contenido
}