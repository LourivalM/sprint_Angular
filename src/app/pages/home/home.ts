import { Component } from '@angular/core';
import { BemVindo } from "../../components/bem-vindo/bem-vindo";
import { Menu } from '../../components/menu/menu';

@Component({
  selector: 'app-home',
  imports: [BemVindo, Menu],
  standalone: true,
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
