import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  // GEMINI_MODIFICATION: Guarda de rota para verificar autenticação do usuário.
  // Permite acesso se o email for encontrado em sessionStorage ou localStorage.
  // Redireciona para a página de login se não autenticado.
  // No ambiente de servidor (SSR), permite o acesso inicial para hidratação do cliente.
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  console.log('LoginGuard: Executing...');
  console.log('LoginGuard: platformId =', platformId);
  console.log('LoginGuard: isPlatformBrowser =', isPlatformBrowser(platformId));

  if (isPlatformBrowser(platformId)) {
    const sessionEmail = sessionStorage.getItem('email');
    const localEmail = localStorage.getItem('email');
    const email = sessionEmail || localEmail;

    console.log('LoginGuard: sessionStorage email =', sessionEmail);
    console.log('LoginGuard: localStorage email =', localEmail);
    console.log('LoginGuard: Combined email =', email);

    if (!email) {
      console.log('LoginGuard: Redirecting to /login (no email found).');
      return router.createUrlTree(['/login']);
    }
    console.log('LoginGuard: Returning true (email found).');
    return true;
  } else {
    // No servidor, permita o acesso para que a hidratação ocorra no cliente.
    console.log('LoginGuard: Running on server, allowing access for client hydration.');
    return true;
  }

  return true;
};
