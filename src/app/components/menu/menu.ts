import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';



@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  router = inject(Router);
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
