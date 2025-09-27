import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './layout/resumedashboard/resumelayout/resumelayout.component'
      ).then((m) => m.ResumelayoutComponent),
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadComponent: () =>
          import('./views/resumedashboard/resumedashboard.component').then(
            (m) => m.ResumedashboardComponent
          ),
      },
    ],
  },
];
