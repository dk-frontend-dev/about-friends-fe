import {Component, OnDestroy, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'

import {PreloadMediaService} from '@/shared/services/preload-media.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'about-friends'
  preloadMediaSubscription!: Subscription

  constructor(private preloadMediaService: PreloadMediaService) {}

  ngOnInit(): void {
    this.preloadMediaService.preloadMedia()
  }

  ngOnDestroy(): void {
    this.preloadMediaSubscription.unsubscribe()
  }
}
