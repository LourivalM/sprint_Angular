import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { loginService } from './service/login';
import { filter } from 'rxjs/operators';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'sprint_Angular';
  router = inject(Router);
  loginService = inject(loginService);
  platformId = inject(PLATFORM_ID);

  // GEMINI_MODIFICATION: Controla a visibilidade do conteúdo baseado no estado de login.
  // Inicialmente false para evitar flash de conteúdo não autorizado.
  showContent = false;

  constructor() {
    // GEMINI_MODIFICATION: Verifica o estado de login na inicialização e em cada navegação.
    // Isso garante que o conteúdo só seja exibido após a verificação de autenticação.
    if (isPlatformBrowser(this.platformId)) {
      this.checkLoginStatus();

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.checkLoginStatus();
      });
    }
  }

  private checkLoginStatus(): void {
    const sessionEmail = sessionStorage.getItem('email');
    const localEmail = localStorage.getItem('email');
    const isLoggedIn = !!(sessionEmail || localEmail);

    // Se estiver na página de login, sempre mostra o conteúdo.
    // Caso contrário, mostra o conteúdo apenas se estiver logado.
    this.showContent = this.router.url === '/login' || isLoggedIn;
  }
}