import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { Panier } from 'src/app/classes/panier';
import { Observable, Subject, map } from 'rxjs';
import { Categorie } from 'src/app/classes/categorie';
import { Client } from '../classes/Client';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = 'http://127.0.0.1:8000'
  constructor(private http: HttpClient) { }

  loadProducts() {
    return this.http.get<Product[]>(`${this.url}/viewProduct.php`);
  }
  loadPanier() {
    return this.http.get<Panier[]>(`${this.url}/viewPanier.php`);
  }
  loadCategory() {
    return this.http.get<Categorie[]>(`${this.url}/viewPanier.php`);
  }
  loadLigne() {
    return this.http.get<any>(`${this.url}/viewLigne.php`);
  }
  public addProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/addProduct.php`, p);
  }
  public addPanier(p: Panier): Observable<Panier> {
    return this.http.post<Panier>(`${this.url}/addPanier.php`, p);
  }
  public addUser(p: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/createUser.php`, p);
  }
  public checkout(p: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/checkout.php`, p);
  }

}
