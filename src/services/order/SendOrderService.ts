import { prismaClient } from "../../lib/prisma";

interface OrderRequest {
  orderId: string
}

export class SendOrderService {
  async execute({ orderId }: OrderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: orderId
      },
      data: {
        draft: false
      }
    })

    return order
    
  }
}