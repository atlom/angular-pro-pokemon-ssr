import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component')
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing.component')
    },
    {
        path: '**',
        redirectTo: 'about',
    }
];
