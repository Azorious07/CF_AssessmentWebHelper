import { Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { GradingComponent } from './grading/grading.component';
import { PreparationComponent } from './preparation/preparation.component';
import { StudentListComponent } from './student-list/student-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'groups', pathMatch: 'full' },
  { path: 'groups', component: StudentListComponent },
  { path: 'grading', component: GradingComponent },
  { path: 'preparation', component: PreparationComponent },
];
