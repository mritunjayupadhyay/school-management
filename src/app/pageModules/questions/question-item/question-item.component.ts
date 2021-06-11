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