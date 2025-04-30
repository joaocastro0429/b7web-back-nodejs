function firstLetterUpperCase(name:string){
    // pega a primeira letra em caixa alta
    let fristLetter=name.charAt(0).toLocaleUpperCase()
    // é um método usado para extrair uma parte de uma string,
    return fristLetter+name.substring(1)


}
// retorna a primeira letra em maiuscula 
firstLetterUpperCase('joao')