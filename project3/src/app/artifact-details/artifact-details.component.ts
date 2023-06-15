import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Artifact } from '../models/artifact';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artifact-details',
  templateUrl: './artifact-details.component.html',
  styleUrls: ['./artifact-details.component.css']
})
export class ArtifactDetailsComponent {

  localArtifact: Artifact = new Artifact(0, '', '', '', '', '', 0);

  constructor(private backendService: BackendService,
              private activatedRoute: ActivatedRoute) {

    this.backendService.getArtifactById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.localArtifact = new Artifact(data.body.id,
                                        data.body.name,
                                        data.body.timeFrame,
                                        data.body.origin,
                                        data.body.shelf,
                                        data.body.image,
                                        data.body.warehouseId);
    })

  }

}
