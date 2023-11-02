import { CardEntity } from "../../../src/domain";

describe("CardEntity", () => {
  const dataObj = {
    card_number: "4557880675549046",
    cvv: "123",
    expiration_month: "1",
    expiration_year: "2024",
    email: "jorgead0812@gmail.com",
  };
  it("should create a CardEntity instance", () => {
    const card = new CardEntity(
      "4557880675549046",
      "123",
      "1",
      "2024",
      "jorgead0812@gmail.com"
    );

    expect(card).toBeInstanceOf(CardEntity);
    expect(card.card_number).toBe(dataObj.card_number);
    expect(card.cvv).toBe(dataObj.cvv);
    expect(card.expiration_month).toBe(dataObj.expiration_month);
    expect(card.expiration_year).toBe(dataObj.expiration_year);
    expect(card.email).toBe(dataObj.email);
  });

  it("should create a CardEntity instance from object", () => {
    const card = CardEntity.fromObject(dataObj);

    expect(card).toBeInstanceOf(CardEntity);
    expect(card.card_number).toBe(dataObj.card_number);
    expect(card.cvv).toBe(dataObj.cvv);
    expect(card.expiration_month).toBe(dataObj.expiration_month);
    expect(card.expiration_year).toBe(dataObj.expiration_year);
    // expect(card.email).toBe(dataObj.email);
  });
  it("should create a CardEntity instance from object", () => {
    expect(() => {
      CardEntity.fromObject({});
    }).toThrow();
  });
});
