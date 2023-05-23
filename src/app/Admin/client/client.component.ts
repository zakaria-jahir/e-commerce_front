import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client: any
  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.getClient();
  }
  getClient(){
    this.service.loadClient().subscribe((data: any) => {
      console.log(data)
      this.client = data
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }

}

