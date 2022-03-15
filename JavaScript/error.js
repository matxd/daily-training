const errorState = () => {
    try { // try tenta executar o bloco de código
        forceError
    } catch (error) {
        console.error(`Capturando e manipulando esse erro \n${error}`)
    } finally {
        console.log("Sempre será executado")
    }
}

errorState()