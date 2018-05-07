import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuemSomosService {


  constructor( public http: Http) { 

  }

  public carregar_quemSomos() {
    return this.http.get(`./assets/json/quem-somos.json`);
  }

    
}
