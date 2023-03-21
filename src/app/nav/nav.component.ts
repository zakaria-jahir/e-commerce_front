import { Component, OnInit } from '@angular/core';
import { faBagShopping, faExpandAlt, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  bag = faBagShopping
  constructor() { }

  ngOnInit(): void {
  }

}
