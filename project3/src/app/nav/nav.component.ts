import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
constructor(private backendservice: BackendService){}

resetArtifacts(){
  this.backendservice.currentWarehouseId = 0;
}
}
