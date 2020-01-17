import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';
import { IntroAnimationComponent } from './intro-animation/intro-animation.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: IntroAnimationComponent, data: { animation: 'toHomePage' } },
  { path: 'Portfolio', component: PortfolioViewComponent, data: { animation: 'toPortfolioPage' } },
  { path: 'About', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
