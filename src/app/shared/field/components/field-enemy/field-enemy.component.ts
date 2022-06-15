import {Component, HostBinding, OnInit} from '@angular/core'

@Component({
  selector: 'app-field-enemy',
  templateUrl: './field-enemy.component.html',
  styleUrls: ['./field-enemy.component.scss']
})
export class FieldEnemyComponent implements OnInit {
  @HostBinding('class') selector: string = 'field field-enemy'

  constructor() {}

  ngOnInit(): void {}
}
