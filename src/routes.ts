import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'

import { isAuthenticated } from './middlewares/isAuthenticated'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const detailUserController =  new DetailUserController()

export const router = Router()

router.post('/users', createUserController.handle)
router.post('/session', authUserController.handle)
router.get('/userinfo', isAuthenticated, detailUserController.handle)
