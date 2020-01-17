import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';
import { IntroAnimationComponent } from './intro-animation/intro-animation.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioViewComponent,
    AboutMeViewComponent,
    IntroAnimationComponent,
    TestComponent
    //Repos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
