export class CardEntity {
  constructor(
    public card_number: string,
    public cvv: string,
    public expiration_month: string,
    public expiration_year: string,
    public email: string
  ) {}

  public static fromObject(object: { [key: string]: any }): CardEntity {
    const { card_number, cvv, expiration_month, expiration_year, email } =
      object;
    const errors: Record<string, string> = {};

    if (!card_number) {
      errors.card_number = "card_number is required";
    }
    if (!cvv) {
      errors.cvv = "cvv is required";
    }
    if (!expiration_month) {
      errors.expiration_month = "expiration_month property is required";
    }
    if (!expiration_year) {
      errors.expiration_year = "expiration_year property is required";
    }
    if (!email) {
      errors.email = "email property is required";
    }

    if (Object.keys(errors).length > 0) {
      throw errors;
    }

    return new CardEntity(
      card_number,
      cvv,
      expiration_month,
      expiration_year,
      email
    );
  }
}
