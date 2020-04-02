import { Component, OnInit, APP_ID } from '@angular/core';
import { IProject } from 'src/app/project';

@Component({
  selector: 'app-software-project',
  templateUrl: './software-project.component.html',
  styleUrls: ['./software-project.component.css']
})
export class SoftwareProjectComponent implements OnInit {

  projects: IProject[] = [
    {
      image: "assets/GReen_Project.jpg",
      title: "GReen",
      desc: "Angular with RESTful APIs",
      url: "https://jo15on.github.io/GReen/",
      full: "My team and I created an app using Angular 9 framework with RESTful APIs that we utilized from the City of Grand Rapids and Google Map.  We wanted to educate the Grand Rapids residents by helping them confirm what can be recycled, appropriate ways to dispose recycables, locate nearby recycling centers, order bin services and determine their trash/recycling pick-up days."
    },

  {
    image: "assets/budget_buddy.png",
    title: "Budget Buddy",
    desc: "HTML/CSS/JavaScript",
    url: "https://bykerbry.github.io/Budget-Buddy/",
    full: "It's a clean and simple user application on how to utilize their income to create a weekly budget and inputting expenses to update their budget. In the end, expenses report is generated to show how well they're spending money on a weekly basis."
  }
  ];

  constructor() { 
    console.log(this.projects);
  }

  ngOnInit() : void {
  }

}
