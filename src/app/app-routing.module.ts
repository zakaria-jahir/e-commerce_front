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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'women', component: HomeComponent },
  { path: 'men', component: HomeComponent },
  { path: 'shop', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminDashComponent },
  { path: 'admin/profil', component: ProfilComponent },
  { path: 'admin/product', component: ProductComponent },
  { path: 'admin/order', component: OrderComponent },
  { path: 'admin/client', component: ClientComponent },
  { path: 'client/checkout', component: CheckoutComponent },
  { path: 'client/panier', component: PanierComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
