import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Client } from '../classes/Client';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: any
  ttl: any
  option: any
  client: any
  check = false
  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getProducts()
    this.ttl = this.service.getTotal()
    this.client= new Client();
  }
  // setCheckout(f: NgForm) {
  //   console.log(f.value)
  //   this.service.checkout(f.value).subscribe((data) => {
  //     console.log(data);
  //     alert("order successfully")
  //     this.option = "you will recive your order in 2 days"
  //   },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       console.log("erreur");
  //     }
  //   );
  // }
  setCheckout(f: NgForm) {
    this.client.id_client = this.service.getId()
    this.client.name_client = f.value.name_client
    this.client.last_name = f.value.last_name
    this.client.mail = f.value.mail
    this.client.adresse = f.value.adresse
    this.client.phone = f.value.phone
    this.client.pass = this.service.getPass()
    console.log(f.value)
    this.service.checkout(this.client).subscribe((data) => {
      console.log(data);
      console.log(this.service.getId(),this.service.getTotal())
      this.chargerPanier(this.service.getId(),this.service.getTotal());
      alert("order successfully")
      this.check = true
      this.option = "we will contact you in 24 hours"
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
  chargerPanier(id_client: any, montant_total: any) {
    this.service.chargerPanier(id_client, montant_total).subscribe((data: any) => {
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
