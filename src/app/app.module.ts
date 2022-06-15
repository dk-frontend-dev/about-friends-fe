import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import {AppRoutingModule} from '@/app-routing.module'
import {AppComponent} from '@/app.component'
import {PreloadMediaService} from '@/shared/services/preload-media.service'
import {reducers} from '@/shared/store/reducers'
import {environment} from '@env/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({shared: reducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
      autoPause: true
    })
  ],
  providers: [PreloadMediaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
