// metodos de comparação e verificação

const fraseUm = "String testando match()"
fraseUm.match("testando") // retorna um array com o valor encontrado 

const fraseDois = "String usando search()"
fraseDois.search("usando") // retorna o indice que foi encontrado o valor

const fraseTeste = "String teste metodos comparação/verificação"

fraseTeste.startsWith("String") // retorna true e false de acordo com o que foi passado
fraseTeste.endsWith("teste", 12)

fraseTeste.indexOf("metodos") // retorna o indice do valor achado da esquerda p direita
fraseTeste.lastIndexOf("/") // retorna o indice do valor achado da direita p esquerda
fraseTeste.valueOf() // retorna o valor primitivo