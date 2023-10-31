import {
  CreateCommerceDto,
  CommerceDatasource,
  CommerceEntity,
  CommerceRepository,
} from "../../domain";

export class CommerceRepositoryImpl implements CommerceRepository {
  constructor(private readonly datasource: CommerceDatasource) {}

  create(createCommerceDto: CreateCommerceDto): Promise<CommerceEntity> {
    return this.datasource.create(createCommerceDto);
  }

  findById(id: string): Promise<CommerceEntity> {
    return this.datasource.findById(id);
  }
}
