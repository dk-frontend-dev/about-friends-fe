import {Injectable} from '@angular/core'
import {Socket} from 'ngx-socket-io'
import {BehaviorSubject, Subject} from 'rxjs'

@Injectable()
export class WebSocketService {
  data: Subject<any> = new BehaviorSubject(null)

  constructor(private socket: Socket) {}

  sendMessage(event: string, data: any) {
    this.socket.emit(event, data)
  }

  getMessage(event: string = 'msgToClient', cb?: Function) {
    this.socket.on(event, (data: any) => {
      this.data.next(data)
      if (cb) cb(data)
    })
  }
}
