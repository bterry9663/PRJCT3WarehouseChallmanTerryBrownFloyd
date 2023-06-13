import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Artifact } from '../models/artifact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artifact',
   templateUrl: './artifact.component.html',
   styleUrls: ['./artifact.component.css']
 })
export class ArtifactComponent {

  constructor(private router: Router) {}

  
  @Output() deleteArtifactEvent = new EventEmitter<Artifact>();

  
  @Input() artifact: Artifact = new Artifact(0, '', '', '', '', '', 0);
 

 deleteArtifact(): void {
   this.deleteArtifactEvent.emit(this.artifact);
  }

  getArtifactDetails() {
    this.router.navigate(['artifact/details/' + this.artifact.artifactId]);
  }

}