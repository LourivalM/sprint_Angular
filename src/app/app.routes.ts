import { Routes } from '@angular/router';

export const routes: Routes = [ {
        path: '',
        redirectTo: 'login', // Se a URL for vazia, redireciona para /login
        pathMatch: 'full'
    },
    {
        path: 'login',
        // Carrega o LoginComponent apenas quando o usuário for para /login
        loadComponent: () => import('./pages/login/login').then(c => c.Login)
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(c => c.Home)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(c => c.Dashboard)
    }];
