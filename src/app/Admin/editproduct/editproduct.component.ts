import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productId = this.activatedRoute.snapshot.params['id'];
  product = {id_product:0,id_category:2,name_product:"test" ,description:"test",price:"test",availability:"test"};

  constructor(private service: ServicesService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.productId);
    let productId = '';
    if(this.activatedRoute.snapshot.params['id']) {
      productId = this.activatedRoute.snapshot.params['id'];
      if (productId !== '') {
         console.log(productId);
         this.getProductById(productId);
      }
    }
  }
  getProductById(productId: any){
    this.service.loadProductById(productId).subscribe((data: any) => {
     console.log(data);
     this.product = data;

   },
   (error: HttpErrorResponse) => {
     alert(error.message);
     console.log("erreur")
   }
   );
 }
  updateProduct(form: any){
    console.log(form.value);
    // console.log(form.value.id_product);
    this.service.updateProduct(form.value).subscribe((data: any) => {
      console.log(data);
      console.log(form.value.id_product);
      this.route.navigate(['admin/product']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("erreur")
        }
        );
        }

}
