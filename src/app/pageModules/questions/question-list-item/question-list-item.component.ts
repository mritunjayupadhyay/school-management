import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'school-manangement-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.scss']
})
export class QuestionListItem implements OnInit {
  @Input() questionItem;
  ngOnInit() {
    console.log("question item", this.questionItem);
  }
}