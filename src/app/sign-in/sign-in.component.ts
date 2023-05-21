import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';
import { Client } from '../classes/Client';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private service: ServicesService, private route: Router) { }
  id: any
  ngOnInit(): void {
    localStorage.clear()
  }
  logIn(f: NgForm) {
    console.log("jlkjlk", f.value.mail)
    this.service.logIn(f.value.mail, f.value.pass).subscribe((data: any) => {
      console.log(data);
      this.id = data["id_client"]
      console.log(this.id)
      this.service.setId(this.id)
      this.route.navigate(["/home"])
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur");
      }
    );

  }
}
