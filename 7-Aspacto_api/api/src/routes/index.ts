import express from 'express';
import {getController,createControllercontact,deleteControllerContact} from '../controllers/contact'

const router = express.Router();

router.post('/contato',createControllercontact);

router.get('/contatos',getController );

router.delete('/contato',deleteControllerContact);

export default router;