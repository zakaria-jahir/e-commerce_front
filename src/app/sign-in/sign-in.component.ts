import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../Services/services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
  }
  setClient(form: NgForm) {
    console.log(form.value)
    console.log("dsfsd");
    /*this.service.addPatient(p.value).subscribe(data => {
      console.log(data)
      alert("patient a ajouté")
      this.getPatient()
    },
      (error: HttpErrorResponse) => {
        alert(error.message)
      })
    */}

}
