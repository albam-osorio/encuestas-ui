import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  messages: Message[];
  
  constructor() { }

  ngOnInit(): void {
    this.messages = [{
      severity: 'error', summary: 'Error', detail: 'Usted no tiene acceso a esta funcionalidad'
    }];
  }
}
