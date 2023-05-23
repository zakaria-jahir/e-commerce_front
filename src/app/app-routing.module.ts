import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDashComponent } from './Admin/admin-dash/admin-dash.component';
import { ProfilComponent } from './Admin/profil/profil.component';
import { ProductComponent } from './Admin/product/product.component';
import { OrderComponent } from './Admin/order/order.component';
import { ClientComponent } from './Admin/client/client.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PanierComponent } from './panier/panier.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidComponent } from './kid/kid.component';
import { CategoryComponent } from './Admin/category/category.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'women', component: WomenComponent },
  { path: 'men', component: MenComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminDashComponent },
  { path: 'admin/profil', component: ProfilComponent },
  {path: 'admin/category', component: CategoryComponent},
  {path: 'admin/addcategory', component: AddcategoryComponent},
  {path: 'admin/editcategory/:id', component: EditcategoryComponent },
  { path: 'admin/product', component: ProductComponent },
  { path: 'admin/addproduct', component: AddproductComponent},
  { path: 'admin/editproduct/:id', component: EditproductComponent },
  { path: 'admin/order', component: OrderComponent },
  { path: 'admin/client', component: ClientComponent },
  { path: 'client/checkout', component: CheckoutComponent },
  { path: 'client/panier', component: PanierComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'kid', component: KidComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
