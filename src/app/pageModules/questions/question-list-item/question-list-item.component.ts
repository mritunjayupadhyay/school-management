import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { QuestionService } from '../question.service';

@Component({
  selector: 'school-manangement-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.scss'],
})
export class QuestionListItemComponent implements OnInit, OnDestroy {
  @Input() questionItem;
  private destroy$: Subject<void> = new Subject<void>();
  showLess: boolean = false;
  seeMoreOption: boolean = false;
  questionActions = [{ title: 'EDIT' }, { title: 'DELETE' }];

  constructor(
    private breakpointService: NbMediaBreakpointsService,
      private themeService: NbThemeService,
    private questionService: QuestionService,
  ) {}

  ngOnInit() {

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.showLess = isLessThanXl);
  }

  details() {
    const { questionItem = {} } = this;
    const { question_id } = questionItem;
    if (question_id) {
      // this.questionService.deleteQuestion(question_id);
      // Use router and go to view details route
    }
  }

  delete(event: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const { questionItem = {} } = this;
    const { question_id } = questionItem;
    if (question_id) {
      this.questionService.deleteQuestion(question_id);
    }
  }

  edit(event: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const { questionItem = {} } = this;
    const { question_id } = questionItem;
    if (question_id) {
      this.questionService.editQuestion(question_id);
    }
  }

  onClickSeeMoreOption(event: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const { questionItem = {} } = this;
    const { question_id } = questionItem;
    if (question_id) {
     this.seeMoreOption = false;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
