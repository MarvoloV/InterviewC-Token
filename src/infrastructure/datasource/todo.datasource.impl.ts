import { prisma } from "../../data/postgres";
import {
  CreateCommerceDto,
  CommerceDatasource,
  CommerceEntity,
} from "../../domain";

export class TodoDatasourceImpl implements CommerceDatasource {
  async create(createTodoDto: CreateCommerceDto): Promise<CommerceEntity> {
    const todo = await prisma.commerce.create({
      data: createTodoDto!,
    });

    return CommerceEntity.fromObject(todo);
  }

  async findById(id: string): Promise<CommerceEntity> {
    const todo = await prisma.commerce.findFirst({
      where: { id: Number(id) },
    });

    if (!todo) throw `Todo with id ${id} not found`;
    return CommerceEntity.fromObject(todo);
  }
}
