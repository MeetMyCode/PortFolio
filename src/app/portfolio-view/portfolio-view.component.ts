import { Component, OnInit } from '@angular/core';
import { Repos } from './portfolio-view.model';
//import { $ } from 'protractor';
import * as $ from 'jquery';
import { ThrowStmt } from '@angular/compiler';


function resetOverflow() {
  $('body').css('overflow-y','auto');
};

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.scss'],
  providers: [Repos]
})
export class PortfolioViewComponent implements OnInit {

  gitRepos;  
  tempRepos;
  selectedTech: string;

  repoMedVentory = "https://github.com/MeetMyCode/MedVentory";
  repoFolderWatch = "https://github.com/MeetMyCode/FolderWatch";

  constructor(gitRepos: Repos) {
    this.gitRepos = gitRepos.getRepos();
    this.tempRepos = this.gitRepos;
   }

  ngOnInit() {
  }

  gotoRepo(repoAddress: string){
    window.open(repoAddress, 'blank');
  }

  filterTech(event: any){
    //console.log(event);
    this.selectedTech = event.target.innerText;
    $("#dropdownMenuButton").html(this.selectedTech);

    this.clearTempRepos();
    this.displaySelectedRepos(this.selectedTech);
  }


  clearTempRepos(){
    this.tempRepos = [];
  }

  displaySelectedRepos(techCategory: string){

    if (techCategory == "All") {
      this.tempRepos = this.gitRepos;
    }else{
      this.populateTempRepos(techCategory);
    }
  }

  populateTempRepos(techCategory: string){
    this.gitRepos.forEach(repo => {
      if (repo.category.includes(techCategory)) {
        this.tempRepos.push(repo);
      }
    }); 
  }

}
