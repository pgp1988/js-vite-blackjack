
/**
 * Esta función me permite tomar una carta de la baraja
 * @param {Array} deck 
 * @returns Retorna una carta de la baraja
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}