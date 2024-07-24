import {writeFile} from 'fs/promises'


const exec=async()=>{
    console.log("escrevendo um arquivo")
    // criando um arquivo txt
    await writeFile('./teste.txt','testando 1,2,3')
    // juntando e quebrando por linha 
    const list=['joao','elias','jeremias']
   const txtList= list.join('\n')
   await writeFile('./teste.txt',txtList)





}


exec()