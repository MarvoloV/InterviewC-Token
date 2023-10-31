export class CommerceEntity {
  constructor(public id: string, public name: string) {}

  public static fromObject(object: { [key: string]: any }): CommerceEntity {
    const { id, name } = object;
    if (!id) throw "Id is required";
    if (!name) throw "name is required";

    return new CommerceEntity(id, name);
  }
}
