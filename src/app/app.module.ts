import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from '@shared/shared.module'

import { AppComponent } from './app.component'
import { MainComponent } from '@components/_pages/main/main.component'
import { SocMediaComponent } from '@components/soc-media/soc-media.component'
import { ContactComponent } from '@components/_pages/contact/contact.component'
import { AboutComponent } from '@components/_pages/about/about.component'
import { PortfolioComponent } from '@components/_pages/portfolio/portfolio.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SocMediaComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent
  ],
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
export class AppModule {
}
