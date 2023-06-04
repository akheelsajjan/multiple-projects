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

  sunriseTimestamp!: number  // Replace with your actual sunrise timestamp
  sunsetTimestamp!: number  // Replace with your actual sunset timestamp

  sunriseIST!: string;
  sunsetIST!: string;


  constructor(private wetherService: WetherService){

  }

  ngOnInit(): void {
    this.getLocation()

  }

  private convertTimestampToIST(timestamp: number): string {
    // Same code as the utility function mentioned above
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
    };
    return date.toLocaleTimeString('en-IN', options);
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
        
                this.sunriseIST = this.convertTimestampToIST(this.weatherData.sys.sunrise);
                this.sunsetIST = this.convertTimestampToIST(this.weatherData.sys.sunset);

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
