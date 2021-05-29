import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Welcome',
    icon: 'home-outline',
    link: '/welcome',
    home: true,
  },
  {
    title: 'Question',
    icon: 'question-mark-circle-outline',
    link: '/question',
  }];

@Component({
  selector: 'school-management-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  menu = MENU_ITEMS;
}
