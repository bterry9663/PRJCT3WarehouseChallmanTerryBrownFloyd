import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Warehouse } from '../models/warehouse';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent {

  localWarehouses: any = [];

  chosenWarehouse_id: number = 0;
  // formName: string = '';
  // formType: string = '';
  // formFounded: string = '';

  canDelete: boolean = false;

  constructor(private backendService: BackendService) {
    this.getAllWarehouses();
  }

  getAllWarehouses(): void {
    this.localWarehouses = [];
    this.backendService.getAllWarehouses().subscribe(
      {  
        next: data => {

          for (let warehouse of data.body) {
            this.localWarehouses.push(new Warehouse(warehouse.warehouse_id,
                                              // warehouse.name,
                                              // warehouse.type,
                                              // warehouse.founded
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
    this.backendService.getAllArtifacts().subscribe(data => {
      for (let artifact of data.body) {
        if (artifact.warehouse.warehouse_id === warehouse.warehouse_id) {
          this.canDelete = false;
          break;
        } else {
          this.canDelete = false;
        }
      }
    });


    this.chosenWarehouse_id = warehouse.warehouse_id;
    // this.formName = Warehouse.name;
    // this.formType = Warehouse.type;
    // this.formFounded = String(Warehouse.founded);
  }

  clearForm(): void {
    this.chosenWarehouse_id = 0;
    // this.formName = '';
    // this.formType = '';
    // this.formFounded = '';
  }




}
