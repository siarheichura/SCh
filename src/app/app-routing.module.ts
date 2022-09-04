import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from '@components/layout/layout.component'
import { ROUTER } from '@shared/enums/Router.enum'

const routes: Routes = [
  { path: ROUTER.INDEX, component: LayoutComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
