import { CreateCommerceDto } from "../dtos";
import { CommerceEntity } from "../entities/commerce.entity";

export abstract class CommerceDatasource {
  abstract create(
    createCommerceDto: CreateCommerceDto
  ): Promise<CommerceEntity>;
  abstract findById(id: string): Promise<CommerceEntity>;
}
