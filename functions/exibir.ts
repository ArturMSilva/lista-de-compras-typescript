import { Objeto } from "./interfaceObjeto";

export const exibir = (lista:Objeto[]) => {
    if (lista.length > 0){
        console.table(lista)
    } else {
        console.log("A lista está vazia!");
    }
}