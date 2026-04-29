import { Routes } from '@angular/router';
import { GradingComponent } from './grading/grading.component';
import { PreparationComponent } from './preparation/preparation.component';
import { StudentListComponent } from './student-list/student-list.component';
import { GroupListComponent } from './group-list/group-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'groups', pathMatch: 'full' },
  { path: 'groups', component: GroupListComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'grading', component: GradingComponent },
  { path: 'preparation', component: PreparationComponent },
];
