import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Warehouse } from '../models/warehouse';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent {
addWarehouse() {
throw new Error('Method not implemented.');
}
updateWarehouse() {
throw new Error('Method not implemented.');
}
cancelUpdate() {
throw new Error('Method not implemented.');
}
deleteWarehouse($event: Event) {
throw new Error('Method not implemented.');
}

  localWarehouses: any = [];
  localWarehouseContents: any =[];
  chosenWarehouseId: string = '';
  formLocation: string = '';
  formManager: string = '';
  formMax_capacity: string = '';

  canDelete: boolean = false;


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
                                               warehouses.max_capacity
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



  chooseWarehouse(warehouse: Warehouse): void {
    this.backendService.getAllWarehouse().subscribe(data => {
      for (let artifact of data.body) {
        if (artifact.warehouse.warehouseId === warehouse.warehouseId) {
          this.canDelete = false;
          break;
        } else {
          this.canDelete = false; //Nobody puts my warehouses in a corner, or deletes them
        }
      }
    });


    this.chosenWarehouseId = warehouse.warehouseId;
    this.formLocation = warehouse.location;
    this.formManager = warehouse.manager;
    this.formMax_capacity = String(warehouse.max_capacity);
  }

  clearForm(): void {
    this.chosenWarehouseId = '';
    this.formLocation = '';
    this.formManager = '';
    this.formMax_capacity = '';
  }
/*
 getAllArtifacts(): void {
  this.localArtifacts = [];
  this.backendService.getAllArtifacts().subscribe(data => { 
    console.log(data.body);
    for (let artifact of data.body) {
      this.localArtifacts.push(new Artifact(artifact.artifactId,
      artifact.name, artifact.time_frame, artifact.origin,
      artifact.current_location,artifact.imageUrl,artifact.warehouseId));                                    
    }
    console.log(this.localArtifacts);
  });
}
*/

  getAllArtifactByWarehouseId(): void {
    this.localWarehouseContents = [];
    this.backendService.getAllArtifactByWarehouseId().subscribe(
      {  
        next: data => {

          for (let warehouses of data.body) {
            this.localWarehouseContents.push(new Warehouse(warehouses.warehouseId,
                                               warehouses.location,
                                               warehouses.manager,
                                               warehouses.max_capacity
                                              ));}},
        
        error: errData => {console.log(errData)},
 
        complete: () => console.log('Complete! All warehouses returned.')
      });}
    
    
  


}
