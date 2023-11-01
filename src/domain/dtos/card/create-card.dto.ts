import validator from "validator";
import { isExpirationYear } from "../../../utils/customValidator";

export class CreateCardDto {
  constructor(
    public readonly card_number: string,
    public readonly cvv: string,
    public readonly expiration_month: string,
    public readonly expiration_year: string,
    public readonly email: string
  ) {}

  static create(props: {
    [key: string]: any;
  }): [Record<string, string[]> | undefined, CreateCardDto | undefined] {
    const { card_number, cvv, expiration_month, expiration_year, email } =
      props;

    const errors: Record<string, string[]> = {};

    if (card_number === undefined) {
      errors.card_number = ["card_number property is required"];
    } else {
      if (
        !validator.isNumeric(card_number) ||
        !validator.isLength(card_number, { min: 16, max: 16 })
      ) {
        errors.card_number = ["Invalid card_number"];
      }
    }

    if (cvv === undefined) {
      errors.cvv = ["cvv property is required"];
    } else {
      if (
        !validator.isNumeric(cvv) ||
        !validator.isLength(cvv, { min: 3, max: 4 })
      ) {
        errors.cvv = ["The cvv must be at least 3 and maximum 4 digits."];
      }
    }

    if (expiration_month === undefined) {
      errors.expiration_month = ["expiration_month property is required"];
    } else {
      if (
        !validator.isNumeric(expiration_month) ||
        !validator.isLength(expiration_month, { min: 1, max: 2 }) ||
        !(Number(expiration_month) < 13 && Number(expiration_month) > 0)
      ) {
        errors.expiration_month = ["Invalid expiration_month"];
      }
    }

    if (expiration_year === undefined) {
      errors.expiration_year = ["expiration_year property is required"];
    } else {
      if (
        !validator.isNumeric(expiration_year) ||
        !validator.isLength(expiration_year, { min: 4, max: 4 }) ||
        !isExpirationYear(expiration_year)
      ) {
        errors.expiration_year = ["Invalid expiration_year"];
      }
    }

    if (email === undefined) {
      errors.email = ["email property is required"];
    } else {
      if (
        validator.isEmail(email, {
          host_blacklist: ["gmail.com", "hotmail.com", "yahoo.es"],
        })
      ) {
        errors.email = ["Invalid email"];
      }
    }

    if (Object.keys(errors).length > 0) {
      return [errors, undefined];
    }

    return [
      undefined,
      new CreateCardDto(
        card_number,
        cvv,
        expiration_month,
        expiration_year,
        email
      ),
    ];
  }
}
