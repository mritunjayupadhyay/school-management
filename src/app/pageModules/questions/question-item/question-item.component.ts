import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'school-management-question-item',
  templateUrl: "./question-item.component.html",
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {
  question_id: string;
  todayDate : Date = new Date();
  options = [
    {
      option_id: 1,
      text: 'When you leave an empty space between the track values, the grid lines are automatically assigned positive and negative numbers: When you leave an empty space between the track values, the grid lines are automatically assigned positive and negative numbers:',
      correct: false
    },
    {
      option_id: 2,
      text: 'Akbar',
      correct: true
    },
    {
      option_id: 3,
      text: 'Chandra Gupta',
      correct: true
    },
    {
      option_id: 4,
      text: 'Ashok',
      correct: false
    },
  ];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.question_id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.question_id = params['id'];
      }
    )
  }
}