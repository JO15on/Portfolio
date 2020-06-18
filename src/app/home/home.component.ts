import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgPath="url('assets/Jon_SM.jpg')";

  constructor() { }

  ngOnInit() {
  }

}
