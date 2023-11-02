import { CreateCardDto } from "../../../../src/domain";

describe("create-card DTO ", () => {
  it("should create a valid instance of CreateCardDto with all required properties", () => {
    const card_number = "1234567890123456";
    const cvv = "123";
    const expiration_month = "12";
    const expiration_year = "2025";
    const email = "test@gmail.com";

    const [errors, createCardDto] = CreateCardDto.create({
      card_number,
      cvv,
      expiration_month,
      expiration_year,
      email,
    });

    expect(errors).toBeUndefined();
    if (createCardDto) {
      expect(createCardDto).toBeInstanceOf(CreateCardDto);
      expect(createCardDto.card_number).toBe(card_number);
      expect(createCardDto.cvv).toBe(cvv);
      expect(createCardDto.expiration_month).toBe(expiration_month);
      expect(createCardDto.expiration_year).toBe(expiration_year);
      expect(createCardDto.email).toBe(email);
    }
  });

  it("should return errors when creating an instance of CreateCardDto with body empty", () => {
    const card_number = undefined;
    const cvv = undefined;
    const expiration_month = undefined;
    const expiration_year = undefined;
    const email = undefined;

    const [errors, createCardDto] = CreateCardDto.create({
      card_number,
      cvv,
      expiration_month,
      expiration_year,
      email,
    });

    expect(errors).toEqual({
      card_number: ["card_number property is required"],
      cvv: ["cvv property is required"],
      expiration_month: ["expiration_month property is required"],
      expiration_year: ["expiration_year property is required"],
      email: ["email property is required"],
    });
    expect(createCardDto).toBeUndefined();
  });
});
