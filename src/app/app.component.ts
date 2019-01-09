import { Component } from '@angular/core';

// import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Expression Operators';
  // currentHero: hero;

  product = {
    name: 'frimfram',
    price: 42
  };




  hero = {
    name : 'Bob',
    birthdate : new Date(1930, 1, 25),
    price: 98
  };

  nullhero = null;

}

