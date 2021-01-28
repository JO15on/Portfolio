import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { PhotographyComponent } from './photography/photography.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SoftwareProjectComponent } from './software-project/software-project.component';
import { UXComponent } from './ux/ux.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent, 
    data: {animation: 'Home'}
  },
  {
  path: 'UXProjects',
  component: UXComponent, 
  data: {animation: 'UXProjects'}
  },
  {
    path: 'Contact',
    component: ContactComponent,
    data: {animation: 'Contact'}
  },
  {
    path: 'GraphicDesign',
    component: GraphicDesignComponent,
    data: {animation: 'GraphicDesign'}

  },
  {
    path: 'Photography',
    component: PhotographyComponent,
    data: {animation: 'Photography'}

  },
  {
    path: 'SocialMedia',
    component: SocialMediaComponent,
    data: {animation: 'SocialMedia'}

  },
  {
    path: 'SoftwareProject',
    component: SoftwareProjectComponent,
    data: {animation: 'SoftwareProject'}

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }