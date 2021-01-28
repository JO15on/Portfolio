import { Component, OnInit } from '@angular/core';
import { IDetail } from 'src/app/detail';

@Component({
  selector: 'app-uxdetail',
  templateUrl: './uxdetail.component.html',
  styleUrls: ['./uxdetail.component.css']
})
export class UxdetailComponent implements OnInit {

  projects : IDetail[] = [
    {
      title: "GReen",
      sub_title: "UX - Wireframing, Information Architecture, Prototyping",
      image: "assets/GReen_prototype.png",
      image2: "assets/GReen_Website.png",
      image3: "assets/GReen_mobile.png",
      desc: "I collaborated with my team members for this group project in which we had to create an app from scratch. To create an effective app, we started with information architecture on what information is important for this app before we even start doing wireframing.  Once we got it all set with pertinent information for the app, we began to wireframe from InVision Design of what we want the app to look like in mobile-first design. Each team member had their tasks to create a code of HTML, CSS, and JavaScript to create an app.  Once we finalized our mobile design, we explored what we wanted the desktop version to look like so we did a lo-fi prototype design."
    },
    {
      title: "University of Tulsa",
      sub_title: "UX Design - Wireframing, Partner Agency Collaboration, Usability Testing, Database Analytics, User Interface Design and User Flows",
      image: "assets/Tulsa_branding.png",
      image2: "assets/Tulsa_website.png",
      image3: "assets/Tulsa_mobile.png",
      desc: "I evaluated existing features to identify the most relevant info in the context of the website home screen by pulling out data from a 3rd party system. I collaborated with the software developer from CBS Sports Digital, Communications Department, and the Marketing Department on wireframing the design. While wireframing, we did usability testing with the senior administrators and fans to determine the effectiveness of the wireframing design. As we get closer to finalizing our design, Sketch app was utilized for the early look of the design and functionality of the website then utilize our users to finalize our website design before handing it over to the software developer."
    },
    {
      title: "University of Detroit Mercy",
      sub_title: "UX Design - Partner Agency Collaboration, User Flows, Database Analytics",
      image: "assets/UDM_branding.png",
      image2: "assets/UDM_website.png",
      image3: "assets/UDM_mobile.png",
      desc: "I worked with Sidearm Sports to analyze the previous website database and evaluated the website features to identify relevant information for the home screen. In different stages of design, I worked on usability testing to ensure that the website looks good and makes sense for the users."
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
