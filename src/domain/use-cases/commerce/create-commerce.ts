import { CreateCommerceDto } from "../../dtos";
import { CommerceEntity } from "../../entities/commerce.entity";
import { TodoRepository } from "../../repositories/commerce.repository";

export interface CreateTodoUseCase {
  execute(dto: CreateCommerceDto): Promise<CommerceEntity>;
}

export class CreateTodo implements CreateTodoUseCase {
  constructor(private readonly repository: TodoRepository) {}

  execute(dto: CreateCommerceDto): Promise<CommerceEntity> {
    return this.repository.create(dto);
  }
}
