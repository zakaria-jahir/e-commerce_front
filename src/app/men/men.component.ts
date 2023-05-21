import { Component, OnInit } from '@angular/core';
import { faBagShopping, faExpandAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';
import { Product } from '../classes/product';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  bag = faBagShopping
  ex = faExpandAlt
  star = faStar
  products: any
  id_product: any
  category: any
  img: any
  constructor(private service: ServicesService, private route: Router) { }
  isloggedin = false
  ngOnInit(): void {
    this.getProducts();
    this.isloggedin = this.service.isAuthenticated()
    this.loadCategory()
  }

  naviguer(p: any) {
    this.isloggedin = this.service.isAuthenticated()
    if (this.isloggedin) {
      this.createPanier();
      this.id_product = p.id_product;

      this.addProduct(this.service.getId(), this.id_product);
      this.route.navigate(['/client/panier']);
    } else {
      this.route.navigate(["/signUp"]);
    }
  }
  getProducts() {
    this.service.loadProductMen().subscribe((data: Product[]) => {
      this.products = data;
      this.img = this.products[0].pic;
      console.log(this.products)
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  createPanier() {
    this.service.createPanier(this.service.getId()).subscribe((data: any) => {
      console.log(data)
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  addProduct(id_client: any, id_product: any) {
    this.service.addProductLigne(id_client, id_product).subscribe((data: any) => {
      console.log(data)
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  loadCategory() {
    this.service.loadCategory().subscribe((data: any) => {
      console.log(data)
      this.category = data
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }

}
