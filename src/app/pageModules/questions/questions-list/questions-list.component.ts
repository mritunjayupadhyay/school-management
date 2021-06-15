import { QuestionListService } from './questions-list.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'school-management-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
})
export class QuestionsListComponent implements OnInit {
  questionList: Array<any>;
  constructor(private questionListService: QuestionListService) {}

  ngOnInit() {
    this.questionList = this.questionListService.getQuestion();
  }
}
