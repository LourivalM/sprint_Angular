import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { veiculo, vinInfos } from '../models/car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashBoard {
  http=inject(HttpClient)

  getVeiculos(): Observable <veiculo[]> {
    return this.http.get<veiculo[]>('http://localhost:3001/vehicles')
    


}
  getVinInfos(vin: string) {
    return this.http.post<vinInfos>("http://localhost:3001/vehicleData", {vin} )
  
}
}
