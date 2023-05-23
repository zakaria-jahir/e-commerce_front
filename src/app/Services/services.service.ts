import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { Panier } from 'src/app/classes/panier';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Categorie } from 'src/app/classes/categorie';
import { Client } from '../classes/Client';
import { HttpResponse } from '../classes/http-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  id!: number;
  total!: any;
  url = 'http://127.0.0.1:8081'
  private isUserLoggedIn = new BehaviorSubject(false);
  currentLoginStatus = this.isUserLoggedIn.asObservable();
  private username = new BehaviorSubject('');
  currentUsername = this.username.asObservable();

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  private token: any;
  constructor(private http: HttpClient) { }

  

  loadProducts() {
    return this.http.get<Product[]>(`${this.url}/viewProduct.php`);
  }
  /*---------loadProductMen's----------*/
  loadProductMen() {
    return this.http.get<Product[]>(`${this.url}/viewMen.php`)
  }
  /*---------------------*/
  /*---------loadProductMen's----------*/
  loadProductWomen() {
    return this.http.get<Product[]>(`${this.url}/viewWomen.php`)
  }
  /*---------------------*/
  /*-----------loadProductKid---------------*/
  loadProductKid() {
    return this.http.get<Product[]>(`${this.url}/viewKid.php`)
  }
  /*-------------------*/

  deleteCategory(id_category: any){
    return this.http.delete<any>(`${this.url}/deleteCategory.php?id_category=${id_category}`)
  }
  deleteProduct(id_product: any){
    return this.http.delete<any>(`${this.url}/deleteProduct.php?id_product=${id_product}`)
  }
  /*------------delete product from ligne commande------*/
  deleteProductFromCommande(id_product: any, id_panier: any) {
    return this.http.delete(`${this.url}/deleteFromLigneCommande.php?id_product=` + id_product + `&id_panier=` + id_panier);
  }
  /*----------------*/
  /*-------chargerPanier------------ */
  public chargerPanier(id_panier: any,montant_total:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const obj = { id_panier,montant_total }
    let data = JSON.stringify(obj);
    return this.http.put(`${this.url}/chargerPanier.php`, data, { headers });
  }/*----------------*/
  loadOrders(){
    return this.http.get<Panier[]>(`${this.url}/viewPanier.php`);
  }
  
  loadPanier() {
    return this.http.get<Panier[]>(`${this.url}/viewPanier.php`);
  }
  loadCategory() {
    return this.http.get<Categorie[]>(`${this.url}/viewCategory.php`);
  }
  loadCategoryById(id_category: any){
    return this.http.get<Categorie[]>(`${this.url}/viewCategoryById.php?id_category=`+id_category);
  }
  loadLigne(id: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const obj = { id1: id }
    let data = JSON.stringify(obj);
    return this.http.post(`${this.url}/viewLigne.php`, data, { headers });
  }
  loadClient(){
    return this.http.get<Client[]>(`${this.url}/viewClient.php`);
  }
  loadTotalClients(){
    return this.http.get<Client[]>(`${this.url}/totalClient.php`).pipe(map(data => data));
  }
  // loadTotalProducts(){
  //   return this.http.get<Client[]>(`${this.url}/totalProduct.php`);
  // }
  // loadTotalOrders(){
  //   return this.http.get<Client[]>(`${this.url}/viewOrder.php`);
  // }
  /*------------------------*/
  getTotal() {
    return localStorage.getItem("ttl");
  }
  setTotal(ttl: any) {
    localStorage.setItem("ttl", ttl);
  }
  public addCategory(p: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let data = JSON.stringify(p);
    return this.http.post(`${this.url}/addCategory.php`, data, { headers });
  }
  public addProduct(p: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
      
      let data = JSON.stringify(p); 
      return this.http.post(`${this.url}/addProduct.php`, data, { headers });
      }
  /*------------------------*/
  public addProductLigne(id_client: any, id_product: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const obj = { id_client, id_product }
    let data = JSON.stringify(obj);
    return this.http.post(`${this.url}/addProductLigneCommande.php`, data, { headers });
  }
  /*-----------------------*/

  public createPanier(id_client: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const obj = { id_client }
    let data = JSON.stringify(obj);
    return this.http.post(`${this.url}/createPanier.php`, data, { headers });
  }
  /*------------------------*/
  public updateQuantite(id_panier: any, id_product: any, quantite: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const obj = { id_panier, id_product, quantite }
    let data = JSON.stringify(obj);
    return this.http.put(`${this.url}/updateQuantite.php`, data, { headers });
  }
  updateCategory(category: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
      const obj = { id_category: category.id_category, name:category.name}
      let data = JSON.stringify(obj);
      return this.http.put(`${this.url}/updateCategory.php`, data, { headers });
  }
  /*------------------------*/
  public addUser(p: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let data = JSON.stringify(p);
    return this.http.post(`${this.url}/createUser.php`, data, { headers });
  }
  /*-------------------------*/
  public checkout(p: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/checkout.php`, p);
  }
  /*-----------------------------*/
  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    if (user != null) {
      return true
    }
    return false

  }
  /*------------------------*/
  getToken() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
  /*--------------------------*/
  setToken(token: string) {
    this.token = token;
  }
  /*----------------------------*/
  getId() {
    return localStorage.getItem('id');
  }
  /*-------------------------*/
  setId(id: any) {
    localStorage.setItem('id', id)
  }
  /*---------------------*/
  logIn(mail: any, pass: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { mail, pass };
    let data = JSON.stringify(body);
    console.log(data)
    return new Observable((observer) => {
      this.http.post(this.url + '/loginClient.php', data, { headers }).subscribe(
        (response) => {
          const data = JSON.stringify(response);
          localStorage.setItem('user', data);
          console.log(localStorage);
          observer.next(response);
          observer.complete();
        },
        (error) => {
          console.error(error);
          observer.error(error);
        }
      );
    });
  }
}
