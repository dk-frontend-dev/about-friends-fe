import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {SocketIoModule} from 'ngx-socket-io'

import {environment} from '@env/environment'
import {WebSocketService} from '@/shared/websocket/services/websocket.service'

console.log(environment.ws)

@NgModule({
  imports: [CommonModule, SocketIoModule.forRoot({url: 'http://localhost:3000', options: {}})],
  declarations: [],
  providers: [WebSocketService]
})
export class WebSocketModule {}
