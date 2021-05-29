import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'welcome',
      component: WelcomeComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }

export const routedComponents = [
  WelcomeComponent,
  HomeComponent,
];
