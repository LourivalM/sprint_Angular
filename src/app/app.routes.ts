import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
    // GEMINI_MODIFICATION: Configuração de rotas da aplicação.
    // A rota raiz ('') é protegida pelo loginGuard e carrega o componente Home se autenticado.
    // A rota '/login' não é protegida, permitindo acesso para autenticação.
    // Outras rotas protegidas (home, dashboard) também usam o loginGuard.
    {
        path: '',
        canActivate: [loginGuard],
        loadComponent: () => import('./pages/home/home').then(c => c.Home)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(c => c.Login)
    },
    {
        path: 'home',
        pathMatch: 'full',
        canActivate: [loginGuard],
        loadComponent: () => import('./pages/home/home').then(c => c.Home)
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [loginGuard],
        loadComponent: () => import('./pages/dashboard/dashboard').then(c => c.Dashboard)
    }];
