const errorState = () => {
    try { // try tenta executar o bloco de código
        random
    } catch (error) { // captura o erro
        console.error(`Capturando e tratando esse erro \n${error}`)
    } finally {
        console.log("Sempre será executado")
    }
}

errorState()


const forceError = () => {
    const valorProibido = true
    try {
        if(valorProibido){
            throw new Error("Não insira esse valor!")
        }
    } catch (error) {
        console.error(error)
    }
}

forceError()