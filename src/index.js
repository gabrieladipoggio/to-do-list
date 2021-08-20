"use strict";
exports.__esModule = true;
// Importando estilos
require("./style.css");
require("material-icons/iconfont/material-icons.css");
window.onload = function () {
    var input = document.getElementById("tf_2do");
    var btn = document.querySelector("form button");
    var tabela = document.getElementById("table");
    var listaDeTarefas = [];
    function exibirTarefas(listaDeTarefas) {
        var _loop_1 = function (tarefa) {
            // Cria elementos da tabela
            var tr = document.createElement("tr");
            var tdCheck = document.createElement("td");
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            var tdConteudo = document.createElement("td");
            var tdApagar = document.createElement("td");
            tabela.appendChild(tr);
            tr.appendChild(tdCheck);
            tdCheck.appendChild(check);
            check.addEventListener('click', function () {
                tarefa.checked = true;
                tr.className = 'done';
            });
            tr.appendChild(tdConteudo);
            tdConteudo.innerHTML = "" + tarefa.conteudo;
            tr.appendChild(tdApagar);
            tdApagar.innerHTML = "<i class=\"material-icons\">delete</i>";
            tdApagar.addEventListener('click', function () {
                console.log("click");
            });
        };
        for (var _i = 0, listaDeTarefas_1 = listaDeTarefas; _i < listaDeTarefas_1.length; _i++) {
            var tarefa = listaDeTarefas_1[_i];
            _loop_1(tarefa);
        }
    }
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        var tarefa = input.value;
        var tarefaInput = {
            checked: false,
            prioridade: 1,
            conteudo: tarefa
        };
        listaDeTarefas.push(tarefaInput);
        exibirTarefas(listaDeTarefas);
        // // Verificar se tem prioridade 
        // if(tarefa.includes("#1") || tarefa.includes("#2") || tarefa.includes("#3")){
        //     console.log("tem")
        // } else {
        //     console.log("não tem")
        // }
    });
};
// https://github.com/sergiomoura/todolist/blob/master/src/ToDoList.ts
