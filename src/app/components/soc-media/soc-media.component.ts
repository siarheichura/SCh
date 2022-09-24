import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SOC_MEDIA_SVG} from "@shared/constants/icons.constant";

@Component({
  selector: 'app-soc-media',
  templateUrl: './soc-media.component.html',
  styleUrls: ['./soc-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocMediaComponent implements OnInit {
  icons: {name: string, url: string}[] = SOC_MEDIA_SVG.map(icon => ({
    name: `ng-zorro:${icon.name}`,
    url: icon.url
  }))

  constructor() {}

  ngOnInit(): void {}

  onIconClick(url: string): void {
    window.open(url, '_blank')
  }
}
