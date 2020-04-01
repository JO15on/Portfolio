import { Component, OnInit } from '@angular/core';
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
      full: "Nearly $56 million worth of recyclable items has been thrown into West Michigan landfills. Plastics, metals, textiles, paper; all of these items can bring value to our community. With GReen, we’ve created a tool to help our fellow Grand Rapids residents live greener. The city of Grand Rapids is continuing to invest in a more sustainable future. With the infrastructure in place, it’s now a matter of awareness and education. We had the unique opportunity to look at our own experiences and draw from those to problem solve for better user experience. As a team comprised of Grand Rapids residents, we wanted to use our passion for our city to benefit our planet. This was an exciting opportunity to contribute to both. GReen educates Grand Rapids residents by helping them confirm what can be recycled, appropriate ways to dispose of recyclables, locate nearby recycling centers, order their recycling services, and determine their pick-up days."
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
