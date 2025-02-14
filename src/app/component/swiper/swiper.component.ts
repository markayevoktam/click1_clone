import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newsList = [
    {
      image: 'assets/news1.png',
      title: 'Muhim yangiliklar',
      date: '28.11.2024',
      link: '#'
    },
    {
      image: 'assets/news2.png',
      title: 'Click SuperApp bo‘ldi',
      date: '02.12.2024',
      link: '#'
    },
    {
      image: 'assets/news3.png',
      title: 'Muhim o‘zgarishlar',
      date: '30.12.2024',
      link: '#'
    }
  ]
}
