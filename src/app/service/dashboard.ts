import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { veiculo } from '../models/car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashBoard {
  http=inject(HttpClient)

  getVeiculos(): Observable <veiculo> {
    return this.http.get<veiculo>('http://localhost:3001/vehicles')
    


}
  getVinInfos() {
  
}
}
