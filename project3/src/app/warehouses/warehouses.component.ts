import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Warehouse } from '../models/warehouse';
import { Artifact } from '../models/artifact';
import { Router } from '@angular/router';


@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent {
 

  localWarehouses: any = [];
  chosenWarehouseId: number = 0;
  formLocation: string = '';
  formManager: string = '';
  formMax: string = '';

  canDelete: boolean = false;


  constructor(private backendService: BackendService, private router: Router) {
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
        error: errData => {console.log(errData) },
        complete: () => console.log('Complete! All warehouses returned.')
      }
    );
  }
  
  


  chooseWarehouse(warehouse: Warehouse) {
    this.chosenWarehouseId = (warehouse.warehouseId);
    this.backendService.currentWarehouseId = warehouse.warehouseId;
     console.log('warehouse' + this.chosenWarehouseId)
    this.router.navigate(['warehouse' + this.chosenWarehouseId]);
  }

}
