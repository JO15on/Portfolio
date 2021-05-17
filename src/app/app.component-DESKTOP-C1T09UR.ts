import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Portfolio';
  opened: any;
  tablet: Observable<BreakpointState> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape]);

  constructor(private breakpointObserver : BreakpointObserver){}
  
}
