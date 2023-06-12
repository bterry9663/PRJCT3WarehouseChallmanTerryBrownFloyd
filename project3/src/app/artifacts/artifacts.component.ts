import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Artifact } from '../models/artifact';
import { Category } from '../models/category';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent {

localArtifacts: any = [];
localCategories: any = [];


constructor(private backendService: BackendService,
            private fb: FormBuilder) {

  this.getAllArtifacts();
  this.getAllCategories();

}


addForm = this.fb.group(
  {
    name: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(60)])],
    category: ['', Validators.required],
    time_frame: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(45)])],
    origin: ['', Validators.compose([Validators.required,
                                    Validators.maxLength(45)])],
    currentLocation: ['', Validators.compose([Validators.required,
                                         Validators.min(1),
                                         Validators.max(50)])],
    imageUrl: ['', Validators.compose([Validators.required,
                                       Validators.maxLength(500)])],
  }
);

get name() {
  return this.addForm.get('name');
}

get category() {
  return this.addForm.get('category');
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


getAllArtifacts(): void {
  this.localArtifacts = [];
  this.backendService.getAllArtifacts().subscribe(data => {
    
    console.log(data.body);

   
    for (let artifact of data.body) {
      this.localArtifacts.push(new Artifact(artifact.artifactId,
                                      artifact.name,
                                      new Category(artifact.category.categoryId,
                                                 artifact.category.nomenclature,
                                                 artifact.category.size,
                                                 artifact.category.danger),
                                      artifact.time_frame,
                                      artifact.origin,
                                      artifact.current_location,
                                      artifact.imageUrl));
    }

    console.log(this.localArtifacts);

  });
}

getAllCategories(): void {
  this.localCategories = [];

  this.backendService.getAllCategories().subscribe(data => {
    for (let category of data.body) {
      this.localCategories.push(new Category(category.categoryId,
                                        category.nomenclature, 
                                        category.size, 
                                        category.danger));
    };

    
    this.localCategories.sort((a: Category, b: Category) => a.nomenclature.localeCompare(b.nomenclature));
  });
}

// TODO: debug the refresh
deleteArtifact(artifact: Artifact): void {
  this.backendService.deleteArtifactInBody(artifact).subscribe(() => this.getAllArtifacts());
}

addArtifact(): void {
  this.backendService.addArtifactInBody(new Artifact(0,
                                               this.name?.value!,
                                               new Category(Number(this.category?.value!), '', '', ''),
                                               this.time_frame?.value!,
                                               this.origin?.value!,
                                               this.current_location?.value!,
                                               this.imageUrl?.value!))
                     .subscribe(() => this.getAllArtifacts());
}
  




}
