import {
  CreateCardDto,
  CardDatasource,
  CardEntity,
  CardRepository,
} from "../../domain";

export class CardRepositoryImpl implements CardRepository {
  constructor(private readonly datasource: CardDatasource) {}

  create(createCardDto: CreateCardDto): Promise<string> {
    return this.datasource.create(createCardDto);
  }

  findById(id: string): Promise<CardEntity> {
    return this.datasource.findById(id);
  }
}
