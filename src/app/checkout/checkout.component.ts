import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: any
  ttl: any
  option: any
  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getProducts()
    this.ttl = this.service.getTotal()
  }
  setCheckout(f: NgForm) {
    console.log(f.value)
    this.service.checkout(f.value).subscribe((data) => {
      console.log(data);
      alert("order successfully")
      this.option = "you will recive your order in 2 days"
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur");
      }
    );
  }
  getProducts() {
    this.service.loadLigne(this.service.getId()).subscribe((data: any) => {
      this.products = data.data;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  /*----------chargerPanier*/
  chargerPanier(id_panier: any, montant_total: any) {
    this.service.chargerPanier(id_panier, montant_total).subscribe((data: any) => {
      this.products = data.data;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  /*-----------*/
}
