import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit {

  catName : string;

  public Category = [{name: 'Facebook'}, {name: 'Twitter'}, {name: 'Instagram'}, {name: 'Flyer'}];

  public Image = [
    {Name: 'Facebook', image: 'assets/nit_2nd_round.jpg'},
    {Name: 'Facebook', image: 'assets/nit_final_score.jpg'},
    {Name: 'Twitter', image: 'assets/patroit_day.jpg'},
    {Name: 'Facebook', image: 'assets/pregame.jpg'},
    {Name: 'Flyer', image: 'assets/get_on_the_bus.jpg'},
    {Name: 'Twitter', image: 'assets/senior_day_soccer.png'},
    {Name: 'Facebook', image: 'assets/senior_day_volleyball.jpg'},
    {Name: 'Twitter', image: 'assets/udm_gameday.jpg'},
    {Name: 'Instagram', image: 'assets/winning_streak.jpg'},
    {Name: 'Flyer', image: 'assets/udm_flyer.jpg'}
  ];

  public CategoryDetails: object = [];

  constructor() { 
    this.getCategory();
  }

  ngOnInit() {
  }

  getCategory(){
    return this.Category;
  }

  isObject(value) {
    debugger;
    return typeof value === 'object' ? true : false
  }

  SearchCategory(name : string){
    console.log(name);
    this.catName = name;
    let obj = this.Category.filter((m) => m.name == name);
    console.log(obj);
    this.CategoryDetails = obj;
    console.log(this.CategoryDetails);
    return this.CategoryDetails;
  }
}
