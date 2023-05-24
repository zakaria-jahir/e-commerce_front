import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders : any

  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(){
    this.service.loadOrders().subscribe((data: any) => {
      console.log(data)
      this.orders = data
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  

}
