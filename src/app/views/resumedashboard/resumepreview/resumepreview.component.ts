import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
}

interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  skills: string[];
  experiences: Experience[];
  education: Education[];
}


@Component({
  selector: 'app-resumepreview',
  imports: [CommonModule],
  templateUrl: './resumepreview.component.html',
  styleUrl: './resumepreview.component.css',
})
export class ResumepreviewComponent {
  @Input() resumeData: ResumeData = {
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    summary:
      'Experienced developer with a passion for building scalable applications.',
    skills: ['Angular', 'TypeScript', 'Bootstrap', 'Node.js'],
    experiences: [
      {
        company: 'Tech Corp',
        role: 'Frontend Developer',
        start: 'Jan 2020',
        end: 'Present',
        description:
          'Developed user interfaces with Angular and improved performance by 30%.',
      },
      {
        company: 'Web Solutions',
        role: 'Junior Developer',
        start: 'Jun 2018',
        end: 'Dec 2019',
        description: 'Worked on web projects using JavaScript, HTML, and CSS.',
      },
    ],
    education: [
      {
        school: 'University of Technology',
        degree: 'B.Sc. Computer Science',
        start: '2014',
        end: '2018',
      },
    ],
  };
}
