export class Repos {

    public gitRepos = [
    
        {
          imagePath: "./assets/Images/medventory.png", 
          title: "MedVentory", 
          problemTitle: "The Problem: ", 
          solutionTitle: "The Solution: ",
          problemText: "Tracking of Interventional Radiology procedures & stock used was still being done via pen and paper. Messy and prone to error.",
          solutionText: "MedVentory - reduces the amount of manually work required & automatically keeps track of the stock used across procedures, thus making ordering easier & more accurate. Bonus feature: no illegible 'Dr's handwriting' to worry about!",
          tags: ["C#.Net","WPF"],
          repo: "https://github.com/MeetMyCode/MedVentory"
        },
        {
          imagePath: "./assets/Images/PlaceholderImage.png", 
          title: "Political See", 
          problemTitle: "The Problem: ", 
          solutionTitle: "The Solution: ",
          problemText: "Keeping tabs on Parliamentary MP's can be difficult.",
          solutionText: "Political See  - puts all the information at your fingertips. It's a dashboard to quickly view almost anything about any of the MP's currently within the UK Parlaiment.",
          tags: ["iOS - Swift"]
        },    
        {
          imagePath: "./assets/Images/PlaceholderImage.png", 
          title: "HydroMonitor", 
          problemTitle: "The Problem: ", 
          solutionTitle: "The Solution: ",
          problemText: "Keeping track of hydroponic nutrient parameters required manual measuring.",
          solutionText: "HydroMonitor  -  automates nutrient parameter measurements with values viewable via app.",
          tags: ["Web"]
        }       
      
      ];


    getRepos(){
      return this.gitRepos;
    }
}


