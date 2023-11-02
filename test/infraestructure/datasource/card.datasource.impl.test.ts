import { CreateCardDto } from "../../../src/domain";
import { CardDatasourceImpl } from "../../../src/infrastructure/datasource/card.datasource.impl";

describe("CardDatasourceImpl", () => {
  it("should create a new card when valid input is provided", async () => {
    const cardDatasource = new CardDatasourceImpl();
    const createCardDto = new CreateCardDto(
      "4557880675549046",
      "123",
      "12",
      "2023",
      "example@gmail.com"
    );

    const token = await cardDatasource.create(createCardDto);

    expect(token).toBeDefined();
  });
});
