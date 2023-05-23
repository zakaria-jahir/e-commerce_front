import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  categoryId = this.activatedRoute.snapshot.params['id'];
  category = {id_category:0,name:"zack"};
  constructor(private service: ServicesService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.categoryId);
    let categoryId = '';
    if(this.activatedRoute.snapshot.params['id']) {
      categoryId = this.activatedRoute.snapshot.params['id'];
      if (categoryId !== '') {
         console.log(categoryId);
         this.getCategoryById(categoryId);
      }
    }
    
  }
  getCategoryById(categoryId: any){
     this.service.loadCategoryById(categoryId).subscribe((data: any) => {
      console.log(data);
      this.category = data;

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      console.log("erreur")
    }
    );
  }

  updateCategory(form: any){
    console.log(form.value);
    this.service.updateCategory(form.value).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['admin/category']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
        }
        );
        }
  

}
