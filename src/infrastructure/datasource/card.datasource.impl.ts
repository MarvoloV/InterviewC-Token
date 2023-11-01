import { prisma } from "../../data/postgres";
import { clientRedis } from "../../data/redis";
import { CardDatasource, CardEntity, CreateCardDto } from "../../domain";

export class CardDatasourceImpl implements CardDatasource {
  async create(createCardDto: CreateCardDto): Promise<CardEntity> {
    clientRedis
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
    await clientRedis.set("1234", JSON.stringify(createCardDto), {
      EX: 60 * 1,
    });

    return CardEntity.fromObject(createCardDto);
  }

  async findById(id: string): Promise<CardEntity> {
    clientRedis
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
    const card = await clientRedis.get(id);

    if (!card) throw `Commerce with id ${id} not found`;
    return CardEntity.fromObject(JSON.parse(card));
  }
}
