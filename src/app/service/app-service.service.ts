import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  public readActorJson(){
    return this.httpClient.get("./assets/mock-data/mockactors.json")
  }
}
