import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layoutheader',
  imports: [RouterModule],
  templateUrl: './layoutheader.component.html',
  styleUrl: './layoutheader.component.css',
})
export class LayoutheaderComponent {
  progress = 0;
  activeTab: 'templates' | 'edit' | 'themes' | 'preview' = 'templates';
}
