import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { DetailComponent } from './detail/detail.component';
import { CrudComponent } from './crud/crud.component';
import { StoreComponent } from './page/store/store.component';
import { LoginComponent } from './page/login/login.component';
import { CatalogComponent } from './page/catalog/catalog.component';



const routes: Routes = [
  {
    path: '',
    redirectTo:'index',
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
    path:'crud',
    component:CrudComponent
  },{
    path:'index',
    component:StoreComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'catalog',
    component:CatalogComponent
  },
  {
    path:'**',redirectTo:'index',pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
