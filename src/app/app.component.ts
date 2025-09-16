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
      title: 'TehranPage',
      description: 'Currency marketplace: admin manages currencies/prices; users can browse, filter, buy; custom exchanges with their own prices.',
      images: ['/projects/tehranpage-1.png'],
      demo: 'https://tehranpage.com/',
      stack: ['C#', 'React', 'Tailwind', 'Next.js', 'TypeScript', 'My SQL', 'Dotnet'],
    },
    {
      title: 'Hallboard',
      description: 'People discovery/dating-style app: users enter personal details and can be found by others.',
      images: ['/projects/hallboard.png'],
      demo: 'https://www.hallboard.com/',
      stack: ['C#', 'Angular', 'SASS', 'Angular Material', 'TypeScript', 'Mongo DB', 'Dotnet',]
    },
    {
      title: 'SoundWave',
      description: 'Music portfolio site: upload, search, and listen to tracks.',
      images: [
        '/projects/soundwave.png',
        '/projects/soundwave-2.png',
        '/projects/soundwave-3.png',
        '/projects/soundwave-4.png',
        '/projects/soundwave-5.png',
      ],
      demo: 'https://analytics-demo.com',
      stack: ['C#', 'Angular', 'SASS', 'Angular Material', 'TypeScript', 'Mongo DB', 'Dotnet'],
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
