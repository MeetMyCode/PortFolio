import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Navigation } from 'selenium-webdriver';
import { Router } from '@angular/router';

//JAVASCRIPT
function bootTextSequence(){

  var bootTextArray = ['Loading Dependencies...','Boot Sequence Complete...', 'Preparing Interface...'];
  console.log('bootTextArray.length is: ' + bootTextArray.length);

  for (let i = 0; i < bootTextArray.length; i++) {
    setTimeout(() => {
      addBootTextEntry(i, bootTextArray[i]);      
    }, 2000);
  }
}

function addBootTextEntry(i: number, bootTextArrayEntry: string){

  console.log('Entry ' + i + 'is ' + bootTextArrayEntry);


  if (i == 2) {
    setTimeout(() => {
      var text = '<p class="finalBootTextEntry">' + bootTextArrayEntry + '</p>';
      $('#bootTextContainer').append(text);          
    }, 1000 * i + 1000);
  } else {
    setTimeout(() => {
      console.log('timer started!');
      var text = '<p class="bootTextEntry animBootEntry0 animBootEntry1">' + bootTextArrayEntry + '</p>';
      $('#bootTextContainer').append(text);    
    }, 1000 * i);    
  }



}

function clearBootText(){
  setTimeout(() => {
    $('#bootTextContainer').css('visibility', 'hidden');
  }, 8000);
}

function loadPortfolioAfterAnimation(router: Router){
  setTimeout(function(router){ this.router.navigate(['/Portfolio']); }, 10000);
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  bootText: any;

  constructor(private router: Router) { }

  ngOnInit() {
    bootTextSequence();
    clearBootText();
    //loadPortfolioAfterAnimation(this.router);

    setTimeout(() => this.router.navigateByUrl('Portfolio'),8500);
  }
}
