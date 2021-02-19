import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private app: AppService) {
  }

  ngOnInit(): void {
    this.app.getPrincipal().subscribe(principal => {
      console.table(principal);
    });
  }

  logout() {
    this.app.logout();
  }
}
