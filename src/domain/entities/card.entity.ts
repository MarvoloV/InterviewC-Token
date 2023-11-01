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
    if (!card_number) throw "card_number is required";
    if (!cvv) throw "cvv is required";
    if (!expiration_month) throw "expiration_month property is required";
    if (!expiration_year) throw "expiration_year property is required";
    if (!email) throw "email property is required";

    return new CardEntity(
      card_number,
      cvv,
      expiration_month,
      expiration_year,
      email
    );
  }
}
