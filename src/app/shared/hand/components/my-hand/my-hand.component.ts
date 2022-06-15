import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-my-hand',
  templateUrl: './my-hand.component.html',
  styleUrls: ['./my-hand.component.scss']
})
export class MyHandComponent implements OnInit {
  @HostBinding('class') selector: string = 'hand my-hand'
  @Input('cards') cardsProps!: any

  constructor() {}

  ngOnInit(): void {}
}
