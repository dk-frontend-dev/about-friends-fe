import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {FieldMyComponent} from '@/shared/field/components/field-my/field-my.component'
import {CardModule} from '@/shared/card/card.module'
import {FieldEnemyComponent} from '@/shared/field/components/field-enemy/field-enemy.component'

@NgModule({
  declarations: [FieldMyComponent, FieldEnemyComponent],
  exports: [FieldMyComponent, FieldEnemyComponent],
  imports: [CommonModule, CardModule]
})
export class FieldModule {}
