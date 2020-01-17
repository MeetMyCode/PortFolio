import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Navigation } from 'selenium-webdriver';
import { Router } from '@angular/router';

//JAVASCRIPT


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
}
