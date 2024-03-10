import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

import { isAuthenticated } from './middlewares/isAuthenticated'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const detailUserController =  new DetailUserController()
const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()

export const router = Router()

// rotas user
router.post('/users', createUserController.handle)
router.post('/session', authUserController.handle)
router.get('/userinfo', isAuthenticated, detailUserController.handle)

// rotas categoria
router.post('/category', isAuthenticated, createCategoryController.handle)
router.get('/category', isAuthenticated, listCategoryController.handle)
