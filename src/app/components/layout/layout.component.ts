import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

import { IconService } from '@services/icon.service'
import { ICON_CONFIGS } from '@shared/constants/icons.constants'
import { IconConfigI } from '@shared/interfaces/Icon.interface'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  iconConfigs: IconConfigI[] = ICON_CONFIGS

  constructor(private iconService: IconService) {}

  ngOnInit(): void {}

  onMouseMove = (event: MouseEvent) => {
    const x = (window.innerWidth - event.pageX * 3) / 50
    const y = (window.innerHeight - event.pageY * 3) / 50
    this.iconService.config$.next({ x, y })
  }
}
