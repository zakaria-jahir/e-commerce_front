import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
=======
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo:'home' , pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
>>>>>>> 60cfc9fdb6f723b7c5d25422025b0d3261e27118
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
