import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private _http:HttpClient) { }

  getSlides(){
    return this._http.get<any[]>('http://localhost:3000/slide');
  }

}
