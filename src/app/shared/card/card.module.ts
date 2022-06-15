import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {HandCardComponent} from '@/shared/card/components/hand-card/hand-card.component'
import {FieldCardComponent} from '@/shared/card/components/field-card/field-card.component'

@NgModule({
  declarations: [HandCardComponent, FieldCardComponent],
  exports: [HandCardComponent, FieldCardComponent],
  imports: [CommonModule]
})
export class CardModule {}
