import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgZorroModule } from './ng-zorro.module';
import { BackgroundIconDirective } from './directives/background-icon.directive'
import { PrimaryButtonComponent } from '@shared/components/primary-button/primary-button.component'
import {StackCarouselDirective} from "@shared/directives/stack-carousel.directive";

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    BackgroundIconDirective,
    StackCarouselDirective
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NgZorroModule
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgZorroModule,
    BackgroundIconDirective,
    PrimaryButtonComponent,
    StackCarouselDirective
  ],
  providers: []
})
export class SharedModule {}
