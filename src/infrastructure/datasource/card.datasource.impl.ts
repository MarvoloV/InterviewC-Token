import { prisma } from "../../data/postgres";
import { clientRedis } from "../../data/redis";
import { CardDatasource, CardEntity, CreateCardDto } from "../../domain";
import { generateToken } from "../../utils/generateToken";

export class CardDatasourceImpl implements CardDatasource {
  async create(createCardDto: CreateCardDto): Promise<string> {
    clientRedis
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
    let isExistToken = true;
    let token: string = "";
    while (isExistToken) {
      token = generateToken();
      const cardData = await clientRedis.get(token);
      if (!cardData) {
        isExistToken = false;
      }
    }
    await clientRedis.set(token, JSON.stringify(createCardDto), {
      EX: 60 * 1,
    });

    return token;
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
