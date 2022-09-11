import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from '@shared/shared.module'

import { AppComponent } from './app.component'
import { LayoutComponent } from '@components/layout/layout.component';
import { MainComponent } from '@components/_pages/main/main.component'

@NgModule({
  declarations: [AppComponent, LayoutComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
