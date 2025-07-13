import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Card } from '../../components/card/card';
import { CarTable } from '../../components/car-table/car-table';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Card, CarTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
