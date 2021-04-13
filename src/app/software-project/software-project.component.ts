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
      full: "For the final project, my team and I created an app using Angular 9 framework with Google Map and RESTful APIs that we utilized from the City of Grand Rapids.  We wanted to educate the Grand Rapids residents by helping them confirm what can be recycled, appropriate ways to dispose recycables, locate nearby recycling centers, order bin services and determine their trash/recycling pick-up days."
    },

  {
    image: "assets/budget_buddy.png",
    title: "Budget Buddy",
    desc: "HTML/CSS/JavaScript",
    url: "https://bykerbry.github.io/Budget-Buddy/",
    full: "This is my first group project from the Grand Circus on learning how to utilize JavaScript to create a functional app.  It's a clean and simple user application on how to utilize their income to create a weekly budget and inputting expenses to update their budget. In the end, expenses report is generated to show how well they're spending money on a weekly basis."
  },
  {
    image: "assets/moviesAPI.png",
    title: "Movies out on Theater",
    desc: "Angular with RESTful API",
    url: "https://jo15on.netlify.com/",
    full: "This is an another group project on how to utilize RESTful API to create mutliple display on one webpage. This application is about educating users on what movies are out on theater and the plot of the movies. We also have search criteria to help user narrow down the type of movies they want to watch as well as favorite for the movies they are interested in watching for the future."
  },
  {
    image: "assets/superhero_trivia.png",
    title: "Superhero Trivia",
    desc: "Angular",
    url: "https://superherotrivia.netlify.com/",
    full: "While I was learning on the Angular framework, Grand Circus had us to do a fun project to gain a deeper understanding of how Angular works.  This app is a fun trivia game on Marvel and DC comics in which we utilized arrays to create questions and answers for users to figure out."
  },
  {
    image: "assets/calculator_react.png",
    title: "Calculator",
    desc: "React",
    url: "http://calculator-react.s3-website.us-east-2.amazonaws.com/",
    full: "I used my time during stay-at-home order to learn about React and created a Calculator app in a tutorial in which I modified the functionality code of a Calculator due to a fatal eval function as well as change the backspace code in order to make it work"
  }
  ];

  constructor() { 
  }

  ngOnInit() : void {
  }

}
