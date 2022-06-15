import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {MoveDirective} from '@/shared/directives/move.directive'

@NgModule({
  declarations: [MoveDirective],
  imports: [CommonModule],
  exports: [MoveDirective]
})
export class DirectivesModule {}
