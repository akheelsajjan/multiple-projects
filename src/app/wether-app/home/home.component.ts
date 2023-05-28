import { Component, OnInit } from '@angular/core';
import { WetherService } from '../wether.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latitude: number | undefined;
  longitude: number | undefined;
  public weatherData:any
  
  constructor(private wetherService: WetherService){}

  ngOnInit(): void {
    this.getLocation()

  }


  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.wetherService.getWeather(this.latitude, this.longitude).subscribe(
            {
              next:(data)=> {
                this.weatherData = data
                console.log(data)
              }
            }
          )
        },
        (error) => {
          console.log('Error getting location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

}
