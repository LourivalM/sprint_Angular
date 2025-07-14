import { Component, inject, Input } from '@angular/core';
import { error } from 'console';
import { DashBoard } from '../../service/dashboard';



@Component({
  selector: 'app-car-table',
  imports: [],
  templateUrl: './car-table.html',
  styleUrl: './car-table.css'
})
export class CarTable {
  @Input() vin: string = '';
  @Input() odometro: number = 0;
  @Input() nivelCombustivel: number = 0;
  @Input() status: string = '';
  @Input() lat: number = 0;
  @Input() long: number = 0;

  dashboardService = inject(DashBoard);

  onChangeVin(event: Event) {
    const vin = (event.target as HTMLInputElement).value;
    this.dashboardService.getVinInfos(vin).subscribe({
      error: () => {},
      next: (vinInfos) => {
        this.odometro = vinInfos.odometro;
        this.nivelCombustivel = vinInfos.nivelCombustivel;
        this.status = vinInfos.status;
        this.lat = vinInfos.lat;
        this.long = vinInfos.long;
        
      }
    })
    
  }
}
