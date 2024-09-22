import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


apiJsonLocalGet(url:string){
  let httpRequest = this.http.get(url);
  return httpRequest.pipe(

  );
}

}
