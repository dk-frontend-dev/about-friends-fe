export class UnitCardModel {
  type: string = 'unit'

  constructor(
    public img: string,
    public title: string,
    public text: string,
    public stone: string,
    public mana: number,
    public attack: number,
    public health: number
  ) {}
}
