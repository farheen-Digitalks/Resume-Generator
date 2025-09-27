import { Component } from '@angular/core';
import { LayoutheaderComponent } from "../layoutheader/layoutheader.component";
import { LayoutfooterComponent } from "../layoutfooter/layoutfooter.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resumelayout',
  imports: [LayoutheaderComponent, RouterOutlet, LayoutfooterComponent],
  templateUrl: './resumelayout.component.html',
  styleUrl: './resumelayout.component.css'
})
export class ResumelayoutComponent {

}
