import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgZorroModule } from './ng-zorro.module';
import { BackgroundIconDirective } from './directives/background-icon.directive'

@NgModule({
  declarations: [BackgroundIconDirective],
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
    BackgroundIconDirective
  ],
  providers: []
})
export class SharedModule {}
