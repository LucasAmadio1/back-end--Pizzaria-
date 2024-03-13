import { prismaClient } from "../../lib/prisma";

interface ProductRequest {
  categoryId: string
}

export class ListByCategoryService {
  async execute({ categoryId }: ProductRequest) {
    
    const findByCategory = await prismaClient.product.findMany({
      where: {
        categoryId
      }
    })

    return findByCategory
  }
}