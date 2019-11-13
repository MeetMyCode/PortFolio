import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialOverlayComponent } from './initial-overlay/initial-overlay.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';
import { IntroAnimationComponent } from './intro-animation/intro-animation.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: IntroAnimationComponent },
  { path: 'Portfolio', component: PortfolioViewComponent, data: { animation: 'toPortfolioPage' } },
  { path: 'About', component: AboutMeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
