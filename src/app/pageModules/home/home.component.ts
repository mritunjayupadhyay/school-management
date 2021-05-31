import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  }];

@Component({
  selector: 'school-management-home',
  styleUrls: ['home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  menu = MENU_ITEMS;
}
