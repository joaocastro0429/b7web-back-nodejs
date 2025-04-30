import { Request, Response } from "express";
import { createContact, deleteContact, getContacts } from '../models/contact';

export const getController= async (req:Request,res:Response)=>{
    let list = await getContacts();
    res.json({ contatos: list });
}

export const createControllercontact=async(req:Request,res:Response)=>{
    const { name } = req.body;
   
       if (!name || name.length < 2) {
           return res.json({ error: 'Nome precisa ter pelo menos 2 caracteres.' });
       }
   
       await createContact(name);
   
       res.status(201).json({ contato: name });

}

export const deleteControllerContact=async(req:Request,res:Response)=>{
    const { name } = req.query;

    if (!name) {
        return res.json({ error: 'Precisa mandar um nome para excluir.' });
    }

    await deleteContact(name as string);

    res.json({ contato: name });
}