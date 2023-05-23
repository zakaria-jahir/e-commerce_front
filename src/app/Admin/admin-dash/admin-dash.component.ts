import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
[x: string]: any;
  clientTotla: any
  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getClientTotal();
  }
  getClientTotal(){
    this.service.loadTotalClients().subscribe((data: any) => {
      console.log(data)
      this.clientTotla = data
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }

}
