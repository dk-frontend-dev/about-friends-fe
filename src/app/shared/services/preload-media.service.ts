import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Store} from '@ngrx/store'

import {setMediaAction} from '@/shared/store/actions/set-media.action'

@Injectable()
export class PreloadMediaService {
  constructor(private http: HttpClient, private store: Store) {}

  preloadMedia() {
    return this.http.get('assets/batman-raise.mp4', {responseType: 'blob'}).subscribe(data => {
      let reader = new FileReader()
      reader.readAsDataURL(data)

      reader.onload = () => {
        this.store.dispatch(setMediaAction({key: 'batmanHero', value: reader.result}))
      }
    })
  }
}
