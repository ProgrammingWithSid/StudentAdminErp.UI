import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyudentsComponent } from './syudents/syudents.component';
import { ViewStudentComponent } from './syudents/view-student/view-student.component';
const routes: Routes = [
  {
    path: '',
    component: SyudentsComponent,
  },
  {
    path: 'students',
    component: SyudentsComponent,
  },

  {
    path: 'students/:id',
    component: ViewStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  title = 'studentadminerp-ui';
}
