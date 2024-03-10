import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()

export const router = Router()
  
router.post('/users', createUserController.handle)
router.post('/session', authUserController.handle)
