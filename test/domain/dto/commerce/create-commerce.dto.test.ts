import { CreateCommerceDto } from "../../../../src/domain";

describe("create-commerce DTO ", () => {
  it("should create a new instance of CreateCommerceDto with valid name and pkey", () => {
    const props = {
      name: "Test Name",
      pkey: "Test Pkey",
    };

    const [error, createCommerceDto] = CreateCommerceDto.create(props);

    expect(error).toBeUndefined();
    if (createCommerceDto) {
      expect(createCommerceDto).toBeInstanceOf(CreateCommerceDto);
      expect(createCommerceDto.name).toBe(props.name);
      expect(createCommerceDto.pkey).toBe(props.pkey);
    }
  });
  it("should return an error message if name is missing", () => {
    const props = {
      pkey: "Test Pkey",
    };

    const [error, createCommerceDto] = CreateCommerceDto.create(props);

    expect(error).toBe("name property is required");
    expect(createCommerceDto).toBeUndefined();
  });

  it("should return an error message if pkey is missing", () => {
    const props = {
      name: "Test Name",
    };

    const [error, createCommerceDto] = CreateCommerceDto.create(props);

    expect(error).toBe("pkey property is required");
    expect(createCommerceDto).toBeUndefined();
  });
});
