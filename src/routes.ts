import { Router } from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'
import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const detailUserController =  new DetailUserController()
const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()
const createProductController = new CreateProductController()
const listByCategoryController = new ListByCategoryController()
const createOrderController = new CreateOrderController()
const removeOrderController = new RemoveOrderController()

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
router.get('/category/products', isAuthenticated, listByCategoryController.handle)

// rotas pedidos
router.post('/pedido', isAuthenticated, createOrderController.handle)
router.delete('/pedido', isAuthenticated, removeOrderController.handle)
