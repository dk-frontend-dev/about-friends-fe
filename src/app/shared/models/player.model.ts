export class PlayerModel {
  constructor(
    public avatar: string,
    public name: string,
    public health: number,
    public attack: number,
    public powerImg: string,
    public currentMana: number,
    public maxMana: number
  ) {}
}
