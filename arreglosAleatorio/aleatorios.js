// Crear numero aleatorio
function aleatorio() {
   let numeroAleatorio = Math.floor((Math.random()* 100)+1)
   return numeroAleatorio
}

// Función para llamar a aleatorio
function generarAleatorios(){
    let numerosAleatorios = []
    let valorIngreso = parseInt(document.getElementById("txtCaja1").value)
    let numero
    if(valorIngreso >= 5 && valorIngreso <= 20){
        for(let i = 0; i < valorIngreso; i++ ){
            numero = aleatorio()
            numerosAleatorios.push(numero)
            //console.log(numerosAleatorios[i])
        }
        mostrarResultados(numerosAleatorios) 
    }else{
        alert("Ingrese un numero entre 5 y 20")
    } 
}

function mostrarResultados(arregloNumeros){
    let aleatorios = []
    aleatorios.push(...arregloNumeros)
    let tabla = document.getElementById("divTabla")
    let contenido = "<table><tr><td>NUMERO</td></tr>"
    for(let i = 0; i < aleatorios.length;i++){
        let valorIndice = aleatorios[i]
        contenido += `<tr>
                            <td>${valorIndice}</td>
                        </tr>`
    }
    contenido += "</table>"
    tabla.innerHTML = contenido
}

