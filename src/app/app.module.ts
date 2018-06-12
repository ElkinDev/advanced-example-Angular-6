import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { UseJqueryComponent } from './use-jquery/use-jquery.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShadowTitleDirective } from './shadow-title.directive';
import { listParent } from './forms/lists-parent';
import { listsChild } from './forms/list-child';
import { notaDetailComponent } from './forms/nota-detail.component';
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
  },
  {
    path:'forms/:id',
    component:notaDetailComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'use-jquery',
    component:UseJqueryComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      FormsComponent,
        listParent,
        listsChild,
      UseJqueryComponent,
      ContactoComponent,
      HeaderComponent,
      notaDetailComponent,      
      ShadowTitleDirective
      
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [ListTareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
