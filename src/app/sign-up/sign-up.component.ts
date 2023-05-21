import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
  }
  setClient(f: NgForm) {
    console.log(f.value)
    this.service.addUser(f.value).subscribe((data: any) => {
      if (data.success) {
        this.route.navigate(['signIn']);
      } else {
        alert("please enter your owner email")
      }
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur");
      }
    );

  }
}
