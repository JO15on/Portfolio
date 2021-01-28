import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SoftwareProjectComponent } from './software-project/software-project.component';
import { ContactComponent } from './contact/contact.component';
import { PhotographyComponent } from './photography/photography.component';
import { NgxTweetModule } from "ngx-tweet";
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatIconModule, } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectComponent } from './software-project/project/project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UXComponent } from './ux/ux.component';
import { UxworkComponent } from './ux/uxwork/uxwork.component';
import { UxdetailComponent } from './ux/uxdetail/uxdetail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphicDesignComponent,
    SocialMediaComponent,
    SoftwareProjectComponent,
    ContactComponent,
    PhotographyComponent,
    FooterComponent,
    ProjectComponent,
    UXComponent,
    UxworkComponent,
    UxdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTweetModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    NgxTwitterTimelineModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
