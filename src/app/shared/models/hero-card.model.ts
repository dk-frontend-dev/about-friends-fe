export class HeroCardModel {
  type: string = 'hero'

  constructor(
    public img: string,
    public title: string,
    public text: string,
    public stone: string,
    public mana: number,
    public trailer: string
  ) {}
}
