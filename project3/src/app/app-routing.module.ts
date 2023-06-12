import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { HomeComponent } from './home/home.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { ArtifactDetailsComponent } from './artifact-details/artifact-details.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'artifacts',
    component: ArtifactsComponent
  },
  {
    path: 'warehouses',
    component: WarehousesComponent
  },

  {
    path: 'category',
    component: CategoryComponent
  },

  {
    path: 'artifact/details/:id',
    component: ArtifactDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
