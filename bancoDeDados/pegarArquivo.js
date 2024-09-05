import { FILE_NAME } from "../listaDeCompras";

export async function listaDeCompra() {
    const file = Bun.file(FILE_NAME);
    const dados = await file.text();
    const objeto = JSON.parse(dados);
    return objeto;
}

export async function adicionaItem(item) {
    const itens = await listaDeCompra();
    itens.push(item);
    await Bun.write(FILE_NAME, JSON.stringify(itens));
}

export async function remove(item){
    const itens = await listaDeCompra();
    const index =  itens.findIndex((i) => i.nome === item.nome)
    itens.splice(index, 1)
    await Bun.write(FILE_NAME, JSON.stringify(itens));
}