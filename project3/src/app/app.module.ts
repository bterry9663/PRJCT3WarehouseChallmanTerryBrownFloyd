import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { ModelsComponent } from './models/models.component';
import { NavComponent } from './nav/nav.component';
import { ServicesComponent } from './services/services.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtifactDetailsComponent } from './artifact-details/artifact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArtifactsComponent,
    ArtifactComponent,
    ModelsComponent,
    NavComponent,
    ServicesComponent,
    WarehousesComponent,
    WarehouseComponent,
    HomeComponent,
    CategoryComponent,
    ArtifactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
