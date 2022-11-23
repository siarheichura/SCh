import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ROUTER } from '@enums/Router.enum'
import { MainComponent } from '@pages/main/main.component'
import { ContactComponent } from '@pages/contact/contact.component'
import { AboutComponent } from '@pages/about/about.component'
import { PortfolioComponent } from '@pages/portfolio/portfolio.component'

const routes: Routes = [
  { path: ROUTER.INDEX, component: MainComponent },
  { path: ROUTER.ABOUT, component: AboutComponent },
  { path: ROUTER.CONTACT, component: ContactComponent },
  { path: ROUTER.PORTFOLIO, component: PortfolioComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
