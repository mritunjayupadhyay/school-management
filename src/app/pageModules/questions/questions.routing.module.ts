import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionItemComponent } from './question-item/question-item.component';
import { QuestionListItemComponent } from './question-list-item/question-list-item.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsComponent } from './questions.component';


const routes: Routes = [{
  path: '',
  component: QuestionsComponent,
  children: [
    {
      path: ':id',
      component: QuestionItemComponent,
    },
    {
      path: 'list',
      component: QuestionsListComponent,
    },
    {
      path: '',
      component: QuestionsListComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule { }

export const routedComponents = [
  QuestionsComponent,
  QuestionsListComponent,
  QuestionListItemComponent,
  QuestionItemComponent,
];
