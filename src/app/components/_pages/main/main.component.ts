import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { SKILL_STACK_SVG } from '@constants/icons.constant'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  icons: string[] = SKILL_STACK_SVG.map(icon => icon.name)

  constructor() {
  }

  ngOnInit(): void {
  }
}
