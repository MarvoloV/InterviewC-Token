import { generateToken } from "../../src/utils/generateToken";

// Returns a string containing only alphanumeric characters
describe("generateToken", () => {
  it("should return a string containing only alphanumeric characters", () => {
    const token = generateToken();
    const alphanumericRegex = /^[0-9a-zA-Z]+$/;
    expect(alphanumericRegex.test(token)).toBe(true);
  });
  // Returns a string of length 16
  it("should return a string of length 16", () => {
    const token = generateToken();
    expect(token.length).toBe(16);
  });
});
