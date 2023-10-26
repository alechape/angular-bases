import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="incrementarPor(1)">+ 1</button>
    <button (click)="resetear()">Reset</button>
    <button (click)="incrementarPor(-1)">- 1</button>
    `
})

export class CounterComponent {
  public counter: number = 10;

  incrementarPor(value: number):void{
    this.counter += value;
  }

  resetear():void{
    this.counter=10;
  }
}
