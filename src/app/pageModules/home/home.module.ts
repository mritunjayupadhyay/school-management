import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { HomeRoutingModule, routedComponents } from './home-routing.module';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    HomeRoutingModule,
    ThemeModule,
  ],
})
export class HomeModule {}
