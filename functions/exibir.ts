export const exibir = (lista) => {
    if (lista.length > 0){
        console.table(lista)
    } else {
        console.log("A lista está vazia!");
    }
}