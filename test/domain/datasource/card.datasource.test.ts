import { CardDatasource, CardEntity, CreateCardDto } from "../../../src/domain";

describe("card.datasource.ts CardDataSource", () => {
  const newCard = new CardEntity(
    "4557880675549046",
    "123",
    "1",
    "2024",
    "jorgead0812@gmail.com"
  );

  class MockCardDatasource implements CardDatasource {
    async findById(id: string): Promise<CardEntity> {
      return newCard;
    }
    async create(createCardDto: CreateCardDto): Promise<string> {
      return "";
    }
  }

  test("should test the abstract class", async () => {
    const mockCardDatasource = new MockCardDatasource();

    expect(mockCardDatasource).toBeInstanceOf(MockCardDatasource);
    expect(typeof mockCardDatasource.findById).toBe("function");
    expect(typeof mockCardDatasource.create).toBe("function");

    await mockCardDatasource.create(newCard);
    const cards = await mockCardDatasource.findById("1");
    expect(cards).toBeInstanceOf(CardEntity);
  });
});
