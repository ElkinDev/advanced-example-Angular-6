import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';

import { RouterModule, Route, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShadowTitleDirective } from './shadow-title.directive';
import { listsChild } from './forms/list-child';
import { ListTareasService } from './list-tareas.service';

export const appRoutes:Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'forms',
    component:FormsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      FormsComponent,
        listsChild,
      HeaderComponent,
      ShadowTitleDirective
      
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [ListTareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
