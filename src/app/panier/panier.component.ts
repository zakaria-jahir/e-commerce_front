import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';
import { Panier } from '../classes/panier';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  products: any
  total: number = 0;
  quantite: any
  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.service.loadLigne(this.service.getId()).subscribe((data: any) => {
      this.products = data.data;
      this.quantite = this.products[0].quantite
      this.calculateTotal()
      console.log("qte", this.quantite)
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  /*---------Quantite-----------*/
  updateQuantiteUp(product: any) {
    product.quantite++; // Increase the quantity by 1
    this.updateQuantite(product);
  }

  updateQuantiteDown(product: any) {
    if (product.quantite > 1) {
      product.quantite--; // Decrease the quantity by 1
      this.updateQuantite(product);
    }
  }

  updateQuantite(product: any) {
    this.calculateTotal()
    this.service.updateQuantite(product.id_panier, product.id_product, product.quantite)
      .subscribe((data: any) => {
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
          console.log("erreur");
        });
  }
  /*--------------------Total-------*/
  calculateTotal() {
    this.total = 0; // Reset total
    for (let product of this.products) {
      this.total += product.price * product.quantite; // Calculate total based on product prices and quantities
    }
    this.service.setTotal(this.total)
  }
  /***********delete---------- */
  // delete(id_product: any, id_panier: any) {
  //   this.service.deleteProductFromCommande(id_product, id_panier)
  //     .subscribe((data: any) => {
  //       this.getProducts()
  //     },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //         console.log("erreur");
  //       });
  // }
  delete(id_product: any, id_panier: any) {
    this.service.deleteProductFromCommande(id_product, id_panier)
      .subscribe((data: any) => {
        this.service.loadLigne(this.service.getId()).subscribe((data: any) => {
          this.products = data.data;
          if (this.products == null) {
            this.total = 0
          } else {
            this.calculateTotal()
          }
        })

      },
        (error: HttpErrorResponse) => {
          alert(error.message);
          console.log("erreur");
        });
  }
  /*****************/

}
