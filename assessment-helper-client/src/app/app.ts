import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component'
import { MainComponent } from './main/main.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('assessment-helper-client');
  isSidebarCollapsed = signal<boolean>(false);
  changeIsSidebarCollapsed(isSidebarCollapsed: boolean): void {
    this.isSidebarCollapsed.set(isSidebarCollapsed);
  }
}
