import { listaDeCompra } from "../bancoDeDados/pegarArquivo";
import { FILE_NAME } from "../listaDeCompras";
import { validar } from "./validar"

export async function editarItem () {
    let lista = await listaDeCompra()
    console.log(lista);
    console.log("");
    const nome = prompt("\nDigite o nome do item: ").toLowerCase()
    const i = lista.findIndex(elemento => {
        return (elemento.nome).toLowerCase() === nome
    })
    
    if(i != -1) {
        const nomeItem = prompt("Digite o novo nome do item: ")
        const quantidade = Number(prompt("Digite a nova quantidade do item: "))
        const categoria = prompt("Digite a nova categoria do item: ")

        if(validar(nomeItem, quantidade, categoria) == false) {
            console.log("\nAlgum campo está vazio ou inválido, tente novamente preenchendo todos os campos.");

        } else {
            const obj = {
                nome: nomeItem,
                quantidade: quantidade,
                categoria: categoria,
                status: "não comprado ❌"
            }
            lista[i] = obj
            await Bun.write(FILE_NAME, JSON.stringify(lista))
        }
    } else {
        console.log("\nItem não encontrado.");
    }
}