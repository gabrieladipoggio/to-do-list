// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";

// Importando models
import Tarefa from "models/Tarefa";

window.onload = function () {
    let input = <HTMLInputElement>document.getElementById("tf_2do");
    let btn = document.querySelector("form button");
    let tabela = document.getElementById("table");
    // var listaDeTarefas: Tarefa[] = [];


    function exibirTarefas(tarefa:Tarefa) {

        // Cria elementos da tabela
        let tr = document.createElement("tr");
        let tdCheck = document.createElement("td");
        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        let tdConteudo = document.createElement("td");
        let tdApagar = document.createElement("td");
        let tdPrioridade = document.createElement("td");

        tabela.appendChild(tr)
        tr.appendChild(tdCheck)
        tdCheck.appendChild(check)
        check.addEventListener('click', () => {
            if (!tarefa.checked) {
                tarefa.checked = true;
                tr.className = 'done';
            } else {
                tarefa.checked = false;
                tr.className = 'none';
            }
        })

        tr.appendChild(tdConteudo)
        tdConteudo.innerHTML = `${tarefa.conteudo}`

        // Adicionar prioridade
        tr.appendChild(tdPrioridade);
        if(tarefa.prioridade == 1){
            tdPrioridade.innerHTML = `[baixa]`
        }  else if(tarefa.prioridade == 2){
            tdPrioridade.innerHTML = `[média]`
        } else {
            tdPrioridade.innerHTML = `[alta]`
        }


        tr.appendChild(tdApagar)
        tdApagar.innerHTML = `<i class="material-icons">delete</i>`
        tdApagar.addEventListener('click', () => {
            tr.remove();
        })
        
    }

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        var content: string = input.value;

        // Extrai prioridade 
        let regex = /#[1-3]\s/;
        let prioridadeRegex = content.match(regex);
        let p = 1;

        if(prioridadeRegex){
            p = Number(prioridadeRegex[0][1])
            content = content.replace(regex, '');        
        } 


        const tarefaInput:Tarefa = {
            checked: false,
            prioridade: p,
            conteudo: content
        }

        // listaDeTarefas.push(tarefaInput);
        exibirTarefas(tarefaInput)

    })

}


