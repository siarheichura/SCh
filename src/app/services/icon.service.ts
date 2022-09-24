import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { NzIconService } from 'ng-zorro-antd/icon'

import { BACKGROUND_SVG, SOC_MEDIA_SVG } from '@shared/constants/icons.constant'
import { IconSvgI, IconTranslateI } from '@shared/interfaces/Icon.interface'

@Injectable({
  providedIn: 'root'
})
export class IconService {
  config$: BehaviorSubject<IconTranslateI> = new BehaviorSubject<IconTranslateI>({x: 1, y: 1})
  iconsSvg: IconSvgI[] = [...BACKGROUND_SVG, ...SOC_MEDIA_SVG]

  constructor(private iconService: NzIconService) {
    this.setIcons()
  }

  setIcons() {
    this.iconsSvg.forEach(icon => this.iconService.addIconLiteral(`ng-zorro:${icon.name}`, icon.svg))
  }
}
