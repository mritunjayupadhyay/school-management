import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { HomeRoutingModule, routedComponents } from './home-routing.module';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    HomeRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
})
export class HomeModule {}
