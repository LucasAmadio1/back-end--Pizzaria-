import { Router } from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { CreateProductController } from './controllers/product/CreateProductController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const detailUserController =  new DetailUserController()
const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()
const createProductController = new CreateProductController()

export const router = Router()

const uplaod = multer(uploadConfig.upload("./tmp"))

// rotas user
router.post('/users', createUserController.handle)
router.post('/session', authUserController.handle)
router.get('/userinfo', isAuthenticated, detailUserController.handle)

// rotas categoria
router.post('/category', isAuthenticated, createCategoryController.handle)
router.get('/category', isAuthenticated, listCategoryController.handle)

// rotas produtos
router.post('/product', isAuthenticated, uplaod.single('file'), createProductController.handle)
