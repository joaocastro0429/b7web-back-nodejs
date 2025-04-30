import  * as contactModel from '../models/contact'


export const getContacts= async()=>{
    const list= await contactModel.getContacts()
    return list
}
export const createContact= async (name:string)=>{
    const create = await contactModel.createContact(name)
    return create;
}

export const deleteContact= async (name:string)=>{
    await contactModel.deleteContact(name)
}