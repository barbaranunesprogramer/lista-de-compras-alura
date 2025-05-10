import gerarDiaDaSemana from "./gerarDiasDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista(listaDeCompras) {
    if (inputItem.value === "") {
        alert("Por favor, digite um item.");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("container-item-da-lista");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();
    listaDeCompras.appendChild(itemDaLista);



    const itemData = document.createElement("p");
    itemData.innerHTML = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData); // Adicione itemData ao itemDaLista

    return itemDaLista;
}