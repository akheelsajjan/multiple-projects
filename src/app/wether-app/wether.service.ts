import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WetherService {
  private apiKey = '88a06e9985bafaa09134c03b750d0350';


  constructor(private http: HttpClient) { }

  getWeather(lat:number|undefined , long:number | undefined ) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
