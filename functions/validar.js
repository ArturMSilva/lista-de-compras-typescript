export const validar = (nomeItem, quantidade, categoria) => {
    if(nomeItem === null || quantidade <= 0 || isNaN(quantidade) || quantidade === null || categoria === null){
        return false;
    } else {
        return true;
    }
}