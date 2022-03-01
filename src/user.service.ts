import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private url = 'http://localhost:8080/api/alluser/' ;

  constructor(private httpClient: HttpClient) { }

public getAllUserService(){
  return this.httpClient.get(this.url);
}

}