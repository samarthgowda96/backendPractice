import express from 'express';
import {updateUser,deleteUser} from '../controllers/users.js'

const router = express.Router();

router.put('/:id',updateUser);
router.delete('/:id',deleteUser)

export default router