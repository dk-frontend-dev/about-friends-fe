import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {DragDropModule} from '@angular/cdk/drag-drop'

import {MyHandComponent} from '@/shared/hand/components/my-hand/my-hand.component'
import {DirectivesModule} from '@/shared/directives/directives.module'
import {EnemyHandComponent} from '@/shared/hand/components/enemy-hand/enemy-hand.component'
import {CardModule} from '@/shared/card/card.module'

@NgModule({
  declarations: [MyHandComponent, EnemyHandComponent],
  imports: [CommonModule, DirectivesModule, DragDropModule, CardModule],
  exports: [MyHandComponent, EnemyHandComponent]
})
export class HandModule {}
