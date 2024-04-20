import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { DetailComponent } from './detail/detail.component';
import { BoxDetailComponent } from './box-detail/box-detail.component';
import { BoxRegisterComponent } from './module/box-register/box-register.component';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from './crud/crud.component';
import { StoreComponent } from './page/store/store.component';
import { CatalogComponent } from './page/catalog/catalog.component';
import { LoginComponent } from './page/login/login.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './module/banner/banner.component';
import { ProductCardComponent } from './module/product-card/product-card.component';
import { ProductListComponent } from './module/product-list/product-list.component';
import { SidebarComponent } from './module/sidebar/sidebar.component';
import { HeaderComponent } from './module/header/header.component';
import { ProductDetailCardComponent } from './page/product-detail-card/product-detail-card.component';
import { CatagoryComponent } from './module/catagory/catagory.component';
import { ImageProductComponent } from './module/image-product/image-product.component';
import { BoxLoginComponent } from './module/box-login/box-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DetailComponent,
    BoxDetailComponent,
    BoxRegisterComponent,
    CrudComponent,
    StoreComponent,
    CatalogComponent,
    LoginComponent,
    ProfileComponent,
    BannerComponent,
    ProductCardComponent,
    ProductListComponent,
    SidebarComponent,
    HeaderComponent,
    ProductDetailCardComponent,
    CatagoryComponent,
    ImageProductComponent,
    BoxLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
