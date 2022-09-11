import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core'

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryButtonComponent implements OnInit {
  @Input() text: string
  @Output() onClickEvent = new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.onClickEvent.emit()
  }
}
