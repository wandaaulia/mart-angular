import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  asianShopLeft = ['K-Beauty', 'Asian Snacks', 'Anime Merch'];

  asianShopRight = ['J-Beauty', 'Cozy Corner', 'Essentials']

}
