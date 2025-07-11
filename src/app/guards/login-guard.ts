import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const emailGuard = sessionStorage.getItem('email');
  if (!emailGuard) {
    alert('Por favor, logue-se para acessar essa página!');
    router.navigate(['']);
    return false;
  }
  return true;
};
