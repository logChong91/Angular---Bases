import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = 'Ironman';
    public age:    number = 45;
    
    get capitalizedName(): string {
      return `Hola ${this.name}`.toUpperCase();
    }

    getHeroDescription(): string {

      return ` ${this.name} - ${this.age}`;
    }

    changeHero(): void {

      this.name = 'Spiderman';
      
      } 

    changeAge() {

      this.age = 25;
    }

    resetForm() {
      this.name = 'Ironman';
      this.age = 45;
    }
}
