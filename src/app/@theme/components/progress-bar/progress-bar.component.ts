import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'school-management-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() maxPoint: number = 5;
  @Input() point: number = 0;
  @Input() status: string;
  widthPercentage: number = 40;
  constructor() {
    this.widthPercentage = (this.point / this.maxPoint) * 100;
  }
  getWidthPercentage() {

    return `40%`;
  }
}
