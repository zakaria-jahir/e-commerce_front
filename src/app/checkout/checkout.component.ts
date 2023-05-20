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

  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
  }
  setCheckout(f: NgForm) {
    console.log(f.value)
    this.service.checkout(f.value).subscribe((data) => {
      console.log(data);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur");
      }
    );

  }
}
