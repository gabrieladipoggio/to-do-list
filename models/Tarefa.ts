import {Prioridades} from "./Prioridade";

export default interface Tarefa {
    checked: boolean;
    prioridade?:Prioridades;
    conteudo:string;
}