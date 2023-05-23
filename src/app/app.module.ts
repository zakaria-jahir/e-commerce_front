import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { AdminDashComponent } from './Admin/admin-dash/admin-dash.component';
import { ProfilComponent } from './Admin/profil/profil.component';
import { ProductComponent } from './Admin/product/product.component';
import { OrderComponent } from './Admin/order/order.component';
import { ClientComponent } from './Admin/client/client.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { AdminNav2Component } from './Admin/admin-nav2/admin-nav2.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PanierComponent } from './panier/panier.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidComponent } from './kid/kid.component';
import { CategoryComponent } from './Admin/category/category.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HomeComponent,
    ContactComponent,
    AdminDashComponent,
    ProfilComponent,
    ProductComponent,
    OrderComponent,
    ClientComponent,
    AdminNavComponent,
    AdminNav2Component,
    CheckoutComponent,
    PanierComponent,
    SignUpComponent,
    SignInComponent,
    WomenComponent,
    MenComponent,
    KidComponent,
    CategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    AddproductComponent,
    EditproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
