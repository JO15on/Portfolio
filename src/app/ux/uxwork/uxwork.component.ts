import { Component, OnInit, Input } from '@angular/core';
import { IWork } from 'src/app/work';

@Component({
  selector: 'app-uxwork',
  templateUrl: './uxwork.component.html',
  styleUrls: ['./uxwork.component.css']
})
export class UxworkComponent implements OnInit {

  show: boolean = false;

  @Input()
  work: IWork

  constructor() { }

  ngOnInit(): void {
  }

  openProject() {
    this.show != this.show;
  }

  scrollToElement($element){
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
