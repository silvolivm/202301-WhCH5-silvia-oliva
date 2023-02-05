type HasId = {
  id: string;
};

export type ProtoTaskStructure = {
  name: string;
  ability: string;
  isFavorite: boolean;
};

export type PokeStructure = HasId & ProtoTaskStructure;

export class Pokemon implements PokeStructure {
  public isFavorite: boolean;

  constructor(public id: string, public name: string, public ability: string) {
    this.isFavorite = false;
  }
}
