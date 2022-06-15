import {Component, HostBinding, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-my-hand-card',
  templateUrl: './hand-card.component.html',
  styleUrls: ['./hand-card.component.scss']
})
export class HandCardComponent implements OnInit {
  @HostBinding('class') selector: string = 'card card-hand'
  @Input('card') cardProps!: any

  constructor() {}

  ngOnInit(): void {}
}
