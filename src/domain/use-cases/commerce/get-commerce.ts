import { CommerceEntity } from "../../entities/commerce.entity";
import { CommerceRepository } from "../../repositories/commerce.repository";

export interface GetCommerceUseCase {
  execute(id: string): Promise<CommerceEntity>;
}

export class GetTodo implements GetCommerceUseCase {
  constructor(private readonly repository: CommerceRepository) {}

  execute(id: string): Promise<CommerceEntity> {
    return this.repository.findById(id);
  }
}
