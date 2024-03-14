import { prismaClient } from "../../lib/prisma";

interface OrderRequest {
  table: number;
  name: string
}

export class CreateOrderService {
  async execute({ table, name }: OrderRequest) {

    const order = await prismaClient.order.create({
      data: {
        table,
        name
      }
    })

    return order
  }
}