import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyudentsComponent } from './syudents/syudents.component';
const routes: Routes = [
  {
    path: '',
    component: SyudentsComponent,
  },
  {
    path: 'students',
    component: SyudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  title = 'studentadminerp-ui';
}
