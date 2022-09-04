import { ChangeDetectionStrategy, Component } from '@angular/core'
import { IconService } from '@services/icon.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private iconService: IconService) {}
}
