import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  searchProduct : string;

  displayWeb : boolean = false;

  ngOnInit(): void {
  }


  handleClose() {
    this.searchProduct = '';
    this.displayWeb = false;
  }

  handleSearchWeb() {
    this.displayWeb = true;
  }
}


