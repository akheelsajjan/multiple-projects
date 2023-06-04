import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MessageService } from '../message.service';
import { HttpClientModule } from '@angular/common/http';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement

  let service: MessageService
  let spy: jasmine.Spy

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      declarations: [
        AlertButtonComponent,

      ],
      imports:[
        HttpClientModule
      ],

      providers: [MessageService ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    service = de.injector.get(MessageService)
    spy = spyOn(service,'getMessage').and.returnValue(of('you have been warned'))



    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a message with warn', () => {
  //   expect(component.content).toContain('warn');
  // });
  it('should have a severity level greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('should have an h1 tag of `Alert Button', () => {
    expect(de.query(By.css('h3')).nativeElement.innerText).toBe('Alert Button')
  });

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy()
    component.toggle()
    expect(component.hideContent).toBeFalsy()
  });


  it('should have an h1 tag of `Alert Button',fakeAsync(() => {
    expect(component.hideContent).toBeTruthy()
    component.toggleAsync()
    tick(500)
    expect(component.hideContent).toBeFalsy()
  }));

  it('should toggle message content defined from an observable ', () => {
    component.content.subscribe((content)=>{
      expect(content).toBeDefined()
      expect(content).toBe('you have been warned')
    })
  });

  it('should call getContent one time and update the view', () => {
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1)
    expect(de.query(By.css('.message-body')).nativeElement.innerText).toContain('warn')


  });


});
