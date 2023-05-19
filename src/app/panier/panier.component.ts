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
  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.service.loadLignePanier().subscribe((data: Panier[]) => {
      this.products = data;
      console.log(this.products)
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }

}
