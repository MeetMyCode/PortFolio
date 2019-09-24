import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialOverlayComponent } from './initial-overlay/initial-overlay.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';


const routes: Routes = [
  { path: '', component: InitialOverlayComponent },
  { path: 'portfolio', component: PortfolioViewComponent, data: {animation: 'slideJumboDown'} },
  { path: 'about', component: AboutMeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
