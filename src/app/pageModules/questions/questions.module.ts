import { NgModule } from "@angular/core";
import { NbBadgeModule, NbCardModule, NbRadioModule } from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { routedComponents, QuestionsRoutingModule } from "./questions.routing.module";

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    QuestionsRoutingModule,
    ThemeModule,
    NbCardModule,
    NbBadgeModule,
    NbRadioModule,
  ],
})
export class QuestionsModule {}
