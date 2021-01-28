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
      view: "view",
      index: 0
    },
    {
      image: "assets/Tulsa.png",
      title: "University of Tulsa",
      view: "view",
      index: 1
    },
    {
      image: "assets/UDM.png",
      title: "University of Detroit Mercy",
      view: "view",
      index: 2
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
