import { Directive, ElementRef, Input, OnInit } from '@angular/core'

import { IconService } from '@services/icon.service'
import { IconConfigI } from '@shared/../interfaces/Icon.interface'

@Directive({
  selector: '[appBackgroundIcon]'
})
export class BackgroundIconDirective implements OnInit {
  @Input() config: IconConfigI

  constructor(private el: ElementRef, private iconService: IconService) {
  }

  ngOnInit() {
    this.setElement()
  }

  setElement() {
    this.iconService.config$.subscribe((resp) => {
      this.el.nativeElement.style.fontSize = '22px'
      this.el.nativeElement.style.position = 'absolute'
      this.el.nativeElement.style.top = this.config.top
      this.el.nativeElement.style.left = this.config.left
      this.el.nativeElement.style.transform = `translateX(${resp.x * this.config.xx}px) translateY(${resp.y * this.config.xy}px) rotate(${this.config.rotate})`
    })
  }
}
