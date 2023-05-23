import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private service: ServicesService, private route: Router) { }

  ngOnInit(): void {
  }
  addCategory(f: NgForm) {
    console.log(f.value)
    this.service.addCategory(f.value).subscribe((data: any) => {
      if (data.success) {
        this.route.navigate(['admin/category']);
      } else {
        alert("please enter your category name")
      }
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur");
      }
    );

  }

}
