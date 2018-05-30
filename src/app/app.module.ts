import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { UseJqueryComponent } from './use-jquery/use-jquery.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShadowTitleDirective } from './shadow-title.directive';
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
      UseJqueryComponent,
      ContactoComponent,
      HeaderComponent,
      ShadowTitleDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
