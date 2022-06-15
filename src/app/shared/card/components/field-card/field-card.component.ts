import {Component, HostBinding, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-field-card',
  templateUrl: './field-card.component.html',
  styleUrls: ['./field-card.component.scss']
})
export class FieldCardComponent implements OnInit {
  @HostBinding('class') selector: string = 'card'
  @Input('card') cardProps!: any

  constructor() {}

  ngOnInit(): void {}
}
