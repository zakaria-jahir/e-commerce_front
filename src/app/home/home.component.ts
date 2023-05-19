import { Component, OnInit } from '@angular/core';
import { faBagShopping, faExpandAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';
import { Product } from '../classes/product';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bag = faBagShopping
  ex = faExpandAlt
  star = faStar
  products: any
  img: any
  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.service.loadProducts().subscribe((data: Product[]) => {
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

}
