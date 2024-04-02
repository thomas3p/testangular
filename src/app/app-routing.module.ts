import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    //component:AppComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    children:[]
  },      
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'detail',
    component:DetailComponent
  },
  {
    path:'**',redirectTo:'home',pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
