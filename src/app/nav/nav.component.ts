import { Component, OnInit } from '@angular/core';
import { faBagShopping, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  bag = faShoppingCart
  constructor() { }

  ngOnInit(): void {
  }

}
