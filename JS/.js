function agregar(){
    let nuevaTarea = document.getElementById("tarea").value;
    if(nuevaTarea == ""){
        alert("Debe escribir una tarea")
        return;
    }

    let tarea = document.createElement("li");
    tarea.textContent = nuevaTarea + " ";

    let botonEli = document.createElement("button");
    botonEli.textContent = "Eliminar";
    botonEli.onclick = function(){tarea.remove();}

    tarea.appendChild(botonEli);

    document.getElementById("lista").appendChild(tarea);

    document.getElementById("tarea").value = "";


    



}