import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-pages.component.html',
  styleUrl: './counter-pages.component.css'
})
export class CounterPagesComponent {

  public counter = signal(10);
  public squareCounter = computed(()=> this.counter() * this.counter())

  increaseBy(value: number) {
    this.counter.update( current => current + value );
  }

}
