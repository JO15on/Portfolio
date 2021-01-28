import { Component, OnInit, Input } from '@angular/core';
import { IWork } from 'src/app/work';
import { IDetail } from '../detail';

@Component({
  selector: 'app-ux',
  templateUrl: './ux.component.html',
  styleUrls: ['./ux.component.css']
})
export class UXComponent implements OnInit {

  works : IWork[] = [
    {
      image: "assets/GReen_logo.png",
      title: "GReen",
      view: "view"
    },
    {
      image: "assets/Tulsa.png",
      title: "University of Tulsa",
      view: "view"
    },
    {
      image: "assets/UDM.png",
      title: "University of Detroit Mercy",
      view: "view"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
