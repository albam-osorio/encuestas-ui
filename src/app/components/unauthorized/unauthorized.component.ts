import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  messages: Message[];
  
  constructor() { }

  ngOnInit(): void {
    this.messages = [{
      severity: 'error', summary: 'Error', detail: 'El usuario o la contraseña no son validos'
    }];
  }

}
