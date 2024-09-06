import { Objeto } from "./interfaceObjeto";

export const listarItens = (lista: Objeto[]) => {
    console.log("Ordem:\n1 - Alfabética\n2 - Categoria\n3 - Quantidade");
    const op = Number(prompt("Digite o número da opção: "))

    if(lista) {
        switch(op){
            case 1:
                lista.sort((a, b) => a.nome.localeCompare(b.nome));
                console.table(lista);
                break;
            case 2:
                const categoria = prompt("Digite a categoria do item: ")?.toLowerCase(); //encadeamento opcional
                const produtosFiltrados = lista.filter(item => item.categoria.toLowerCase() === categoria);
                console.table(produtosFiltrados);
                break;
            case 3:
                lista.sort((a, b) => a.quantidade - b.quantidade);
                console.table(lista);
                break;
            default:
                console.log("\nOpção inválida.");
                return;
        }
    }
}