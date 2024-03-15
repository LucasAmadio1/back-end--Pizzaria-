import { prismaClient } from "../../lib/prisma";

interface DetailRequest {
  orderId: string
}

export class DetailOrderService {
  async execute({ orderId }: DetailRequest) {

    const orders = await prismaClient.item.findMany({
      where: {
        orderId: orderId
      },
      include: {
        Product: true,
        Order: true
      }
    })

    return orders
  }
}