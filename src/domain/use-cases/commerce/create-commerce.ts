import { CreateCommerceDto } from "../../dtos";
import { CommerceEntity } from "../../entities/commerce.entity";
import { CommerceRepository } from "../../repositories/commerce.repository";

export interface CreateCommerceUseCase {
  execute(dto: CreateCommerceDto): Promise<CommerceEntity>;
}

export class CreateCommerce implements CreateCommerceUseCase {
  constructor(private readonly repository: CommerceRepository) {}

  execute(dto: CreateCommerceDto): Promise<CommerceEntity> {
    return this.repository.create(dto);
  }
}
