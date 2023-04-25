const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []


function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi = ''
    minhaListaDeItens.forEach((tarefa, index) => {
        novaLi = novaLi + `
            <li class="task ${tarefa.concluida && "done"}">
                <img src="/task_list/img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                <p>${tarefa.tarefa}</p>
                <img src="/task_list/img/trash.png" alt="tarefa-vai-para-o-lixo" onclick="deletarItem(${index})">
            </li>
        
        `
    })
listaCompleta.innerHTML = novaLi
localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefas()
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)