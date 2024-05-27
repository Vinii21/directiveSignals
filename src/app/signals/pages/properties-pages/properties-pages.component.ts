import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-pages.component.html',
  styleUrl: './properties-pages.component.css'
})
export class PropertiesPagesComponent {

  public user = signal<User>({
    id: 1,
    email: 'george.blueth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public full_name = computed(()=> `${this.user().first_name} ${this.user().last_name}`);

  public onFieldUpdated(field: keyof User, value: string) {
    this.user.update(current => {
      switch(field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
      }
      return current;
    })
  }

}
