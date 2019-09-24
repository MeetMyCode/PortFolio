import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { InitialOverlayComponent } from './initial-overlay/initial-overlay.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//import { Repos } from './portfolio-view/portfolio-view.model';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavbarComponent,
    TestComponent,
    InitialOverlayComponent,
    PortfolioViewComponent,
    AboutMeViewComponent
    //Repos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
