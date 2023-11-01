export class CreateCommerceDto {
  private constructor(
    public readonly name: string,
    public readonly pkey: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCommerceDto?] {
    const { name, pkey } = props;

    if (!name) return ["Text property is required", undefined];
    if (!pkey) return ["Text property is required", undefined];

    return [undefined, new CreateCommerceDto(name, pkey)];
  }
}
