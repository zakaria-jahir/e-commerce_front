import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
  delete(id_product: any) {
    this.service.deleteProduct(id_product)
      .subscribe((data: any) => {
        this.route.navigate(["/admin/product"]);
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
          console.log("erreur");
          this.route.navigate(["/admin/product"]);
        });
        this.route.navigate(["/admin/product"]);
  }
  goToEdit(product: any){
    this.route.navigate(['admin/editproduct',product.id_product]);
  }

}
