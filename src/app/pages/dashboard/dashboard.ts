import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Card } from '../../components/card/card';
import { CarTable } from '../../components/car-table/car-table';
import { DashBoard } from '../../service/dashboard';
import { veiculo, vinInfos } from '../../models/car';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Card, CarTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
  dashboardService = inject(DashBoard)

  veiculos: veiculo[] = []
  
  veiculoSelected: veiculo = {
    id: -1,
    connected: 0,
    volumetotal: 0,
    softwareUpdates: 0,
    vehicle: '',
    img: '' ,
    vin: '',
  }
vinInfos: vinInfos = {
  id: -1,
  odometro: 0,
  nivelCombustivel: 0,
  status: '',
  lat: 0,
  long: 0
}

 ngOnInit() {
    this.dashboardService.getVeiculos().subscribe({
      error: (err) => {
        console.error('Erro ao buscar veículos:', err);
      },
      next: (vehicles) => {
        this.veiculos = Object.values(vehicles) as veiculo[];
        console.log('Veículos recebidos:', this.veiculos);
        
        this.veiculoSelected = this.veiculos[0];

        

        this.dashboardService.getVinInfos(this.veiculoSelected.vin).subscribe({
          error: () => {
         },
          next: (vinInfos) => {
            this.vinInfos = vinInfos;
            console.log('Informações do VIN recebidas:', this.vinInfos);
          },

        });

      }
    })
  }
        onChangeSelect(event: Event) {
          const id = Number ( (event.target as HTMLSelectElement).value);
          const veiculo = this.veiculos.find((veiculo) => veiculo.id === id);
          if (veiculo) {
            this.veiculoSelected = veiculo;
          }
          this.dashboardService.getVinInfos(this.veiculoSelected.vin).subscribe({
          error: () => {
         },
          next: (vinInfos) => {
            this.vinInfos = vinInfos;
            console.log('Informações do VIN recebidas:', this.vinInfos);
          },

        });

        }
        
        onChangeVin (){
          
        }
              

        

}
