import {HostBinding} from '@angular/core'
import {Component, OnInit} from '@angular/core'
import {CdkDragDrop} from '@angular/cdk/drag-drop'
import {MatDialog} from '@angular/material/dialog'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {UnitCardModel} from '@/shared/models/unit-card.model'
import {HeroCardModel} from '@/shared/models/hero-card.model'
import {AlertComponent} from '@/shared/alert/components/alert/alert.component'
import {mediaSelector} from '@/shared/store/selectors/get-media.selector'
import {PlayerModel} from '@/shared/models/player.model'
import {WebSocketService} from '@/shared/websocket/services/websocket.service'

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  @HostBinding('class') selector: string = 'desktop'

  videoSrc!: Observable<string | null>
  videoOpacity: number = 0
  enemyProfile = new PlayerModel('assets/superman.webp', 'Superman', 20, 0, 'assets/batman-power.png', 5, 10)
  myProfile = new PlayerModel('assets/batman.jpeg', 'Batman', 20, 0, 'assets/batman-power.png', 5, 10)
  field: Array<HeroCardModel | UnitCardModel> = []
  cards: Array<HeroCardModel | UnitCardModel> = [
    new HeroCardModel(
      'assets/batman.jpeg',
      'Бэтмен',
      'Вы становитесь <i>Бэтменом</i>! Моментально исцеляете 5 ед. здоровья, +2 ед. урона до конца хода, получаете новую силу героя, - <i>Бэтброня</i>.',
      'legend',
      5,
      'assets/batman-raise.mp4'
    ),
    new UnitCardModel(
      'assets/demon-spirit.webp',
      'Дух ада',
      'Приспешник тьмы внушающий страх своим врагам.',
      'common',
      2,
      3,
      2
    ),
    new UnitCardModel('assets/murlock.jpeg', 'Мурлок', 'Сказочное существо из снов <i>Максима</i>.', 'common', 1, 1, 1),
    new UnitCardModel(
      'assets/dragon.webp',
      'Дракон',
      'Сказочный дракон. <i>Получает</i> +1 уд. урона если на столе есть ещё карты.',
      'rare',
      4,
      4,
      5
    )
  ]

  constructor(private wsService: WebSocketService, private dialog: MatDialog, private store: Store) {}

  drop(event: CdkDragDrop<HeroCardModel | UnitCardModel>): void {
    const card = this.cards[event.previousIndex]
    if (this.minusMana(card.mana)) return

    this.startAudioOrVideo(card)
    this.field.push(card)
    this.cards.splice(event.previousIndex, 1)
  }

  minusMana(cost: number): boolean {
    if (cost <= this.myProfile.currentMana) {
      this.myProfile.currentMana -= cost
      return false
    }
    this.openAlert('У вас недостаточно маны!')
    return true
  }

  startAudioOrVideo(card: HeroCardModel | UnitCardModel): void {
    if ((card as any).trailer) {
      this.videoSrc = this.store.pipe(select(mediaSelector))
      this.videoOpacity = 1
    }
  }

  canPlay(videoPlayer: HTMLVideoElement) {
    videoPlayer.play()
  }

  vidEnded() {
    this.videoOpacity = 0
  }

  openAlert(text: string): void {
    this.dialog.open(AlertComponent, {
      data: {text}
    })
  }

  private getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  ngOnInit(): void {
    this.wsService.sendMessage('join', 1)

    this.wsService.getMessage('joined', (data: any) => {
      this.wsService.sendMessage('setProfile', this.getRandomIntInclusive(0, 1) ? this.myProfile : this.enemyProfile)

      this.wsService.getMessage('getProfiles', (data: any) => {
        const {response} = JSON.parse(data)
        this.myProfile = response.me || this.myProfile
        this.enemyProfile = response.enemy || this.enemyProfile
      })
    })
  }
}
