import { prisma } from "../../data/postgres";
import { CreateCommerceDto } from "../../domain/dtos";
import { TodoRepository } from "../../domain";

export class TodosController {
  constructor(private readonly todoRepository: TodoRepository) {}

  public getTodoById = async (id: string) => {
    try {
      const todo = await this.todoRepository.findById(id);
      return todo;
    } catch (error) {
      return error;
    }
  };

  public createTodo = async (body) => {
    const [error, createTodoDto] = CreateCommerceDto.create(body);
    if (error) return error;

    const todo = await this.todoRepository.create(createTodoDto!);
    return todo;
  };
}
