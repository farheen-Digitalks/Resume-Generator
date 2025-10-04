import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Template {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-layoutheader',
  imports: [RouterModule],
  templateUrl: './layoutheader.component.html',
  styleUrl: './layoutheader.component.css',
})
export class LayoutheaderComponent {
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
}
