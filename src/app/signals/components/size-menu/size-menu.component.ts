import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-size-menu',
  templateUrl: './size-menu.component.html',
  styleUrl: './size-menu.component.css'
})
export class SizeMenuComponent {

  public menuItems = signal<MenuItem[]>([
    {title: 'Counter', router: 'counter'},
    {title: 'Usuario', router: 'user-info'},
    {title: 'Mutaciones', router: 'properties'}
  ]);

  /* public menuItems: MenuItem[] = [
    {title: 'Counter', router: 'counter'},
    {title: 'Usuario', router: 'user-info'},
    {title: 'Mutaciones', router: 'properties'},
  ] */

}
