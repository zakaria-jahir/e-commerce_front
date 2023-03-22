import { Component, OnInit } from '@angular/core';
import { faBagShopping, faExpandAlt, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bag = faBagShopping
  ex = faExpandAlt
  star = faStar

  constructor() { }

  ngOnInit(): void {
  }

}
