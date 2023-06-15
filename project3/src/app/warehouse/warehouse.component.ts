import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Warehouse } from '../models/warehouse';
import { Artifact } from '../models/artifact';
import { Router } from '@angular/router';
import { WarehousesComponent } from '../warehouses/warehouses.component';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {
  
  localWarehouseContents: any =[];
  chosenWarehouse: any;
  constructor(private backendService: BackendService, private router: Router, private warehouses: WarehouseComponent) {
    // this.getAllWarehouse();
  }
  showWarehouseContents(warehouse: Warehouse): void {
    this.localWarehouseContents = [];
    this.warehouses.chosenWarehouse = warehouse.warehouseId;
    this.backendService.getAllArtifacts().subscribe(
       {next:data => {
      for (let artifact of data.body) {
        if (artifact.warehouseId == warehouse.warehouseId) {
          this.localWarehouseContents.push(new Artifact(
            artifact.id,
            artifact.name,
            artifact.timeFrame,
            artifact.origin,
            artifact.shelf,
            artifact.image,
            artifact.warehouseId
          ));
          }
        }
      }
    });
    }

}
