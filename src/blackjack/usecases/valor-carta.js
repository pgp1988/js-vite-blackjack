
/**
 * Esta función me permite devolver el valor de cada carta
 * @param {String} carta 
 * @returns {Number} Retorna el valor de la carta JKQ = 10, A = 11, el resto cada una su valor
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}