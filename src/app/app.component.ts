import { Component } from '@angular/core';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;

}
