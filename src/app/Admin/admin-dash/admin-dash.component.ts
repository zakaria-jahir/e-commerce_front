import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  clientTotla: any
  productTotal: any
  orderTotal: any
  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getClientTotal();
    this.getProductTotal();
    this.getOrderTotal();
  }
  getClientTotal(){
    this.service.loadTotalClients().subscribe((data: any) => {
      console.log(data.success['nbr']);
      this.clientTotla = data.success['nbr'];
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  getProductTotal(){
    this.service.loadTotalProduct().subscribe((data: any) => {
      console.log(data.success['nbr']);
      this.productTotal = data.success['nbr'];
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  getOrderTotal(){
    this.service.loadTotalOrders().subscribe((data: any) => {
      console.log(data.success['nbr']);
      this.orderTotal = data.success['nbr'];
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }

}
