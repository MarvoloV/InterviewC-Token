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
    const errors = [];
    if (!card_number) return ["card_number property is required", undefined];
    if (!cvv) return ["cvv property is required", undefined];
    if (!expiration_month)
      return ["expiration_month property is required", undefined];
    if (!expiration_year)
      return ["expiration_year property is required", undefined];
    if (!email) return ["email property is required", undefined];

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
