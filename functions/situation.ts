import { listaDeCompra } from "../bancoDeDados/pegarArquivo";
import { FILE_NAME } from "../listaDeCompras";
import { exibir } from "./exibir";
import { Objeto } from "./interfaceObjeto";

export async function situation() {
    let lista = await listaDeCompra()
    exibir(lista);
    const nome = prompt("Digite o nome do item: ")?.toLowerCase()
    const i = lista.findIndex((elemento: Objeto) => {
        return elemento.nome.toLowerCase() === nome
    })

    if (i !== -1) {
        const op = Number(prompt("1 - Marcar como comprado\n2 - Marcar como não comprado\n=> "))
        switch(op) {
            case 1:
                lista[i].status = "comprado ✅"
                console.log("\nItem marcado como comprado.")
                await Bun.write(FILE_NAME, JSON.stringify(lista))
                break
            case 2:
                lista[i].status = "não comprado ❌"
                console.log("\nItem marcado como não comprado.")
                await Bun.write(FILE_NAME, JSON.stringify(lista))
                break
            default:
                console.log("Opção inválida.")
                break
        }
    }
}