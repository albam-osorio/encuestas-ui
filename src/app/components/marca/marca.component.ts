import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/models/marca';
import { MarcaService } from 'src/app/services/marca.service';
import { Table } from 'primeng/table';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
  cols: any[];
  records: Marca[];
  record: Marca;

  constructor(private app: AppService, private service: MarcaService) { }

  ngOnInit(): void {
    this.app.getPrincipal().subscribe(principal => {
      console.table(principal);
    });

    this.reset();
  }

  private reset() {
    this.records = [];
    this.record = undefined;

    this.service.get().subscribe(this.populateTable());
  }

    //-------------------------------------------------------------------------------------------------------------------
  //-- Poblado de UI
  //-------------------------------------------------------------------------------------------------------------------
  private populateTable(): (value: Object) => void {
    return (array: Marca[]) => {
      //array.forEach(a => { a.edit = false; a.dataKey = a.id });

      this.records = [];
      this.records.push(...array);
    };
  }
}
