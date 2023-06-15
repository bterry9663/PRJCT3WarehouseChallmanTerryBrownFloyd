import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artifact } from '../models/artifact';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url: string = environment.backendURL;
  constructor(private http: HttpClient) { }

  getAllArtifacts(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + 'items',
                              { observe: 'response' });}

  deleteArtifactById(artifact: Artifact): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.url}items/${artifact.artifactId}`, 
                                  { observe: 'response' });}

  deleteArtifactInBody(artifact: Artifact): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.url + 'items', 
                                  { observe: 'response', body: artifact });
  }

  getArtifactById(artifactId: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + 'items/find/' + artifactId,
                              { observe: 'response' });
  }

  addArtifactInBody(artifact: Artifact): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.url + 'items', artifact, { observe: 'response' });
  }

  updateArtifactWithParams(artifact: Artifact): Observable<HttpResponse<any>> {

    let parameters = new HttpParams().set('name', artifact.name)
                                     .set('origin', artifact.origin)
                                     .set('time_frame', artifact.time_frame)
                                     .set('current_location', artifact.current_location)
                                     .set('imageUrl', artifact.imageUrl)
                                     .set('warehouseId', artifact.warehouseId)
;

    return this.http.put<any>(this.url + 'items/' + artifact.artifactId, {}, { observe: 'response',
                                                                  params: parameters });
  }

  getAllWarehouse(): Observable<any> {
    return this.http.get<any>(this.url + 'warehouse',
                              { observe: 'response' });
  }
  getAllArtifactsByWarehouseId(warehouseId: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + '/items/find/warehouse/' + warehouseId ,
                              { observe: 'response' });
  }


}
