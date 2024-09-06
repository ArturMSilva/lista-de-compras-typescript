// import { remove } from "../bancoDeDados/pegarArquivo";
import { FILE_NAME } from "../listaDeCompras";
import { listaDeCompra } from "../bancoDeDados/pegarArquivo";
import { exibir } from "./exibir";
import { Objeto } from "./interfaceObjeto";

export async function removeItem(){
    const lista = await listaDeCompra()
    exibir(lista)
    if (lista.length > 0){
        const nomeItem = prompt("\nDigite o nome do item que deseja remover:")?.toLowerCase()
        const itemIndex = lista.findIndex((lis: Objeto) => lis.nome.toLowerCase() === nomeItem);

        if (itemIndex === -1) {
            return console.log("\nItem não encontrado.")
        }
        const confirma = prompt("\nTem certeza que quer remover este item?[s - SIM/n - NÃO]")?.toLowerCase()
        if (itemIndex >= 0 && itemIndex < lista.length && confirma === "s"){
            lista.splice(itemIndex, 1)
            await Bun.write(FILE_NAME, JSON.stringify(lista))
            console.log("\nItem removido com sucesso!")
        } else if (confirma == "n") {
            console.log("\nOperação cancelada.")
        } else {
            console.log("\nOpção inválida.");
        }
    }
}