import { Component, OnInit } from '@angular/core';
import { WetherService } from '../wether.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private wetherService: WetherService){}

  ngOnInit(): void {
    this.wetherService.getWeather('').subscribe(
      {
        next:(data)=>console.log(data)
      }
    )
  }

}
