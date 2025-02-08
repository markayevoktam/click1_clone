import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  menuItems = [
    { name: 'Xizmat haqida', subItems: ['Kompaniya haqida', 'Yangiliklar', 'Tariflar'] },
    { name: 'Yordam', subItems: ['Tez-tez so‘raladigan savollar', 'Maxfiylik siyosati'] },
    { name: 'Click Business', subItems: ['Click Business haqida', 'Hamkorlik'] },
    { name: 'Xizmatlar', subItems: ['Click hamyon', 'Avtoto‘lov', 'Telegram-bot'] }
  ];

  selectedItem: any = this.menuItems[0];

  selectMenu(item: any) {
    this.selectedItem = item;
  }
  ngOnInit(): void {
  }

}
