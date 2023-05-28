import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WetherService {
  private apiKey = '88a06e9985bafaa09134c03b750d0350';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
