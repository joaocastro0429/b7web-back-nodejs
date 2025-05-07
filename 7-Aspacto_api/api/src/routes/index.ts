import express from 'express';
import {getController,createControllercontact,deleteControllerContact} from '../controllers/contact'
import {privateRequest} from '../middleware/auth'

const router = express.Router();

router.post('/contato',privateRequest,createControllercontact);

router.get('/contatos',getController );

router.delete('/contato',deleteControllerContact);

export default router;