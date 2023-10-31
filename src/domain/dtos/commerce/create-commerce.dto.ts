export class CreateCommerceDto {
  private constructor(public readonly name: string) {}

  static create(props: { [key: string]: any }): [string?, CreateCommerceDto?] {
    const { name } = props;

    if (!name) return ["Text property is required", undefined];
    // if (!id) return ["Text property is required", undefined];

    return [undefined, new CreateCommerceDto(name)];
  }
}
