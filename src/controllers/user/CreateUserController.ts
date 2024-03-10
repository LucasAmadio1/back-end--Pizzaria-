import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

export class CreateUserController {
  async handle(req: Request, res: Response ) {
    const { name, email, password } = req.body

    const createUserController = new CreateUserService()

    const user = await createUserController.execute({ name, email, password })

    return res.json(user)
    }
}