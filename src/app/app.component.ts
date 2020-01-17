import { Component } from '@angular/core';
import { slideInAnimation, FadeInAnimation } from './app.animations'; 
import { RouterOutlet } from '@angular/router';
//import { $ } from 'protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
    FadeInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  onSlideEventStart(event: AnimationEvent){
    $('body').css('overflow', 'hidden');
    console.log('overflow is: ' + $('body').css("overflow"));
  }

  onSlideEventEnd(event: AnimationEvent){
    $('body').css('overflow', 'auto');
    console.log('overflow is: ' + $('body').css("overflow"));
  }
}

