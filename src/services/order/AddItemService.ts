import { prismaClient } from "../../lib/prisma";

interface ItemRequest {
  orderId: string,
  productId: string,
  amount: number
}

export class AddItemService {
  async execute({ orderId, productId, amount }: ItemRequest) {
    
    const order = await prismaClient.item.create({
      data: {
        orderId,
        productId,
        amount
      }
    })

    return order
  }
}