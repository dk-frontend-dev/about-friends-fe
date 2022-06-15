import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MatButtonModule} from '@angular/material/button'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatDialogModule} from '@angular/material/dialog'

import {DesktopComponent} from '@/desktop/components/desktop/desktop.component'
import {DesktopRoutingModule} from '@/desktop/desktop-routing.module'
import {HandModule} from '@/shared/hand/hand.module'
import {DirectivesModule} from '@/shared/directives/directives.module'
import {CardModule} from '@/shared/card/card.module'
import {FieldModule} from '@/shared/field/field.module'
import {AlertModule} from '@/shared/alert/alert.module'
import {ProfileModule} from '@/shared/profile/profile.module'
import {WebSocketModule} from '@/shared/websocket/websocket.module'

@NgModule({
  declarations: [DesktopComponent],
  imports: [
    CommonModule,
    WebSocketModule,
    DesktopRoutingModule,
    HandModule,
    DragDropModule,
    MatButtonModule,
    DirectivesModule,
    CardModule,
    FieldModule,
    AlertModule,
    ProfileModule,
    MatDialogModule
  ]
})
export class DesktopModule {}
