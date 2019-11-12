import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-intro-animation',
  templateUrl: './intro-animation.component.html',
  styleUrls: ['./intro-animation.component.scss']
})
export class IntroAnimationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(["Portfolio"]);
    }, 5100);

  }

}
