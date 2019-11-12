import { Component } from '@angular/core';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { slideInAnimation } from './app.animations';
import { RouterOutlet } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  onSlideEventStart(event: AnimationEvent){
    $('body').css('overflow: hidden');
    //console.log('overflow is: ' + $('body').css("overflow"));
  }

  onSlideEventEnd(event: AnimationEvent){
    $('body').css('overflow: auto');
    //console.log('overflow is: ' + $('body').css("overflow"));
  }
}

