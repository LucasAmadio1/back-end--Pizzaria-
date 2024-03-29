import { prismaClient } from '../../lib/prisma'

interface CategoryRequest {
  name: string
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {

    if (name === '') {
        throw new Error('Name invalid')
    }

    const category = await prismaClient.category.create({
      data: {
        name
      },
      select: {
        id: true,
        name: true
      }
    })

    return category
  }
}