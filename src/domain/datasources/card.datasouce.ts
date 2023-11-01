import { CreateCardDto } from "../dtos";
import { CardEntity } from "../entities/card.entity";

export abstract class CardDatasource {
  abstract create(createCardDto: CreateCardDto): Promise<CardEntity>;
  abstract findById(id: string): Promise<CardEntity>;
}
