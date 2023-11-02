// import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

import { CardEntity } from "../../../src/domain";
import { CardRepositoryImpl } from "../../../src/infrastructure/repositories/card.repository.impl";

describe("CardRepositoryImpl", () => {
  const mockCardatasouce = {
    create: jest.fn(),
    findById: jest.fn(),
  };

  const cardRepository = new CardRepositoryImpl(mockCardatasouce);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("create should call the datasource with arguments", async () => {
    const log = {
      card_number: "4557880675549046",
      cvv: "123",
      expiration_month: "1",
      expiration_year: "2024",
      email: "jorgead0812@gmail.com",
    } as CardEntity;
    await cardRepository.create(log);
    expect(mockCardatasouce.create).toHaveBeenCalledWith(log);
  });

  it("findById should call the datasource with arguments", async () => {
    await cardRepository.findById("K0CaoWScckSVou6R");
    expect(mockCardatasouce.findById).toBeCalledWith("K0CaoWScckSVou6R");
  });
});
