import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { PhotographyComponent } from './photography/photography.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SoftwareProjectComponent } from './software-project/software-project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'GraphicDesign',
    component: GraphicDesignComponent
  },
  {
    path: 'Photography',
    component: PhotographyComponent
  },
  {
    path: 'SocialMedia',
    component: SocialMediaComponent
  },
  {
    path: 'SoftwareProject',
    component: SoftwareProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }