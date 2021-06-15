import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbIconModule,
  NbRadioModule } from '@nebular/theme';
import { ProgressBarComponent } from '../../@theme/components/progress-bar/progress-bar.component';
import { DropDownDirective } from '../../@theme/directives/dropdown.directive';
import { ThemeModule } from '../../@theme/theme.module';
import { QuestionService } from './question.service';
import { routedComponents, QuestionsRoutingModule } from './questions.routing.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ProgressBarComponent,
    DropDownDirective,
  ],
  imports: [
    QuestionsRoutingModule,
    ThemeModule,
    NbCardModule,
    NbBadgeModule,
    NbRadioModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbContextMenuModule,
    NbCheckboxModule,
  ],
  providers: [QuestionService],
})
export class QuestionsModule {}
