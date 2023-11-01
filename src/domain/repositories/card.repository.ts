import { CreateCardDto } from "../dtos";
import { CardEntity } from "../entities/card.entity";

export abstract class CardRepository {
  abstract create(createCardDto: CreateCardDto): Promise<CardEntity>;
  abstract findById(id: string): Promise<CardEntity>;
}
