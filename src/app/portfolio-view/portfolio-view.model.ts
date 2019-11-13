export class Repos {

  public gitRepos = [
  
    {
      imagePath: "./assets/Images/medventory.png", 
      title: "MedVentory", 
      tags: ["C#.Net","WPF"],
      repo: "https://github.com/MeetMyCode/MedVentory"
    },
    {
      imagePath: "./assets/Images/cctvHeaderImage.png", 
      title: "FolderWatch", 
      tags: ["C#.Net","WPF"],
      repo: "https://github.com/MeetMyCode/FolderWatch"
    },    
    {
      imagePath: "./assets/Images/PlaceholderImage.png", 
      title: "HydroMonitor", 
      tags: ["Web"]
    }               
    
  ];


  getRepos(){
    return this.gitRepos;
  }
}


