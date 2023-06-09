import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { HomeComponent } from './home/home.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { ArtifactDetailsComponent } from './artifact-details/artifact-details.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'items',
    component: ArtifactsComponent
  },
  {
    path: 'warehouses',
    component: WarehousesComponent
  },
  {
    path: 'warehouse',
    component: WarehouseComponent
  },
 

  {
    path: 'items/find/:id',
    component: ArtifactDetailsComponent
  },
  {
    path: '**',
    component: ArtifactsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
