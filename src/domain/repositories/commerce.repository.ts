import { CreateCommerceDto } from "../dtos";
import { CommerceEntity } from "../entities/commerce.entity";

export abstract class CommerceRepository {
  abstract create(createTodoDto: CreateCommerceDto): Promise<CommerceEntity>;
  abstract findById(id: string): Promise<CommerceEntity>;
}
