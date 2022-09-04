import { Injectable } from '@angular/core'
import { NzIconService } from 'ng-zorro-antd/icon'

@Injectable({
  providedIn: 'root'
})
export class IconService {
  cat: string = '<svg width="110" height="106" viewBox="0 0 110 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.9952 79.0039H58.9944" stroke="#CCFF00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 102.999L30.9972 87.001" stroke="#CCFF00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 63.0039L34.9968 71.0031" stroke="#CCFF00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M58.8345 15.2489L101.95 3.17008C102.586 2.96984 103.264 2.94593 103.912 3.1009C104.56 3.25587 105.154 3.58391 105.63 4.05C106.132 4.49099 106.514 5.05327 106.738 5.68333C106.962 6.31339 107.021 6.99029 106.91 7.64964L98.1105 52.5252C97.6306 51.3253 97.1506 50.0454 96.7507 48.7655C94.2026 39.4747 88.8016 31.2185 81.3097 25.1618C73.8178 19.1052 64.6133 15.5538 54.9948 15.0089C45.3764 15.5538 36.1718 19.1052 28.6799 25.1618C21.188 31.2185 15.787 39.4747 13.239 48.7655C12.839 50.1254 12.3591 51.3253 11.8791 52.6052L3.08 7.64964C2.96857 6.99029 3.02767 6.31339 3.25169 5.68333C3.47571 5.05327 3.8572 4.49099 4.35988 4.05C4.83607 3.58391 5.42988 3.25587 6.07794 3.1009C6.726 2.94593 7.40398 2.96984 8.03951 3.17008L51.1552 15.2489" stroke="#CCFF00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M66.9936 101.64C59.0973 103.454 50.8924 103.454 42.996 101.64" stroke="#CCFF00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M106.99 102.999L78.9924 87.001" stroke="#CCFF00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M106.99 63.0039L74.9928 71.0031" stroke="#CCFF00" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'

  constructor(private iconService: NzIconService) {
    this.iconService.addIconLiteral('ng-zorro:cat', this.cat)
  }
}
