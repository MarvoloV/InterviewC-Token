import { CommerceEntity } from "../../../src/domain";

describe("CardEntity", () => {
  const dataObj = {
    id: "1",
    name: "Cineplanet",
  };

  test("should create a CardEntity instance", () => {
    const commerce = new CommerceEntity("1", "Cineplanet");

    expect(commerce).toBeInstanceOf(CommerceEntity);
    expect(commerce.id).toBe(dataObj.id);
    expect(commerce.name).toBe(dataObj.name);
  });

  test("should create a LogEntity instance from object", () => {
    const commerce = CommerceEntity.fromObject(dataObj);

    expect(commerce).toBeInstanceOf(CommerceEntity);
    expect(commerce.id).toBe(dataObj.id);
    expect(commerce.name).toBe(dataObj.name);
  });
});
