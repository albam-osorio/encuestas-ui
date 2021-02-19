import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encuestas-ui';

  constructor(private app: AppService) {
  }

  ngOnInit(): void {
    this.app.getPrincipal().subscribe(principal => {
      console.table(principal);
    });
  }
}
