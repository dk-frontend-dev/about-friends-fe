import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MatButtonModule} from '@angular/material/button'

import {ProfileComponent} from '@/shared/profile/components/profile/profile.component'

@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  imports: [CommonModule, MatButtonModule]
})
export class ProfileModule {}
