import { Component, OnInit  } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { MessageService } from '../message.service';
export interface Alert {
  testAlerts: string;
}
@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent  implements OnInit {
  content! : Observable<any>
 // content     = 'you have been warned';
  hideContent = true;
  severity    = 423;


  constructor(private msgService: MessageService) { }


  ngOnInit() {
    this.getContent()
  }

  getContent(){
    this.content = this.msgService.getMessage()
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle();
    });
  }

}
