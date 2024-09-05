import { adicionaItem } from "../bancoDeDados/pegarArquivo"
import { Objeto } from "./interfaceObjeto";
import { validar } from "./validar";

export async function addItem() {
    const nomeItem = prompt("Nome do Item:")!
    const quantidade = Number(prompt("Quantidade:"))
    const categoria = prompt("Categoria:")!

    if (validar(nomeItem, quantidade, categoria) == false) {
        console.log("\nAlgum campo está vazio ou inválido, tente novamente preenchendo todos os campos.\n");
    } else {
        const obj: Objeto = {
            nome: nomeItem,
            quantidade: quantidade,
            categoria: categoria,
            status: "não comprado ❌"
        }
        await adicionaItem(obj)
        console.log("\nItem adicionado com sucesso!");
    }      
}