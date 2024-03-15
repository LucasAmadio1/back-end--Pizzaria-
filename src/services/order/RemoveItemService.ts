import { prismaClient } from "../../lib/prisma";

interface ItemRequest {
  itemId: string
}

export class RemoveItemService {
  async execute({ itemId }: ItemRequest) {

    const order = await prismaClient.item.delete({
      where: {
        id: itemId
      }
    })

    return order
  }
}