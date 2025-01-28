async function init() {
    await cargarPalabras();
    createReferenceGrid();
    createKeyboard();
    mostrarNuevaPalabra();
    updateTimer();
}

init();