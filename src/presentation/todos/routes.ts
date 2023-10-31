import { TodosController } from "./controller.ddd";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";

export class TodoRoutes {
  static get routes() {
    const datasource = new TodoDatasourceImpl();
    const todoRepository = new TodoRepositoryImpl(datasource);
    const todoController = new TodosController(todoRepository);

    return todoController;
  }
}
