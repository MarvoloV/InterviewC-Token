import { CommerceEntity } from "../../entities/commerce.entity";
import { TodoRepository } from "../../repositories/commerce.repository";

export interface GetTodoUseCase {
  execute(id: string): Promise<CommerceEntity>;
}

export class GetTodo implements GetTodoUseCase {
  constructor(private readonly repository: TodoRepository) {}

  execute(id: string): Promise<CommerceEntity> {
    return this.repository.findById(id);
  }
}
