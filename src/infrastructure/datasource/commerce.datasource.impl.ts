import { prisma } from "../../data/postgres";
import {
  CreateCommerceDto,
  CommerceDatasource,
  CommerceEntity,
} from "../../domain";

export class CommerceDatasourceImpl implements CommerceDatasource {
  async create(createCommerceDto: CreateCommerceDto): Promise<CommerceEntity> {
    const commerce = await prisma.commerce.create({
      data: createCommerceDto!,
    });

    return CommerceEntity.fromObject(commerce);
  }

  async findById(id: string): Promise<CommerceEntity> {
    const commerce = await prisma.commerce.findFirst({
      where: { id: Number(id) },
    });

    if (!commerce) throw `Commerce with id ${id} not found`;
    return CommerceEntity.fromObject(commerce);
  }
}
