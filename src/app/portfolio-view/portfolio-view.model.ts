export class Repos {

  public gitRepos = [  
    {
      imagePath: "./assets/Images/RepoThumbNails_1280by666/medventory.png", 
      title: "MedVentory", 
      tags: ["C#.Net","WPF"],
      repo: "https://github.com/MeetMyCode/MedVentory"
    },
    {
      imagePath: "./assets/Images/RepoThumbNails_1280by666/cctvHeaderImage.png", 
      title: "FolderWatch", 
      tags: ["C#.Net","WPF"],
      repo: "https://github.com/MeetMyCode/FolderWatch"
    },    
    {
      imagePath: "./assets/Images/RepoThumbNails_1280by666/HydroWatchCoverImage.png", 
      title: "HydroWatch", 
      tags: ["Web"],
      repo: "https://github.com/MeetMyCode/HydroWatch"
    }                    
    
  ];

  getRepos(){
    return this.gitRepos;
  }
}


