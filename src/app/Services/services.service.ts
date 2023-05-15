import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  loadProducts(){
    const url = 'http://localhost:8081/' + 'viewProduct.php';
    return this.http.get(url).pipe(map(data => data));
  }
}
