export const validar = (nomeItem: string, quantidade: number, categoria: string): boolean => {
    if(!nomeItem || !quantidade  || !categoria ){
        return false;
    } else {
        return true;
    }
}