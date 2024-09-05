import { addItem} from './functions/addItem.js';
import { listarItens } from "./functions/listarItens.js";
import { editarItem } from "./functions/editarItem.js";
import { removeItem } from "./functions/removeItem.js";
import { situation } from "./functions/situation.js";
import { resumoLista } from "./functions/resumoLista.js";
//-----------
import { listaDeCompra } from "./bancoDeDados/pegarArquivo.js";

const menu = `
MENU - LISTA DE COMPRAS
    1 - ADICIONAR ITEM
    2 - LISTAR ITENS
    3 - EDITAR ITEM
    4 - REMOVER ITEM
    5 - MARCAR COMO COMPRADO OU NÃO COMPRADO
    6 - RESUMO DA LISTA
    0 - SAIR
`

export const FILE_NAME = "bancoDeDados/bd.json"

let i = true;
while(i) {
    console.log(menu);
    let escolha = Number(prompt("Escolha uma opção:"));
    switch(escolha) {
        case 1:
            await addItem()
            break;
        case 2:
            listarItens(await listaDeCompra())
            break;
        case 3:
            await editarItem()
            break;
        case 4:
            await removeItem()
            break;
        case 5:
            await situation()
            break;
        case 6:
            resumoLista(await listaDeCompra())
            break;
        case 0:
            console.log("\nObrigado pela preferência! Até logo!\n");
            i = false;
            break;
        default:
            console.log("\nOpção Inválida!! Escolha uma opção existente.\n");
    }
}
