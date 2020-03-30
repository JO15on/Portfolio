import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SoftwareProjectComponent } from './software-project/software-project.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PhotographyComponent } from './photography/photography.component';
import { NgxTweetModule } from "ngx-tweet";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphicDesignComponent,
    SocialMediaComponent,
    SoftwareProjectComponent,
    AboutComponent,
    ContactComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTweetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
