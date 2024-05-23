import { Component } from '@angular/core';

@Component({
  templateUrl: './properties-pages.component.html',
  styleUrl: './properties-pages.component.css'
})
export class PropertiesPagesComponent {

  public onFieldUpdated(field: string, value: string) {
    console.log({field, value})
  }

}
