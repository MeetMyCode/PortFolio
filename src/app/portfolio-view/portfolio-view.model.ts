export class Repos {

  public gitRepos = [
  
    {
      imagePath: "./assets/Images/RepoThumbNails/medventory.png", 
      title: "MedVentory", 
      tags: ["C#.Net","WPF"],
      repo: "https://github.com/MeetMyCode/MedVentory"
    },
    {
      imagePath: "./assets/Images/RepoThumbNails/cctvHeaderImage.png", 
      title: "FolderWatch", 
      tags: ["C#.Net","WPF"],
      repo: "https://github.com/MeetMyCode/FolderWatch"
    },    
    {
      imagePath: "./assets/Images/RepoThumbNails/HydroWatchCoverImage.png", 
      title: "HydroMonitor", 
      tags: ["Web"],
      repo: "https://github.com/MeetMyCode/HydroWatch"
    }                    
    
  ];





  getRepos(){
    return this.gitRepos;
  }
}


