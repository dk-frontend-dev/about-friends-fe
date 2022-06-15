import {Component, HostBinding, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-enemy-hand',
  templateUrl: './enemy-hand.component.html',
  styleUrls: ['./enemy-hand.component.scss']
})
export class EnemyHandComponent implements OnInit {
  @HostBinding('class') selector: string = 'hand enemy-hand'
  @Input('count') countProps!: number

  constructor() {}

  ngOnInit(): void {}
}
