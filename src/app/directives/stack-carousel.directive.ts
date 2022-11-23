import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appStackCarousel]'
})
export class StackCarouselDirective implements OnInit {
  y: number = 0

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = '0.5s'
  }

  ngOnInit() {
    this.setElement()
  }

  setElement() {
    setInterval(() => {
      this.y = this.y === -140 ? 0 : this.y - 35
      this.el.nativeElement.style.transform = `translateY(${this.y}px)`
    }, 1200)
  }
}
