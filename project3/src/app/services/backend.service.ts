import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
    return this.http.get<any>(this.url + 'artifact',
                              { observe: 'response' });}

  deleteArtifactById(artifact: Artifact): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.url}artifact/${artifact.artifactId}`, 
                                  { observe: 'response' });}

  deleteArtifactInBody(artifact: Artifact): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.url + 'artifact', 
                                  { observe: 'response', body: artifact });
  }

  getArtifactById(artifactId: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + 'artifact/' + artifactId,
                              { observe: 'response' });
  }

  addArtifactInBody(artifact: Artifact): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.url + 'artifact', artifact, { observe: 'response' });
  }

}