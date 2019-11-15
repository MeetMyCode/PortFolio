import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
    }, 1000 * i);
  } else {
    setTimeout(() => {
      console.log('timer started!');
      var text = '<p class="bootTextEntry">' + bootTextArrayEntry + '</p>';
      $('#bootTextContainer').append(text);    
    }, 1000 * i);    
  }



}

function clearBootText(){
  setTimeout(() => {
    $('#bootTextContainer').css('visibility', 'hidden');
  }, 8000);
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  bootText: any;

  constructor() { }

  ngOnInit() {
    bootTextSequence();
    clearBootText();
  }

}
