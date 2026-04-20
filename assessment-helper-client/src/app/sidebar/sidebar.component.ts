import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarCollapsed = input.required<boolean>();
  changeIsSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'groups',
      icon: 'fa-solid fa-people-group',
      label: 'Группы',
    },
    {
      routeLink: 'preparation',
      icon: 'fa-solid fa-briefcase',
      label: 'Подготовка',
    },
    {
      routeLink: 'grading',
      icon: 'fa-solid fa-user-graduate',
      label: 'Оценивание',
    }
  ]

  toggleCollapse(): void {
    this.changeIsSidebarCollapsed.emit(!this.isSidebarCollapsed());
  }
}
