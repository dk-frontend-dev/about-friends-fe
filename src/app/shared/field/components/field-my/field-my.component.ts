import {Component, HostBinding, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-field-my',
  templateUrl: './field-my.component.html',
  styleUrls: ['./field-my.component.scss']
})
export class FieldMyComponent implements OnInit {
  @HostBinding('class') selector: string = 'field field-my'
  @Input('field') fieldProps!: any

  constructor() {}

  ngOnInit(): void {}
}
