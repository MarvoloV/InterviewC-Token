import { CreateCardDto } from "../dtos";
import { CardEntity } from "../entities/card.entity";

export abstract class CardRepository {
  abstract create(createCardDto: CreateCardDto): Promise<string>;
  abstract findById(id: string): Promise<CardEntity>;
}
