import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { DetailComponent } from './detail/detail.component';
import { CrudComponent } from './crud/crud.component';
import { StoreComponent } from './page/store/store.component';
import { LoginComponent } from './page/login/login.component';
import { CatalogComponent } from './page/catalog/catalog.component';
import { ProductDetailCardComponent } from './page/product-detail-card/product-detail-card.component';
import { ProfileComponent } from './page/profile/profile.component';



const routes: Routes = [
  {path: '',redirectTo:'index', pathMatch:'full'  },
  {path:'home',component:HomeComponent,children:[]},      
  {path:'register',component:RegisterComponent},
  {path:'detail',component:DetailComponent},
  {path:'crud',component:CrudComponent},
  {path:'index',component:StoreComponent},
  {path:'login',component:LoginComponent},
  {path:'catalog',component:CatalogComponent  },
  {path:'profile',component:ProfileComponent},
  // {path:'**',redirectTo:'index',pathMatch:'full'},
  {path:'product/:id/:name',component:ProductDetailCardComponent},
  {path:'catalog/:catagory',component:CatalogComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
