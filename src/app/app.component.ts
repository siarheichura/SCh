import { ChangeDetectionStrategy, Component } from '@angular/core'
import { IconService } from '@services/icon.service'
import { IconConfigI } from '@interfaces/Icon.interface'
import { BACKGROUND_ICON_CONFIGS } from '@constants/icons.constant'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  iconConfigs: IconConfigI[] = BACKGROUND_ICON_CONFIGS

  // and IconService needs to be injected to make antd icons work
  constructor(private iconService: IconService) {
  }

  ngOnInit(): void {
  }

  onMouseMove = (event: MouseEvent) => {
    const x = (window.innerWidth - event.pageX * 3) / 50
    const y = (window.innerHeight - event.pageY * 3) / 50
    this.iconService.config$.next({ x, y })
  }
}
