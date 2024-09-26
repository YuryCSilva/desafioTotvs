import { Routes } from '@angular/router';
import { TemplateComponent } from './core/components/template/template.component';

export const routes: Routes = [
    {
        path: '',
        component: TemplateComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent)
            }
        ]
    }
];
