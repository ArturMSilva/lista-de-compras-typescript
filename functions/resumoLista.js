function totalItens(lista) {
    let listaResumo = []

    const numeroDeItens = lista.length

    const obj = {
        "Número De Itens": numeroDeItens
    }
    listaResumo.push(obj)
    console.log("\nTotal de Itens:");
    console.table(listaResumo)
}

function itensPorCategoria(lista) {
    let listaCategoria = {}
    lista.forEach(item => {
        if (listaCategoria[item.categoria]) {
            listaCategoria[item.categoria]++
        } else {
            listaCategoria[item.categoria] = 1;
        }
    });
    console.log("\nItens por categoria:");
    console.table(listaCategoria);  
}

function itensPorStatus(lista) {
    let listaComprado = {}
    let listaNaoComprado = {}

    lista.forEach(item => {
        if (item.status == "comprado ✅") {
            if (listaComprado[item.status]) {
                listaComprado[item.status]++;
            } else {
                listaComprado[item.status] = 1;
            }
        } else {
            if (listaNaoComprado[item.status]) {
                listaNaoComprado[item.status]++;
            } else {
                listaNaoComprado[item.status] = 1;
            }
        }
        
    });

    const listaStatus = {
        " ": listaComprado,
        "": listaNaoComprado
    }
        console.log("\nItens por status:");
        console.table(listaStatus);  
}

export const resumoLista = (lista) => {
    totalItens(lista)
    itensPorCategoria(lista)
    itensPorStatus(lista)
}