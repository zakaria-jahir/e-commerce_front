import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo:'home' , pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'women',component:HomeComponent},
  {path:'men',component:HomeComponent},
  {path:'shop',component:HomeComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
