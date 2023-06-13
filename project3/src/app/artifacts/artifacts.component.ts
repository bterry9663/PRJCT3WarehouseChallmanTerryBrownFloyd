import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Artifact } from '../models/artifact';
import { FormBuilder, Validators } from '@angular/forms';
import { Warehouse } from '../models/warehouse';


@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent {

localArtifacts: any = [];
localWarehouses: any = [];


constructor(private backendService: BackendService,
            private fb: FormBuilder) {

  this.getAllArtifacts();
  this.getAllWarehouses();

}


addForm = this.fb.group(
  {
    name: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    time_frame: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    origin: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    current_location: ['', Validators.compose([Validators.required,
                                              Validators.maxLength(1000)])],
    imageUrl: ['', Validators.compose([Validators.required,
                                       Validators.maxLength(1000)])],
    warehouse_id: ['', Validators.compose([Validators.required,
                                          Validators.min(1),
                                          Validators.max(5)])],
                                      }
);

get name() {
  return this.addForm.get('name');
}
get time_frame() {
  return this.addForm.get('time_frame');
}
get origin() {
  return this.addForm.get('origin');
}
get current_location() {
  return this.addForm.get('current_location');
}
get imageUrl() {
  return this.addForm.get('imageUrl');
}
get warehouse_id() {
  return this.addForm.get('warehouse_id');
}

getAllArtifacts(): void {
  this.localArtifacts = [];
  this.backendService.getAllArtifacts().subscribe(data => {
    
    console.log(data.body);

   
    for (let artifact of data.body) {
      this.localArtifacts.push(new Artifact(artifact.artifactId,
                                            artifact.name,
                                            artifact.time_frame,
                                            artifact.origin,
                                            artifact.current_location,
                                            artifact.imageUrl,
                                            artifact.warehouse_id));
    }

    console.log(this.localArtifacts);

  });
}



// TODO: debug the refresh
deleteArtifact(artifact: Artifact): void {
  this.backendService.deleteArtifactInBody(artifact).subscribe(() => this.getAllArtifacts());
}

addArtifact(): void {
  this.backendService.addArtifactInBody(new Artifact(0,
                                               this.name?.value!,
                                               this.time_frame?.value!,
                                               this.origin?.value!,
                                               this.current_location?.value!,
                                               this.imageUrl?.value!,
                                               Number(this.warehouse_id?.value!)
                                               ))
                     .subscribe(() => this.getAllArtifacts());
}
  
getAllWarehouses(): void {
  this.localWarehouses = [];

  this.backendService.getAllWarehouses().subscribe(data => {
    for (let warehouse of data.body) {
      this.localWarehouses.push(new Warehouse(warehouse.warehouse_id,
                                        // Warehouse.name, 
                                        // Warehouse.type, 
                                        // Warehouse.founded
                                        ));
    };

    
    this.localWarehouses.sort((a: Warehouse, b: Warehouse) => a.warehouse_id === (b.warehouse_id));
  });
}
chosenArtifactId: number = 0;

  chooseArtifact(artifact: Artifact): void {
    this.chosenArtifactId = artifact.artifactId;

    this.addForm.setValue({
      name: artifact.name,
      time_frame: artifact.time_frame,
      origin: artifact.origin,
      current_location: artifact.current_location,
      warehouse_id: String(artifact.warehouse_id),
      imageUrl: artifact.imageUrl
    })

  }

  cancelUpdate(): void {
    this.addForm.reset();
    this.chosenArtifactId = 0;
  }

  updateArtifact(): void {
    this.backendService.updateArtifactWithParams(new Artifact(this.chosenArtifactId,
                                                        this.name?.value!,
                                                        this.time_frame?.value!,
                                                        this.origin?.value!,
                                                        this.current_location?.value!,
                                                        this.imageUrl?.value!,
                                                        Number(this.warehouse_id?.value!)
                                                        ))
                        .subscribe(() => {
                          this.getAllArtifacts();
                          this.addForm.reset();
                          this.chosenArtifactId = 0;
                        });
  }


}
