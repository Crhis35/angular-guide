import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'crhistian';
  imgUrl = 'https://picsum.photos/200';
  images = [
    'https://picsum.photos/200',
    'https://picsum.photos/300',
    'https://picsum.photos/400',
  ];

  currentDate = new Date();
  cost = 2000;
  temperature = 25.6;
  pizza = {
    toppings: ['peperoni', 'mushrooms', 'extra cheese'],
    size: ['xl', 'lg', 'xs'],
  };
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }
  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }
  logImg(event: string) {
    console.log(event);
  }
}
