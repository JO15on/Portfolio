import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IWork } from 'src/app/work';


@Component({
  selector: 'app-uxwork',
  templateUrl: './uxwork.component.html',
  styleUrls: ['./uxwork.component.css']
})
export class UxworkComponent implements OnInit {

  show: boolean = false;

  @Input() 
  work: IWork;

  @Output() hideProjects : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openProject(index: number) {
    this.show = !this.show;
    this.hideProjects.emit(this.show);
  }

  scrollToElement($element) : void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
