import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Skill } from './models/skill.model';
import { Project } from './models/project.model';
import { LucideAngularModule, icons } from 'lucide-angular';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isVisible = false;

  skills: Skill[] = [
    { name: 'C#', level: 90, icon: '/csharp.png' },
    { name: '.NET', level: 85, icon: '/dotnet.png' },
    { name: 'Angular', level: 80, icon: '/favicon.ico' },
    { name: 'TypeScript', level: 85, icon: '/ts.png' },
    { name: 'JavaScript', level: 90, icon: '/js.png' },
    { name: 'MongoDB', level: 75, icon: '/mongo.png' },
    { name: 'MySQL', level: 80, icon: '/mysql.png' },
    { name: 'HTML/CSS', level: 95, icon: 'palette' },
    { name: 'SCSS', level: 85, icon: 'palette' },
    { name: 'Tailwind', level: 90, icon: 'palette' },
  ];

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      images: ['/assets/modern-ecommerce-dashboard.png', '/assets/ecommerce-product-page.png', '/assets/ecommerce-checkout-flow.png'],
      link: 'https://github.com/example/ecommerce',
      demo: 'https://ecommerce-demo.com',
      stack: ['C#', '.NET', 'Angular', 'MongoDB', 'TypeScript'],
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      images: ['/assets/task-management-interface.png', '/assets/kanban-board-interface.jpg', '/assets/team-collaboration-dashboard.png'],
      link: 'https://github.com/example/taskmanager',
      demo: 'https://taskmanager-demo.com',
      stack: ['Angular', 'TypeScript', 'MySQL', 'SCSS'],
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with interactive charts and reports',
      images: ['/assets/analytics-dashboard-charts.png', '/assets/data-visualization-charts.png', '/assets/analytics-reports-interface.jpg'],
      link: 'https://github.com/example/analytics',
      demo: 'https://analytics-demo.com',
      stack: ['JavaScript', 'HTML', 'CSS', 'MongoDB', 'Tailwind'],
    },
  ];

  projectImageIndexes: { [projectIdx: number]: number } = {};

  ngOnInit(): void {
    this.isVisible = true;
    this.projects.forEach((_, i) => (this.projectImageIndexes[i] = 0));
  }

  navigateProjectImage(projectIndex: number, direction: 'prev' | 'next') {
    const currentIndex = this.projectImageIndexes[projectIndex] ?? 0;
    const maxIndex = this.projects[projectIndex].images.length - 1;

    this.projectImageIndexes[projectIndex] =
      direction === 'next'
        ? (currentIndex >= maxIndex ? 0 : currentIndex + 1)
        : (currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }

  /* super-lightweight icon mapping; replace with real SVGs if you want */
  iconFor(key?: string): string {
    switch (key) {
      case 'db': return '🗄️';
      case 'globe': return '🌐';
      case 'palette': return '🎨';
      default: return '&lt;/&gt;';  // safe text instead of {"</>"}
    }
  }
}
