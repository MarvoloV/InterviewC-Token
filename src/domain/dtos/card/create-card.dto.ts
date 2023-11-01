import validator from "validator";
export class CreateCardDto {
  constructor(
    public readonly card_number: string,
    public readonly cvv: string,
    public readonly expiration_month: string,
    public readonly expiration_year: string,
    public readonly email: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCardDto?] {
    const { card_number, cvv, expiration_month, expiration_year, email } =
      props;

    const errors: string[] = [];

    if (
      card_number === undefined ||
      validator.isEmpty(card_number) ||
      !validator.isNumeric(card_number) ||
      !validator.isLength(card_number, { min: 16, max: 16 })
    ) {
      errors.push("Invalid card_number");
    }

    if (
      card_number === undefined ||
      validator.isEmpty(cvv) ||
      !validator.isNumeric(cvv) ||
      !validator.isLength(cvv, { min: 3, max: 4 })
    ) {
      errors.push("Invalid cvv");
    }

    if (
      expiration_month === undefined ||
      validator.isEmpty(expiration_month) ||
      !validator.isNumeric(expiration_month) ||
      !validator.isLength(expiration_month, { min: 2, max: 2 })
    ) {
      errors.push("Invalid expiration_month");
    }

    if (
      expiration_year === undefined ||
      validator.isEmpty(expiration_year) ||
      !validator.isNumeric(expiration_year) ||
      !validator.isLength(expiration_year, { min: 4, max: 4 })
    ) {
      errors.push("Invalid expiration_year");
    }

    if (
      email === undefined ||
      validator.isEmpty(email) ||
      !validator.isEmail(email)
    ) {
      errors.push("Invalid email");
    }

    if (errors.length > 0) {
      return [errors.join(", "), undefined];
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
