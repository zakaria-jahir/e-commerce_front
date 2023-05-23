import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: any
//  private location: Location
  constructor(private service: ServicesService, private route: Router) { }
  
  ngOnInit(): void {
    this.loadCategory()
  }

  loadCategory() {
    this.service.loadCategory().subscribe((data: any) => {
      console.log(data)
      this.category = data
    
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
      }
    );
  }
  delete(id_category: any) {
    this.service.deleteCategory(id_category)
      .subscribe((data: any) => {
        this.route.navigate(["admin/category"]);
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
          console.log("erreur");
          this.route.navigate(["admin/category"]);
        });
        this.route.navigate(["admin/category"]);
    
  }
}
