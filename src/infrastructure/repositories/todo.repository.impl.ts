import {
  CreateCommerceDto,
  CommerceDatasource,
  CommerceEntity,
  TodoRepository,
} from "../../domain";

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly datasource: CommerceDatasource) {}

  create(createTodoDto: CreateCommerceDto): Promise<CommerceEntity> {
    return this.datasource.create(createTodoDto);
  }

  findById(id: string): Promise<CommerceEntity> {
    return this.datasource.findById(id);
  }
}
