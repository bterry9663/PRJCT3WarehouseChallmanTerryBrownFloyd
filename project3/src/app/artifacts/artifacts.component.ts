import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Artifact } from '../models/artifact';
import { FormBuilder, Validators } from '@angular/forms';
import { Warehouse } from '../models/warehouse';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent {

localArtifacts: any = [];
localWarehouses: any = [];


constructor(private backendService: BackendService,
            private fb: FormBuilder, private router: Router) {

  if (this.backendService.currentWarehouseId === 0) 
  {this.getAllArtifacts();}
  else{
    this.backendService.getAllArtifactsByWarehouseId(this.backendService.currentWarehouseId).subscribe(data => {
    
      console.log(data.body);
  
     
      for (let artifact of data.body) {
        this.localArtifacts.push(new Artifact(artifact.itemId,
                                              artifact.name,
                                              artifact.timeFrame,
                                              artifact.origin,
                                              artifact.shelf,
                                              artifact.image,
                                              artifact.warehouseId));
      }
  
      console.log(this.localArtifacts);
  
    })
  }
  this.getAllWarehouses();

}


addForm = this.fb.group(
  {
    name: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    timeFrame: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    origin: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    shelf: ['', Validators.compose([Validators.required,
                                              Validators.maxLength(1000)])],
    image: ['', Validators.compose([Validators.required,
                                       Validators.maxLength(1000)])],
    warehouseId: ['', Validators.compose([Validators.required,
                                          Validators.min(1),
                                          Validators.max(5)])],
                                      }
);

get name() {
  return this.addForm.get('name');
}
get timeFrame() {
  return this.addForm.get('timeFrame');
}
get origin() {
  return this.addForm.get('origin');
}
get shelf() {
  return this.addForm.get('shelf');
}
get image() {
  return this.addForm.get('image');
}
get warehouseId() {
  return this.addForm.get('warehouseId');
}

getAllArtifacts(): void {
  this.localArtifacts = [];
  this.backendService.getAllArtifacts().subscribe(data => {
    
    console.log(data.body);

   
    for (let artifact of data.body) {
      this.localArtifacts.push(new Artifact(artifact.itemId,
                                            artifact.name,
                                            artifact.timeFrame,
                                            artifact.origin,
                                            artifact.shelf,
                                            artifact.image,
                                            artifact.warehouseId));
    }

    console.log(this.localArtifacts);

  });
}

@Output() deleteArtifactEvent = new EventEmitter<Artifact>();
@Input() artifact: Artifact = new Artifact(0, '', '', '', '' ,'' , 0);

deleteArtifact2(): void {
  this.deleteArtifactEvent.emit(this.artifact);
}






// TODO: debug the refresh
deleteArtifact(artifact: Artifact): void {
  this.backendService.deleteArtifactById(artifact).subscribe(() => this.getAllArtifacts());
}

addArtifact(): void {
  this.backendService.addArtifactInBody(new Artifact(0,
                                               this.name?.value!,
                                               this.timeFrame?.value!,
                                               this.origin?.value!,
                                               this.shelf?.value!,
                                               this.image?.value!,
                                               Number(this.warehouseId?.value!)
                                               ))
                     .subscribe(() => this.getAllArtifacts());
}
  
getAllWarehouses(): void {
  this.localWarehouses = [];

  this.backendService.getAllWarehouse().subscribe(data => {
    for (let warehouse of data.body) {
      this.localWarehouses.push(new Warehouse(warehouse.warehouseId,
                                        warehouse.location, 
                                        warehouse.manager, 
                                        warehouse.max
                                        ));
    };

    
    this.localWarehouses.sort((a: Warehouse, b: Warehouse) => a.warehouseId === (b.warehouseId));
    console.log(this.localWarehouses);
  });
}
chosenArtifactId: number = 0;
chosenArtifact: Artifact = this.artifact;
  chooseArtifact(artifact: Artifact): void {
    this.chosenArtifactId = artifact.itemId;
this.chosenArtifact = artifact;
    this.addForm.setValue({
      name: artifact.name,
      timeFrame: artifact.timeFrame,
      origin: artifact.origin,
      shelf: artifact.shelf,
      image: artifact.image,
      warehouseId: String(artifact.warehouseId)
    })
    console.log('chosen artifact'+ artifact.itemId);
  }

  cancelUpdate(): void {
    this.addForm.reset();
    this.chosenArtifactId = 0;
  }

  updateArtifact(): void {
    this.backendService.updateArtifactWithParams(new Artifact(this.chosenArtifactId,
                                                        this.name?.value!,
                                                        this.origin?.value!,
                                                        this.timeFrame?.value!,
                                                        this.shelf?.value!,
                                                        this.image?.value!,
                                                        Number(this.warehouseId?.value!)
                                                        ))
                        .subscribe(() => {
                          this.getAllArtifacts();
                          this.addForm.reset();
                          this.chosenArtifactId = 0;
                        });
                        console.log(this.name);
  }

  getArtifactDetail(itemId:Number){
    this.router.navigate(['items/find/' + itemId]);

  }










}
