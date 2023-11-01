import { prisma } from "../../data/postgres";
import { CreateCardDto } from "../../domain/dtos";
import { CardRepository } from "../../domain";

export class CardController {
  constructor(private readonly cardRepository: CardRepository) {}

  public getCardById = async (id: string) => {
    try {
      const card = await this.cardRepository.findById(id);
      return card;
    } catch (error) {
      return error;
    }
  };

  public createCard = async (body: any) => {
    const [error, createCardDto] = CreateCardDto.create(body);

    if (error) {
      throw error;
    }

    const commerce = await this.cardRepository.create(createCardDto!);
    return commerce;
  };
}
