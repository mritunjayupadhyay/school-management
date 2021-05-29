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
  template: `
    <school-management-default-layout>
    <h1>kflsdjfi</h1>
      <router-outlet></router-outlet>
    </school-management-default-layout>
  `,
})
export class HomeComponent {
  menu = MENU_ITEMS;
}
