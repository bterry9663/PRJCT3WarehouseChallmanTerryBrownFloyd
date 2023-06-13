import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Artifact } from '../models/artifact';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent {

localArtifacts: any = [];


constructor(private backendService: BackendService,
            private fb: FormBuilder) {

  this.getAllArtifacts();

}


addForm = this.fb.group(
  {
    name: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    time_frame: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    origin: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(1000)])],
    currentLocation: ['', Validators.compose([Validators.required,
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
  




}
