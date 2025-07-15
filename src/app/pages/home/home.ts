import { Component, OnInit } from '@angular/core';
import { BemVindo } from "../../components/bem-vindo/bem-vindo";
import { Menu } from '../../components/menu/menu';
import { WelcomeOverlay } from '../../components/bem-vindo/welcome-overlay';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [BemVindo, Menu, WelcomeOverlay, CommonModule],
  standalone: true,
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  showWelcomeOverlay: boolean = false;
  welcomeMessage: string = '';

  ngOnInit(): void {
    console.log('Home ngOnInit: showWelcomeOverlay=', localStorage.getItem('showWelcomeOverlay'), 'welcomeMessage=', localStorage.getItem('welcomeMessage'));
    if (localStorage.getItem('showWelcomeOverlay') === 'true') {
      this.showWelcomeOverlay = true;
      this.welcomeMessage = localStorage.getItem('welcomeMessage') || 'Bem Vindo!';
      localStorage.removeItem('showWelcomeOverlay');
      localStorage.removeItem('welcomeMessage');
      console.log('Welcome overlay should be shown.');
    }
  }

  onWelcomeOverlayClosed(): void {
    this.showWelcomeOverlay = false;
  }
}