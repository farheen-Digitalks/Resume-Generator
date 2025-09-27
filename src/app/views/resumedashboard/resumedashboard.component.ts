import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Template {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-resumedashboard',
  imports: [CommonModule],
  templateUrl: './resumedashboard.component.html',
  styleUrl: './resumedashboard.component.css',
})
export class ResumedashboardComponent {
  progress = 0;
  activeTab: 'templates' | 'edit' | 'themes' | 'preview' = 'templates';

  templates: Template[] = [
    { icon: '📄', name: 'Classic', description: 'Clean and professional.' },
    { icon: '📝', name: 'Modern', description: 'Sleek and minimal.' },
    { icon: '🎨', name: 'Creative', description: 'Colorful and fun.' },
  ];

  selectTemplate(template: Template) {
    console.log('Selected template:', template);
    this.progress = 25; // example progress
  }

  setTab(tab: 'templates' | 'edit' | 'themes' | 'preview') {
    this.activeTab = tab;
  }
}
