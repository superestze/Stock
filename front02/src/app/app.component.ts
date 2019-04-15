import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { APIS, StockService } from './../typescript-angular-client-generated/typescript-angular-client/api/api';
import { Stock } from 'src/typescript-angular-client-generated/typescript-angular-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: Observable<Array<Stock>>;

  constructor(
    private http: HttpClient,
    private apis: StockService
  ) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.data = this.apis.stockGet();
  }
}




