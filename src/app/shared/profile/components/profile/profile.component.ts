import {Component, HostBinding, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @HostBinding('class') selector: string = 'profile'
  @Input('side') sideProps!: string
  @Input('maxMana') maxManaProps!: number
  @Input('currentMana') currentManaProps!: number
  @Input('health') healthProps!: number
  @Input('attack') attackProps!: number
  @Input('powerImg') powerImgProps!: string
  @Input('avatar') avatarProps!: string

  constructor() {}

  ngOnInit(): void {}
}
