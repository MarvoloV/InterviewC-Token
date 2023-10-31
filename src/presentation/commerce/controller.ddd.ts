import { prisma } from "../../data/postgres";
import { CreateCommerceDto } from "../../domain/dtos";
import { CommerceRepository } from "../../domain";

export class CommerceController {
  constructor(private readonly commerceRepository: CommerceRepository) {}

  public getCommerceById = async (id: string) => {
    try {
      const commerce = await this.commerceRepository.findById(id);
      return commerce;
    } catch (error) {
      return error;
    }
  };

  public createCommerce = async (body) => {
    const [error, createCommerceDto] = CreateCommerceDto.create(body);
    if (error) return error;

    const commerce = await this.commerceRepository.create(createCommerceDto!);
    return commerce;
  };
}
