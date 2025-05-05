
const inputItem = document.getElementById("input-item");
let contador = 0;
const listaDeCompras = document.getElementById("lista-de-compras");

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", function (evento) {
    evento.preventDefault();
    if (inputItem.value === "") {
        alert("Por favor, digite um item.");
        return
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
    }.
    )



    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);


    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);


    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const data = new Date().toLocaleDateString("pt-Br")
    const hora = new Date().toLocaleTimeString("pt-Br", { hour: "numeric", minute: "numeric" });
    const dataCompleta = `${diaDaSemana} (${data}) ás ${hora}`;
    const itemData = document.createElement("p");
    itemData.innerHTML = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData)
    verificarListaVazia();

})


const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}
