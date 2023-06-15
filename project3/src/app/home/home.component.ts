import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Warehouse } from '../models/warehouse';
import { Artifact } from '../models/artifact';
import { WarehousesComponent } from '../warehouses/warehouses.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  localArtifacts: any = [];
  localWarehouses: any = [];

  constructor(private backendService: BackendService) {
    this.getAllWarehouse();
  }
  getAllWarehouse(): void {
    this.localWarehouses = [];
    this.backendService.getAllWarehouse().subscribe(
      {  
        next: data => {

          for (let warehouses of data.body) {
            this.localWarehouses.push(new Warehouse(warehouses.warehouseId,
                                               warehouses.location,
                                               warehouses.manager,
                                               warehouses.max
                                              ));
          }
        },

        error: errData => {
          console.log(errData)
        },

       
        complete: () => console.log('Complete! All warehouses returned.')
      
      }
      );
    }












}
